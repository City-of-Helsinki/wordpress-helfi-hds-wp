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
			),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
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
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)
		)
	),
	'accordion-wc' => array(
		'title' => __( 'Helsinki - Web Component Accordion', 'hds-wp' ),
		'category' => 'hds-wp',
		'render_callback' => 'hds_wp_render_block_accordion_wc',
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
			'hasCard' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'hasBorder' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'size' => array(
				'type' => 'string',
				'default' => 'm',
			),
			'panels' => array(
				'type' => 'array',
				'default' => array(),
			),
			'blockVersion' => array(
				'type' => 'integer',
			),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)
		)
	),
	'accordion-panel-wc' => array(
		'title' => __( 'Helsinki - Web Component Accordion Panel', 'hds-wp' ),
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
			'hasCard' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'hasBorder' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'size' => array(
				'type' => 'string',
				'default' => 'm',
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
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			)
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
	            'default' => __('Button Text', 'hds-wp'),
	        ),
	        'buttonUrl' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
					'targetBlank' => array(
	            'type'    => 'boolean',
	            'default' => false,
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
		'render_callback' => 'hds_wp_render_image_banner',
		'attributes' => array(
			'alignment' => array(
	            'type'    => 'string',
	            'default' => 'right',
	        ),
			'mediaId' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'mediaUrl' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'mediaWidth' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'mediaHeight' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'mediaAlt' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'mediaSrcset' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'contentTitle' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'contentText' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'buttonText' => array(
	            'type'    => 'string',
	            'default' => __('Button Text', 'hds-wp'),
	        ),
			'buttonUrl' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'targetBlank' => array(
	            'type'    => 'boolean',
	            'default' => false,
	        ),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			),
			'preview' => array(
							'type'    => 'string',
							'default' => '',
			)
		)
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
		'render_callback' => 'hds_wp_render_image_text',
		'attributes' => array(
			'alignment' => array(
	            'type'    => 'string',
	            'default' => 'right',
	        ),
			'mediaId' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'mediaUrl' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'mediaWidth' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'mediaHeight' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'mediaAlt' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'mediaSrcset' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'contentTitle' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'contentText' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'buttonText' => array(
	            'type'    => 'string',
	            'default' => __('Button Text', 'hds-wp'),
	        ),
			'buttonUrl' => array(
	            'type'    => 'string',
	            'default' => '',
	        ),
			'targetBlank' => array(
	            'type'    => 'boolean',
	            'default' => false,
	        ),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			),
			'preview' => array(
							'type'    => 'string',
							'default' => '',
			)
		)
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
			'linkType' => array(
	            'type'    => 'string',
	            'default' => 'image-title',
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
			),
			'preview' => array(
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
	            'default' => __( 'Latest news', 'hds-wp' ),
	        ),
			'category' => array(
	            'type'    => 'integer',
	            'default' => 0,
	        ),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			),
			'isEditRender' => array(
	            'type'    => 'boolean',
	            'default' => false,
			),
			'preview' => array(
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
	            'default' => 'Helsingin kaupungin uutiset',
	        ),
			'url' => array(
	            'type'    => 'string',
	            'default' => 'https://www.hel.fi/fi/uutiset/rss',
	        ),
			'lifespan' => array(
	            'type'    => 'integer',
	            'default' => 1,
	        ),
			'amount' => array(
	            'type'    => 'integer',
	            'default' => 6,
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
			'cards' => array(
				'type' => 'array',
				'default' => array(),
			),
			'blockVersion' => array(
				'type' => 'integer',
			),
			'anchor' => array(
	            'type'    => 'string',
	            'default' => '',
			),
			'preview' => array(
	            'type'    => 'string',
	            'default' => '',
			)

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

	'map' => array(
		'title' => __( 'Helsinki - Map', 'hds-wp' ),
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
		'render_callback' => 'hds_wp_render_map',
		'attributes' => array(
			'blockId'	=> array(
				'type'		=> 'string',
			),
			'title' => array(
					'type'    => 'string',
					'default' => '',
			),
			'description' => array(
					'type'    => 'string',
					'default' => '',
			),
			'url' => array(
					'type'    => 'string',
					'default' => 'https://palvelukartta.hel.fi/fi/embed/unit/1915?city=helsinki,espoo,vantaa,kauniainen,kirkkonummi&bbox=60.22464068641878,24.932012557983402,60.23254640738538,24.962611198425297',
			),
			'assistive_title' => array(
					'type'    => 'string',
					'default' => '',
			),
		),
	),

	'video' => array(
		'title' => __( 'Helsinki - Video', 'hds-wp' ),
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
		'render_callback' => 'hds_wp_render_video',
		'attributes' => array(
			'blockId'	=> array(
				'type'		=> 'string',
			),
			'title' => array(
					'type'    => 'string',
					'default' => '',
			),
			'description' => array(
					'type'    => 'string',
					'default' => '',
			),
			'url' => array(
					'type'    => 'string',
					'default' => '',
			),
			'iframeUrl' => array(
					'type'    => 'string',
					'default' => '',
			),
			'assistive_title' => array(
					'type'    => 'string',
					'default' => '',
			),
		),
	),
);
