<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Exception;
use WP_REST_Request;

final class Cpt_Query_Data
{
	private array $data;
	private array $tax_query;

	public function __construct(
		private CPT_Data $cpt_data
	) {}

	public function from_request( WP_REST_Request $request ): array
	{
		$this->data = array();
		$this->tax_query = array();

		$this->post_type( $request );
		$this->category( $request );
		$this->post_tag( $request );
		$this->taxonomies( $request );
		$this->posts_per_page( $request );
		$this->paged( $request );

		$this->setup_tax_query();

		return $this->data;
	}

	private function setup_tax_query(): void
	{
		$this->data['tax_query'] = $this->tax_query;

		if ( count( $this->tax_query ) > 1 ) {
			$this->data['tax_query']['relation'] = 'AND';
		}
	}

	private function post_type( WP_REST_Request $request ): void
	{
		$post_type = $request->get_param( 'post_type' );

		if ( ! $post_type ) {
			throw new Exception( _x( 'Post type required.', 'cptui.query.data', 'hds-wp' ) );
		}

		if ( ! in_array( $post_type, $this->cpt_data->post_type_slugs() ) ) {
			throw new Exception( _x( 'Invalid post type.', 'cptui.query.data', 'hds-wp' ) );
		}

		$this->data['post_type'] = $post_type;
	}

	private function category( WP_REST_Request $request ): void
	{
		$this->taxonomy( 'category', $request );
	}

	private function post_tag( WP_REST_Request $request ): void
	{
		$this->taxonomy( 'post_tag', $request );
	}

	private function taxonomies( WP_REST_Request $request ): void
	{
		foreach ( $this->cpt_data->taxonomy_slugs() as $taxonomy ) {
			$this->taxonomy( $taxonomy, $request );
		}
	}

	private function taxonomy( string $taxonomy, WP_REST_Request $request ): void
	{
		$terms = $request->get_param( $taxonomy );
		if ( ! is_string( $terms ) ) {
			return;
		}

		$validator = fn( $term ) => filter_var(
			$term,
			FILTER_VALIDATE_INT,
			array(
				'options' => array(
					'default' => 0,
					'min_range' => 1,
				)
			)
		);

		$terms = array_filter( array_map( $validator, explode( ',', $terms ) ) );
		if ( $terms ) {
			$this->tax_query[] = array(
				'taxonomy' => $taxonomy,
				'field' => 'term_id',
				'terms' => $terms,
				'operator' => 'IN',
			);
		}
	}

	private function posts_per_page( WP_REST_Request $request ): void
	{
		$posts_per_page = \absint( $request->get_param( 'posts_per_page' ) );

		$this->data['posts_per_page'] = $posts_per_page;
	}

	private function paged( WP_REST_Request $request ): void
	{
		$paged = \absint( $request->get_param( 'paged' ) );

		$this->data['paged'] = max( 1, $paged );
	}
}
