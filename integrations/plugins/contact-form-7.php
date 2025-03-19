<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'wpcf7_init', 'helsinki_wp_replace_cf7_date_with_hds_date', 11, 0 );
function helsinki_wp_replace_cf7_date_with_hds_date() {
	wpcf7_remove_form_tag( 'date*' );
	wpcf7_remove_form_tag( 'date' );

	wpcf7_add_form_tag(
		array( 'date', 'date*' ),
		'hds_react_date_form_tag_handler',
		array( 'name-attr' => true )
	);

	add_filter( 'wpcf7_validate_date', 'helsinki_wp_validate_cf7_field_date', 20, 2 );
	add_filter( 'wpcf7_validate_date*', 'helsinki_wp_validate_cf7_field_date', 20, 2 );
	add_filter( 'wpcf7_swv_available_rules', 'helsinki_wp_disable_cf7_default_date_rule' );
	add_filter( 'wpcf7_is_date', 'helsinki_wp_cf7_date_format_validation', 10, 2 );
}

function helsinki_wp_cf7_date_format_validation( $result, $text ) {
	$result = preg_match(
  	  '/^([0-9]{1,2})\.([0-9]{1,2})\.([0-9]{4})$/',
  	  $text,
  	  $matches
    );

    if ( $result ) {
  	  $result = checkdate( $matches[2], $matches[1], $matches[3] );
    }

    return $result;
}

function helsinki_wp_disable_cf7_default_date_rule( array $rules ): array {
	if ( isset( $rules['date'] ) ) {
		unset( $rules['date'] );
	}

	return $rules;
}

function helsinki_wp_validate_cf7_field_date( $result, $tag ) {
	try {
		helsinki_wp_validate_cf7_date( $tag );
	} catch (\Exception $e) {
		$result->invalidate( $tag, $e->getMessage() );
	}

	return $result;
}

function helsinki_wp_validate_cf7_date( $tag ): void {
	$date = helsinki_wp_cf7_string_to_datetime( $_POST[$tag->name] ?? '' );

	if ( $tag->is_required() && empty( $date ) ) {
		throw new \Exception( wpcf7_get_message( 'invalid_required' ) );
	}

	$min_date = helsinki_wp_cf7_string_to_datetime( $tag->get_date_option( 'min' ) );
	if ( $min_date && $date < $min_date ) {
		throw new \Exception( wpcf7_get_message( 'date_too_early' ) );
	}

	$max_date = helsinki_wp_cf7_string_to_datetime( $tag->get_date_option( 'max' ) );
	if ( $max_date && $date > $max_date ) {
		throw new \Exception( wpcf7_get_message( 'date_too_late' ) );
	}
}

function helsinki_wp_cf7_string_to_datetime( string $date ): ?DateTime {
	if ( ! $date ) {
		return null;
	}

	$date = date_create( $date ) ?: null;
	if ( ! $date ) {
		throw new \Exception( _x( 'Please enter a date in D.M.YYYY format.', 'CF7 date validation error', 'hds-wp' ) );
	}

	return $date;
}

function hds_react_date_form_tag_handler( $tag ) {
	if ( empty( $tag->name ) ) {
		return '';
	}

	do_action( 'helsinki_wp_enqueue_hds_react' );

	$atts = helsinki_wp_map_cf7_date_input_config($tag);

    return sprintf(
        '<span class="wpcf7-form-control-wrap" data-hds-react="DateInput" data-hds-component="%1$s"></span>',
        htmlspecialchars(json_encode($atts), ENT_QUOTES, 'UTF-8')
    );
}

