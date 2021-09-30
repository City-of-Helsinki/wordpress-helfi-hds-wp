<?php

add_filter('cmplz_document_html', 'helsinki_wp_complianz_document_html', 9999, 3);
function helsinki_wp_complianz_document_html( $html, $type, $post_id ) {
  if ( ! in_array($type, array('cookie-statement', 'privacy-statement')) ) {
    return $html;
  }
  
  $data = apply_filters( 'hds_wp_complianz_data', array() );
  $lang = helsinki_wp_complianz_document_language();
  
  return helsinki_wp_complianz_document_replace_placeholders(
    $data['documents'][$lang] ?? $data['documents']['fi'],
    helsinki_wp_complianz_document_placeholder_pairs()
  );
}

function helsinki_wp_complianz_document_placeholder_pairs() {
  return array(
    '{{used_cookies}}' => helsinki_wp_complianz_document_placeholder_html(array(
      'title' => _x('Used cookies', 'Complianz used cookies title', 'hds-wp'),
      'content' => cmplz_used_cookies(),
    )),
    '{{manage_consent}}' => helsinki_wp_complianz_document_placeholder_html(array(
      'title' => _x('Manage your preferences', 'Complianz manage cookie consent title', 'hds-wp'),
      'content' => do_shortcode('[cmplz-manage-consent]'),
    )),
  );
}

function helsinki_wp_complianz_document_placeholder_html( array $element ) {
  $parts = array();
  
  if ( ! empty($element['title']) ) {
    $parts[] = sprintf('<h2>%s</h2>', esc_html( $element['title'] ));
  }
  
  if ( ! empty($element['content']) ) {
    $parts[] = wp_kses_post($element['content']);
  }
  
  return implode('', $parts);
}

function helsinki_wp_complianz_document_replace_placeholders( string $html, array $pairs ) {
  return str_replace(
    array_keys($pairs),
    array_values($pairs),
    $html
  );
}

function helsinki_wp_complianz_document_language() {
  if ( function_exists('pll_current_language') ) {
    return pll_current_language('slug');
  }
  return substr( get_locale(), 0, 2 );
}