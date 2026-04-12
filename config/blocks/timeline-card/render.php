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

	$text = sprintf(
		'<div class="content__inner content__inner--text">
			%s
			%s
		</div>',
		$attributes['contentTitle'] ? '<div class="content__heading">' . $attributes['contentTitle'] . '</div>' : '',
		$content ? $content : $attributes['innerContent']
	);

	$wrapClasses = array(
		'wp-block-hds-wp-timeline-card',
		'has-secondary-background-color',
		'has-secondary-content-color',
	);

	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$html_attr = array(
		'class' => implode( ' ', $wrapClasses ),
	);

	if ( ! empty( $attributes['anchor'] ) ) {
		$html_attr['id'] = $attributes['anchor'];
	}

	return sprintf(
		'<li %s>
			<div class="content">
				%s
				<div class="content-wrapper">
					%s
				</div>
			</div>
		</li>',
		hds_wp_reduce_html_attributes( $html_attr ),
		$step,
		$text,
	);
}
