<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

use ArtCloud\Helsinki\Plugin\HDS\Builders\EmbeddedFigureBuilder;

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

	if ( false !== strpos( $attributes['url'], 'https://app.powerbi.com/' ) ) {
		$figure = (new EmbeddedFigureBuilder())
			->id( 'hds-diagram-' . $attributes['blockId'] )
			->type( 'diagram' )
			->source( $attributes['url'] )
			->caption( $attributes['diagramDescription'] )
			->skip_link_before( __( 'Move below the diagram', 'hds-wp' ) )
			->skip_link_after( __( 'Move above the diagram', 'hds-wp' ) )
			->aspect_ratio_16_9()
			->with_container();

		foreach ( hds_wp_diagram_iframe_attributes( $attributes ) as $key => $value ) {
			$figure->attribute( $key, $value );
		}

		$content .= $figure->render();
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

function hds_wp_diagram_iframe_attributes( array $attributes ): array {
	return array(
		'title' => sprintf(
			'%s: %s',
			__( 'Diagram', 'hds-wp' ),
			$attributes['assistiveTitle']
		),
		'width' => '1000',
		'height' => '563',
		'scrolling' => 'no',
		'allowfullscreen' => 'true',
		'sandbox' => 'allow-scripts allow-presentation allow-same-origin',
	);
}
