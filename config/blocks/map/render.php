<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Builders\EmbeddedFigureBuilder;

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
		$figure = (new EmbeddedFigureBuilder())
			->id( 'hds-diagram-' . $attributes['blockId'] )
			->type( 'map' )
			->source( $attributes['url'] )
			->skip_link_before( __( 'Move below the map', 'hds-wp' ) )
			->skip_link_after( __( 'Move above the map', 'hds-wp' ) )
			->attribute( 'title', $attributes['assistive_title'] )
			// ->aspect_ratio_16_9()
			->with_container();

		$ext_url = hds_wp_format_map_external_url( $attributes['url'] );
		if ( $ext_url ) {
			$figure->external_link( $ext_url, __( 'Open map in new window', 'hds-wp' ) );
		}

		$content .= $figure->render();
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
