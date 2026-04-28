<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

add_filter( 'wp_list_categories', 'helsinki_wp_category_item_hds_tag', 10, 2 );
function helsinki_wp_category_item_hds_tag( string $output, array $args ): string {
	$tags = new WP_HTML_Tag_Processor( $output );

	while( $tags->next_tag( array( 'class_name' => 'cat-item' ) ) ) {
		if ( $tags->next_tag( 'a' ) ) {
			$tags->add_class( 'hds-tag hds-tag--rounded-corners hds-tag--link' );
		}
	}

	return $tags->get_updated_html();
}

add_filter( 'wp_tag_cloud', 'helsinki_wp_tag_cloud_hds_tag', 10, 2 );
function helsinki_wp_tag_cloud_hds_tag( string $output, array $args ): string {
	$tags = new WP_HTML_Tag_Processor( $output );

	while( $tags->next_tag( 'a' ) ) {
		$tags->add_class( 'hds-tag hds-tag--rounded-corners hds-tag--link' );
		$tags->remove_attribute( 'style' );
	}

	return $tags->get_updated_html();
}
