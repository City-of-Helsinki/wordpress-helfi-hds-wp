<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_rss_feed( array $attributes ): string {

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
			esc_html( $attributes['title'] )
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

function hds_wp_rss_feed_lifetime( int $lifetime, string $url, array $attributes ): int {
	return $attributes['lifespan'] > 0 ? HOUR_IN_SECONDS * $attributes['lifespan'] : HOUR_IN_SECONDS * 12;
}

function hds_wp_feed_posts_data( array $attributes ): array {
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

function hds_wp_feed_posts_url( array $attributes ): string {
	return $attributes['url'] ?? '';
}

function hds_wp_feed_posts_source_text( $attributes = array() ): string {
	$url = hds_wp_feed_posts_url($attributes);

	return $url ? sprintf(
		'<p class="feed-source">%s</p>',
		sprintf(
			esc_html_x('Contents are automatically fetched from %s.', 'RSS feed source(s)', 'hds-wp'),
			sprintf(
				_x('%s', 'from RSS feed source', 'hds-wp'),
				parse_url( $url, PHP_URL_HOST )
			)
		)
	) : '';
}

function hds_wp_feed_rss( string $url = '', int $count = 10 ): array {
	$feed = $url ? fetch_feed( $url ) : false;

	if ( ! $feed || is_wp_error( $feed ) ) {
		return array();
	}

	return $feed->get_items(
		0,
		$feed->get_item_quantity($count)
	);
}

function hds_wp_feed_posts( array $args ): string {
	if ( empty( $args['feed_posts'] ) ) {
		return '';
	}

	$date_format = sprintf(
		'%s %s',
		$args['date_format'],
		$args['time_format']
	);

	$items = array_map(
		fn( $post ) => hds_wp_feed_list_item( array(
			'item' => $post,
			'date_format' => $date_format,
		) ),
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

function hds_wp_feed_list_item( array $args ): string {
	if ( isset( $args['item'] ) ) {
		$item_url = $args['item']->get_permalink();
		$item_title = $args['item']->get_title();
		$item_datetime = $args['item']->get_date('c');
		$item_date = $args['item']->get_date( $args['date_format'] );
	} else {
		$item_url = get_permalink();
		$item_title = get_the_title();
		$item_datetime = get_the_date('c');
		$item_date = get_the_date( $args['date_format'] );
	}

	return sprintf(
		'<li>
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
		esc_url( $item_url ),
		esc_html( $item_title ),
		esc_html__( 'Published:', 'hds-wp' ),
		esc_attr( $item_datetime ),
		esc_html( $item_date )
	);
}
