<?php

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
