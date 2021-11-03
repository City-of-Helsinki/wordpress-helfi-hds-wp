<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

/**
  * Plugin Name: WordPress Helsinki
  * Description: Provides common Helsinki styles, assets and blocks, and itegrations to Helsinki APIs and various plugins.
  * Version: 1.4.0
  * License: MIT
  * Requires at least: 5.7
  * Requires PHP:      7.1
  * Author: ArtCloud
  * Author URI: https://www.artcloud.fi
  * Text Domain: hds-wp
  * Domain Path: /languages
  */

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

define( __NAMESPACE__ . '\\PLUGIN_VERSION', '1.4.0' );
define( __NAMESPACE__ . '\\PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( __NAMESPACE__ . '\\PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( __NAMESPACE__ . '\\PLUGIN_BASENAME', plugin_basename( __FILE__ ) );

function plugin_path() {
	return untrailingslashit( PLUGIN_PATH ) . DIRECTORY_SEPARATOR;
}

function views_path( string $dir = '' ) {
	$path = plugin_path() . 'views' . DIRECTORY_SEPARATOR;
	if ( $dir ) {
		$path .= $dir . DIRECTORY_SEPARATOR;
	}
	return $path;
}

function config_path() {
	return plugin_path() . 'config' . DIRECTORY_SEPARATOR;
}

function plugin_url() {
	return untrailingslashit( PLUGIN_URL ) . '/';
}

function path_to_file( string $name ) {
	return plugin_path() . trim( $name ) . '.php';
}

function autoloader( $class ) {
	if ( false === stripos( $class, __NAMESPACE__ ) ) {
		return;
	}

	$class = str_replace( __NAMESPACE__, '', $class );
	$file = str_replace( '\\', DIRECTORY_SEPARATOR, path_to_file( 'class' . $class ) );
	if ( file_exists( $file ) ) {
		require_once $file;
	}
}
spl_autoload_register( __NAMESPACE__ . '\\autoloader' );

add_action( 'after_setup_theme', __NAMESPACE__ . '\\init', 11 );
function init() {

	/**
	  * Compatibility
		*/
	$compatibility = new Compatibility(
		new BaseConfig( hds_wp_theme_support() )
	);
	$compatibility->init();

	if ( ! $compatibility->plugin() ) {
		return;
	}

	/**
		* Config
		*/
	$configLoader = new ConfigLoader( config_path() );

	/**
	  * Integrations
		*/
	$integrations = new Integrations(
		new BaseConfig(array_merge(
			array(
				'path' => plugin_path() . 'integrations' . DIRECTORY_SEPARATOR,
				'config' => plugin_path() . 'config' . DIRECTORY_SEPARATOR,
			),
			$configLoader->load(
				'integrations',
				array('types')
			)
		))
	);
	$integrations->init();

	/**
	  * Settings
		*/
	// TODO: pass settings to other modules, if settings are used
	$settings = new Settings(
		new BaseConfig(array_merge(
			array(
				'is_admin' => is_admin(),
				'path' => views_path( 'settings' ),
				'compatibility' => $compatibility,
				'integrations' => $integrations,
			),
			$configLoader->load(
				'settings',
				array(
					'tabs',
					'links'
				)
			)
		))
	);
	$settings->init();

	/**
	  * Assets
		*/
	$assets = new Assets(
		new BaseConfig(array(
			'is_admin' => is_admin(),
			'path' => plugin_path() . 'assets',
			'url' => plugin_url() . 'assets',
			'version' => PLUGIN_VERSION,
			'debug' => defined('WP_DEBUG') && WP_DEBUG,
			'enabled' => $compatibility->assets(),
			'scripts' => $compatibility->scripts(),
			'fonts' => $compatibility->fonts(),
			'styles' => $compatibility->styles(),
			'favicon' => $compatibility->favicon(),
		))
	);
	$assets->init();

	/**
	  * Topbar
		*/
	// if ( $compatibility->topbar() ) {
	// 	$topbar = new Topbar(
	// 		new BaseConfig(array(
	// 			'path' => views_path( 'topbar' ),
	// 		))
	// 	);
	// 	$topbar->init();
	// }

	/**
	  * Widgets
		*/
	// if ( $compatibility->widgets() ) {
	// 	$widgets = new Widgets(
	// 		new BaseConfig(array_merge(
	// 			array(
	// 				'path' => plugin_path() . 'widgets' . DIRECTORY_SEPARATOR,
	// 			),
	// 			$configLoader->load(
	// 				'widgets',
	// 				array('widgets')
	// 			)
	// 		))
	// 	);
	// 	$widgets->init();
	// }

	/**
	  * Blocks
		*/
	if ( $compatibility->blocks() ) {
		$configLoader->include(
			'blocks',
			array(
				'callbacks',
				'filters'
			)
		);

		$blocks = new Blocks(
			new BaseConfig(
				$configLoader->load(
					'blocks',
					array(
						'blocks',
					)
				)
			)
		);
		$blocks->init();
	}

	/**
	  * Custom Post Types
		*/
	// if ( $compatibility->cpt() ) {
	// 	$cpt = new Cpt(
	// 		new BaseConfig(
	// 			$configLoader->load(
	// 				'cpt',
	// 				array(
	// 					'post-types',
	// 					'taxonomies',
	// 				)
	// 			)
	// 		)
	// 	);
	// 	$cpt->init();
	// }

	Container::instance();
	Container::add(
		'svg',
		new Svg(
			new BaseConfig(
				$configLoader->load(
					'svg',
					array(
						'actions-settings',
						'arros-operators',
						'forms-data',
						'koros',
						'logos',
						'media-devices',
						'navigation',
						'notifications-expressions',
						'other',
						'placeholder',
						'social-media'
					)
				)
			)
		)
	);
}

add_action( 'init', __NAMESPACE__ . '\\textdomain' );
function textdomain() {
	load_plugin_textdomain(
		'hds-wp',
		false,
		dirname( plugin_basename( __FILE__ ) ) . '/languages'
	);
}

function hds_wp_theme_support() {
	$data = get_theme_support( 'hds-wp' );
	return ! empty( $data[0] ) && is_array( $data[0] ) ? $data[0] : array();
}

function hdsWP( string $module = '' ) {
	return $module ? Container::module( $module ) : Container::instance();
}
