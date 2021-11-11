<?php

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
