<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use function ArtCloud\Helsinki\Plugin\HDS\is_debug;
use function ArtCloud\Helsinki\Plugin\HDS\plugin_version;

\add_action( 'plugins_loaded', function() {

	if ( did_action( 'cptui_loaded' ) ) {

		$settings = create_taxonomy_order_settings(
			create_cpt_taxonomy_order(
				create_cpt_data()
			)
		);

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

		\add_filter( 'template_include', function( string $template ) {

			$locator = create_cpt_template_locator(
				create_cpt_data(),
				$template
			);

			return $locator->locate_template();

		}, 99 );
	}

}, 100 );

function create_cpt_data(): CPT_Data {
	static $object;

	if ( ! isset( $object ) ) {
		$object = new CPT_Data();
	}

	return $object;
}

function create_cpt_taxonomy_order( CPT_Data $cpt_data ): CPT_Taxonomy_Order {
	static $object;

	if ( ! isset( $object ) ) {
		$object = new CPT_Taxonomy_Order( $cpt_data );
	}

	return $object;
}

function create_taxonomy_order_settings( CPT_Taxonomy_Order $cpt_tax_order ): Taxonomy_Order_Settings {
	return new Taxonomy_Order_Settings( ...array(
		'cpt_tax_order' => $cpt_tax_order,
		'is_debug' => is_debug(),
		'plugin_version' => plugin_version(),
		'required_permission' => 'manage_options',
		'base_rest_route' => 'helsinki',
	) );
}

function create_cpt_template_locator( CPT_Data $cpt_data, string $default_template ): CPT_Template_Locator {
	return new CPT_Template_Locator( $cpt_data, $default_template );
}

function create_cpt_terms( CPT_Taxonomy_Order $cpt_tax_order ): CPT_Terms {
	return new CPT_Terms( $cpt_tax_order );
}
