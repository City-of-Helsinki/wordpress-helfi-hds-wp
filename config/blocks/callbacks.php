<?php

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
	if ( ! empty( $attributes['hasBackground'] ) ) {
		$wrapClasses[] = 'has-background';
	}

	$gridClasses = array(
		'content-cards__cards',
		'grid',
		'l-up-' . $attributes['columns'],
	);

	$title = '';
	if ( ! empty( $attributes['title'] ) ) {
		$title = sprintf(
			'<h2 class="content-cards__title">%s</h2>',
			esc_html( $attributes['title'] )
		);
	}

	return sprintf(
		'<div class="%s">%s%s<div class="%s">%s</div></div>',
		implode( ' ', $wrapClasses ),
		apply_filters(
			'hds_wp_content_cards_decoration',
			'',
			$attributes
		),
		$title,
		implode( ' ', $gridClasses ),
		implode( '', array_map( 'hds_wp_content_card_html', $posts ) )
	);
}

function hds_wp_content_card_html( WP_Post $post ) {
	return sprintf(
		'<div class="grid__column">
			<article class="content-cards__card card">
				<a class="card__link" href="%s">
					<div class="card__image">%s</div>
					<h3 class="card__title">%s</h3>
					<div class="card__more">%s</div>
				</a>
			</article>
		</div>',
		esc_url( get_permalink( $post ) ),
		apply_filters(
			'hds_wp_content_card_image',
			get_the_post_thumbnail( $post, 'medium' ),
			$post
		), // TODO: use svg module, make singleton
		esc_html( $post->post_title ),
		apply_filters( 'hds_wp_content_card_icon', '', $post ) // TODO: use svg module, make singleton
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
