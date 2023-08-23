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
		implode( '', array_map( function($post) use ($attributes) {
			return hds_wp_content_card_html($post, $attributes);
		}, $posts ) )
	);
}

function hds_wp_content_card_html( WP_Post $post, $attributes) {
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
	$has_invert_color = false;
	if (function_exists('helsinki_scheme_has_invert_color')) {
		$has_invert_color = helsinki_scheme_has_invert_color();
	}

	$excerpt = '';
	if (isset($attributes['linkType']) && $attributes['linkType'] == 'image-title-excerpt' && !empty($post->post_excerpt)) {
		$excerpt = sprintf(
			'<p class="card__excerpt">%s</p>',
			$post->post_excerpt );
	}

	$date = 'post' === $post->post_type ? sprintf(
			'<span class="screen-reader-text">%s</span>
			<time datetime="%s" class="card__date">%s</time>',
			__('Published:', 'hds-wp'),
			esc_attr( get_the_date( 'c', $post ) ),
			get_the_date( '', $post )
		) : '';

	$parts = array(
		'image' => sprintf(
			'<div class="card__image%s">%s</div>',
			$has_placeholder ? ' has-placeholder' . ($has_invert_color ? ' has-invert-color' : '') : '',
			$image
		),
		'content_open' => '<div class="card__content">',
		'title' => '<a class="card__title_link" href="' . esc_url( get_permalink( $post ) ) . '"><h3 class="card__title">' . esc_html( $post->post_title ) . '</h3></a>',
		'excerpt' => $excerpt,
		'date' => $date,
		'more' => '<div class="card__more">' . Svg::icon( 'arrows-operators', 'arrow-right' ) . '</div>',
		'content_close' => '</div>',
	);

	return sprintf(
		'<article class="content-cards__card card">
			<div class="card__link">%s</div>
		</article>',
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
		'orderby' => 'post__in',
		'posts_per_page' => -1,
	) );
	return $query->posts;
}

function hds_wp_query_block_post_id( int $post ) {
	$query = new WP_Query( array(
		'post_status' => 'publish',
		'post_type' => array( 'post', 'page' ),
		'p' => $post,
		'no_found_rows' => true,
		'update_post_term_cache' => false,
		'ignore_sticky_posts' => 1,
		'orderby' => 'post__in'
	) );
	return $query;
}

