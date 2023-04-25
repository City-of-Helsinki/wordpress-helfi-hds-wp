<?php

/**
  * Update options
  */
add_action( 'init', 'helsinki_wpseo_maybe_update_options' );
function helsinki_wpseo_maybe_update_options() {
	if ( ! class_exists('WPSEO_Options') ) {
		return;
	}
	if ( helsinki_wpseo_options_updated() ) {
		return;
	}
	helsinki_wpseo_update_title_options();
	helsinki_wpseo_set_options_updated();
}

function helsinki_wpseo_options_updated() {
	return get_option( 'helsinki_wpseo_options_updated', false );
}

function helsinki_wpseo_set_options_updated() {
	return update_option(
		'helsinki_wpseo_options_updated',
		\ArtCloud\Helsinki\Plugin\HDS\PLUGIN_VERSION,
		true
	);
}

function helsinki_wpseo_update_title_options() {
	$options = WPSEO_Options::get_option('wpseo_titles');
	if ( ! $options ) {
		return;
	}

	foreach ( $options as $key => $value) {
		if ( ! is_string( $value ) || ! helsinki_wpseo_is_title_meta( $key ) ) {
			continue;
		}

		if ( false !== strpos( $value, '%%helsinki%%' ) ) {
			continue;
		}

		WPSEO_Options::save_option(
			'wpseo_titles',
			$key,
			helsinki_wpseo_append_helsinki_variable( $value )
		);
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

	foreach ( $defaults as $key => $value ) {
		if ( ! is_string( $value ) || ! helsinki_wpseo_is_title_meta( $key ) ) {
			continue;
		}
		$defaults[$key] = helsinki_wpseo_append_helsinki_variable( $value );
	}

	return $defaults;
}

function helsinki_wpseo_is_title_meta( string $key ) {
	return false !== strpos( $key, 'title-' );
}

function helsinki_wpseo_append_helsinki_variable( string $default ) {
	return $default . ' %%sep%% %%helsinki%%';
}

function helsinki_wpseo_title_separator() {
	return 'sc-pipe';
}

/**
  * Custom variables
  */

// config
function helsinki_wpseo_custom_variables() {
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
function helsinki_wpseo_city_name() {
	return __( 'City of Helsinki', 'hds-wp' );
}

// register
add_action( 'wpseo_register_extra_replacements', 'helsinki_wpseo_register_custom_variables' );
function helsinki_wpseo_register_custom_variables() {
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

		if ( has_post_thumbnail() ) {
			$image_container->add_image_by_id( get_post_thumbnail_id() );
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
