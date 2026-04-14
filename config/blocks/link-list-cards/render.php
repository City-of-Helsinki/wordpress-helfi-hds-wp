<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_link_list_cards( $attributes ) {
	$elements = '';

	if ( ! empty( $attributes['title'] ) ) {
		$elements .= sprintf(
			'<h2 class="hds-links-list-cards__title">%s</h2>',
			$attributes['title']
		);
	}

	if ( hds_wp_has_array_attribute( $attributes, 'cards' ) ) {
		$elements .= sprintf(
			'<div class="hds-links-list-cards__cards">
				%s
			</div>',
			implode( '', array_map(
				'hds_wp_render_link_list_card',
				$attributes['cards']
			) )
		);
	}

	if ( $elements ) {
		return sprintf(
			'<div %1$s>%2$s</div>',
			hds_wp_block_html_attributes(
				$attributes,
				array( 'wp-block-hds-wp-link-list-cards' )
			),
			$elements
		);
	}

	return '';
}

function hds_wp_render_link_list_card( $attributes ): string {
	$elements = '';

	if ( ! empty( $attributes['title'] ) ) {
		$elements .= sprintf(
			'<h3 class="hds-links-list-card__title">%s</h3>',
			esc_html( $attributes['title'] )
		);
	}

	if ( hds_wp_has_array_attribute( $attributes, 'links' ) ) {
		$elements .= sprintf(
			'<div class="hds-links-list-card__links">
				<ul class="hds-links-list-card__list">%s</ul>
			</div>',
			implode( '', array_map(
				'hds_wp_render_link_list_card_link',
				$attributes['links']
			) )
		);
	}

	return $elements ? sprintf(
		'<div class="wp-block-hds-wp-link-list-card">%s</div>',
		$elements
	) : '';
}

function hds_wp_render_link_list_card_link( $attributes ) {
	$linkDir = $attributes['linkDir'];
	$isInternal = ($linkDir === 'internal');

	if (
		( $linkDir === 'external' && ( empty( $attributes['linkTitle'] ) || empty( $attributes['linkUrl'] ) ) ) ||
		( $isInternal && empty( $attributes['postId'] ) )
	) {
		return;
	}

	return sprintf(
		'<li class="hds-links-list-card__list-item">
			<a href="%s" class="wp-block-hds-wp-link-list-card-link link" %s>%s</a>
		</li>',
		$isInternal
			? get_permalink( $attributes['postId'] )
			: $attributes['linkUrl'],
		! empty( $attributes['targetBlank'] )
			? 'target="_blank" rel="noopener"'
			: '',
		$isInternal
			? $attributes['postTitle']
			: $attributes['linkTitle'],
	);

}
