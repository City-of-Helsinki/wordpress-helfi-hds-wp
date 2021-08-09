<?php
return array(
	'accordion' => array(
		'title' => __( 'HDS - Accordion', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
		),
	),
	'accordion-panel' => array(
		'title' => __( 'HDS - Accordion Panel', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
		),
	),
	'banner' => array(
		'title' => __( 'HDS - Banner', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
		),
	),
	// 'koros' => array(
	// 	'title' => __( 'HDS - Koros', 'hds-wp' ),
	// 	'category' => 'hds-wp',
	// 	'dependencies' => array(
	// 		'wp-blocks',
	// 		'wp-i18n',
	// 		'wp-element',
	// 		'wp-components',
	// 		'wp-editor',
	// 		'wp-data',
	// 	),
	// ),
	'image-banner' => array(
		'title' => __( 'HDS - Image Banner', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
		),
	),
	'image-text' => array(
		'title' => __( 'HDS - Image & Text', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
		),
	),
	'media-list' => array(
		'title' => __( 'HDS - Media List', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
			'wp-compose',
		),
		'render_callback' => 'hds_wp_render_block_media_list',
	),
);
