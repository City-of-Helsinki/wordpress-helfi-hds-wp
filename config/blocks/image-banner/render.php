<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_image_banner($attributes) {
	$wrap_classes = array(
		'wp-block-hds-wp-image-banner',
		$attributes['alignment'] === 'right' ? 'align-right' : 'align-left',
	);

	$image_caption = '';
	$image_caption_mobile = '';
	$image = '';

	if ( ! empty( $attributes['mediaId'] ) ) {
		$credit = hds_wp_render_credit_text( (int) $attributes['mediaId'] );

		if ( $credit ) {
			$image_caption = sprintf(
				'<div class="wp-caption-text image-banner-caption" aria-hidden="true">%s</div>',
				esc_html( $credit )
			);

			$image_caption_mobile = sprintf(
				'<div class="wp-caption-text image-banner-caption image-banner-caption--mobile" aria-hidden="true">%s</div>',
				esc_html( $credit )
			);
		}

		$wrap_classes[] = 'has-image';
		$image = sprintf(
			'<figure class="image">
				%s
				<figcaption class="screen-reader-text">%s</figcaption>
			</figure>',
			wp_get_attachment_image( (int) $attributes['mediaId'], 'full', false ),
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

		if ( ! empty( $attributes['contentTitle'] ) ) {
			$content .= sprintf(
				'<h2 class="content__heading">%s</h2>',
				esc_html( $attributes['contentTitle'] )
			);
		}

		if ( ! empty( $attributes['contentText'] ) ) {
			$content .= sprintf(
				'<p class="content__text">%s</p>',
				hds_wp_block_text_kses( $attributes['contentText'] )
			);
		}

		if (
			! empty( $attributes['buttonText'] )
			&& ! empty( $attributes['buttonUrl'] )
		) {
			$content .= sprintf(
				'<a class="content__link hds-button" href="%s" %s>
					%s
				</a>',
				esc_url( $attributes['buttonUrl'] ),
				$attributes['targetBlank'] ? 'target="_blank"' : '',
				esc_html( $attributes['buttonText'] )
			);
		}

		$content = sprintf(
			'<div class="content">
			 	<div class="content__inner">
					%s
				</div>
			</div>',
			$content
		);
	}

	return sprintf(
		'<div %s>
			%s
			<div class="image-banner--wrapper">
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
