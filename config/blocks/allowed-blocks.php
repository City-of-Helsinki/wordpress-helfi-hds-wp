<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

return array(
	'common' => array(
		'core/audio' => true,
		'core/block' => true,
		'core/button' => true,
		'core/buttons' => true,
		'core/file' => true,
		'core/gallery' => true,
		'core/heading' => array( 'heading' ),
		'core/image' => true,
		'core/list' => true,
		'core/list-item' => true,
		'core/paragraph' => array( 'paragraph' ),
		'core/pattern' => true,
		'core/quote' => true,
		'core/shortcode' => true,
		'core/social-link' => true,
		'core/social-links' => true,
		'core/shortcode' => true,
		'core/table' => true,
		'core/video' => true,
	),

	'vendors' => array(
		'gravityforms/form' => true,

		'contact-form-7/contact-form-selector' => true,

		'cff/cff-feed-block' => true, // facebook
		'ctf/ctf-feed-block' => true, // twitter
		'sbi/sbi-feed-block' => true, // instagram
		'sb/sw-feed-block' => true, // social wall
		'sby/sby-feed-block' => true, // youtube
	),

	'post_types' => array(
		'post' => array(
			'hds-wp/map' => true,
			'hds-wp/video' => true,
		),

		'page' => array(
			'core/column' => true,
			'core/columns' => true,
			'core/group' => array( 'group' ),
			'core/nextpage' => true,
			'core/separator' => true,
			'core/spacer' => true,

			'hds-wp/accordion' => true,
			'hds-wp/accordion-panel' => true,
			'hds-wp/accordion-panel-wc' => true,
			'hds-wp/accordion-wc' => true,
			'hds-wp/banner' => true,
			'hds-wp/content-card' => true,
			'hds-wp/content-cards' => true,
			'hds-wp/image-banner' => true,
			'hds-wp/image-text' => true,
			'hds-wp/link' => true,
			'hds-wp/link-list-card' => true,
			'hds-wp/link-list-card-link' => true,
			'hds-wp/link-list-cards' => true,
			'hds-wp/links' => true,
			'hds-wp/map' => true,
			'hds-wp/recent-posts' => true,
			'hds-wp/rss-feed' => true,
			'hds-wp/timeline-card' => true,
			'hds-wp/timeline' => true,
			'hds-wp/video' => true,

			'complianz/document' => true,
		),
	),
);
