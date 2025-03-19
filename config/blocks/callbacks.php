<?php

if ( ! defined( 'ABSPATH' ) ) {
	die();
}

function hds_wp_query_block_post_ids(array $posts)
{
	$query = new WP_Query(array(
		'post_status' => 'publish',
		'post_type' => array('post', 'page'),
		'post__in' => $posts,
		'no_found_rows' => true,
		'update_post_term_cache' => false,
		'ignore_sticky_posts' => 1,
		'orderby' => 'post__in',
		'posts_per_page' => -1,
	));
	return $query->posts;
}

function hds_wp_query_block_post_id(int $post)
{
	$query = new WP_Query(array(
		'post_status' => 'publish',
		'post_type' => array('post', 'page'),
		'p' => $post,
		'no_found_rows' => true,
		'update_post_term_cache' => false,
		'ignore_sticky_posts' => 1,
		'orderby' => 'post__in'
	));
	return $query;
}

function hds_wp_render_credit_text($postId)
{
	if (function_exists('helsinki_base_image_credit')) {
		return helsinki_base_image_credit($postId);
	}
	return '';
}
