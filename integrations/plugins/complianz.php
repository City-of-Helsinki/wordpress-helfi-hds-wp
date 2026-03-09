<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\ComplianzGDPR;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

\add_filter( 'cmplz_known_script_tags', __NAMESPACE__ . '\\provide_cmplz_powerbi_script' );
function provide_cmplz_powerbi_script( array $tags ): array {
	$tags[] = array(
		'name' => cmplz_integration_name(),
		'category' => 'preferences',
		'urls' => array( 'app.powerbi.com' ),
		'enable_placeholder' => '1',
		'placeholder' => 'default-minimal',
		'placeholder_class' => 'powerbi',
		'enable_dependency' => '0',
	);

	return $tags;
}

\add_filter( 'cmplz_detected_services', __NAMESPACE__ . '\\provide_cmplz_detected_powerbi' );
function provide_cmplz_detected_powerbi( $services ): array {
	if ( ! in_array( cmplz_integration_name(), $services ) ) {
		$services[] = cmplz_integration_name();
	}

	return $services;
}