/**
 * Helsinki - Accordion
 */

	function hds_wp_render_block_accordion($attributes, $content) {
		//var_dump($attributes); 
		if (!isset($attributes['blockVersion']) || $attributes['blockVersion'] <= 1) {
			return $content;
		}
		$title = '';
		if ( ! empty( $attributes['title'] ) ) {
			$title = sprintf(
				'<h2 class="accordion_heading">%s</h2>',
				esc_html( $attributes['title'] )
			);
		}
		
		$description = '';
		if ( ! empty( $attributes['description'] ) ) {
			$description = sprintf(
				'<p class="accordion-description">%s</p>',
				esc_html( $attributes['description'] )
			);
		}

		$id = '';
		if (!empty($attributes['anchor'])) {
			$id = 'id="'.esc_attr($attributes['anchor']).'"';
		}	

		$wrapClasses = array( 'wp-block-hds-wp-accordion', 'accordion-wrapper' );
		if (!empty($attributes['className'])) {
			$wrapClasses[] = esc_attr($attributes['className']);
		}
	
		$panels = array();
		if ( !empty( $attributes['panels'] ) || is_array( $attributes['panels'] )) {
			$panels = array_map(
				'hds_wp_render_block_accordion_panel',
				$attributes['panels']
			);
		}

		return sprintf(
			'<div %s class="%s">
					%s
					%s
					<div class="accordion">%s</div>
			</div>',
			$id,
			implode( ' ', $wrapClasses ),
			$title,
			$description,
			implode(' ' , $panels )
		);
	
	}

	function hds_wp_render_block_accordion_panel($attributes) {
		$title = sprintf(
			'<%1$s class="accordion__title">
				<button id="panel-toggle-%2$s" class="accordion__toggle" type="button" aria-controls="panel-%2$s" aria-expanded="false">
					%3$s
					<span class="accordion__icon">%4$s</span>
				</button>
			</%1$s>',
			isset($attributes['headingLevel']) ? $attributes['headingLevel'] : 'h2',
			$attributes['blockId'],
			isset($attributes['panelTitle']) ? esc_html( $attributes['panelTitle'] ) : '',
			Svg::icon( 'arrows-operators', 'angle-up' )
		);

		$panel = sprintf(
			'<div id="panel-%1$s" class="accordion__panel" aria-labelledby="panel-toggle-%1$s" role="region" hidden="true">
				<div class="accordion__content">%2$s</div>
				<button class="accordion__close" type="button">
					<span>%3$s</span>
					%4$s
				</button>
			</div>',
			$attributes['blockId'],
			apply_filters('the_content', isset($attributes['innerContent']) ? $attributes['innerContent'] : ''),
			__('Close', 'hds-wp'),
			Svg::icon( 'arrows-operators', 'angle-up' )
		);

		$id = '';
		if (!empty($attributes['anchor'])) {
			$id = 'id="'.esc_attr($attributes['anchor']).'"';
		}	

		$wrapClasses = array( 'wp-block-hds-wp-accordion-panel', 'accordion__section' );
		if (!empty($attributes['className'])) {
			$wrapClasses[] = esc_attr($attributes['className']);
		}

		return sprintf(
			'<div %s class="%s">
				%s
				%s
			</div>',
			$id,
			implode( ' ', $wrapClasses ),
			$title,
			$panel
		);
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
	$koros = '';
	if ( ! empty( $attributes['hasBackground'] ) ) {
		$wrapClasses[] = 'has-background';
		$koros = sprintf(
			'<div class="links-list__koros">%s</div>',
			Svg::koros(
				apply_filters( 'hds_wp_links_list_koros', 'basic' ),
				md5( time() . implode( '', $links ) )
			)
		);

	}
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$title = '';
	if ( ! empty( $attributes['title'] ) ) {
		$title = sprintf(
			'<h2 class="links-list__title"><span>%s</span></h2>',
			esc_html( $attributes['title'] )
		);
	}

	$gridClasses = array(
		'links-list__links',
		'links-list__links--' . $linkType,
		'links-list__links--' . $attributes['columns'],
	);

	return sprintf(
		'<div %s class="%s">%s
			<div class="hds-container">
				%s
				<ul class="%s">%s</ul>
			</div>
		</div>',
		$id,
		implode( ' ', $wrapClasses ),
		$koros,
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
	if (isset($link['postId']) && $link['postId'] != 0 && isset($link['linkDir']) && $link['linkDir'] == 'internal') {
		$posts = hds_wp_query_block_post_id( $link['postId'] );
		if ($posts->have_posts()) {
			$post = $posts->posts[0];
			$link['linkTitle'] = $post->post_title;
			$link['linkUrl'] = get_permalink( $post );
			$link['isExternalUrl'] = false;
			$link['targetBlank'] = false;
		}
		else {
			return;
		}
	}
	else {
		if (isset($link['linkDir'])) {
			$link['isExternalUrl'] = $link['linkDir'] == 'internal' ? false : true;
		}
		else if (!isset($link['isExternalUrl'] )) {
			$link['isExternalUrl'] = false;
		}
	}

	if ( empty( $link['linkTitle'] ) || empty( $link['linkUrl'] ) ) {
		return;
	}

	return hds_wp_render_links_list_item(
		sprintf(
			'<div class="link">
				<a %s><h3 class="link___title"><span>%s</span>%s</h3></a>
			</div>',
			hds_links_list_link_attributes( $link ),
			esc_html( $link['linkTitle'] ),
			hds_wp_render_link_icon( $link['isExternalUrl'] )
		)
	);
}

function hds_wp_render_link_with_title_excerpt( array $link ) {
	if (isset($link['postId']) && $link['postId'] != 0 && isset($link['linkDir']) && $link['linkDir'] == 'internal') {
		$posts = hds_wp_query_block_post_id( $link['postId'] );
		if ($posts->have_posts()) {
			$post = $posts->posts[0];
			$link['linkTitle'] = $post->post_title;
			$link['linkExcerpt'] = $post->post_excerpt;
			$link['linkUrl'] = get_permalink( $post );
			$link['isExternalUrl'] = false;
			$link['targetBlank'] = false;
		}
		else {
			return;
		}
	}
	else {
		if (isset($link['linkDir'])) {
			$link['isExternalUrl'] = $link['linkDir'] == 'internal' ? false : true;
		}
		else if (!isset($link['isExternalUrl'] )) {
			$link['isExternalUrl'] = false;
		}
	}

	if ( empty( $link['linkTitle'] ) || empty( $link['linkUrl'] ) ) {
		return;
	}

	$excerpt = ! empty( $link['linkExcerpt'] ) ? sprintf(
		'<p class="link__excerpt">%s</p>',
		esc_html( $link['linkExcerpt'] )
	) : '';

	return hds_wp_render_links_list_item(
		sprintf(
			'<div class="link">
				<a %s><h3 class="link___title"><span>%s</span>%s</h3></a>
				%s
			</div>',
			hds_links_list_link_attributes( $link ),
			esc_html( $link['linkTitle'] ),
			hds_wp_render_link_icon( $link['isExternalUrl'] ),
			$excerpt
		)
	);
}

function hds_wp_render_link_with_image_title( array $link ) {
	if (isset($link['postId']) && $link['postId'] != 0 && isset($link['linkDir']) && $link['linkDir'] == 'internal') {
		$posts = hds_wp_query_block_post_id( $link['postId'] );
		if ($posts->have_posts()) {
			$post = $posts->posts[0];
			$link['linkTitle'] = $post->post_title;
			$link['linkExcerpt'] = $post->post_excerpt;
			$link['mediaId'] = get_post_thumbnail_id($post);
			$link['linkUrl'] = get_permalink( $post );
			$link['isExternalUrl'] = false;
			$link['targetBlank'] = false;
		}
		else {
			return;
		}
	}
	else {
		if (isset($link['linkDir'])) {
			$link['isExternalUrl'] = $link['linkDir'] == 'internal' ? false : true;
		}
		else if (!isset($link['isExternalUrl'] )) {
			$link['isExternalUrl'] = false;
		}
	}

	if ( empty( $link['linkTitle'] ) || empty( $link['linkUrl'] ) ) {
		return;
	}

	$has_placeholder = empty( $link['mediaId'] );
	return hds_wp_render_links_list_item(
		sprintf(
			'<div class="link">
				<div class="link__thumbnail%s">%s</div>
				<a %s><h3 class="link___title"><span>%s</span>%s</h3></a>
			</div>',
			$has_placeholder ? ' has-placeholder' : '',
			$link['mediaId'] ? wp_get_attachment_image($link['mediaId'], 'medium_large') : Svg::placeholder(
				apply_filters(
					'hds_wp_links_list_item_placeholder_icon',
					'abstract-3'
				)
			),
			hds_links_list_link_attributes( $link ),
			esc_html( $link['linkTitle'] ),
			hds_wp_render_link_icon( $link['isExternalUrl'] )
		)
	);
}

function hds_links_list_link_attributes( array $link ) {
	$attributes = array(
		'href="' . esc_url( $link['linkUrl'] ) . '"'
	);

	$attributes[] = 'class="link__title_link"';

	if ( ! empty( $link['targetBlank'] ) ) {
		$attributes[] = 'target="_blank"';
	}

	if (! empty( $link['isExternalUrl'] ) && $link['isExternalUrl'] ) {
		$attributes[] = 'aria-label="' . $link['linkTitle'] . ' - ' . __('(Link leads to external service)', 'hds-wp') . '"';
	}

	return implode( ' ', $attributes );
}

/**
 * Banner
 */

function hds_wp_render_banner($attributes) {
	$icon = '';

	if (! empty($attributes['contentIcon']) && $attributes['contentIcon'] !== '(empty)') {
		$icon = sprintf(
			'<div class="content__inner content__inner--icon">%s</div>',
			Svg::icon(
				'blocks',
				$attributes['contentIcon']
			)
		);
	}

	$text = '';
	$text = sprintf(
		'<div class="content__inner content__inner--text">
			<h2 class="content__heading">%s</h2>
			<p class="content__text">%s</p>
		</div>',
		$attributes['contentTitle'],
		$attributes['contentText']
	);

	$button = '';
	if ( ! empty( $attributes['buttonUrl'] ) && ! empty( $attributes['buttonText'] ) ) {
		$button = sprintf(
			'<div class="content__inner content__inner--button">
				<a class="content__link hds-button" href="%s" %s rel="noopener">
					%s
				</a>
			</div>',
			$attributes['buttonUrl'],
			$attributes['targetBlank'] ? 'target="_blank"' : '',
			$attributes['buttonText'],
		);
	}


	$wrapClasses = array( 'wp-block-hds-wp-banner' );

	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);

		if (str_contains($attributes['className'], 'align-center')) {
			$icon = '';
		}
	}
	
	if (empty($icon)) {
		$wrapClasses[] = 'no-icon';
	}

	if (empty($button)) {
		$wrapClasses[] = 'no-button';
	}


	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="'.esc_attr($attributes['anchor']).'"';
	}

	return sprintf(
		'<div %s class="%s">
			<div class="content">
				%s
				<div class="content-wrapper">
					%s
					%s
				</div>
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
 * Image & Text
 */

function hds_wp_render_image_text($attributes) {

	$wrapClasses = array( 'wp-block-hds-wp-image-text' );

	if ($attributes['alignment'] === 'right') {
		$wrapClasses[] = 'align-right';
	} else {
		$wrapClasses[] = 'align-left';
	}

	if (function_exists('helsinki_scheme_has_invert_color')) {
		if(	helsinki_scheme_has_invert_color()	) {
			$wrapClasses[] = 'has-invert-color';
		}
	}


	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="'.esc_attr($attributes['anchor']).'"';
	}

	$imageConfig = array(
		'alt' => $attributes['mediaAlt'],
		'width' => $attributes['mediaWidth'],
		'height' => $attributes['mediaHeight'],
		'src' => $attributes['mediaUrl'],
		'srcset' => $attributes['mediaSrcset'],
		'id' => $attributes['mediaId'],
	);

	$image = '';
	if (!empty($attributes['mediaId'])) {
		$image = sprintf(
			'<div class="image">%s</div>',
			wp_get_attachment_image($attributes['mediaId'], 'full', false, $imageConfig)
		);
		$wrapClasses[] = 'has-image';
	}
	else {
		$image = '<div class="image"><div class="placeholder"></div></div>';
		$wrapClasses[] = 'has-placeholder';
	}

	$content = '';
	if (!empty($attributes['contentTitle']) || !empty($attributes['contentText']) || !empty($attributes['buttonText'])) {
		$content = sprintf(
			'<div class="content">
				%s
				%s
				%s
			</div>',
			!empty($attributes['contentTitle']) ? sprintf('<h2 class="content__heading">%s</h2>', $attributes['contentTitle']) : '',
			!empty($attributes['contentText']) ? sprintf('<p class="content__text">%s</p>', $attributes['contentText']) : '',
			!empty($attributes['buttonText']) && !empty($attributes['buttonUrl']) ? sprintf('<a class="content__link hds-button hds-button--primary" href="%s" %s>%s</a>', $attributes['buttonUrl'], $attributes['targetBlank'] ? 'target="_blank"' : '', $attributes['buttonText']) : ''
		);
	}

	return sprintf(
		'<div %s class="%s">
			<div class="image-text--wrapper">
				%s
				%s
			</div>
		</div>',
		$id,
		implode( ' ', $wrapClasses ),
		$image,
		$content
	);

}

