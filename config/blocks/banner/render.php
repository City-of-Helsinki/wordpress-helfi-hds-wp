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

	$wrap_classes = array( 'wp-block-hds-wp-banner' );
	$color_classes = 'has-primary-background-color has-primary-content-color';

	if ( ! empty( $attributes['className'] ) ) {
		if ( preg_match( '/is-style-(.*)-secondary-color/', $attributes['className'] ) ) {
			$color_classes = 'has-secondary-background-color has-secondary-content-color';
		}

		if ( str_contains( $attributes['className'], 'align-center' ) ) {
			$icon = '';
		}
	}

	$wrap_classes[] = $color_classes;

	if ( ! $icon ) {
		$wrap_classes[] = 'no-icon';
	}

	if ( ! $button ) {
		$wrap_classes[] = 'no-button';
	}

	return sprintf(
		'<div %s>
			<div class="content">
				%s
				<div class="content-wrapper">
					%s
					%s
				</div>
			</div>
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			$wrap_classes
		),
		$icon,
		$text,
		$button
	);
}
