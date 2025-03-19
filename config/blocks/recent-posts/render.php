<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Svg;

function hds_wp_render_recent_posts($attributes)
{
	//migrate old options
	$count = $attributes['articles'];
	if ($count === 3) {
		$attributes['articles'] = 4;
	} else if ($count === 6) {
		$attributes['articles'] = 8;
	}

	if (isset($attributes['isEditRender']) && $attributes['isEditRender']) {
		return hds_wp_render_recent_posts_articles($attributes);
	}

	$anchor = ! empty( $attributes['anchor'] )
		? $attributes['anchor']
		: '';

	$className = ! empty( $attributes['className'] )
		? $attributes['className']
		: '';

	$title = ! empty( $attributes['title'] )
		? $attributes['title']
		: __( 'Latest News', 'hds-wp' );

	$content = sprintf(
		'<div id="%s" class="recent-posts %s">
			<div class="hds-container">
				<h2>%s</h2>
				%s
				%s
			</div>
		</div>',
		esc_attr( $anchor ),
		esc_attr( $className ),
		esc_html( $title ),
		hds_wp_recent_posts_grid(hds_wp_recent_posts_data($attributes)),
		hds_wp_recent_posts_more(hds_wp_recent_posts_data($attributes))
	);

	return $content;
}


//only render articles section; use in editor
function hds_wp_render_recent_posts_articles($attributes)
{
	return hds_wp_recent_posts_grid(hds_wp_recent_posts_data($attributes))
		. hds_wp_recent_posts_more(hds_wp_recent_posts_data($attributes));
}

function hds_wp_recent_posts_data($attributes)
{
	return array(
		'query' => hds_wp_recent_posts_query(array(
			'cat' => $attributes != null ? $attributes['category'] : 0,
			'posts_per_page' => $attributes != null ? $attributes['articles'] : 3,
		)),
		'page_for_posts' => get_option('page_for_posts'),
		'attributes' => $attributes,
	);
}

function hds_wp_recent_posts_query(array $args)
{
	return new WP_Query(
		apply_filters(
			'hds_wp_recent_posts_query_args',
			wp_parse_args(
				$args,
				array(
					'post_type' => 'post',
					'post_status' => 'publish',
					'posts_per_page' => 3,
					'cat' => 0,
				)
			),
			$args
		)
	);
}


function hds_wp_recent_posts_grid( $args = array() ): string {
	$is_style_without_image = ! empty( $args['attributes']['className'] )
		&& strpos( $args['attributes']['className'], 'is-style-without-image' ) !== false;

	$content = '';

	if ( did_action( 'helsinki_theme_setup_ready' ) ) {
		ob_start();

		while ( $args['query']->have_posts() ) {
			$args['query']->the_post();

			if ( $is_style_without_image ) {
				do_action( 'helsinki_wp_recent_posts_feed_entry', $args );
			} else {
				do_action( 'helsinki_wp_recent_posts_grid_entry', $args );
			}
		}

		$content = ob_get_clean();

		wp_reset_postdata();
	} else {
		while ( $args['query']->have_posts() ) {
			$args['query']->the_post();

			if ( $is_style_without_image ) {
				$content .= hds_wp_feed_list_item();
			} else {
				$content .= hds_wp_recent_posts_grid_entry($args);
			}
		}

		wp_reset_postdata();
	}

	$wrap_classes = 'grid entries m-up-2 l-up-4';

	if ( $is_style_without_image ) {
		$wrap_classes = 'entries l-up-2';
		$content = sprintf( '<div><ul class="posts">%s</ul></div>', $content );
	}

	return sprintf( '<div class="%s">%s</div>', $wrap_classes, $content );
}

function hds_wp_recent_posts_grid_entry($args = array())
{

	$classes = array(
		'entry--grid',
		'entry',
		'entry--' . get_post_type(),
	);

	$image = '';
	if (has_post_thumbnail()) {
		$image = sprintf(
			'
			<div class="entry__thumbnail">
				<div class="image-wrap image-wrap--fixed-size">
					%s
				</div>
			</div>
			',
			get_the_post_thumbnail(null, 'post-thumbnail')
		);
		$classes[] = 'has-thumbnail';
	} else {
		$image = sprintf(
			'
			<div class="entry__thumbnail has-icon %s">
				<div class="image-wrap image-wrap--fixed-size">
					%s
				</div>
			</div>
			',
			function_exists('helsinki_scheme_has_invert_color') && helsinki_scheme_has_invert_color() ? 'has-invert-color' : '',
			Svg::placeholder(
				apply_filters(
					'hds_wp_recent_posts_placeholder_icon',
					'abstract-3'
				)
			),
		);
	}

	return sprintf(
		'
		<div class="grid__column">
			<article id="post-%s" class="%s">
				<div>
					%s
					<a class="entry__link" href="%s"><h2 class="entry__title">%s</h2></a>
					<div class="entry__meta meta">
						<time class="date" datetime="%s">
							<span class="screen-reader-text">%s</span>
							%s
						</time>
					</div>
					<div class="entry__more">
						%s
					</div>
				</div>
			</article>
		</div>',
		get_the_ID(),
		implode(' ', $classes),
		$image,
		get_permalink(),
		get_the_title(),
		esc_attr(get_the_date('c')),
		esc_html__('Published:', 'hds-wp'),
		esc_html(get_the_date()),
		Svg::icon('arrows-operators', 'arrow-right')
	);
}

function hds_wp_recent_posts_more($args = array())
{
	if (isset($args['page_for_posts']) && !empty($args['page_for_posts'])) {
		$link = '';
		if ($args['attributes']['category'] != 0) {
			$link = get_category_link($args['attributes']['category']);
		} else {
			$link = get_permalink($args['page_for_posts']);
		}

		return sprintf(
			'
			<p class="posts-page">
				<span class="link-wrap">
					<a class="has-icon has-icon--after hds-button" href="%s">
						%s
						%s
					</a>
				</span>
			</p>',
			$link,
			esc_html__('See all articles', 'hds-wp'),
			Svg::icon('arrows-operators', 'arrow-right')
		);
	}
	return '';
}
