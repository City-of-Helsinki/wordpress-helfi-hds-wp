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
		$wrap_classes[] = 'has-background';
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
			wpautop($attributes['description'], false)
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

function hds_wp_content_card_html(WP_Post $post, $attributes)
{
	$image = get_the_post_thumbnail($post, 'medium', array('alt' => ''));
	$has_placeholder = false;
	if (!$image) {
		$has_placeholder = true;
		$image = apply_filters(
			'hds_wp_content_card_placeholder',
			apply_filters(
				'hds_wp_svg_placeholder_html',
				'',
				apply_filters(
					'hds_wp_content_card_placeholder_icon',
					'abstract-3'
				)
			),
			$post
		);
	}
	$has_invert_color = false;
	if (function_exists('helsinki_scheme_has_invert_color')) {
		$has_invert_color = helsinki_scheme_has_invert_color();
	}

	$excerpt = '';
	if (isset($attributes['linkType']) && $attributes['linkType'] == 'image-title-excerpt' && !empty($post->post_excerpt)) {
		$excerpt = sprintf(
			'<p class="card__excerpt">%s</p>',
			$post->post_excerpt
		);
	}

	$date = 'post' === $post->post_type ? sprintf(
		'<span class="screen-reader-text">%s</span>
			<time datetime="%s" class="card__date">%s</time>',
		__('Published:', 'hds-wp'),
		esc_attr(get_the_date('c', $post)),
		get_the_date('', $post)
	) : '';

	$parts = array(
		'image' => sprintf(
			'<div class="card__image%s">%s</div>',
			$has_placeholder ? ' has-placeholder' . ($has_invert_color ? ' has-invert-color' : '') : '',
			$image
		),
		'content_open' => '<div class="card__content">',
		'title' => sprintf(
			'<a class="card__title_link" href="%s">
				<h3 class="card__title">%s</h3>
			</a>',
			esc_url( get_permalink( $post ) ),
			esc_html( $post->post_title )
		),
		'excerpt' => $excerpt,
		'date' => $date,
		'content_close' => '</div>',
	);

	return sprintf(
		'<article class="content-cards__card card">
			<div class="card__link">%s</div>
		</article>',
		implode('', $parts)
	);
}
