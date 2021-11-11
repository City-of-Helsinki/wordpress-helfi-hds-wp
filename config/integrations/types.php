<?php
return array(
	'api' => array(),
	'plugins' => array(
		'contact-form-7' => array(
			'title' => __( 'Contact Form 7', 'hds-wp' ),
			'description' => __( 'Add Helsinki styling to contact forms.', 'hds-wp' ),
		),
		'complianz' => array(
			'title' => __( 'Complianz GDPR', 'hds-wp' ),
			'description' => __( 'Add Helsinki styling to cookie notice.', 'hds-wp' ),
			'data' => array(
				'documents',
			),
		),
		'wp-piwik' => array(
			'title' => __( 'WP-Matomo Integration', 'hds-wp' ),
			'description' => __( 'Default configuration for WP-Matomo plugin.', 'hds-wp' ),
		),
		'yoast-seo' => array(
			'title' => __( 'Yoast SEO', 'hds-wp' ),
			'description' => __( 'Default configuration meta titles and descriptions, andd custom meta variables.', 'hds-wp' ),
		),
	),
);
