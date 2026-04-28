<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return array(
	'core/button' => array(
		array(
			'name' => 'default',
			'label' => __( 'Primary', 'hds-wp' ),
			'is_default' => true,
		),
		array(
			'name' => 'secondary',
			'label' => __( 'Secondary', 'hds-wp' ),
		),
		array(
			'name' => 'supplementary',
			'label' => __( 'Supplementary', 'hds-wp' ),
		),
	),
	'core/group' => array(
		array(
			'name' => 'light-gray-background',
			'label' => __( 'Light Gray Background', 'hds-wp' ),
		),
	),
	'core/columns' => array(
		array(
			'name' => 'light-gray-background',
			'label' => __( 'Light Gray Background', 'hds-wp' ),
		),
	),
);