/**
 * Timeline
 */

 function hds_wp_render_timeline($attributes, $content) { 
	if (!isset($attributes['blockVersion']) || $attributes['blockVersion'] <= 1) {
		return $content;
	}

	$title = '';
	if (!empty($attributes['title'])) {
		$title = sprintf(
			'<h2 class="timeline__heading">%s</h2>',
			$attributes['title']
		);
	}

	$description = '';
	if (!empty($attributes['description'])) {
		$description = sprintf(
			'<p class="excerpt">%s</p>',
			$attributes['description']
		);
	}

	$wrapClasses = array( 'wp-block-hds-wp-timeline' );
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="'.esc_attr($attributes['anchor']).'"';
	}

	$cards = array();
	if (!empty($attributes['cards']) || is_array( $attributes['cards'] )) {
		$cards = array_map(
			'hds_wp_render_timeline_card',
			$attributes['cards']
		);
	}

	$timeline = '';
	if (empty($attributes['style']) || $attributes['style'] == 'numberless') {
		$timeline = sprintf(
			'<ul class="timeline">
				%s
			</ul>',
			do_blocks(implode(' ', $cards))
		);
	}
	else if ($attributes['style'] == 'numbered') {
		$timeline = sprintf(
			'<ol class="timeline">
				%s
			</ol>',
			do_blocks(implode(' ', $cards))
		);
	}


	return sprintf(
		'<div %s class="%s">
			%s
			%s
			%s
		</div>',
		$id,
		implode( ' ', $wrapClasses ),
		$title,
		$description,
		$timeline
	);
 }


