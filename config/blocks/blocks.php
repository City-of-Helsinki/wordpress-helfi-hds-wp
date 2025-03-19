<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'accordion' => array(
		'render_callback' => 'hds_wp_render_block_accordion',
	),
	'accordion-panel' => array(),
	'accordion-panel-wc' => array(),
	'accordion-wc' => array(
		'render_callback' => 'hds_wp_render_block_accordion_wc',
	),
	'banner' => array(
		'render_callback' => 'hds_wp_render_banner',
	),
	'content-card' => array(),
	'content-cards' => array(
		'render_callback' => 'hds_wp_render_block_content_cards',
	),
	'image-banner' => array(
		'render_callback' => 'hds_wp_render_image_banner',
	),
	'image-text' => array(
		'render_callback' => 'hds_wp_render_image_text',
	),
	'link' => array(),
	'link-list-card' => array(),
	'link-list-card-link' => array(),
	'link-list-cards' => array(
		'render_callback' => 'hds_wp_render_link_list_cards',
	),
	'links' => array(
		'render_callback' => 'hds_wp_render_block_links_list',
	),
	'map' => array(
		'render_callback' => 'hds_wp_render_map',
	),
	'recent-posts' => array(
		'render_callback' => 'hds_wp_render_recent_posts',
	),
	'rss-feed' => array(
		'render_callback' => 'hds_wp_render_rss_feed',
	),
	'timeline' => array(
		'render_callback' => 'hds_wp_render_timeline',
	),
	'timeline-card' => array(
		'render_callback' => 'hds_wp_render_timeline_card',
	),
	'video' => array(
		'render_callback' => 'hds_wp_render_video',
	),
);
