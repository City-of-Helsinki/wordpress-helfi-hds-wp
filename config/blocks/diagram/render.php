<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_diagram( $attributes ) {
	$content = '';

	if ( $attributes['title'] ) {
		$content .= sprintf(
			'<h2 class="block-title">%s</h2>',
			esc_html( $attributes['title'] )
		);
	}

	if ( $attributes['description'] ) {
		$content .= hds_wp_block_text_kses( wpautop( $attributes['description'] ) );
	}

	if ( $attributes['diagramTitle'] ) {
		$content .= sprintf(
			'<h3 class="diagram__title">%s</h3>',
			esc_html( $attributes['diagramTitle'] )
		);
	}

	$url = (false !== strpos( $attributes['url'], 'https://app.powerbi.com/' ))
		? $attributes['url']
		: '';

	if ( $url ) {
		$id = esc_attr( 'hds-diagram-' . $attributes['blockId'] );

		$caption = '';
		if ( $attributes['diagramDescription'] ) {
			$caption = sprintf(
				'<figcaption>%s</figcaption>',
				esc_html( $attributes['diagramDescription'] )
			);
		}

		$content .= sprintf(
			'<div class="hds-diagram__container">
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
				'<a href="#%1$s-after" id="%1$s-before" class="focusable skip-link skip-link--diagram--before">%2$s</a>',
				$id,
				esc_html__( 'Move below the diagram', 'hds-wp' ),
			),
			esc_url( $url ),
			esc_attr( sprintf(
				'%s: %s',
				__( 'Diagram', 'hds-wp' ),
				$attributes['assistiveTitle']
			) ),
			sprintf(
				'<a href="#%1$s-before" id="%1$s-after" class="focusable skip-link skip-link--diagram--after">%2$s</a>',
				$id,
				esc_html__( 'Move above the diagram', 'hds-wp' ),
			),
			$caption
		);
	}

	if ( $content ) {
		return sprintf(
			'<div %1$s>
				<div class="hds-container">
					%2$s
				</div>
			</div>',
			hds_wp_block_html_attributes(
				$attributes,
				array( 'wp-block-hds-wp-diagram', 'hds-diagram', 'has-background' )
			),
			$content
		);
	}

	return '';
}
