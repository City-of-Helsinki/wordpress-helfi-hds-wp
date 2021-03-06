<?php

add_filter('wpcf7_form_elements', function($elements){
	return str_replace(
		array(
			'<p><label>',
			'</label></p>',
			'class="wpcf7-form-control-wrap',
		),
		array(
			'<div class="hds-text-input"><label>',
			'</label></div>',
			'class="wpcf7-form-control-wrap hds-text-input__input-wrapper',
		),
		$elements
	);
});

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
			break;

		default:
			$scanned_tag['options'][] = 'class:hds-text-input__input';
			break;
	}

	return $scanned_tag;
}, 11, 2);