/**
 * Timeline Card
 */

function hds_wp_render_timeline_card($attributes, $content = null) {
	$step = '';

	$step = sprintf(
		'<div class="content__inner content__inner--step %s">%s</div>',
		$attributes['style'] == 'numbered' ? 'numbered' : '',
		$attributes['style'] == 'numbered' ? $attributes['order'] : ''
	);

	$text = '';
	$text = sprintf(
		'<div class="content__inner content__inner--text">
			%s
			%s
		</div>',
		$attributes['contentTitle'] ? '<div class="content__heading">' . $attributes['contentTitle'] . '</div>' : '',
		$content ? $content : $attributes['innerContent']
	);

	$wrapClasses = array( 'wp-block-hds-wp-timeline-card' );
	
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="'.esc_attr($attributes['anchor']).'"';
	}

	return sprintf(
		'<li %s class="%s">
			<div class="content">
				%s
				<div class="content-wrapper">
					%s
				</div>
			</div>
		</li>',
		$id,
		implode( ' ', $wrapClasses ),
		$step,
		$text,
	);

}


/**
 * Recent Posts
 */

function hds_wp_render_recent_posts( $attributes ) {
	//migrate old options
	$count = $attributes['articles'];
	if ( $count === 3 ) {
		$attributes['articles'] = 4;
	}
	else if ( $count === 6 ) {
		$attributes['articles'] = 8;
	}

	if ( isset($attributes['isEditRender'] ) && $attributes['isEditRender'] ) {
		return hds_wp_render_recent_posts_articles( $attributes );
	}

	$content = sprintf('
		<div id="%s" class="recent-posts %s">
			
			<div class="hds-container">
				<h2 class="container__heading">%s</h2>
				%s
				%s
			</div>
				
		</div>
		',
		isset($attributes['anchor']) ? $attributes['anchor'] : '',
		isset($attributes['className']) ? $attributes['className'] : '',
		$attributes['title'],
		hds_wp_recent_posts_grid( hds_wp_recent_posts_data( $attributes ) ),
		hds_wp_recent_posts_more( hds_wp_recent_posts_data( $attributes ) )
	);

	return $content;
}


