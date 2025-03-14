<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

return array(
	'common' => array(
		'core/pullquote' => false,
		'core/verse' => false,
		'core/cover' => false,
		'core/preformatted' => false,
		'core/embed' => array(),
		'core/html' => false,
		'core/latest-posts' => false,
		'core/nextpage' => false,
		'core/media-text' => false,
		'core/rss' => false,
		'core/search' => false,
		'core/freeform' => false,
		'core/details' => false,
		'core/footnotes' => false,

		'core/avatar' => false,
		'core/comment-author-name' => false,
		'core/comment-content' => false,
		'core/comment-date' => false,
		'core/comment-edit-link' => false,
		'core/comment-reply-link' => false,
		'core/comments' => false,
		'core/comments-query-loop' => false,
		'core/comments-pagination' => false,
		'core/comments-pagination-numbers' => false,
		'core/comments-pagination-previous' => false,
		'core/comments-title' => false,

		'core/loginout' => false,
		'core/navigation' => false,

		'core/post-author' => false,
		'core/post-author-biography' => false,
		'core/post-author-name' => false,
		'core/post-comments-form' => false,
		'core/post-date' => false,
		'core/post-excerpt' => false,
		'core/post-featured-image' => false,
		'core/post-navigation-link' => false,
		'core/post-terms' => false,
		'core/post-title' => false,
		'core/post-content' => false,

		'core/read-more' => false,
		'core/more' => false,

		'core/site-logo' => false,
		'core/site-tagline' => false,
		'core/site-title' => false,

		'core/term-description' => false,

		'core/query' => false,
		'core/query-no-results' => false,
		'core/query-pagination' => false,
		'core/query-pagination-next' => false,
		'core/query-pagination-numbers' => false,
		'core/query-pagination-previous' => false,
		'core/query-title' => false,
	),

	'vendors' => array(
		'yoast-seo/breadcrumbs' => false,
		'yoast/faq-block' => false,
		'yoast/how-to-block' => false,

		'complianz/consent-area' => false,
	),

	'post_types' => array(
		'post' => array(
			'hds-wp/accordion' => false,
			'hds-wp/accordion-panel' => false,
			'hds-wp/banner' => false,
			'hds-wp/content-card' => false,
			'hds-wp/content-cards' => false,
			'hds-wp/image-banner' => false,
			'hds-wp/image-text' => false,
			'hds-wp/link' => false,
			'hds-wp/links' => false,
			'hds-wp/recent-posts' => false,
			'hds-wp/rss-feed' => false,
			'hds-wp/timeline-card' => false,
			'hds-wp/timeline' => false,
			'hds-wp/link-list-cards' => false,
			'hds-wp/link-list-card' => false,
			'hds-wp/link-list-card-link' => false,

			'core/columns' => false,
			'core/nextpage' => false,
			'core/separator' => false,
			'core/spacer' => false,
			'core/group' => false,
		),
	),
);
