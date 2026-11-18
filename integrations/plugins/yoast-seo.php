<?php

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

use function ArtCloud\Helsinki\Plugin\HDS\plugin_version;

/**
  * Update options
  */
add_action( 'init', 'helsinki_wpseo_maybe_update_options' );
function helsinki_wpseo_maybe_update_options(): void {
	$should_update = function( string $latest_version ) {
		$needs_update = $latest_version
			? version_compare( $latest_version, '3.5.3', '<' )
			: true;

		return class_exists( 'WPSEO_Options' )
			&& $needs_update;
	};

	if ( $should_update( helsinki_wpseo_options_updated() ) ) {
		helsinki_wpseo_update_title_options();
		helsinki_wpseo_set_options_updated();
	}
}

function helsinki_wpseo_options_updated(): string {
	return (string) get_option( 'helsinki_wpseo_options_updated', '' );
}

function helsinki_wpseo_set_options_updated(): bool {
	return update_option( 'helsinki_wpseo_options_updated', plugin_version(), true );
}

function helsinki_wpseo_update_title_options() {
	$options = WPSEO_Options::get_option( 'wpseo_titles' );
	if ( ! $options ) {
		return;
	}

	$invalid_bc_title = function( $key, $value ) {
		return is_string( $key )
			&& str_starts_with( $key, 'bctitle-' )
			&& ('%%sep%% %%helsinki%%' === $value);
	};

	$should_update = function( $key, $value ) {
		return is_string( $value )
			&& helsinki_wpseo_is_title_meta( $key )
			&& (false === strpos($value, '%%helsinki%%'));
	};

	foreach ( $options as $key => $value ) {
		if ( $should_update( $key, $value ) ) {
			WPSEO_Options::save_option(
				'wpseo_titles',
				$key,
				helsinki_wpseo_append_helsinki_variable( $value )
			);
		} else if ( $invalid_bc_title( $key, $value ) ) {
			WPSEO_Options::save_option( 'wpseo_titles', $key, '' );
		}
	}
}

/**
  * Defaults
  */
add_filter( 'wpseo_defaults', 'helsinki_wpseo_default_titles', 10, 2 );
function helsinki_wpseo_default_titles( $defaults, $option ) {
	if ( 'wpseo_titles' !== $option ) {
		return $defaults;
	}

	$defaults['separator'] = helsinki_wpseo_title_separator();
	$defaults['company_name'] = helsinki_wpseo_city_name();

	$is_title = function( $key, $value ) {
		return is_string( $value )
			&& helsinki_wpseo_is_title_meta( $key );
	};

	foreach ( $defaults as $key => $value ) {
		if ( $is_title( $key, $value ) ) {
			$defaults[$key] = helsinki_wpseo_append_helsinki_variable( $value );
		}
	}

	return $defaults;
}

function helsinki_wpseo_is_title_meta( string $key ): bool {
	return str_starts_with( $key, 'title-' )
		|| str_starts_with( $key, 'social-title-' );
}

function helsinki_wpseo_append_helsinki_variable( string $default ) {
	return $default . ' %%sep%% %%helsinki%%';
}

function helsinki_wpseo_title_separator(): string {
	return 'sc-pipe';
}

/**
  * Custom variables
  */

// config
function helsinki_wpseo_custom_variables(): array {
	return apply_filters(
		'helsinki_wpseo_custom_variables',
		array(
			'helsinki' => array(
				'callback' => 'helsinki_wpseo_city_name',
				'type' => 'advanced',
				'help' => '',
			),
		)
	);
}

// callbacks
function helsinki_wpseo_city_name(): string {
	return __( 'City of Helsinki', 'hds-wp' );
}

// register
add_action( 'wpseo_register_extra_replacements', 'helsinki_wpseo_register_custom_variables' );
function helsinki_wpseo_register_custom_variables(): void {
	foreach ( helsinki_wpseo_custom_variables() as $variable => $config ) {
		wpseo_register_var_replacement(
			'%%' . $variable . '%%',
			$config['callback'],
			$config['type'],
			$config['help']
		);
	}
}

/**
  * OpenGraph image output
  */

function helsinki_wpseo_add_opengraph_images( $image_container ) {
	if ( ! $image_container->has_images() ) {
		$og_default_id = WPSEO_Options::get_option('wpseo_social')['og_default_image_id'];
		$og_default_image = WPSEO_Options::get_option('wpseo_social')['og_default_image'];

		$id = null;
		if (is_front_page()) {
			$id = get_option('page_on_front');
		}

		if ( has_post_thumbnail( $id ) ) {
			$image_container->add_image_by_id( get_post_thumbnail_id( $id ) );
		}
		else if ( $og_default_id ) {
			$image_container->add_image_by_id( $og_default_id );
		}
		else if ( $og_default_image ) {
			$image_container->add_image_by_url( $og_default_image );
		}
		else {
			$image_container->add_image_by_url( \ArtCloud\Helsinki\Plugin\HDS\plugin_url() . 'assets/img/og-global.png' );
		}
	}
    return $image_container;
}
add_filter( 'wpseo_add_opengraph_images', 'helsinki_wpseo_add_opengraph_images' );
