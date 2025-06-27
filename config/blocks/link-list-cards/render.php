<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_link_list_cards( $attributes ) {
	if (
		empty( $attributes['cards'] ) ||
		! is_array( $attributes['cards'] )
	) {
		return;
	}

	$title = '';
	if ( ! empty( $attributes['title'] ) ) {
		$title = sprintf(
			'<h2 class="hds-links-list-cards__title">%s</h2>',
			$attributes['title']
		);
	}

	return sprintf(
		'<div class="wp-block-hds-wp-link-list-cards">
			%s
			<div class="hds-links-list-cards__cards">
				%s
			</div>
		</div>',
		$title,
		implode( '', array_map(
			'hds_wp_render_link_list_card',
			$attributes['cards']
		) )
	);
}

function hds_wp_render_link_list_card( $attributes ) {
	return sprintf(
		'<div class="wp-block-hds-wp-link-list-card">
			<h3 class="hds-links-list-card__title">%s</h3>
			<div class="hds-links-list-card__links">
				<ul class="hds-links-list-card__list">%s</ul>
			</div>
		</div>',
		esc_html( $attributes['title'] ),
		implode( '', array_map(
			'hds_wp_render_link_list_card_link',
			$attributes['links']
		) )
	);
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
