<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_block_content_cards($attributes) {
	if ( ! hds_wp_has_array_attribute( $attributes, 'cards' ) ) {
		return;
	}

	$posts = hds_wp_query_block_post_ids( $attributes['cards'] );
	if ( ! $posts ) {
		return;
	}

	$wrap_classes = array( 'wp-block-hds-wp-content-cards', 'content-cards' );
	if ( ! empty( $attributes['hasBackground'] ) ) {
		$wrap_classes[] = 'has-background has-light-gray-background-color';
	}

	$content = '';
	if (!empty($attributes['title'])) {
		$content .= sprintf(
			'<h2 class="content-cards__title">%s</h2>',
			esc_html($attributes['title'])
		);
	}

	if (!empty($attributes['description'])) {
		$content .= sprintf(
			'<div class="content-cards__description">%s</div>',
			hds_wp_block_text_kses( wpautop( $attributes['description'], false ) )
		);
	}

	$content .= sprintf(
		'<div class="%s">%s</div>',
		esc_attr( implode( ' ', array(
			'content-cards__cards',
			'content-cards__cards--' . $attributes['columns'],
		) ) ),
		implode( '', array_map(
			fn( $post ) => hds_wp_content_card_html( $post, $attributes ),
			$posts
		) )
	);

	return sprintf(
		'<div %s>
			<div class="hds-container">
				%s
			</div>
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			$wrap_classes
		),
		$content
	);
}

function hds_wp_content_card_html( WP_Post $post, array $attributes ): string {
	$image_html = '';
	$image_wrap_classes = 'card__image';

	$image = get_the_post_thumbnail( $post, 'medium', array( 'alt' => '' ) );
	if ( ! $image ) {
		$image = hds_wp_block_placeholder_icon_html( 'content_card', 'abstract-3', $post );
		$image_wrap_classes .= ' has-primary-background-color has-placeholder';

		if ( hds_wp_has_invert_color() ) {
			$image_wrap_classes .= ' has-invert-color';
		}
	}

	$content = sprintf(
		'<div class="%s">%s</div>',
		$image_wrap_classes,
		$image
	);

	$content .= '<div class="card__content">';

	$content .= sprintf(
		'<a class="card__title_link" href="%s">
			<h3 class="card__title">%s</h3>
		</a>',
		esc_url( get_permalink( $post ) ),
		esc_html( $post->post_title )
	);

	if (
		isset( $attributes['linkType'] )
		&& $attributes['linkType'] == 'image-title-excerpt'
		&& ! empty( $post->post_excerpt )
	) {
		$content .= sprintf(
			'<p class="card__excerpt">%s</p>',
			esc_html( $post->post_excerpt )
		);
	}

	if ( 'post' === $post->post_type ) {
		$content .= sprintf(
			'<span class="screen-reader-text">%s</span>',
			esc_html__( 'Published:', 'hds-wp' )
		);

		$content .= sprintf(
			'<time datetime="%s" class="card__date">%s</time>',
			esc_attr( get_the_date( 'c', $post ) ),
			esc_html( get_the_date( '', $post ) )
		);
	}

	$content .= '</div>';

	return sprintf(
		'<article class="content-cards__card">
			<div class="card__link">%s</div>
		</article>',
		$content
	);
}
