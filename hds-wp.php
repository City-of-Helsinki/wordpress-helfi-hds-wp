<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

/**
  * Plugin Name: WordPress Helsinki
  * Description: Provides common Helsinki styles, assets and blocks, and integrations to Helsinki APIs and various plugins.
  * Version: 1.37.0
  * License: GPLv3
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

define_constants( __FILE__ );

function define_constants( string $file ): void {
    if ( ! function_exists('get_plugin_data') ) {
		require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	}

    $plugin_data = get_plugin_data( $file, false, false );

    define( __NAMESPACE__ . '\\PLUGIN_VERSION', $plugin_data['Version'] );
    define( __NAMESPACE__ . '\\PLUGIN_PATH', plugin_dir_path( $file ) );
    define( __NAMESPACE__ . '\\PLUGIN_URL', plugin_dir_url( $file ) );
    define( __NAMESPACE__ . '\\PLUGIN_BASENAME', plugin_basename( $file ) );
}

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

/**
  * Prepare plugin
  */
add_action( 'plugins_loaded', __NAMESPACE__ . '\\prepare', 11 );
function prepare() {
	ModuleFactory::instance(
		ConfigLoader::instance( config_path() )
	);

	Container::instance();
	Container::add(
		'integrations',
		ModuleFactory::module(
			'Integrations',
			array(
				'path' => plugin_path() . 'integrations' . DIRECTORY_SEPARATOR,
				'config' => plugin_path() . 'config' . DIRECTORY_SEPARATOR,
			),
			array()
		)
	);

	// Make sure actions and filters are applied, namely wp-rss-aggregator template paths
	// TODO: add functionality to turn off integrations, if some are not supported
	Container::module('integrations')->init();
}

/**
  * Add compatible modules
  */
add_action( 'after_setup_theme', __NAMESPACE__ . '\\init', 11 );
function init() {

	/**
	  * Compatibility
	  */
	$compatibility = ModuleFactory::module(
		'Compatibility',
		helsinki_wp_theme_support()
	);
	$compatibility->init();

	if ( ! $compatibility->plugin() ) {
		return;
	}

	/**
	  * Settings
	  */
	// TODO: pass settings to other modules, if settings are used
	$settings = ModuleFactory::module(
		'Settings',
		array(
			'is_admin' => is_admin(),
			'path' => views_path( 'settings' ),
			'compatibility' => $compatibility,
			'integrations' => Container::module('integrations'),
		)
	);
	$settings->init();

	/**
	  * Assets
	  */
	$assets = ModuleFactory::module(
		'Assets',
		array(
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
		)
	);
	$assets->init();

	/**
	  * HDS React
	  */
	$hds_react = ModuleFactory::module(
		'HDSReact',
		array(
			'url' => plugin_url() . 'assets',
			'version' => PLUGIN_VERSION,
			'debug' => defined('WP_DEBUG') && WP_DEBUG,
		)
	);
	$hds_react->init();

	/**
	  * Blocks
	  */
	if ( $compatibility->blocks() ) {
		$blocks = ModuleFactory::module(
			'Blocks',
			array(
				'path' => plugin_path() . 'config/blocks',
				'version' => PLUGIN_VERSION,
				'debug' => defined('WP_DEBUG') && WP_DEBUG,
			),
			array(
				'blocks',
				'disallowed-blocks'
			),
			array(
				'callbacks',
				'filters'
			)
		);
		$blocks->init();
	}

	/**
	  * SVG
	  */
	Svg::instance(
		ModuleFactory::moduleConfig(
			'Svg',
			array(),
			array(
				'actions-settings',
				'arrows-operators',
				'blocks',
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
	);
}

add_filter( 'helsinki_wp_current_language', __NAMESPACE__ . '\\provide_current_language', 5 );
function provide_current_language( string $language ): string {
	$locale = explode( '_', get_locale() );

	return $locale ? array_shift( $locale ) : $language;
}

add_action( 'init', __NAMESPACE__ . '\\textdomain' );
function textdomain() {
	load_plugin_textdomain(
		'hds-wp',
		false,
		dirname( plugin_basename( __FILE__ ) ) . '/languages'
	);
}

add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\admin_script_translations', 9999 );
function admin_script_translations() {
    wp_set_script_translations(
        'helsinki-wp-admin-scripts',
        'hds-wp',
        plugin_dir_path( __FILE__ ) . 'languages'
    );
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\public_script_translations', 9999 );
function public_script_translations() {
    wp_set_script_translations(
        'helsinki-wp-scripts',
        'hds-wp',
        plugin_dir_path( __FILE__ ) . 'languages'
    );
}

function helsinki_wp_theme_support() {
	$data = get_theme_support( 'hds-wp' );
	return ! empty( $data[0] ) && is_array( $data[0] ) ? $data[0] : array();
}

function helsinkiWP( string $module = '' ) {
	return $module ? Container::module( $module ) : Container::instance();
}
