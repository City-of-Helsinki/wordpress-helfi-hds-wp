<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use function ArtCloud\Helsinki\Plugin\HDS\is_debug;
use function ArtCloud\Helsinki\Plugin\HDS\plugin_version;
use function ArtCloud\Helsinki\Plugin\HDS\plugin_url;

\add_action( 'plugins_loaded', function() {

	if ( did_action( 'cptui_loaded' ) ) {
		$data = create_cpt_data();
		$tax_order = create_cpt_taxonomy_order( $data );
		$cpt_terms = create_cpt_terms( $tax_order );

		/*
		 * Settings
		 */
		$settings = create_taxonomy_order_settings( $tax_order );

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

		\add_action(
			'helsinki_wp_content_filter_list_ordered_taxonomies',
			array( $settings, 'content_filter_list_taxonomy_order' ),
			10, 2
		);

		/*
		 * Template
		 */
		$template_locator = create_cpt_template_locator( $data );

		\add_action(
			'template_redirect',
			array( $template_locator, 'locate_template' ),
			-1
		);

		\add_action(
			'template_include',
			array( $template_locator, 'include_template' ),
			10
		);

		/*
		 * Helsinkiteema
		 */
		\add_action(
			'helsinki_setup_cpt_template',
			function() use ( $cpt_terms ) {
				$template = create_cpt_template( $cpt_terms );

				\add_action(
					'helsinki_content_article',
					array( $template, 'post_terms' ),
					35
				);

			}
		);

		/*
		 * REST
		 */
		$controller = create_filter_search_controller( $data, $cpt_terms );

		\add_action(
			'rest_api_init',
			array( $controller, 'register_rest_routes' )
		);

		\add_action(
			'wp_enqueue_scripts',
			array( $controller, 'register_assets' ),
		);
	}

}, 100 );

function create_cpt_data(): CPT_Data {
	return new CPT_Data();
}

function create_cpt_taxonomy_order( CPT_Data $cpt_data ): CPT_Taxonomy_Order {
	return new CPT_Taxonomy_Order( $cpt_data );
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

function create_cpt_template_locator( CPT_Data $cpt_data ): CPT_Template_Locator {
	return new CPT_Template_Locator( $cpt_data );
}

function create_cpt_terms( CPT_Taxonomy_Order $cpt_tax_order ): CPT_Terms {
	return new CPT_Terms( $cpt_tax_order );
}

function create_cpt_template( CPT_Terms $cpt_terms ): CPT_Template {
	return new CPT_Template( $cpt_terms );
}

function create_filter_search_controller( CPT_Data $cpt_data, CPT_Terms $cpt_terms ): Filter_Search_Controller {
	return new Filter_Search_Controller( ...array(
		'cpt_data' => $cpt_data,
		'cpt_terms' => $cpt_terms,
		'plugin_url' => plugin_url(),
		'plugin_version' => plugin_version(),
		'base_rest_route' => 'helsinki',
	) );
}
