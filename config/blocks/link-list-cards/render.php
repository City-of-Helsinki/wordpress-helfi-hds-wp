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

	$cards = array_map(
		function ( $card ) {
			return hds_wp_render_link_list_card( $card );
		},
		$attributes['cards']
	);

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
		implode( '', $cards )
	);

}

function hds_wp_render_link_list_card( $attributes ) {

	$title = $attributes['title'];
	$links = $attributes['links'];

	$links = array_map(
		function ( $link ) {
			return hds_wp_render_link_list_card_link( $link );
		},
		$links
	);

	return sprintf(
		'<div class="wp-block-hds-wp-link-list-card">
			<h3 class="hds-links-list-card__title">%s</h3>
			<div class="hds-links-list-card__links">
				%s
			</div>
		</div>',
		$title,
		implode( '', $links )
	);

}

function hds_wp_render_link_list_card_link( $attributes ) {

	$postId = $attributes['postId'];
	$linkTitle = $attributes['linkTitle'];
	$postTitle = $attributes['postTitle'];
	$linkUrl = $attributes['linkUrl'];
	$linkDir = $attributes['linkDir'];
	$targetBlank = $attributes['targetBlank'];

	if (
		( $linkDir === 'external' && ( empty( $linkTitle ) || empty( $linkUrl ) ) ) ||
		( $linkDir === 'internal' && empty( $postId ) )
	) {
		return;
	}

	$target = '';
	if ( $targetBlank ) {
		$target = 'target="_blank" rel="noopener"';
	}

	$href = '';
	if ( $linkDir === 'internal' ) {
		$href = get_permalink( $postId );
	} else {
		$href = $linkUrl;
	}

	$title = '';
	if ( $linkDir === 'internal' ) {
		$title = $postTitle;
	} else {
		$title = $linkTitle;
	}

	return sprintf(
		'<a href="%s" class="wp-block-hds-wp-link-list-card-link link" %s>%s</a>',
		$href,
		$target,
		$title
	);

}
