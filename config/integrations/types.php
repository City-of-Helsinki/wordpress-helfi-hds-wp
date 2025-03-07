<?php
return array(
	'api' => array(),
	'plugins' => array(
		'complianz' => array(
			'title' => __( 'Complianz GDPR', 'hds-wp' ),
			'description' => __( 'Add Helsinki styling to cookie notice.', 'hds-wp' ),
			'data' => array(
				'documents',
			),
		),
		'contact-form-7' => array(
			'title' => __( 'Contact Form 7', 'hds-wp' ),
			'description' => __( 'Add Helsinki styling to contact forms.', 'hds-wp' ),
		),
		'wp-rss-aggregator' => array(
			'title' => __( 'WP RSS Aggregator', 'hds-wp' ),
			'description' => __( 'Enable custom default template for Helsinki theme.', 'hds-wp' ),
		),
		'yoast-seo' => array(
			'title' => __( 'Yoast SEO', 'hds-wp' ),
			'description' => __( 'Default configuration meta titles and descriptions, and custom meta variables.', 'hds-wp' ),
		),
	),
	'themes' => array(
		'helsinkiteema' => array(
			'title' => __( 'Helsinkiteema #1', 'hds-wp' ),
			'description' => __( 'A multipurpose WordPress theme of City of Helsinki.', 'hds-wp' ),
		),
	),
);
