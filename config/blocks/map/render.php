<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_map( array $attributes ): string {
	$content = '';

	if ( $attributes['title'] ) {
		$content .= sprintf(
			'<h2 class="block-title">%s</h2>',
			esc_html( $attributes['title'] ),
		);
	}

	if ( $attributes['description'] ) {
		$content .= sprintf(
			'<p>%s</p>',
			wp_kses_post( $attributes['description'] ),
		);
	}

	if ( $attributes['url'] ) {
		$content .= '<div class="hds-map__container">';

		$id = 'hds-map-' . $attributes['blockId'];

		$content .= hds_wp_block_skip_link(
			$id,
			'map',
			'before',
			'after',
			__( 'Move below the map', 'hds-wp' )
		);

		$content .= sprintf(
			'<iframe src="%s" title="%s"></iframe>',
			esc_url( $attributes['url'] ),
			esc_attr( $attributes['assistive_title'] )
		);

		$content .= hds_wp_block_skip_link(
			$id,
			'map',
			'after',
			'before',
			__( 'Move above the map', 'hds-wp' )
		);

		$linkUrl = hds_wp_format_map_external_url( $attributes['url'] );
		if ( $linkUrl ) {
			$content .= sprintf(
				'<a href="%s" target="_blank" class="block-embed-external-link" rel="noopener">%s</a>',
				esc_url( $linkUrl ),
				esc_html__( 'Open map in new window', 'hds-wp' )
			);
		}

		$content .= '</div>';
	}

	return $content ? sprintf(
		'<div %s>
			<div class="hds-container">
				%s
			</div>
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			array( 'wp-block-hds-wp-map', 'hds-map', 'has-background', 'has-light-gray-background-color' )
		),
		$content
	) : '';
}

function hds_wp_format_map_external_url( string $url ): string {
	if (
		strpos( $url, 'palvelukartta.hel.fi' ) !== false
		&& strpos( $url, 'embed' ) !== false
	) {
		return str_replace( '/embed', '', $url );
	}

	if (
		strpos( $url, 'kartta.hel.fi') !== false
		&& strpos( $url, 'embed' ) !== false
	) {
		return str_replace( 'embed', '', $url );
	}

	return $url;
}
