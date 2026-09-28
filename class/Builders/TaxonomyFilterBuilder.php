<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Builders;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Exception;
use WP_Taxonomy;
use WP_Term;

final class TaxonomyFilterBuilder
{
	private array $config;

	public function __construct(
		string|WP_Taxonomy $taxonomy
	) {
		if ( is_string( $taxonomy ) ) {
			$object = \get_taxonomy( $taxonomy );

			if ( ! $object instanceof WP_Taxonomy ) {
				throw new Exception(
					sprintf( 'Invalid taxonomy: %s', $taxonomy )
				);
			}

			$this->taxonomy = $object;
		} else {
			$this->taxonomy = $taxonomy;
		}

		$this->config = array();
	}

	public function render(): string
	{
		return '';
	}

	private function term_options(): array
	{
		$terms = \get_terms( array(
			'taxonomy' => $this->taxonomy->name,
			'hide_empty' => true,
		) );

		return is_array( $terms ) ? $terms : array();
	}
}
