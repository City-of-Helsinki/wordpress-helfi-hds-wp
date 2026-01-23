<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_video( $attributes ) {
	$content = '';

	if ( $attributes['title'] ) {
		$content .= sprintf(
			'<h2>%s</h2>',
			esc_html( $attributes['title'] )
		);
	}

	if ( $attributes['description'] ) {
		$content .= sprintf(
			'<p>%s</p>',
			wp_kses_post( $attributes['description'] )
		);
	}

	if ( $attributes['videoTitle'] ) {
		$content .= sprintf(
			'<h3>%s</h3>',
			wp_kses_post( $attributes['videoTitle'] )
		);
	}

	$url = strpos($attributes['iframeUrl'], 'youtube') !== false
		? $attributes['iframeUrl'] . '?rel=0'
		: $attributes['iframeUrl'];

	if ( $url ) {
		$id = esc_attr( 'hds-video-' . $attributes['blockId'] );

		$caption = '';
		if ( $attributes['videoDescription'] ) {
			$caption .= sprintf(
				'<span>%s</span>',
				esc_html( $attributes['videoDescription'] )
			);
		}

		if ( $attributes['videoCredits'] ) {
			$caption .= sprintf(
				'<span>%1$s %2$s</span>',
				esc_html__( 'Video:', 'hds-wp' ),
				esc_html( $attributes['videoCredits'] )
			);
		}

		$content .= sprintf(
			'<div class="hds-video__container">
				<figure class="wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9">
					%1$s
					<div class="wp-block-embed__wrapper">
						<iframe src="%2$s" title="%3$s" width="1000" height="563" scrolling="no" allowfullscreen="true" sandbox="allow-scripts allow-presentation allow-same-origin"></iframe>
					</div>
					%4$s
					%5$s
				</figure>
			</div>',
			sprintf(
				'<a href="#%1$s-after" id="%1$s-before" class="focusable skip-link skip-link--video--before">%2$s</a>',
				$id,
				esc_html__( 'Move below the video', 'hds-wp' ),
			),
			esc_url( $url ),
			esc_attr( $attributes['assistive_title'] ),
			sprintf(
				'<a href="#%1$s-before" id="%1$s-after" class="focusable skip-link skip-link--video--after">%2$s</a>',
				$id,
				esc_html__( 'Move above the video', 'hds-wp' ),
			),
			$caption ? sprintf( '<figcaption>%s</figcaption>', $caption ) : ''
		);
	}

	return $content ? sprintf(
		'<div class="hds-video has-background">
			<div class="hds-container">
				%1$s
			</div>
		</div>',
		$content
	) : '';
}
