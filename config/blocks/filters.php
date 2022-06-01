<?php

use ArtCloud\Helsinki\Plugin\HDS\Svg;

add_filter( 'wp_prepare_attachment_for_js', 'hds_wp_add_srcset_to_attachment_js_response', 10, 2 );
function hds_wp_add_srcset_to_attachment_js_response( $response, $attachment ) {
	if ( isset( $response['sizes'] ) && is_array( $response['sizes'] ) ) {
		foreach ( $response['sizes'] as $size => $datas ) {
		  $response['sizes'][$size]['srcset'] = wp_get_attachment_image_srcset( $attachment->ID, $size );
		}
	}
	return $response;
}

add_filter( 'render_block', 'hds_button_class', 10, 2 );
function hds_button_class( $block_content = '', $block = [] ) {
	if ( empty( $block['blockName'] ) || 'core/button' !== $block['blockName'] ) {
		return $block_content;
	}

	$classes = ['hds-button'];

	if ( ! empty( $block['attrs']['className'] ) ) {
		if ( false !== strpos( $block['attrs']['className'], 'secondary' ) ) {
			$classes[] = 'hds-button--secondary';
		}

		if ( false !== strpos( $block['attrs']['className'], 'supplementary' ) ) {
			$classes[] = 'hds-button--supplementary';
		}
	}

	return str_replace(
		'wp-block-button__link',
		implode( ' ', $classes ),
		$block_content
	);
}

add_filter( 'render_block', 'hds_file_render', 10, 2 );
function hds_file_render( $block_content = '', $block = [] ) {
	if ( empty( $block['blockName'] ) || 'core/file' !== $block['blockName'] ) {
		return $block_content;
	}

	if (str_contains($block_content, 'download')) {
		$block_content = substr($block_content, 0, -11);
		$block_content .= Svg::icon( 'actions-settings', 'download' ) . '</a></div>';
	}

	return str_replace(
		'wp-block-file__button',
		'hds-button',
		$block_content
	);

}
