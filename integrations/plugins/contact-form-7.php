<?php

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
