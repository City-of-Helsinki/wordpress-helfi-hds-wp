<?php
namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPRssAggregator;

/**
  * Add actions & filters
  */
add_action( 'wpra_loaded', __NAMESPACE__ . '\\load', 10, 2 );
function load( $container, $plugin ) {
	add_filter( 'wpra/twig/paths', __NAMESPACE__ . '\\theme_twig_paths', 11 );
}

/**
  * Filters
  */
function theme_twig_paths( $paths ) {
	$templates = DIRECTORY_SEPARATOR . 'wp-rss-aggregator' . DIRECTORY_SEPARATOR;
	return array_merge(
		array(
			get_stylesheet_directory() . $templates,
			get_template_directory() . $templates,
		),
		$paths
	);
}
