<?php
return array(
	'accordion' => array(
		'title' => __( 'Helsinki - Accordion', 'hds-wp' ),
		'category' => 'hds-wp',
		'render_callback' => 'hds_wp_render_block_accordion',
		'dependencies' => array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor',
			'wp-data',
		),
		'attributes' => array(
			'title' => array (
				'type' => 'string'
			),
			'description' => array(
				'type' => 'string',
			),
			'panels' => array(
				'type' => 'array',
				'default' => array(),
			),
			'blockVersion' => array(
				'type' => 'integer',
			)
		)
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
		'attributes' => array(
			'panelTitle' => array (
				'type' => 'string'
			),
			'blockId' => array(
				'type' => 'string',
			),
			'headingLevel' => array(
				'type' => 'string',
			),
			'innerContent' => array(
				'type' => 'string',
			),
		)
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
		'render_callback' => 'hds_wp_render_banner',
		'attributes' => array(
	        'contentTitle' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'contentText' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
	        'contentIcon' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
	        'buttonText' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
	        'buttonUrl' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
	        'isExternalUrl' => array(
	            'type'    => 'boolean',
	            'default' => true,
	        ),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)
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
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)
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
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)
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
	'rss-feed' => array(
		'title' => __( 'Helsinki - RSS', 'hds-wp' ),
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
		'render_callback' => 'hds_wp_render_rss_feed',
		'attributes' => array(
	        'title' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'url' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'lifespan' => array(
	            'type'    => 'integer',
	            'default' => 12,
	        ),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)

	    ),
	),
	'timeline' => array(
		'title' => __( 'Helsinki - Phasing', 'hds-wp' ),
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
		'render_callback' => 'hds_wp_render_timeline',
		'attributes' => array(
	        'title' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'description' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'style' => array(
	            'type'    => 'string',
	            'default' => 'numberless',
	        ),

	    ),
	),
	'timeline-card' => array(
		'title' => __( 'Helsinki - Phasing Card', 'hds-wp' ),
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
		'render_callback' => 'hds_wp_render_timeline_card',
		'attributes' => array(
	        'contentTitle' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'style' => array(
	            'type'    => 'string',
	            'default' => 'numberless',
	        ),
			'order' => array(
	            'type'    => 'integer',
	        ),
			'innerContent' => array(
				'type'		=> 'string',
				'default'	=> '',
			),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)
	    ),
	),

);
