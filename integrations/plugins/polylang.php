<?php

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\Polylang;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'plugins_loaded', __NAMESPACE__ . '\\setup_integration', 100 );
function setup_integration(): void {
	if ( did_action( 'pll_init' ) ) {
		add_filter( 'helsinki_wp_current_language', __NAMESPACE__ . '\\provide_current_language' );
	}
}

function provide_current_language( string $language ): string {
	return pll_current_language( 'slug' ) ?: $language;
}
