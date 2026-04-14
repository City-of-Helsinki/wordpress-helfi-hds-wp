<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_map($attributes)
{

	$id = 'hds-map-' . $attributes['blockId'];
	$title = $attributes['title'];
	$description = $attributes['description'];
	$url = $attributes['url'];
	$linkUrl = $attributes['url'];

	//if linkUrl contains palvelukartta.hel.fi and embed, remove '/embed' from linkUrl
	if (strpos($linkUrl, 'palvelukartta.hel.fi') !== false && strpos($linkUrl, 'embed') !== false) {
		$linkUrl = str_replace('/embed', '', $linkUrl);
	}
	//if linkUrl contains kartta.hel.fi and embed, remove 'embed' from linkUrl
	if (strpos($linkUrl, 'kartta.hel.fi') !== false && strpos($linkUrl, 'embed') !== false) {
		$linkUrl = str_replace('embed', '', $linkUrl);
	}

	$assistive_title = $attributes['assistive_title'];

	$beforeMapSkipLink = sprintf(
		'<a href="#%s-after" id="%s-before" class="focusable skip-link skip-link--map--before">%s</a>',
		$id,
		$id,
		esc_html__('Move below the map', 'hds-wp'),
	);

	$afterMapSkipLink = sprintf(
		'<a href="#%s-before" id="%s-after" class="focusable skip-link skip-link--map--after">%s</a>',
		$id,
		$id,
		esc_html__('Move above the map', 'hds-wp'),
	);

	$iframe = sprintf(
		'<iframe src="%s" title="%s"></iframe>',
		$url,
		$assistive_title
	);

	$externalLink = sprintf(
		'<a href="%s" target="_blank" class="block-embed-external-link" rel="noopener">%s</a>',
		$linkUrl,
		esc_html__('Open map in new window', 'hds-wp')
	);

	return sprintf(
		'<div %s>
			<div class="hds-container">
				<h2>%s</h2>
				<p>%s</p>
				<div class="hds-map__container">
					%s
					%s
					%s
					%s
				</div>
			</div>
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			array( 'wp-block-hds-wp-map', 'hds-map', 'has-background' )
		),
		$title,
		$description,
		$beforeMapSkipLink,
		$iframe,
		$afterMapSkipLink,
		$externalLink
	);
}