//only render articles section; use in editor
function hds_wp_render_recent_posts_articles( $attributes ) {

	$content = sprintf('
		%s
		%s
		',
		hds_wp_recent_posts_grid( hds_wp_recent_posts_data( $attributes ) ),
		hds_wp_recent_posts_more( hds_wp_recent_posts_data( $attributes ) )
	);

	return $content;

}

function hds_wp_recent_posts_data( $attributes ) {
	return array(
		'query' => hds_wp_recent_posts_query(array(
			'cat' => $attributes != null ? $attributes['category'] : 0,
			'posts_per_page' => $attributes != null ? $attributes['articles'] : 3,
		)),
		'page_for_posts' => get_option('page_for_posts'),
		'attributes' => $attributes,
	);
}

function hds_wp_recent_posts_query( array $args ) {
	return new WP_Query(
		  apply_filters(
			  'hds_wp_recent_posts_query_args',
			  wp_parse_args(
				  $args,
				  array(
					  'post_type' => 'post',
					  'post_status' => 'publish',
					  'posts_per_page' => 3,
					  'cat' => 0,
				  )
			  ),
			  $args
		  )
	  );
  }
  
  
function hds_wp_recent_posts_grid($args = array()) {
	$content = '';
	if (function_exists('helsinki_grid_entry')) {
		ob_start();
		while ( $args['query']->have_posts() ) {
			$args['query']->the_post();
			helsinki_grid_entry($args);
		}
		$content = ob_get_clean();
		wp_reset_postdata();
	}
	else {
		while ( $args['query']->have_posts() ) {
			$args['query']->the_post();
			$content .= hds_wp_recent_posts_grid_entry($args);
		}
		wp_reset_postdata();
	}


	return sprintf(
		'<div class="grid entries m-up-2 l-up-4">
			%s
		</div>',
		$content
	);
}

