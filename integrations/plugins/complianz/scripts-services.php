<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\Complianz;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

\add_filter( 'cmplz_known_script_tags', function( array $tags ): array {
	foreach ( Known_Scripts::cases() as $known_script ) {
		$tags[] = $known_script->script_tag();
	}

	return $tags;
} );

\add_filter( 'cmplz_detected_services', function( $services ): array {
	foreach ( Known_Scripts::cases() as $known_script ) {
		if ( ! in_array( $known_script->value, $services ) ) {
			$services[] = $known_script->value;
		}
	}

	return $services;
} );
