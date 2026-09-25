<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_Post;

final class CPT_Terms
{
	public function __construct(
		private CPT_Taxonomy_Order $cpt_tax_order
	) {}

	public function of_post( int|WP_Post $post ): array
	{
		$post = \get_post( $post );
		if ( ! $post instanceof WP_Post ) {
			return array();
		}

		$out = array();
		foreach ( $this->taxonomies( $post->post_type ) as $tax_slug ) {
			$tax_terms = $this->create_post_tax_terms( $post, $tax_slug );

			if ( $tax_terms ) {
				$out[$tax_slug] = $tax_terms;
			}
		}

		return $out;
	}

	public function of_post_type( string $post_type ): array
	{
		$out = array();
		foreach ( $this->taxonomies( $post_type ) as $tax_slug ) {
			$terms = \get_terms( array(
				'taxonomy' => $tax_slug,
				'hide_empty' => true,
			) );

			if ( $terms && is_array( $terms ) ) {
				$out[$tax_slug] = $this->create_tax_terms( $tax_slug, $terms );
			}
		}

		return $out;
	}

	private function taxonomies( string $post_type ): array
	{
		return $this->cpt_tax_order->for_post_type( $post_type );
	}

	private function create_post_tax_terms( WP_Post $post, string $tax_slug ): ?Taxonomy_Terms
	{
		$terms = \get_the_terms( $post, $tax_slug );
		if ( ! $terms || ! is_array( $terms ) ) {
			return null;
		}

		return $this->create_tax_terms( $tax_slug, $terms );
	}

	private function create_tax_terms( string $tax_slug, array $terms ): ?Taxonomy_Terms
	{
		$taxonomy = \get_taxonomy( $tax_slug );
		if ( ! $taxonomy ) {
			return null;
		}

		return new Taxonomy_Terms( $taxonomy, ...$terms );
	}
}