function hds_wp_recent_posts_grid_entry($args = array()) {

	$classes = array(
		'entry--grid',
		'entry',
		'entry--' . get_post_type(),
	);

	$image = '';
	if ( has_post_thumbnail() ) {
		$image = sprintf('
			<div class="entry__thumbnail">
				<div class="image-wrap image-wrap--fixed-size">
					%s
				</div>
			</div>,
			',
			get_the_post_thumbnail( null, 'post-thumbnail' )
		);
		$classes[] = 'has-thumbnail';
	}
	else {
		$image = sprintf('
			<div class="entry__thumbnail has-icon %s">
				<div class="image-wrap image-wrap--fixed-size">
					%s
				</div>
			</div>,
			',
			function_exists('helsinki_scheme_has_invert_color') && helsinki_scheme_has_invert_color() ? 'has-invert-color' : '',
			Svg::placeholder(
				apply_filters(
					'hds_wp_recent_posts_placeholder_icon',
					'abstract-3'
				)
			),
		);
	}

	return sprintf('
		<div class="grid__column">
			<article id="post-%s" class="%s">
				<div>
					%s
					<a class="entry__link" href="%s"><h2 class="entry__title">%s</h2></a>
					<div class="entry__meta meta">
						<time class="date" datetime="%s">
							<span class="screen-reader-text">%s</span>
							%s
						</time>
					</div>
					<div class="entry__more">
						%s
					</div>
				</div>
			</article>
		</div>',
		get_the_ID(),
		implode( ' ', $classes ),
		$image,
		get_permalink(),
		get_the_title(),
		esc_attr( get_the_date( 'c' ) ),
		esc_html__( 'Published:', 'hds-wp' ),
		esc_html( get_the_date() ),
		Svg::icon( 'arrows-operators', 'arrow-right' )
	);
}
  
  function hds_wp_recent_posts_more($args = array()) {
	if ( isset($args['page_for_posts']) && !empty($args['page_for_posts']) ) {
		$link = '';
		if ($args['attributes']['category'] != 0) {
			$link = get_category_link($args['attributes']['category']);
		} else {
			$link = get_permalink($args['page_for_posts']);
		}

		return sprintf('
			<p class="posts-page">
				<span class="link-wrap">
					<a class="has-icon has-icon--after hds-button" href="%s">
						%s
						%s
					</a>
				</span>
			</p>',
			$link,
			esc_html__('See all articles', 'hds-wp'),
			Svg::icon( 'arrows-operators', 'arrow-right' )
		);
	}
	return '';
  }
  

