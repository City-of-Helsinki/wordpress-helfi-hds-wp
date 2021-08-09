<?php

if ( ! function_exists( 'hds_wp_core_block_type_args' ) ) {
	function hds_wp_core_block_type_args( $args, $block ) {
		if ( 'core/latest-posts' === $block ) {
			$args['render_callback'] = 'hds_wp_render_block_core_latest_posts';
		}
		return $args;
	}
}
// add_filter( 'register_block_type_args', 'hds_wp_core_block_type_args', 10, 2 );

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
  if ( isset( $block['blockName'] ) && 'core/button' === $block['blockName'] ) {
    $block_content = str_replace(
      'wp-block-button__link',
      'hds-button button',
      $block_content
    );
	}
  return $block_content;
}
