<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Exception;
use WP_Error;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;
use WP_Http;
use WP_Query;
use WP_Post;
use WP_Term;

final class Filter_Search_Controller
{
	private string $base_rest_route;

	public function __construct(
		private CPT_Data $cpt_data,
		private CPT_Terms $cpt_terms,
		private string $plugin_version,
		private string $plugin_url,
		string $base_rest_route
	) {
		$this->base_rest_route = sprintf(
			'%s/filter-search/v1',
			$base_rest_route
		);
	}

	public function register_rest_routes(): void
	{
		\register_rest_route(
			$this->base_rest_route,
			'/posts',
			array(
				'methods'  => WP_REST_Server::READABLE,
				'callback' => array( $this, 'get_posts' ),
				'permission_callback' => fn() => true,
			),
		);
	}

	public function register_assets(): void
	{
		\wp_register_script(
			'helsinki-wp-hds-content-list-filter',
			$this->plugin_url . 'assets/react/content-filter-list/index.js',
			array( 'react', 'react-dom', 'lodash' ),
			$this->plugin_version,
			array(
				'strategy' => 'defer',
				'in_footer' => true
			)
		);

		\wp_add_inline_script(
			'helsinki-wp-hds-content-list-filter',
			sprintf(
				'const HELSINKI_CONTENT_LIST_FILTER = %s;',
				json_encode( array(
					'route' => \get_rest_url( null, $this->base_rest_route . '/posts' ),
					'nonce' => \wp_create_nonce( 'wp_rest' ),
				) )
			),
			'before'
		);

		\wp_localize_script(
			'helsinki-wp-hds-content-list-filter',
			'HELSINKI_CONTENT_LIST_FILTER_I18N',
			array(
				'locale' => substr(\get_locale(), 0, 2),
				'filter' => array(
					'all' => _x( 'All', 'filter.all', 'hds-wp' ),
				),
				'search' => array(
					'submit' => _x( 'Search', 'search.submit', 'hds-wp' ),
					'searching' => _x( 'Retrieving results', 'search.searching', 'hds-wp' ),
				),
				'results' => array(
					'one' => _x( 'search result', 'results.one', 'hds-wp' ),
					'many' => _x( 'search results', 'results.many', 'hds-wp' ),
				),
			)
		);
	}

	public function get_posts( WP_REST_Request $request ): WP_REST_Response|WP_Error
	{
		try {
			$query = new WP_Query( $this->create_query_data( $request ) );

			return \rest_ensure_response( array(
				'posts' => array_map(
					array( $this, 'prepare_post' ),
					$query->posts
				),
				'pagination' => array(
					'found_posts' => $query->found_posts,
					'max_num_pages' => $query->max_num_pages,
				),
			) );
		} catch ( Exception $exception ) {
			return \rest_ensure_response(
				new WP_Error(
					'get_posts',
					__( 'An error occurred while searching for posts.', 'accepta-shop' ),
					array( 'status' => WP_Http::BAD_REQUEST )
				)
			);
		}
	}

	private function prepare_post( WP_Post $post ): array
	{
		$prepared = array(
			'id' => $post->ID,
			'title' => \get_the_title( $post ),
			'slug' => $post->post_name,
			'excerpt' => \get_the_excerpt( $post ),
			'url' => \get_permalink( $post ) ?: '',
			'thumbnail' => \get_the_post_thumbnail_url( $post, 'large' ) ?: '',
			'terms' => array(),
		);

		$categories = $this->cpt_terms->post_categories( $post );
		if ( $categories ) {
			$prepared['terms'][] = $this->prepare_tax_terms( $categories );
		}

		$tags = $this->cpt_terms->post_tags( $post );
		if ( $tags ) {
			$prepared['terms'][] = $this->prepare_tax_terms( $tags );
		}

		foreach( $this->cpt_terms->of_post( $post ) as $tax_terms ) {
			$prepared['terms'][] = $this->prepare_tax_terms( $tax_terms );
		}

		return $prepared;
	}

	private function prepare_tax_terms( Taxonomy_Terms $tax_terms ): array
	{
		return array(
			'slug' => $tax_terms->slug(),
			'title' => $tax_terms->title(),
			'terms' => array_map(
				fn( WP_Term $term ) => $term->name,
				$tax_terms->terms()
			),
		);
	}

	private function create_query_data( WP_REST_Request $request ): array
	{
		return (new Cpt_Query_Data( $this->cpt_data ))
			->from_request( $request );
	}
}
