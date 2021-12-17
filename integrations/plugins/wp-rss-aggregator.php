<?php
namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPRssAggregator;

use Twig\TwigFunction;

/**
  * Add actions & filters
  */
add_action( 'wpra_loaded', __NAMESPACE__ . '\\load', 10, 2 );
function load( $container, $plugin ) {
	add_filter( 'wpra/twig', __NAMESPACE__ . '\\twig_functions', 11 );
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

function twig_functions( $environment ) {

	$environment->addFunction(
		'helsinki_wp_do_action',
		helsinki_twig_do_action()
	);

	return $environment;
}

/**
  * Twig
  */
function helsinki_twig_do_action() {
	return new TwigFunction(
		'helsinki_wp_do_action',
		function ( $name, ...$args ) {
			do_action( $name, $args );
		}
	);
}
