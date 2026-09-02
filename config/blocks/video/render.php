<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Builders\EmbeddedFigureBuilder;

function hds_wp_render_video( $attributes ) {
	$content = '';

	if ( $attributes['title'] ) {
		$content .= sprintf(
			'<h2 class="block-title">%s</h2>',
			esc_html( $attributes['title'] )
		);
	}

	if ( $attributes['description'] ) {
		$content .= sprintf(
			'<p>%s</p>',
			esc_html( $attributes['description'] )
		);
	}

	if ( $attributes['videoTitle'] ) {
		$content .= sprintf(
			'<h3 class="video__title">%s</h3>',
			esc_html( $attributes['videoTitle'] )
		);
	}

	$url = strpos($attributes['iframeUrl'], 'youtube') !== false
		? $attributes['iframeUrl'] . '?rel=0'
		: $attributes['iframeUrl'];

	if ( $url ) {
		$figure = (new EmbeddedFigureBuilder())
			->id( 'hds-video-' . $attributes['blockId'] )
			->type( 'video' )
			->source( $url )
			->caption( $attributes['videoDescription'] )
			->skip_link_before( __( 'Move below the video', 'hds-wp' ) )
			->skip_link_after( __( 'Move above the video', 'hds-wp' ) )
			->aspect_ratio_16_9()
			->with_container();

		foreach ( hds_wp_video_iframe_attributes( $attributes ) as $key => $value ) {
			$figure->attribute( $key, $value );
		}

		$content .= $figure->render();
	}

	if ( $content ) {
		return sprintf(
			'<div %2$s>
				<div class="hds-container">
					%1$s
				</div>
			</div>',
			$content,
			hds_wp_block_html_attributes(
				$attributes,
				array( 'wp-block-hds-wp-video', 'hds-video', 'has-background' )
			)
		);
	}

	return '';
}

function hds_wp_video_iframe_attributes( array $attributes ): array {
	return array(
		'title' => sprintf(
			'Video: %s',
			__( 'Diagram', 'hds-wp' ),
			$attributes['assistive_title']
		),
		'width' => '1000',
		'height' => '563',
		'scrolling' => 'no',
		'allowfullscreen' => 'true',
		'sandbox' => 'allow-scripts allow-presentation allow-same-origin',
	);
}
