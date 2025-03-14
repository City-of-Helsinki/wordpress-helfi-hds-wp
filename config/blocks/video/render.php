<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_video($attributes)
{

	$id = 'hds-video-' . $attributes['blockId'];
	$title = $attributes['title'];
	$description = $attributes['description'];
	$linkUrl = $attributes['url'];
	$assistive_title = $attributes['assistive_title'];

	if (strpos($attributes['iframeUrl'], 'youtube') !== false) {
		$url = $attributes['iframeUrl'] . '?rel=0';
	} else {
		$url = $attributes['iframeUrl'];
	}

	$beforeVideoSkipLink = sprintf(
		'<a href="#%s-after" id="%s-before" class="focusable skip-link skip-link--video--before">%s</a>',
		$id,
		$id,
		__('Move below the video', 'hds-wp'),
	);

	$afterVideoSkipLink = sprintf(
		'<a href="#%s-before" id="%s-after" class="focusable skip-link skip-link--video--after">%s</a>',
		$id,
		$id,
		__('Move above the video', 'hds-wp'),
	);

	$externalLink = sprintf(
		'<a href="%s" target="_blank" class="block-embed-external-link" rel="noopener">%s</a>',
		$linkUrl,
		__('Open video in new window', 'hds-wp')
	);

	$iframe = sprintf(
		'<figure class="wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9">
			%s
			<div class="wp-block-embed__wrapper">
				<iframe src="%s" title="%s" width="1000" height="563" scrolling="no" allowfullscreen="true" sandbox="allow-scripts allow-presentation allow-same-origin"></iframe>
			</div>
			%s
			%s
		</figure>',
		$beforeVideoSkipLink,
		$url,
		$assistive_title,
		$afterVideoSkipLink,
		$externalLink
	);

	return sprintf(
		'<div class="hds-video has-background">
			<div class="hds-container">
				<h2>%s</h2>
				<p>%s</p>
				<div class="hds-video__container">
					%s
				</div>
			</div>
		</div>',
		$title,
		$description,
		$iframe,
	);
}
