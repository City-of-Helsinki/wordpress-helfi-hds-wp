<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_timeline($attributes, $content)
{
	if (!isset($attributes['blockVersion']) || $attributes['blockVersion'] <= 1) {
		return $content;
	}

	$title = '';
	if (!empty($attributes['title'])) {
		$title = sprintf(
			'<h2 class="timeline__heading">%s</h2>',
			$attributes['title']
		);
	}

	$description = '';
	if (!empty($attributes['description'])) {
		$description = sprintf(
			'<p class="excerpt">%s</p>',
			$attributes['description']
		);
	}

	$wrapClasses = array('wp-block-hds-wp-timeline');
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

	$cards = array();
	if (!empty($attributes['cards']) || is_array($attributes['cards'])) {
		$cards = array_map(
			'hds_wp_render_timeline_card',
			$attributes['cards']
		);
	}

	$timeline = '';
	if (empty($attributes['style']) || $attributes['style'] == 'numberless') {
		$timeline = sprintf(
			'<ul class="timeline">
				%s
			</ul>',
			do_blocks(implode(' ', $cards))
		);
	} else if ($attributes['style'] == 'numbered') {
		$timeline = sprintf(
			'<ol class="timeline">
				%s
			</ol>',
			do_blocks(implode(' ', $cards))
		);
	}


	return sprintf(
		'<div %s class="%s">
			%s
			%s
			%s
		</div>',
		$id,
		implode(' ', $wrapClasses),
		$title,
		$description,
		$timeline
	);
}
