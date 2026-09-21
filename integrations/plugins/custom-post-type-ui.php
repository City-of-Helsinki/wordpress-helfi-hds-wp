<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

\add_action( 'plugins_loaded', function() {

	if ( did_action( 'cptui_loaded' ) ) {

		$settings = new Taxonomy_Order_Settings( ...array(
			'cptui' => new CPT_Data(),
			'required_permission' => 'manage_options',
			'base_rest_route' => 'helsinki',
		) );

		\add_action(
			'cptui_extra_menu_items',
			array( $settings, 'add_menu_page' ),
			10, 2
		);

		\add_action(
			'admin_init',
			array( $settings, 'register_settings' )
		);

		\add_action(
			'admin_enqueue_scripts',
			array( $settings, 'enqueue_menu_page_assets' )
		);

		\add_action(
			'rest_api_init',
			array( $settings, 'register_settings_routes' )
		);
	}

}, 100 );
