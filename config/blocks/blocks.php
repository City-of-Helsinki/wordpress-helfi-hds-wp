<?php
return array(
	'accordion' => array(
		'title' => __( 'Helsinki - Accordion', 'hds-wp' ),
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
		'title' => __( 'Helsinki - Accordion Panel', 'hds-wp' ),
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
		'title' => __( 'Helsinki - Banner', 'hds-wp' ),
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
	// 	'title' => __( 'Helsinki - Koros', 'hds-wp' ),
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
		'title' => __( 'Helsinki - Image Banner', 'hds-wp' ),
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
		'title' => __( 'Helsinki - Image & Text', 'hds-wp' ),
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
		'title' => __( 'Helsinki - Media List', 'hds-wp' ),
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
