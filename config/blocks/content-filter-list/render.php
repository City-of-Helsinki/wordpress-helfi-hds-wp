<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_content_filter_list( array $attributes ): string {
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

	$config = hds_wp_content_filter_list_config( $attributes );

	return sprintf(
		'<div %1$s data-content-filter-list="%3$s">
			<div class="hds-container">
				%2$s
			</div>
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			array( 'wp-block-hds-wp-content-filter-list' )
		),
		$content,
		htmlspecialchars( json_encode( $config ), ENT_QUOTES, 'UTF-8' )
	);
}

function hds_wp_content_filter_list_config( array $attributes ): array {
	$config = array(
		'query' => array(
			'post_type' => $attributes['postType'],
			'posts_per_page' => 15,
		),
		'elements' => $attributes['entryElements'],
		'taxonomies' => array(),
		'i18n' => array(
			'locale' => substr(\get_locale(), 0, 2),
			'filter' => array(
				'all' => _x( 'All', 'filter.all', 'hds-wp' ),
			),
			'search' => array(
				'submit' => _x( 'Search', 'search.submit', 'hds-wp' ),
			),
			'results' => array(
				'one' => _x( 'search result', 'results.one', 'hds-wp' ),
				'many' => _x( 'search results', 'results.many', 'hds-wp' ),
			),
			'pagination' => array(
				'label' => _x( 'Page navigation', 'pagination.label', 'hds-wp' ),
				'first' => _x( 'First page', 'pagination.first', 'hds-wp' ),
				'last' => _x( 'Last page', 'pagination.last', 'hds-wp' ),
				'previousPage' => _x( 'Previous page', 'pagination.previous.page', 'hds-wp' ),
				'previous' => _x( 'Previous', 'pagination.previous', 'hds-wp' ),
				'next' => _x( 'Next', 'pagination.next', 'hds-wp' ),
				'nextPage' => _x( 'Next page', 'pagination.next.page', 'hds-wp' ),
				'current' => _x( 'Currently on page', 'pagination.current', 'hds-wp' ),
				'page' => _x( 'Page', 'pagination.page', 'hds-wp' ),
			),
		),
	);

	$ordered_tax = apply_filters(
		'helsinki_wp_content_filter_list_ordered_taxonomies',
		$attributes['filterTaxonomies'],
		$attributes['postType']
	);

	foreach ( $ordered_tax as $taxonomy ) {
		$taxonomy = get_taxonomy( $taxonomy );

		if ( $taxonomy instanceof WP_Taxonomy ) {
			$tax_config = array(
				'label' => $taxonomy->label,
				'terms' => array(),
			);

			$terms = \get_terms( array(
				'taxonomy' => $taxonomy->name,
				'hide_empty' => true,
			) );

			if ( is_array( $terms ) ) {
				foreach ( $terms as $term ) {
					$tax_config['terms'][] = array(
						'id' => $term->term_id,
						'slug' => $term->slug,
						'label' => $term->name,
					);
				}
			}

			$config['taxonomies'][$taxonomy->name] = $tax_config;
		}
	}

	return $config;
}
