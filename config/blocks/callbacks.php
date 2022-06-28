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
	
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="'.esc_attr($attributes['anchor']).'"';
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
		'<div %s class="%s">%s
			<div class="hds-container">
				%s
				<div class="%s">%s</div>
			</div>
		</div>',
		$id,
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
			<a class="card__link" href="%s">%s</a>
		</article>',
		esc_url( get_permalink( $post ) ),
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
		'orderby' => 'post__in'
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
			$links = array_map(
				'hds_wp_render_link_with_image_title',
				$attributes['links']
			);
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

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="'.esc_attr($attributes['anchor']).'"';
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
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
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
		'<div %s class="%s">
			<div class="hds-container">
				%s
				<ul class="%s">%s</ul>
			</div>
		</div>',
		$id,
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
			hds_wp_render_link_icon( $link['isExternalUrl'] )
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
			hds_wp_render_link_icon( $link['isExternalUrl'] ),
			$excerpt
		)
	);
}

function hds_wp_render_link_with_image_title( array $link ) {
	if ( empty( $link['linkTitle'] ) || empty( $link['linkUrl'] ) ) {
		return;
	}

	$has_placeholder = empty( $link['mediaId'] );
	return hds_wp_render_links_list_item(
		sprintf(
			'<a %s>
				<div class="link__thumbnail%s">%s</div>
				<h3 class="link___title"><span>%s</span>%s</h3>
			</a>',
			hds_links_list_link_attributes( $link ),
			$has_placeholder ? ' has-placeholder' : '',
			$link['mediaId'] ? wp_get_attachment_image($link['mediaId']) : Svg::placeholder(
				apply_filters(
					'hds_wp_links_list_item_placeholder_icon',
					'abstract-3'
				)
			),
			esc_html( $link['linkTitle'] ),
			hds_wp_render_link_icon( $link['isExternalUrl'] )
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
 * Banner
 */

function hds_wp_render_banner($attributes) {
	$icon = '';
	$icon = sprintf(
		'<div class="content__inner content__inner--icon">%s</div>',
		Svg::icon(
			'blocks',
			$attributes['contentIcon']
		)
	);

	$text = '';
	$text = sprintf(
		'<div class="content__inner content__inner--text">
			<h2 class="content__heading">%s</h2>
			<p class=""content__text>%s</p>
		</div>',
		$attributes['contentTitle'],
		$attributes['contentText']
	);

	$button = '';
	if ( ! empty( $attributes['buttonUrl'] ) && ! empty( $attributes['buttonText'] ) ) {
		$button = sprintf(
			'<div class="content__inner content__inner--button">
				<a class="content__link hds-button" href="%s" target="_blank" rel="noopener">
					%s
					%s
				</a>
			</div>',
			$attributes['buttonUrl'],
			$attributes['buttonText'],
			hds_wp_render_link_icon($attributes['isExternalUrl'])
		);
	}


	$wrapClasses = array( 'wp-block-hds-wp-banner' );
	
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="'.esc_attr($attributes['anchor']).'"';
	}

	return sprintf(
		'<div %s class="%s">
			<div class="content">
				%s
				%s
				%s
			</div>
		</div>',
		$id,
		implode( ' ', $wrapClasses ),
		$icon,
		$text,
		$button
	);

}

/**
 * Recent Posts
 */

function hds_wp_render_recent_posts( $attributes ) {
	if ( function_exists( 'helsinki_front_page_section' ) ) {
		ob_start();
		add_action('helsinki_front_page_recent_posts', 'helsinki_front_page_recent_posts_title', 10);
		add_action('helsinki_front_page_recent_posts', 'helsinki_front_page_recent_posts_grid', 20);
		add_action('helsinki_front_page_recent_posts', 'helsinki_front_page_recent_posts_more', 30);
		helsinki_front_page_section('recent-posts', 0, $attributes);
		$content = ob_get_clean();
		return $content;
	}
	return;
}

/**
 * RSS Feed
 */

function hds_wp_render_rss_feed( $attributes ) {
	if ( function_exists( 'helsinki_front_page_section' ) ) {
		add_filter( 'wp_feed_cache_transient_lifetime', function( $lifetime, $url ) use ( $attributes ) {
			return hds_wp_rss_feed_lifetime($lifetime, $url, $attributes);
		}, 10, 2 );
		ob_start();
		add_action('helsinki_front_page_feed-posts', 'helsinki_front_page_feed_posts_title', 10);
		add_action('helsinki_front_page_feed-posts', 'helsinki_front_page_feed_posts_source_text', 20);
		add_action('helsinki_front_page_feed-posts', 'helsinki_front_page_feed_posts', 30);
		helsinki_front_page_section('feed-posts', 0, $attributes);
		$content = ob_get_clean();
		remove_filter( 'wp_feed_cache_transient_lifetime', function(){}, 10);
		return $content;
	}
	return;
}

function hds_wp_rss_feed_lifetime($lifetime, $url, $attributes) {
	return $attributes['lifespan'] > 0 ? HOUR_IN_SECONDS * $attributes['lifespan'] : HOUR_IN_SECONDS * 12;
}
