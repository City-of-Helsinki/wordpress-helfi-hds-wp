<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_image_text($attributes) {
	$wrap_classes = array(
		'wp-block-hds-wp-image-text',
		$attributes['alignment'] === 'right' ? 'align-right' : 'align-left'
	);

	$imageConfig = array(
		'alt' => $attributes['mediaAlt'],
		'width' => $attributes['mediaWidth'],
		'height' => $attributes['mediaHeight'],
		'src' => $attributes['mediaUrl'],
		'srcset' => $attributes['mediaSrcset'],
		'id' => $attributes['mediaId'],
	);

	$image_caption = '';
	$image_caption_mobile = '';
	$image_caption_id = hds_wp_get_random_id();
	if (!empty($attributes['mediaId'])) {
		$credit = hds_wp_render_credit_text($attributes['mediaId']);
		if ($credit) {
			$image_caption = sprintf(
				'<div class="wp-caption-text image-text-caption" aria-hidden="true">%s</div>',
				hds_wp_render_credit_text($attributes['mediaId'])
			);
			$image_caption_mobile = sprintf(
				'<div class="wp-caption-text image-text-caption image-text-caption--mobile" aria-hidden="true">%s</div>',
				hds_wp_render_credit_text($attributes['mediaId'])
			);
		}
	}

	$image = '';
	if (!empty($attributes['mediaId'])) {
		$credit = hds_wp_render_credit_text($attributes['mediaId']);
		$image = sprintf(
			'<figure class="image">
				%s
				<figcaption class="screen-reader-text">%s</figcaption>
			</figure>',
			$attributes['mediaId'] > 0 ? wp_get_attachment_image($attributes['mediaId'], 'full', false, $imageConfig) : sprintf('<img src="%s" alt="%s" width="%s" height="%s" />', $attributes['mediaUrl'], $attributes['mediaAlt'], $attributes['mediaWidth'], $attributes['mediaHeight']),
			$credit ? $credit : ''
		);
		$wrap_classes[] = 'has-image';
	} else {
		$image = '<div class="image"><div class="placeholder"></div></div>';
		$wrap_classes[] = 'has-placeholder';
	}

	$content = '';
	if (
		! empty( $attributes['contentTitle'] )
		|| ! empty( $attributes['contentText'] )
		|| ! empty( $attributes['buttonText'] )
	) {
		$color_classes = 'has-secondary-background-color has-secondary-content-color';

		if (
			! empty( $attributes['className'] )
			&& str_contains( $attributes['className'], 'is-style-primary-color' )
		) {
			$color_classes = 'has-primary-background-color has-primary-content-color';
		}

		$inner_content = '';
		if ( ! empty( $attributes['contentTitle'] ) ) {
			$inner_content .= sprintf(
				'<h2 class="content__heading">%s</h2>',
				$attributes['contentTitle']
			);
		}

		if ( ! empty( $attributes['contentText'] ) ) {
			$inner_content .= sprintf(
				'<div class="content__text">%s</div>',
				wpautop( $attributes['contentText'], false )
			);
		}

		if (
			! empty( $attributes['buttonText'] )
			&& ! empty( $attributes['buttonUrl'] )
		) {
			$inner_content .= sprintf(
				'<a class="content__link hds-button" href="%s" %s>
					%s
				</a>',
				$attributes['buttonUrl'],
				$attributes['targetBlank'] ? 'target="_blank"' : '',
				$attributes['buttonText']
			);
		}

		$content = sprintf(
			'<div class="content %s">%s</div>',
			$color_classes,
			$inner_content
		);
	}

	return sprintf(
		'<div %s>
			%s
			<div class="image-text--wrapper">
				%s
				%s
			</div>
			%s
		</div>',
		hds_wp_block_html_attributes(
			$attributes,
			$wrap_classes
		),
		$image_caption_mobile,
		$image,
		$content,
		$image_caption
	);
}

function hds_wp_get_random_id()
{
	return substr(md5(uniqid(rand(), true)), 0, 20);
}
