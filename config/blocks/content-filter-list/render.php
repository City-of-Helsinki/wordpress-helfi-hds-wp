<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Builders\TaxonomyFilterBuilder;

function hds_wp_render_content_filter_list( $attributes ): string {
	$content = '';

	if ( $attributes['title'] ) {
		$content .= sprintf(
			'<h2 class="block-title">%s</h2>',
			esc_html( $attributes['title'] )
		);
	}

	if ( $attributes['description'] ) {
		$content .= hds_wp_block_text_kses( wpautop( $attributes['description'] ) );
	}

	if ( $attributes['filterTaxonomies'] ) {
		$content .= hds_wp_render_content_filters( $attributes['filterTaxonomies'] );
	}

	if ( $content ) {
		return sprintf(
			'<div %1$s>
				<div class="hds-container">
					%2$s
				</div>
			</div>',
			hds_wp_block_html_attributes(
				$attributes,
				array( 'wp-block-hds-wp-content-filter-list' )
			),
			$content
		);
	}

	return '';
}

function hds_wp_render_content_filters( array $taxonomies ): string {
	$filters = '';
	foreach ( $taxonomies as $taxonomy ) {
		try {
			$filters .= (new TaxonomyFilterBuilder( $taxonomy ))->render();

		} catch ( Exception $exception ) {
			error_log( __FUNCTION__ . ': ' . $exception->getMessage() );
		}
	}

	return $filters;
}
