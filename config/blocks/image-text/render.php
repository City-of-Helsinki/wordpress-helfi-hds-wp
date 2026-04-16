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
	$image = '';

	if ( ! empty( $attributes['mediaId'] ) ) {
		$credit = hds_wp_render_credit_text( (int) $attributes['mediaId'] );

		if ( $credit ) {
			$image_caption = sprintf(
				'<div class="wp-caption-text image-text-caption" aria-hidden="true">%s</div>',
				esc_html( $credit )
			);

			$image_caption_mobile = sprintf(
				'<div class="wp-caption-text image-text-caption image-text-caption--mobile" aria-hidden="true">%s</div>',
				esc_html( $credit )
			);
		}

		$wrap_classes[] = 'has-image';
		$image = sprintf(
			'<figure class="image">
				%s
				<figcaption class="screen-reader-text">%s</figcaption>
			</figure>',
			wp_get_attachment_image( (int) $attributes['mediaId'], 'full', false, $imageConfig )
				?: sprintf( '<img %s/>', hds_wp_reduce_html_attributes( $imageConfig ) ),
			esc_html( $credit )
		);
	} else {
		$wrap_classes[] = 'has-placeholder';
		$image = '<div class="image"><div class="placeholder"></div></div>';
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
				esc_html( $attributes['contentTitle'] )
			);
		}

		if ( ! empty( $attributes['contentText'] ) ) {
			$inner_content .= sprintf(
				'<div class="content__text">%s</div>',
				wp_kses_post( wpautop( $attributes['contentText'], false ) )
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
				esc_url( $attributes['buttonUrl'] ),
				$attributes['targetBlank'] ? 'target="_blank"' : '',
				esc_html( $attributes['buttonText'] )
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
