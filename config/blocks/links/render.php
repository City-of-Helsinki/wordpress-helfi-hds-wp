<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_render_block_links_list($attributes)
{
	if (
		empty($attributes['links']) ||
		!is_array($attributes['links'])
	) {
		return;
	}

	$linkType = !empty($attributes['linkType']) ? $attributes['linkType'] : 'title';
	switch ($linkType) {
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

	$links = array_filter($links);
	if (!$links) {
		return;
	}

	$id = '';
	if (!empty($attributes['anchor'])) {
		$id = 'id="' . esc_attr($attributes['anchor']) . '"';
	}

	$wrapClasses = array('links-list');
	if (!empty($attributes['hasBackground'])) {
		$wrapClasses[] = 'has-background';
	}
	if (!empty($attributes['className'])) {
		$wrapClasses[] = esc_attr($attributes['className']);
	}

	$title = '';
	if (!empty($attributes['title'])) {
		$title = sprintf(
			'<h2 class="links-list__title"><span>%s</span></h2>',
			esc_html($attributes['title'])
		);
	}

	$description = '';
	if (!empty($attributes['contentText'])) {
		$description = sprintf(
			'<p class="links-list__description">%s</p>',
			esc_html($attributes['contentText'])
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
				%s
				<ul class="%s">%s</ul>
			</div>
		</div>',
		$id,
		implode(' ', $wrapClasses),
		$title,
		$description,
		implode(' ', $gridClasses),
		implode('', $links)
	);
}

function hds_wp_links_list_link_posts(array $links)
{
	$post_links = array();
	$post_ids = array();

	foreach ($links as $link) {
		if (empty($link['postId'])) {
			continue;
		}
		$link['linkUrl'] = '';
		$post_links[$link['postId']] = $link;
		$post_ids[] = $link['postId'];
	}

	$posts = hds_wp_query_block_post_ids($post_ids);
	if ($posts) {
		foreach ($posts as $post) {
			$post_links[$post->ID]['linkTitle'] = $post->post_title;
			$post_links[$post->ID]['linkUrl'] = get_permalink($post);
			$post_links[$post->ID]['thumbnail'] = get_the_post_thumbnail($post, 'medium');
		}

		return array_map(
			'hds_wp_render_link_with_image_title',
			$post_links
		);
	}

	return array();
}

function hds_wp_render_links_list_item(string $link)
{
	return '<li class="links-list__item">' . $link . '</li>';
}

function hds_wp_render_link_with_title(array $link)
{
	if (isset($link['postId']) && $link['postId'] != 0 && isset($link['linkDir']) && $link['linkDir'] == 'internal') {
		$posts = hds_wp_query_block_post_id($link['postId']);
		if ($posts->have_posts()) {
			$post = $posts->posts[0];
			$link['linkTitle'] = $post->post_title;
			$link['linkUrl'] = get_permalink($post);
			$link['targetBlank'] = false;
		} else {
			return;
		}
	}

	if (empty($link['linkTitle']) || empty($link['linkUrl'])) {
		return;
	}

	return hds_wp_render_links_list_item(
		sprintf(
			'<div class="link">
				<a %s><span>%s</span></a>
			</div>',
			hds_links_list_link_attributes($link),
			esc_html($link['linkTitle'])
		)
	);
}

function hds_wp_render_link_with_title_excerpt(array $link)
{
	if (isset($link['postId']) && $link['postId'] != 0 && isset($link['linkDir']) && $link['linkDir'] == 'internal') {
		$posts = hds_wp_query_block_post_id($link['postId']);
		if ($posts->have_posts()) {
			$post = $posts->posts[0];
			$link['linkTitle'] = $post->post_title;
			$link['linkExcerpt'] = $post->post_excerpt;
			$link['linkUrl'] = get_permalink($post);
			$link['targetBlank'] = false;
		} else {
			return;
		}
	}

	if (empty($link['linkTitle']) || empty($link['linkUrl'])) {
		return;
	}

	$excerpt = !empty($link['linkExcerpt']) ? sprintf(
		'<p class="link__excerpt">%s</p>',
		esc_html($link['linkExcerpt'])
	) : '';

	return hds_wp_render_links_list_item(
		sprintf(
			'<div class="link">
				<a %s><span>%s</span></a>
				%s
			</div>',
			hds_links_list_link_attributes($link),
			esc_html($link['linkTitle']),
			$excerpt
		)
	);
}

function hds_wp_render_link_with_image_title(array $link)
{
	if (isset($link['postId']) && $link['postId'] != 0 && isset($link['linkDir']) && $link['linkDir'] == 'internal') {
		$posts = hds_wp_query_block_post_id($link['postId']);
		if ($posts->have_posts()) {
			$post = $posts->posts[0];
			$link['linkTitle'] = $post->post_title;
			$link['linkExcerpt'] = $post->post_excerpt;
			$link['mediaId'] = get_post_thumbnail_id($post);
			$link['linkUrl'] = get_permalink($post);
			$link['targetBlank'] = false;
		} else {
			return;
		}
	}

	if (empty($link['linkTitle']) || empty($link['linkUrl'])) {
		return;
	}

	$has_placeholder = empty($link['mediaId']);
	return hds_wp_render_links_list_item(
		sprintf(
			'<div class="link">
				<div class="link__thumbnail%s">%s</div>
				<a %s><span>%s</span></a>
			</div>',
			$has_placeholder ? ' has-placeholder' : '',
			$link['mediaId']
				? wp_get_attachment_image($link['mediaId'], 'medium_large', false, array('alt' => ''))
				: apply_filters(
					'hds_wp_svg_placeholder_html',
					'',
					apply_filters( 'hds_wp_links_list_item_placeholder_icon', 'abstract-3' )
				),
			hds_links_list_link_attributes($link),
			esc_html($link['linkTitle'])
		)
	);
}

function hds_links_list_link_attributes(array $link)
{
	$attributes = array(
		'href="' . esc_url($link['linkUrl']) . '"'
	);

	$attributes[] = 'class="link__title_link"';

	if (!empty($link['targetBlank'])) {
		$attributes[] = 'target="_blank"';
	}

	return implode(' ', $attributes);
}
