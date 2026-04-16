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

function hds_wp_render_credit_text( $post_id ): string {
	return apply_filters( 'helsinki_image_credit_text', '', (int) $post_id );
}

function hds_wp_block_html_attributes( array $block_attr, array $wrap_classes ): string {
	$html_attr = array(
		'class' => hds_wp_block_wrap_class_names( $wrap_classes, $block_attr ),
	);

	if ( ! empty( $block_attr['anchor'] ) ) {
		$html_attr['id'] = $block_attr['anchor'];
	}

	return hds_wp_reduce_html_attributes( $html_attr );
}

function hds_wp_reduce_html_attributes( array $html_attr ): string {
	return array_reduce(
		array_keys( $html_attr ),
		fn( $html, $attr ) => $html . sprintf(
			'%s="%s"',
			sanitize_key( $attr ),
			match( $attr ) {
				'href', 'src' => esc_url( $html_attr[$attr] ),
				default => esc_attr( $html_attr[$attr] )
			}
		),
		''
	);
}

function hds_wp_block_wrap_class_names( array $classes, array $attributes ): string {
	$classes = array( 'wp-block-helsinki', ...$classes );

	if ( ! empty( $attributes['className'] ) ) {
		$classes[] = $attributes['className'];
	}

	return implode( ' ', $classes );
}

function hds_wp_has_array_attribute( array $attributes, string $key ): bool {
	return isset( $attributes[$key] )
		&& is_array( $attributes[$key] )
		&& $attributes[$key];
}

function hds_wp_block_skip_link( int|string $id, string $type, string $from, string $to, string $label ): string {
	return sprintf(
		'<a href="#%1$s-%4$s" id="%1$s-%3$s" class="focusable skip-link skip-link--%2$s--%3$s">%5$s</a>',
		esc_attr( $id ),
		esc_attr( $type ),
		esc_attr( $from ),
		esc_attr( $to ),
		esc_html( $label ),
	);
}
