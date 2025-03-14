<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Svg;

function hds_wp_render_banner($attributes)
{
	$icon = '';

	if (!empty($attributes['contentIcon']) && $attributes['contentIcon'] !== '(empty)') {
		$icon = sprintf(
			'<div class="content__inner content__inner--icon">%s</div>',
			Svg::icon(
				'blocks',
				$attributes['contentIcon']
			)
		);
	}

	$text = '';
	$text = sprintf(
		'<div class="content__inner content__inner--text">
			<h2 class="content__heading">%s</h2>
			<div class="content__text">%s</div>
		</div>',
		$attributes['contentTitle'],
		wpautop($attributes['contentText'], false)
	);

	$button = '';
	if (!empty($attributes['buttonUrl']) && !empty($attributes['buttonText'])) {
		$button = sprintf(
			'<div class="content__inner content__inner--button">
				<a class="content__link hds-button" href="%s" %s rel="noopener">
					%s
				</a>
			</div>',
			$attributes['buttonUrl'],
			$attributes['targetBlank'] ? 'target="_blank"' : '',
			$attributes['buttonText'],
		);
	}


	$wrapClasses = array('wp-block-hds-wp-banner');

	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);

		if (str_contains($attributes['className'], 'align-center')) {
			$icon = '';
		}
	}

	if (empty($icon)) {
		$wrapClasses[] = 'no-icon';
	}

	if (empty($button)) {
		$wrapClasses[] = 'no-button';
	}


	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

	return sprintf(
		'<div %s class="%s">
			<div class="content">
				%s
				<div class="content-wrapper">
					%s
					%s
				</div>
			</div>
		</div>',
		$id,
		implode(' ', $wrapClasses),
		$icon,
		$text,
		$button
	);
}
