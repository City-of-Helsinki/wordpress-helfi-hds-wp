<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Icons;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ArtCloud\Helsinki\Plugin\HDS\Compatibility;
use function ArtCloud\Helsinki\Plugin\HDS\is_debug;
use function ArtCloud\Helsinki\Plugin\HDS\plugin_path;
use function ArtCloud\Helsinki\Plugin\HDS\plugin_url;
use function ArtCloud\Helsinki\Plugin\HDS\plugin_version;

\add_action( 'helsinki_wp_setup', function( Compatibility $compatibility ) {
	$library = create_icon_library();

	$controller = create_rest_controller( $library );

	\add_action(
		'rest_api_init',
		array( $controller, 'register_routes' )
	);

	\add_filter(
		'hds_wp_admin_scripts_dependencies',
		array( $controller, 'admin_scripts_dependencies' )
	);

	if ( ! ( $compatibility->assets() && $compatibility->styles() ) ) {
		return;
	}

	$styles = create_icon_styles( $library );

	\add_action(
		'enqueue_block_assets',
		array( $styles, 'enqueue_all_icons' ),
		11
	);

	if ( ! \is_admin() ) {
		\add_action(
			'hds_wp_use_icon',
			array( $styles, 'enqueue_icon' )
		);
	}
} );

function create_rest_controller( Icon_Library $library ): Icons_Rest_Controller {
	return new Icons_Rest_Controller( $library );
}

function create_icon_library(): Icon_Library {
	return new Icon_Library( __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR );
}

function create_icon_styles( Icon_Library $library ): Icon_Styles {
	$file = 'assets/common/css/hds-icons' . ( is_debug() ? '' : '.min' ) . '.css';

	return new Icon_Styles(
		$library,
		plugin_url() . $file,
		is_debug() ? (string) filemtime( plugin_path() . $file ) : plugin_version()
	);
}
