<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_image_banner($attributes)
{

	$wrapClasses = array('wp-block-hds-wp-image-banner');

	if ($attributes['alignment'] === 'right') {
		$wrapClasses[] = 'align-right';
	} else {
		$wrapClasses[] = 'align-left';
	}

	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

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
	if (!empty($attributes['mediaId'])) {
		$credit = hds_wp_render_credit_text($attributes['mediaId']);
		if ($credit) {
			$image_caption = sprintf(
				'<div class="wp-caption-text image-banner-caption" aria-hidden="true">%s</div>',
				hds_wp_render_credit_text($attributes['mediaId'])
			);
			$image_caption_mobile = sprintf(
				'<div class="wp-caption-text image-banner-caption image-banner-caption--mobile" aria-hidden="true">%s</div>',
				hds_wp_render_credit_text($attributes['mediaId'])
			);
		}
	}

	$image = '';
	if (!empty($attributes['mediaId'])) {
		$credit = hds_wp_render_credit_text($attributes['mediaId']);
		$image = sprintf(
			'<figure class="image">%s
				<figcaption class="screen-reader-text">%s</figcaption>
			</figure>',
			wp_get_attachment_image($attributes['mediaId'], 'full', false, $imageConfig),
			$credit ? $credit : ''
		);
		$wrapClasses[] = 'has-image';
	} else {
		$image = '<div class="image"><div class="placeholder"></div></div>';
		$wrapClasses[] = 'has-placeholder';
	}

	$content = '';
	if (!empty($attributes['contentTitle']) || !empty($attributes['contentText']) || !empty($attributes['buttonText'])) {
		$content = sprintf(
			'<div class="content">
			 	<div class="content__inner">
					%s
					%s
					%s
				</div>
			</div>',
			!empty($attributes['contentTitle']) ? sprintf('<h2 class="content__heading">%s</h2>', $attributes['contentTitle']) : '',
			!empty($attributes['contentText']) ? sprintf('<p class="content__text">%s</p>', $attributes['contentText']) : '',
			!empty($attributes['buttonText']) && !empty($attributes['buttonUrl']) ? sprintf('<a class="content__link hds-button hds-button--primary" href="%s" %s>%s</a>', $attributes['buttonUrl'], $attributes['targetBlank'] ? 'target="_blank"' : '', $attributes['buttonText']) : ''
		);
	}

	return sprintf(
		'<div %s class="%s">
			%s
			<div class="image-banner--wrapper">
				%s
				%s
			</div>
			%s
		</div>',
		$id,
		implode(' ', $wrapClasses),
		$image_caption_mobile,
		$image,
		$content,
		$image_caption
	);
}