/**
 * RSS Feed
 */

function hds_wp_render_rss_feed( $attributes ) {

	if ( function_exists( 'helsinki_front_page_section' ) ) {
		add_filter( 'wp_feed_cache_transient_lifetime', function( $lifetime, $url ) use ( $attributes ) {
			return hds_wp_rss_feed_lifetime(1, $url, $attributes);
		}, 10, 2 );
		$content = sprintf('
			<div id="%s" class="feed-posts %s">
				
				<div class="hds-container">
					<h2 class="container__heading">%s</h2>
					%s
					%s
				</div>
					
			</div>
			',
			isset($attributes['anchor']) ? $attributes['anchor'] : '',
			isset($attributes['className']) ? $attributes['className'] : '',
			$attributes['title'],
			hds_wp_feed_posts_source_text( $attributes ),
			hds_wp_feed_posts( hds_wp_feed_posts_data( $attributes ) )
		);
		remove_filter( 'wp_feed_cache_transient_lifetime', function(){}, 10);
		return $content;
	}
	return;

}

function hds_wp_rss_feed_lifetime($lifetime, $url, $attributes) {
	return $attributes['lifespan'] > 0 ? HOUR_IN_SECONDS * $attributes['lifespan'] : HOUR_IN_SECONDS * 12;
}

function hds_wp_feed_posts_data( $attributes ) {
	$count = $attributes['amount'];
	$url = hds_wp_feed_posts_url($attributes);
	return array(
		'feed_posts' => hds_wp_feed_rss($url, $count),
		'feed_url' => $url,
		'feed_posts_count' => $count,
		'date_format' => get_option( 'date_format' ),
		'time_format' => get_option( 'time_format' ),
		'attributes' => $attributes,
	);
}

function hds_wp_feed_posts_url($attributes = null) {
	return $attributes['url'];
}

function hds_wp_feed_posts_source_text($attributes = array()) {
	$url = hds_wp_feed_posts_url($attributes);
	if ( $url ) {
		return sprintf(
			'<p class="feed-source">%s</p>',
			sprintf(
				esc_html_x( 'Contents are automatically fetched from %s.', 'RSS feed source(s)', 'hds-wp' ),
				sprintf(
					_x( '%s', 'from RSS feed source', 'hds-wp' ),
					parse_url( $url, PHP_URL_HOST )
				)
			)
		);
	}
}

function hds_wp_feed_rss(string $url = '', int $count = 10) {
	if ( ! $url ) {
		return array();
	}
	$feed = fetch_feed( $url );
	if ( is_wp_error( $feed ) ) {
		return array();
	}
	return $feed->get_items(
		0,
		$feed->get_item_quantity( $count )
	);
}

function hds_wp_feed_posts($args = array()) {
	if ( empty( $args['feed_posts'] ) ) {
		return;
	}

	$items = array_map(
		function($post) use ($args) {
			return hds_wp_feed_list_item(array(
				'item' => $post,
				'date_format' => $args['date_format'],
				'time_format' => $args['time_format'],));
		}, $args['feed_posts']
	);

	return sprintf('
		<div class="entries l-up-2">
			<div>
				<ul class="posts">
					%s
				</ul>
			</div>
		</div>',
		implode('', $items)
	);
}

function hds_wp_feed_list_item($args = array()) {
	return sprintf('
			<li>
			<article class="entry entry--feed entry--post">
				<div>
					<h3 class="entry__title">
						<a href="%s"><span>%s</span></a>
					</h3>
				</div>
				<div class="entry__meta">
					<span class="screen-reader-text">%s</span>
					<time class="date" datetime="%s">
						%s
					</time>
				</div>
			</article>
		</li>',
		esc_url( $args['item']->get_permalink() ),
		esc_html( $args['item']->get_title() ),
		esc_html('Published:', 'hds-wp'),
		esc_attr( $args['item']->get_date('c') ),
		esc_html( $args['item']->get_date( $args['date_format'] . ' ' . $args['time_format'] ) )
	);
}


/**
 * Map Block
 */
 
