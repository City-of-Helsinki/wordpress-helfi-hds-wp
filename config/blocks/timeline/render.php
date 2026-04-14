<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_timeline($attributes, $content)
{
	if (!isset($attributes['blockVersion']) || $attributes['blockVersion'] <= 1) {
		return $content;
	}

	$elements = '';

	if (!empty($attributes['title'])) {
		$elements .= sprintf(
			'<h2 class="timeline__heading">%s</h2>',
			$attributes['title']
		);
	}

	if (!empty($attributes['description'])) {
		$elements .= sprintf(
			'<p class="excerpt">%s</p>',
			$attributes['description']
		);
	}

	if ( hds_wp_has_array_attribute( $attributes, 'cards' ) ) {
		$list_element = match( $attributes['style'] ?? '' ) {
			'numbered' => 'ol',
			default => 'ul',
		};

		$elements .= sprintf(
			'<%1$s class="timeline">%2$s</%1$s>',
			$list_element,
			\do_blocks( implode( PHP_EOL, array_map(
				'hds_wp_render_timeline_card',
				$attributes['cards']
			) ) )
		);
	}

	if ( $elements ) {
		return sprintf(
			'<div %1$s>
				%2$s
			</div>',
			hds_wp_block_html_attributes(
				$attributes,
				array( 'wp-block-hds-wp-timeline' )
			),
			$elements
		);
	}

	return '';
}
