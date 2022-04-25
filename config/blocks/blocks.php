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
	'content-cards' => array(
		'title' => __( 'Helsinki - Content Cards', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
			'wp-server-side-render',
		),
		'render_callback' => 'hds_wp_render_block_content_cards',
		'attributes' => array(
	        'columns' => array(
	            'type'    => 'integer',
	            'default' => 3,
	        ),
	        'hasBackground' => array(
	            'type'    => 'boolean',
	            'default' => false,
	        ),
	        'title' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
	        'cards' => array(
	            'type'    => 'array',
	            'default' => array(),
	        ),
	    ),
	),
	'content-card' => array(
		'title' => __( 'Helsinki - Content Card', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
			'wp-api-fetch',
			'wp-compose',
		),
	),
	'links' => array(
		'title' => __( 'Helsinki - Links', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
			'wp-server-side-render',
		),
		'render_callback' => 'hds_wp_render_block_links_list',
		'attributes' => array(
			'columns' => array(
	            'type'    => 'integer',
	            'default' => 3,
	        ),
	        'hasBackground' => array(
	            'type'    => 'boolean',
	            'default' => false,
	        ),
	        'linkType' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
	        'title' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
	        'links' => array(
	            'type'    => 'array',
	            'default' => array(),
	        ),
	    ),
	),
	'link' => array(
		'title' => __( 'Helsinki - Link', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
			'wp-api-fetch',
			'wp-compose',
		),
	),
	'recent-posts' => array(
		'title' => __( 'Helsinki - Recent Posts', 'hds-wp' ),
		'category' => 'hds-wp',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
			'wp-server-side-render',
		),
		'render_callback' => 'hds_wp_render_recent_posts',
		'attributes' => array(
	        'articles' => array(
	            'type'    => 'integer',
	            'default' => 3,
	        ),
	        'title' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'category' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)

	    ),
	),

);
