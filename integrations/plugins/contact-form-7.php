<?php

add_filter('wpcf7_form_elements', function($elements){
	return str_replace(
		array(
			//'<p><label>',
			//'</label></p>',
			//'class="wpcf7-form-control-wrap',
			'</select>',
			'<input type="file"'
		),
		array(
			//'<div class="hds-text-input"><label>',
			//'</label></div>',
			//'class="wpcf7-form-control-wrap hds-text-input__input-wrapper',
			'</select><span class="select-chevron">' . helsinki_get_svg_icon('angle-down') . '</span>',
			'<label class="hds-button hds-button--secondary form-file-input">' . helsinki_get_svg_icon('plus') . '<span>' . __('Add file', 'hds-wp') . '</span></label><input type="file"'
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
		case 'acceptance':
			break;

		default:
			$scanned_tag['options'][] = 'class:hds-text-input__input';
			break;
	}

	return $scanned_tag;
}, 11, 2);
