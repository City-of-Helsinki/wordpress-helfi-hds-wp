<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_timeline_card($attributes, $content = null)
{
	$step = '';

	$step = sprintf(
		'<div class="content__inner content__inner--step %s">%s</div>',
		$attributes['style'] == 'numbered' ? 'numbered' : '',
		$attributes['style'] == 'numbered' ? $attributes['order'] : ''
	);

	$text = '';
	$text = sprintf(
		'<div class="content__inner content__inner--text">
			%s
			%s
		</div>',
		$attributes['contentTitle'] ? '<div class="content__heading">' . $attributes['contentTitle'] . '</div>' : '',
		$content ? $content : $attributes['innerContent']
	);

	$wrapClasses = array('wp-block-hds-wp-timeline-card');

	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

	return sprintf(
		'<li %s class="%s">
			<div class="content">
				%s
				<div class="content-wrapper">
					%s
				</div>
			</div>
		</li>',
		$id,
		implode(' ', $wrapClasses),
		$step,
		$text,
	);
}
