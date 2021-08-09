<?php
return array(
	'faq' => array(
		'label' => __( 'Frequently Asked Questions', 'hds-wp' ),
		'labels' => array(
			'name' => __( 'FAQs', 'hds-wp' ),
			'singular_name' => __( 'FAQ', 'hds-wp' ),
		),
		'description' => '',
		'public' => false,
		'publicly_queryable' => false,
		'hierarchical' => false,
		'exclude_from_search' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'show_in_admin_bar' => true,
		'show_in_rest' => true,
		'menu_icon' => 'dashicons-format-status',
		'supports' => array(
			'title',
			'editor',
			'author',
			'revisions'
		),
		'taxonomies' => array(
			'faq-category'
		),
		'has_archive' => false,
		'rewrite' => false,
		'can_export' => true,
		'delete_with_user' => false,
	),
);
