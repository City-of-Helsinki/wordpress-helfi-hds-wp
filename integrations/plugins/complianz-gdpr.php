<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\ComplianzGDPR;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once \plugin_dir_path( __FILE__ ) . 'complianz/class-known-scripts.php';

use ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\Complianz\Known_Scripts;

\add_filter( 'cmplz_integrations', __NAMESPACE__ . '\\provide_cmplz_integration' );
\add_filter( 'cmplz_integration_path', __NAMESPACE__ . '\\provide_cmplz_integration_path', 10, 2 );
\add_filter( 'cmplz_option_blocked_content_text', __NAMESPACE__ . '\\provide_blocked_content_text', 10 );
\add_filter( 'cmplz_placeholder', __NAMESPACE__ . '\\provide_cmplz_placeholder', 10 );

function provide_cmplz_integration( array $integrations ): array {
	foreach ( Known_Scripts::cases() as $known_script ) {
		$integrations[$known_script->value] = array(
			'constant_or_function' => '\ArtCloud\Helsinki\Plugin\HDS\\complianz_integration',
			'label'                => $known_script->label(),
			'firstparty_marketing' => $known_script->firstparty_marketing(),
		);
	}

	return $integrations;
}

function provide_cmplz_integration_path( string $path, string $integration ): string {
	if ( Known_Scripts::tryFrom( $integration ) ) {
		return \plugin_dir_path( __FILE__ ) . 'complianz/scripts-services.php';
	}

	return $path;
}

function provide_blocked_content_text( string $text ): string {
	return __( 'Please accept "{category}" cookies to view this content', 'hds-wp' );
}

function provide_cmplz_placeholder( string $new_src ): string {
	return '';
}
