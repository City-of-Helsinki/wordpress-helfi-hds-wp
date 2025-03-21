<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

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
	if ( empty( $block['blockName'] ) || ('core/file' !== $block['blockName'] && 'hds-wp/accordion' !== $block['blockName'])) {
		return $block_content;
	}

	if ('core/file' == $block['blockName']) {
		if (str_contains($block_content, 'download')) {
			$block_content = substr($block_content, 0, -11);
			$block_content .= Svg::icon( 'actions-settings', 'download' ) . '</a></div>';
		}
	}

	return str_replace(
		'wp-block-file__button',
		'hds-button',
		$block_content
	);

}

add_filter( 'render_block', 'hds_helsinki_channel_render', 10, 2 );
function hds_helsinki_channel_render( $block_content = '', $block = [] ) {
	if ( empty( $block['blockName'] ) || 'core/embed' !== $block['blockName'] ) {
		return $block_content;
	}

	if (!str_contains($block['attrs']['url'], 'helsinkikanava')) {
		return $block_content;
	}
	return preg_replace(
		'/wp-block-embed/',
		'wp-block-embed wp-embed-aspect-16-9 wp-has-aspect-ratio',
		$block_content,
		1
	);
}

add_filter( 'render_block', 'hds_audio_render', 10, 2 );
function hds_audio_render( $block_content = '', $block = [] ) {
	if ( empty( $block['blockName'] ) || 'core/audio' !== $block['blockName'] ) {
		return $block_content;
	}

	preg_match_all('/(?<audio1><audio[^\>]*>)(.*)(?<audio2><\/audio>)(?<figcaption><figcaption[^\>]*>.*<\/figcaption>)?(?!<figcaption[^\>]*>)/sU', $block_content, $matches);

	$block_content = '<figure class="wp-block-audio">' . $matches['audio1'][0] . __('Your browser does not support the <code>audio</code> element.', 'hds-wp') . $matches['audio2'][0] . $matches['figcaption'][0] . '</figure>';
	return $block_content;
}

add_filter( 'render_block', 'hds_table_render', 10, 2 );
function hds_table_render( $block_content = '', $block = [] ) {
	if ( empty( $block['blockName'] ) || ('core/table' !== $block['blockName'] && 'core/calendar' !== $block['blockName'])) {
		return $block_content;
	}

	if ('core/table' == $block['blockName']) {
		if ( !empty( $block['attrs']['title'] ) ) {
			preg_match_all('/(?<table><table[^\>]*>)/sU', $block_content, $matches);
			$block_content = preg_replace(
				'/(?<table><table[^\>]*>)/sU',
				$matches['table'][0] . '<caption>' . $block['attrs']['title'] . '</caption>',
				$block_content,
				1
			);
		}
	}

	preg_match_all('/(?<table><table)/sU', $block_content, $matches);
	$block_content = preg_replace(
		'/(?<table><table)/sU',
		$matches['table'][0] . ' tabindex="0"',
		$block_content,
		1
	);

	return $block_content;
}
