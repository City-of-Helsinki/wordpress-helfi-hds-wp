<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Svg;

function hds_wp_render_block_accordion($attributes, $content)
{
	if (!isset($attributes['blockVersion']) || $attributes['blockVersion'] <= 1) {
		return $content;
	}
	$title = '';
	if (!empty($attributes['title'])) {
		$title = sprintf(
			'<h2 class="accordion_heading">%s</h2>',
			esc_html($attributes['title'])
		);
	}

	$description = '';
	if (!empty($attributes['description'])) {
		$description = sprintf(
			'<div class="accordion-description">%s</div>',
			wpautop($attributes['description'], false)
		);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

	$wrapClasses = array('wp-block-hds-wp-accordion', 'accordion-wrapper');
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$panels = array();
	if (!empty($attributes['panels']) || is_array($attributes['panels'])) {
		$panels = array_map(
			'hds_wp_render_block_accordion_panel',
			$attributes['panels']
		);
	}

	return sprintf(
		'<div %s class="%s">
					%s
					%s
					<div class="accordion">%s</div>
			</div>',
		$id,
		implode(' ', $wrapClasses),
		$title,
		$description,
		implode(' ', $panels)
	);
}

function hds_wp_render_block_accordion_panel($attributes)
{
	$title = sprintf(
		'<%1$s class="accordion__title">
				<button id="panel-toggle-%2$s" class="accordion__toggle" type="button" aria-controls="panel-%2$s" aria-expanded="false">
					%3$s
					<span class="accordion__icon">%4$s</span>
				</button>
			</%1$s>',
		isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2',
		$attributes['blockId'],
		isset($attributes['panelTitle']) ? esc_html($attributes['panelTitle']) : '',
		Svg::icon('arrows-operators', 'angle-up')
	);

	$panel = sprintf(
		'<div id="panel-%1$s" class="accordion__panel" aria-labelledby="panel-toggle-%1$s" role="region" hidden="true">
				<div class="accordion__content">%2$s</div>
				<button class="accordion__close hds-button hds-button--supplementary" type="button">
					<span>%3$s</span>
					%4$s
				</button>
			</div>',
		$attributes['blockId'],
		apply_filters('the_content', isset($attributes['innerContent']) ? $attributes['innerContent'] : ''),
		__('Close', 'hds-wp'),
		Svg::icon('arrows-operators', 'angle-up')
	);

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

	$wrapClasses = array('wp-block-hds-wp-accordion-panel', 'accordion__section');
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	return sprintf(
		'<div %s class="%s">
				%s
				%s
			</div>',
		$id,
		implode(' ', $wrapClasses),
		$title,
		$panel
	);
}
