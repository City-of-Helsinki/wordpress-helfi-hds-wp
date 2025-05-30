<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Svg;

function hds_wp_render_block_content_cards($attributes)
{
	if (
		empty($attributes['cards']) ||
		!is_array($attributes['cards'])
	) {
		return;
	}

	$posts = hds_wp_query_block_post_ids($attributes['cards']);
	if (!$posts) {
		return;
	}

	$wrapClasses = array('content-cards');
	if (!empty($attributes['hasBackground'])) {
		$wrapClasses[] = 'has-background';
	}

	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

	$gridClasses = array(
		'content-cards__cards',
		'content-cards__cards--' . $attributes['columns'],
	);

	$title = '';
	if (!empty($attributes['title'])) {
		$title = sprintf(
			'<h2 class="content-cards__title">%s</h2>',
			esc_html($attributes['title'])
		);
	}

	$description = '';
	if (!empty($attributes['description'])) {
		$description = sprintf(
			'<div class="content-cards__description">%s</div>',
			wpautop($attributes['description'], false)
		);
	}

	return sprintf(
		'<div %s class="%s">
			<div class="hds-container">
				%s
				%s
				<div class="%s">%s</div>
			</div>
		</div>',
		$id,
		implode(' ', $wrapClasses),
		$title,
		$description,
		implode(' ', $gridClasses),
		implode('', array_map(function ($post) use ($attributes) {
			return hds_wp_content_card_html($post, $attributes);
		}, $posts))
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
			Svg::placeholder(
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
		'title' => '<a class="card__title_link" href="' . esc_url(get_permalink($post)) . '"><h3 class="card__title">' . esc_html($post->post_title) . '</h3></a>',
		'excerpt' => $excerpt,
		'date' => $date,
		'more' => '<div class="card__more">' . Svg::icon('arrows-operators', 'arrow-right') . '</div>',
		'content_close' => '</div>',
	);

	return sprintf(
		'<article class="content-cards__card card">
			<div class="card__link">%s</div>
		</article>',
		implode('', $parts)
	);
}
