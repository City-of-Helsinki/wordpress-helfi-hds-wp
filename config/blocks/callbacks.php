<?php

use ArtCloud\Helsinki\Plugin\HDS\Svg;

/**
  * Helsinki - Content cards
  */
function hds_wp_render_block_content_cards( $attributes ) {
	if (
		empty( $attributes['cards'] ) ||
		! is_array( $attributes['cards'] )
	) {
		return;
	}

	$posts = hds_wp_content_cards_posts( $attributes['cards'] );
	if ( ! $posts ) {
		return;
	}

	$wrapClasses = array( 'content-cards' );
	$koros = '';
	if ( ! empty( $attributes['hasBackground'] ) ) {
		$wrapClasses[] = 'has-background';
		$koros = sprintf(
			'<div class="content-cards__koros">%s</div>',
			Svg::koros(
				apply_filters( 'hds_wp_content_cards_koros', 'basic' ),
				md5( time() . implode( '', $attributes['cards'] ) )
			)
		);
	}

	$gridClasses = array(
		'content-cards__cards',
		'content-cards__cards--' . $attributes['columns'],
	);

	$title = '';
	if ( ! empty( $attributes['title'] ) ) {
		$title = sprintf(
			'<h2 class="content-cards__title">%s</h2>',
			esc_html( $attributes['title'] )
		);
	}

	return sprintf(
		'<div class="%s">%s
			<div class="hds-container">
				%s
				<div class="%s">%s</div>
			</div>
		</div>',
		implode( ' ', $wrapClasses ),
		$koros,
		$title,
		implode( ' ', $gridClasses ),
		implode( '', array_map( 'hds_wp_content_card_html', $posts ) )
	);
}

function hds_wp_content_card_html( WP_Post $post ) {
	$image = get_the_post_thumbnail( $post, 'medium' );
	$has_placeholder = false;
	if ( ! $image ) {
		$has_placeholder = true;
		$image = apply_filters(
			'hds_wp_content_card_placeholder',
			Svg::placeholder(
				apply_filters(
					'hds_wp_content_card_placeholder_icon',
					'abstract-3'
				)
			),
			$post
		);
	}

	$date = 'post' === $post->post_type ? sprintf(
			'<p class="card__date">%s</p>',
			get_the_date( '', $post )
		) : '';

	$parts = array(
		'image' => sprintf(
			'<div class="card__image%s">%s</div>',
			$has_placeholder ? ' has-placeholder' : '',
			$image
		),
		'content_open' => '<div class="card__content">',
		'title' => '<h3 class="card__title">' . esc_html( $post->post_title ) . '</h3>',
		'date' => $date,
		'more' => '<div class="card__more">' . Svg::icon( 'arrows-operators', 'arrow-right' ) . '</div>',
		'content_close' => '</div>',
	);

	return sprintf(
		'<article class="content-cards__card card">
			<a class="card__link" href="%s" aria-label="%s">%s</a>
		</article>',
		esc_url( get_permalink( $post ) ),
		esc_attr( $post->post_title ),
		implode( '', $parts )
	);
}

function hds_wp_content_cards_posts( array $posts ) {
	$query = new WP_Query( array(
		'post_status' => 'publish',
		'post_type' => array( 'post', 'page' ),
		'post__in' => $posts,
		'no_found_rows' => true,
		'update_post_term_cache' => false,
	) );
	return $query->posts;
}

/**
  * Helsinki - Media List
  */
if ( ! function_exists( 'hds_wp_render_block_media_list' ) ) {
	function hds_wp_render_block_media_list( $attributes ) {
		$category = $attributes['termID'] ?? 0;
		if ( ! $category ) {
			return;
		}

		$sortOrder = $attributes['order'] ?? 'ASC';
		$sortOrderBy = $attributes['orderBy'] ?? 'title';

		$query = new WP_Query(array(
			'post_type' => 'attachment',
			'post_status' => 'inherit',
			'posts_per_page' => 500,
			'order' => $sortOrder,
			'orderby' => $sortOrderBy,
			'no_found_rows' => true,
			'cat' => $category,
		));
		if ( ! $query->posts ) {
			return;
		}

		if ( 'title' === $sortOrderBy ) {
			if ( 'ASC' === $sortOrder ) {
				usort($query->posts, function($a,$b) {
					return strnatcmp($a->post_title, $b->post_title);
				});
			} else {
				usort($query->posts, function($a,$b) {
					return strnatcmp($b->post_title, $a->post_title);
				});
			}
		}

		$items = array();
		foreach ($query->posts as $post) {
			$items[] = sprintf(
				'<li id="%s" class="media-list__item"><a href="%s">%s (%s)</a></li>',
				esc_attr( $post->post_name ),
				esc_url( wp_get_attachment_url( $post->ID ) ),
				esc_html( $post->post_title ),
				esc_html( basename($post->post_mime_type) )
			);
		}

		$listProperties = 'class="media-list"';
		if ( ! empty( $attributes['anchor'] ) ) {
			$listProperties = 'id="' . esc_attr($attributes['anchor']) . '" ' . $listProperties;
		}

		return sprintf(
			'<ul %s>%s</ul>',
			$listProperties,
			implode(
				'',
				$items
			)
		);
	}
}
