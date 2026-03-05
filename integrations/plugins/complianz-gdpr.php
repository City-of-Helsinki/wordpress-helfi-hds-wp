<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\ComplianzGDPR;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

\add_filter( 'cmplz_integrations', __NAMESPACE__ . '\\provide_cmplz_integration' );
\add_filter( 'cmplz_integration_path', __NAMESPACE__ . '\\provide_cmplz_integration_path', 10, 2 );

function cmplz_integration_name(): string {
	return 'powerbi';
}

function provide_cmplz_integration( array $integrations ): array {
	$integrations[cmplz_integration_name()] = array(
		'constant_or_function' => '\ArtCloud\Helsinki\Plugin\HDS\\complianz_integration',
		'label'                => __( 'Power BI', 'helsinki-site-core' ),
		'firstparty_marketing' => false,
	);

	return $integrations;
}

function provide_cmplz_integration_path( string $path, string $integration ): string {
	if ( cmplz_integration_name() === $integration ) {
		return \plugin_dir_path( __FILE__ ) . 'complianz.php';
	}

	return $path;
}