function helsinki_wp_map_cf7_date_input_config( $tag ): array {
	$helper_text = apply_filters(
		'helsinki_wp_hds_react_dateinput_text',
		_x( 'Use format D.M.YYYY', 'HDS React DateInput helper text', 'hds-wp' )
	);

	$label_text = apply_filters(
		'helsinki_wp_hds_react_dateinput_helper_text',
		_x( 'Choose a date', 'HDS React DateInput label', 'hds-wp' )
	);

	return array(
		'config' => array(
	        'value' => helsinki_wp_format_cf7_date_input_value( $tag ),
			'handler' => 'contactForm7',
	    ),
		'events' => array(
			'formInvalid' => 'wpcf7invalid',
			'formSpam' => 'wpcf7spam',
			'formSent' => 'wpcf7mailsent',
			'formFailed' => 'wpcf7mailfailed',
			'formSubmit' => 'wpcf7submit',
		),
	    'input' => array(
	        // Input
	        'autocomplete' => $tag->get_option( 'autocomplete', '[-0-9a-zA-Z]+', true ),
	        'className' => 'hds-react-component hds-react-component__date-input',
	        'id' => esc_attr( $tag->get_id_option() ),
	        'name' => esc_attr( $tag->name ),
	        'readonly' => $tag->has_option( 'readonly' ),
	        'required' => $tag->is_required(),
	        'tabindex' => $tag->get_option( 'tabindex', 'signed_int', true ),

	        // Date input
	        'helperText' => esc_attr( $helper_text ),
	        'errorText' => '',
	        'successText' => '',
	        'infoText' => '',
	        'initialMonth' => '',
	        'label' => esc_attr( $label_text ),
	        'language' => esc_attr( apply_filters( 'helsinki_wp_current_language', 'en' ) ),
	        'minDate' => $tag->get_date_option( 'min' ),
	        'maxDate' => $tag->get_date_option( 'max' ),
	        'initialMonth' => '',
	        'disableDatePicker' => false,
	        'disableConfirmation' => false,
	    ),
	);
}

function helsinki_wp_format_cf7_date_input_value( $tag ): string {
    $value = (string) reset( $tag->values );

    $value = $tag->get_default_option( $value );

	if ( $value ) {
		$datetime_obj = date_create_immutable(
			preg_replace( '/[_]+/', ' ', $value ),
			wp_timezone()
		);

		if ( $datetime_obj ) {
			$value = $datetime_obj->format( 'j.n.Y' );
		}
	}

	return wpcf7_get_hangover( $tag->name, $value );
}

add_filter('wpcf7_form_elements', function($elements){
	$elements = str_replace(
		array(
			'class="wpcf7-form-control-wrap',
			'</select>',
		),
		array(
			'class="wpcf7-form-control-wrap hds-text-input__input-wrapper',
			'</select><span class="select-chevron">' . helsinki_get_svg_icon('angle-down') . '</span>',
		),
		$elements
	);

	$elements = preg_replace(
		'/<input([^>]+)type="file"([^>]+)>/',
		'<label class="hds-button hds-button--secondary form-file-input" tabindex="0">' . helsinki_get_svg_icon('plus') . '<span>' . __('Add file', 'hds-wp') . '</span></label><input$1type="file"$2>',
		$elements
	);

	return $elements;
});

add_filter("shortcode_atts_wpcf7", function($out, $pairs, $atts, $shortcode){
	if ( !$out['html_title'] ) {
		$out['html_title'] = $out['title'];
	}
	return $out;
}, 10, 4);

add_filter('wpcf7_form_tag', function($scanned_tag, $replace){
	if ( ! isset( $scanned_tag['basetype'] ) ) {
		return $scanned_tag;
	}

	if ( ! isset( $scanned_tag['options'] ) || ! is_array( $scanned_tag['options'] ) ) {
		$scanned_tag['options'] = array();
	}

	switch ( $scanned_tag['basetype'] ) {
		case 'submit':
			$scanned_tag['options'][] = 'class:hds-button';
			$scanned_tag['options'][] = 'class:button';
			break;

		case 'checkbox':
		case 'radio':
		case 'range':
		case 'file':
		case 'acceptance':
			break;

		default:
			$scanned_tag['options'][] = 'class:hds-text-input__input';
			break;
	}

	return $scanned_tag;
}, 11, 2);
