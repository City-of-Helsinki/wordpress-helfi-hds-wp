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

	$posts = hds_wp_query_block_post_ids( $attributes['cards'] );
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

function hds_wp_query_block_post_ids( array $posts ) {
	$query = new WP_Query( array(
		'post_status' => 'publish',
		'post_type' => array( 'post', 'page' ),
		'post__in' => $posts,
		'no_found_rows' => true,
		'update_post_term_cache' => false,
		'ignore_sticky_posts' => 1,
	) );
	return $query->posts;
}

/**
  * Helsinki - Links
  */
function hds_wp_render_block_links_list( $attributes ) {
	if (
		empty( $attributes['links'] ) ||
		! is_array( $attributes['links'] )
	) {
		return;
	}

	$linkType = ! empty( $attributes['linkType'] ) ? $attributes['linkType'] : 'title';
	switch ( $linkType ) {
		case 'title-excerpt':
			$links = array_map(
				'hds_wp_render_link_with_title_excerpt',
				$attributes['links']
			);
			break;

		case 'image-title':
			$links = hds_wp_links_list_link_posts( $attributes['links'] );
			break;

		default:
			$links = array_map(
				'hds_wp_render_link_with_title',
				$attributes['links']
			);
			break;
	}

	$links = array_filter( $links );
	if ( ! $links ) {
		return;
	}

	$wrapClasses = array( 'links-list' );
	$decoration = '';
	if ( ! empty( $attributes['hasBackground'] ) ) {
		$wrapClasses[] = 'has-background';
		$decoration = sprintf(
			'<div class="links-list__decoration">%s</div>',
			Svg::placeholder(apply_filters(
				'hds_wp_links_list_decoration',
				'abstract-7'
			))
		);
	}

	$title = '';
	if ( ! empty( $attributes['title'] ) ) {
		$title = sprintf(
			'<h2 class="links-list__title">%s<span>%s</span></h2>',
			$decoration,
			esc_html( $attributes['title'] )
		);
	}

	$gridClasses = array(
		'links-list__links',
		'links-list__links--' . $linkType,
		'links-list__links--' . $attributes['columns'],
	);

	return sprintf(
		'<div class="%s">
			<div class="hds-container">
				%s
				<ul class="%s">%s</ul>
			</div>
		</div>',
		implode( ' ', $wrapClasses ),
		$title,
		implode( ' ', $gridClasses ),
		implode( '', $links )
	);
}

function hds_wp_links_list_link_posts( array $links ) {
	$post_links = array();
	$post_ids = array();

	foreach ( $links as $link ) {
		if ( empty( $link['postId'] ) ) {
			continue;
		}
		$link['linkUrl'] = '';
		$post_links[$link['postId']] = $link;
		$post_ids[] = $link['postId'];
	}

	$posts = hds_wp_query_block_post_ids( $post_ids );
	if ( $posts ) {
		foreach ( $posts as $post ) {
			$post_links[$post->ID]['linkTitle'] = $post->post_title;
			$post_links[$post->ID]['linkUrl'] = get_permalink( $post );
			$post_links[$post->ID]['thumbnail'] = get_the_post_thumbnail( $post, 'medium' );
		}

		return array_map(
			'hds_wp_render_link_with_image_title',
			$post_links
		);
	}

	return array();
}

function hds_wp_render_links_list_item( string $link ) {
	return '<li class="links-list__item">' . $link . '</li>';
}

function hds_wp_render_link_icon( bool $external ) {
	if ( $external ) {
		return Svg::icon( 'forms-data', 'link-external' );
	} else {
		return Svg::icon( 'arrows-operators', 'arrow-right' );
	}
}

function hds_wp_render_link_with_title( array $link ) {
	if ( empty( $link['linkTitle'] ) || empty( $link['linkUrl'] ) ) {
		return;
	}

	return hds_wp_render_links_list_item(
		sprintf(
			'<a %s>
				<h3 class="link___title"><span>%s</span>%s</h3>
			</a>',
			hds_links_list_link_attributes( $link ),
			esc_html( $link['linkTitle'] ),
			hds_wp_render_link_icon( ! empty( $link['targetBlank'] ) )
		)
	);
}

function hds_wp_render_link_with_title_excerpt( array $link ) {
	if ( empty( $link['linkTitle'] ) || empty( $link['linkUrl'] ) ) {
		return;
	}

	$excerpt = ! empty( $link['linkExcerpt'] ) ? sprintf(
		'<p class="link__excerpt">%s</p>',
		esc_html( $link['linkExcerpt'] )
	) : '';

	return hds_wp_render_links_list_item(
		sprintf(
			'<a %s>
				<h3 class="link___title"><span>%s</span>%s</h3>
				%s
			</a>',
			hds_links_list_link_attributes( $link ),
			esc_html( $link['linkTitle'] ),
			hds_wp_render_link_icon( ! empty( $link['targetBlank'] ) ),
			$excerpt
		)
	);
}

function hds_wp_render_link_with_image_title( array $link ) {
	if ( empty( $link['linkTitle'] ) || empty( $link['linkUrl'] ) ) {
		return;
	}

	$has_placeholder = empty( $link['thumbnail'] );
	return hds_wp_render_links_list_item(
		sprintf(
			'<a %s>
				<div class="link__thumbnail%s">%s</div>
				<h3 class="link___title"><span>%s</span>%s</h3>
			</a>',
			hds_links_list_link_attributes( $link ),
			$has_placeholder ? ' has-placeholder' : '',
			$link['thumbnail'] ? $link['thumbnail'] : Svg::placeholder(
				apply_filters(
					'hds_wp_links_list_item_placeholder_icon',
					'abstract-3'
				)
			),
			esc_html( $link['linkTitle'] ),
			hds_wp_render_link_icon( false )
		)
	);
}

function hds_links_list_link_attributes( array $link ) {
	$attributes = array(
		'class="link"',
		'href="' . esc_url( $link['linkUrl'] ) . '"'
	);

	if ( ! empty( $link['targetBlank'] ) ) {
		$attributes[] = 'target="_blank"';
	}

	return implode( ' ', $attributes );
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
