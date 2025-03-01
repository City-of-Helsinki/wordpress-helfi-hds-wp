<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'helsinki_wp_admin_inline_styles', 'helsinki_wp_use_theme_root_styles' );
function helsinki_wp_use_theme_root_styles( $styles ): string {
	$theme = apply_filters( 'helsinki_scheme_root_styles', '' );

	return $styles . $theme;
}
