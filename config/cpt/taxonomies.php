<?php
return array(
	'faq-category' => array(
		'post_type' => array( 'faq' ),
		'args' => array(
			'label' => __( 'Categories' ),
			'labels' => array(
				'name' => __( 'Categories' ),
				'singular_name' => __( 'Category' ),
			),
			'description' => '',
			'public' => false,
			'publicly_queryable' => false,
			'hierarchical' => false,
			'show_ui' => true,
			'show_in_menu' => true,
			'show_in_nav_menus' => false,
			'show_in_rest' => true,
			'show_tagcloud' => false,
			'show_in_quick_edit' => true,
			'show_admin_column' => true,
			'sort' => true,
			'rewrite' => false,
		),
	),
);