function hds_wp_render_map( $attributes ) {

	$id = 'hds-map-' . $attributes['blockId'];
	$title = $attributes['title'];
	$description = $attributes['description'];
	$url = $attributes['url'];
	$linkUrl = $attributes['url'];

	//if linkUrl contains palvelukartta.hel.fi and embed, remove '/embed' from linkUrl
	if (strpos($linkUrl, 'palvelukartta.hel.fi') !== false && strpos($linkUrl, 'embed') !== false) {
		$linkUrl = str_replace('/embed', '', $linkUrl);
	}
	//if linkUrl contains kartta.hel.fi and embed, remove 'embed' from linkUrl
	if (strpos($linkUrl, 'kartta.hel.fi') !== false && strpos($linkUrl, 'embed') !== false) {
		$linkUrl = str_replace('embed', '', $linkUrl);
	}

	$assistive_title = $attributes['assistive_title'];

	$beforeMapSkipLink = sprintf(
		'<a href="#%s-after" id="%s-before" class="focusable skip-link skip-link--map--before">%s</a>',
		$id,
		$id,
		__('Move above the map', 'hds-wp'),
	);

	$afterMapSkipLink = sprintf(
		'<a href="#%s-before" id="%s-after" class="focusable skip-link skip-link--map--after">%s</a>',
		$id,
		$id,
		__('Move above the map', 'hds-wp'),
	);

	$iframe = sprintf(
		'<iframe src="%s" title="%s"></iframe>',
		$url,
		$assistive_title
	);

	$externalLink = sprintf(
		'<a href="%s" target="_blank" class="block-embed-external-link" rel="noopener">%s %s</a>',
		$linkUrl,
		__('Open map in new window', 'hds-wp'),
		hds_wp_render_link_icon( true )
	);

	return sprintf(
		'<div class="hds-map has-background">
			<div class="hds-container">
				<h2>%s</h2>
				<p>%s</p>
				<div class="hds-map__container">
					%s
					%s
					%s
					%s
				</div>
			</div>
		</div>',
		$title,
		$description,
		$beforeMapSkipLink,
		$iframe,
		$afterMapSkipLink,
		$externalLink
	);
}

/**
 * Video block
 */

 function hds_wp_render_video( $attributes ) {

	$id = 'hds-video-' . $attributes['blockId'];
	$title = $attributes['title'];
	$description = $attributes['description'];
	$url = $attributes['iframeUrl'];
	$linkUrl = $attributes['url'];

	$assistive_title = $attributes['assistive_title'];

	$beforeVideoSkipLink = sprintf(
		'<a href="#%s-after" id="%s-before" class="focusable skip-link skip-link--video--before">%s</a>',
		$id,
		$id,
		__('Move below the video', 'hds-wp'),
	);

	$afterVideoSkipLink = sprintf(
		'<a href="#%s-before" id="%s-after" class="focusable skip-link skip-link--video--after">%s</a>',
		$id,
		$id,
		__('Move above the video', 'hds-wp'),
	);

	$externalLink = sprintf(
		'<a href="%s" target="_blank" class="block-embed-external-link" rel="noopener">%s %s</a>',
		$linkUrl,
		__('Open video in new window', 'hds-wp'),
		hds_wp_render_link_icon( true )
	);

	$iframe = sprintf(
		'<figure class="wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9">	
			%s	
			<div class="wp-block-embed__wrapper">
				<iframe src="%s" title="%s" width="1000" height="563" scrolling="no" allowfullscreen="true" sandbox="allow-scripts allow-presentation allow-same-origin"></iframe>
			</div>
			%s
			%s
		</figure>',
		$beforeVideoSkipLink,
		$url,
		$assistive_title,
		$afterVideoSkipLink,
		$externalLink
	);

	return sprintf(
		'<div class="hds-video has-background">
			<div class="hds-container">
				<h2>%s</h2>
				<p>%s</p>
				<div class="hds-video__container">
					%s
				</div>
			</div>
		</div>',
		$title,
		$description,
		$iframe,
	);
}