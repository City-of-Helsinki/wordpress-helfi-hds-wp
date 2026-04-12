<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_rss_feed($attributes) {

	add_filter(
		'wp_feed_cache_transient_lifetime',
		function ($lifetime, $url) use ($attributes) {
			return hds_wp_rss_feed_lifetime(1, $url, $attributes);
		},
		10, 2
	);

	$elements = '';
	if ( ! empty( $attributes['title'] ) ) {
		$elements .= sprintf(
			'<h2>%s</h2>',
			$attributes['title']
		);
	}

	$elements .= hds_wp_feed_posts_source_text( $attributes );
	$elements .= hds_wp_feed_posts( hds_wp_feed_posts_data( $attributes ) );

	$content = sprintf(
		'<div %s>
			<div class="hds-container">
				%s
			</div>
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			array( 'wp-block-hds-wp-feed-posts', 'feed-posts' )
		),
		$elements
	);

	remove_filter( 'wp_feed_cache_transient_lifetime', function () {}, 10 );

	return $content;
}

function hds_wp_rss_feed_lifetime($lifetime, $url, $attributes)
{
	return $attributes['lifespan'] > 0 ? HOUR_IN_SECONDS * $attributes['lifespan'] : HOUR_IN_SECONDS * 12;
}

function hds_wp_feed_posts_data($attributes)
{
	$count = $attributes['amount'];
	$url = hds_wp_feed_posts_url($attributes);
	return array(
		'feed_posts' => hds_wp_feed_rss($url, $count),
		'feed_url' => $url,
		'feed_posts_count' => $count,
		'date_format' => get_option('date_format'),
		'time_format' => get_option('time_format'),
		'attributes' => $attributes,
	);
}

function hds_wp_feed_posts_url($attributes = null)
{
	return $attributes['url'];
}

function hds_wp_feed_posts_source_text( $attributes = array() ): string
{
	$url = hds_wp_feed_posts_url($attributes);
	if ( $url ) {
		return sprintf(
			'<p class="feed-source">%s</p>',
			sprintf(
				esc_html_x('Contents are automatically fetched from %s.', 'RSS feed source(s)', 'hds-wp'),
				sprintf(
					_x('%s', 'from RSS feed source', 'hds-wp'),
					parse_url($url, PHP_URL_HOST)
				)
			)
		);
	}

	return '';
}

function hds_wp_feed_rss(string $url = '', int $count = 10)
{
	if (!$url) {
		return array();
	}
	$feed = fetch_feed($url);
	if (is_wp_error($feed)) {
		return array();
	}
	return $feed->get_items(
		0,
		$feed->get_item_quantity($count)
	);
}

function hds_wp_feed_posts( $args = array() ): string {
	if ( empty( $args['feed_posts'] ) ) {
		return '';
	}

	$items = array_map(
		function ($post) use ($args) {
			return hds_wp_feed_list_item(array(
				'item' => $post,
				'date_format' => $args['date_format'],
				'time_format' => $args['time_format'],
			));
		},
		$args['feed_posts']
	);

	return sprintf(
		'<div class="entries l-up-2">
			<div>
				<ul class="posts">
					%s
				</ul>
			</div>
		</div>',
		implode('', $items)
	);
}

function hds_wp_feed_list_item($args = array())
{
	return sprintf(
		'
			<li>
			<article class="entry entry--feed entry--post">
				<div>
					<h3 class="entry__title">
						<a href="%s"><span>%s</span></a>
					</h3>
				</div>
				<div class="entry__meta">
					<span class="screen-reader-text">%s</span>
					<time class="date" datetime="%s">
						%s
					</time>
				</div>
			</article>
		</li>',
		esc_url(isset($args['item']) ? $args['item']->get_permalink() : get_permalink()),
		esc_html(isset($args['item']) ? $args['item']->get_title() : get_the_title()),
		esc_html('Published:', 'hds-wp'),
		esc_attr(isset($args['item']) ? $args['item']->get_date('c') : get_the_date('c')),
		esc_html(isset($args['item']) ? $args['item']->get_date($args['date_format'] . ' ' . $args['time_format']) : get_the_date('d.m.Y H:i'))
	);
}
