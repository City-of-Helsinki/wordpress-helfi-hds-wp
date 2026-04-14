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

	$html = '';
	if (!empty($attributes['title'])) {
		$html .= sprintf(
			'<h2 class="accordion_heading">%s</h2>',
			esc_html($attributes['title'])
		);
	}

	if (!empty($attributes['description'])) {
		$html .= sprintf(
			'<div class="accordion-description">%s</div>',
			wpautop($attributes['description'], false)
		);
	}

	if ( hds_wp_has_array_attribute( $attributes, 'panels' ) ) {
		$html .= sprintf(
			'<div class="accordion">%s</div>',
			implode( '', array_map(
				'hds_wp_render_block_accordion_panel',
				$attributes['panels']
			) )
		);
	}

	return sprintf(
		'<div %s>
			%s
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			array( 'wp-block-hds-wp-accordion', 'accordion-wrapper' ),
		),
		$html
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
		hds_wp_render_block_accordion_panel_title( $attributes ),
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

	$wrapClasses = array('wp-block-hds-wp-accordion-panel', 'accordion__section');
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
		'<div %s>
			%s
			%s
		</div>',
		hds_wp_reduce_html_attributes( $html_attr ),
		$title,
		$panel
	);
}

function hds_wp_render_block_accordion_panel_title( array $attributes ): string {
	if ( empty( $attributes['panelTitle'] ) ) {
		return '';
	}

	return wp_kses( $attributes['panelTitle'], array(
		'img' => array(
			'alt' => true,
			'class' => true,
			'height' => true,
			'loading' => true,
			'sizes' => true,
			'src' => true,
			'srcset' => true,
			'style' => true,
			'width' => true,
		),
	) );
}
