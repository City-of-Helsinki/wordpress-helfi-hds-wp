<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ArtCloud\Helsinki\Plugin\HDS\Compatibility;

\add_action( 'helsinki_wp_setup', function( Compatibility $compatibility ) {

	\add_action(
		'template_include',
		__NAMESPACE__ . '\\provide_maintenance_template',
		999999
	);

} );

function provide_maintenance_template( string $template ): string {
	if ( is_maintenance_active() ) {
		\add_action(
			'wp_before_include_template',
			__NAMESPACE__ . '\\setup_maintenance_template'
		);

		return maintenance_template_path();
	}

	return $template;
}

function setup_maintenance_template( string $template ): void {
	if ( maintenance_template_path() === $template ) {
		\add_action( 'helsinki_maintenance_head', 'wp_enqueue_scripts', 1 );
		\add_action( 'helsinki_maintenance_head', 'wp_resource_hints', 2 );
		\add_action( 'helsinki_maintenance_head', 'wp_preload_resources', 1 );
		\add_action( 'helsinki_maintenance_head', 'wp_robots', 1 );
		\add_action( 'helsinki_maintenance_head', 'locale_stylesheet' );
		\add_action( 'helsinki_maintenance_head', 'wp_print_styles', 7 );
		\add_action( 'helsinki_maintenance_head', 'wp_print_head_scripts', 8 );
		\add_action( 'helsinki_maintenance_head', 'wp_site_icon', 99 );

		\add_action( 'helsinki_maintenance_header', __NAMESPACE__ . '\\render_site_title' );
		\add_action( 'helsinki_maintenance_main', __NAMESPACE__ . '\\render_site_content', 10 );
	}
}

function render_site_title( Maintenance_Page $page ): void {
	printf(
		'<div class="site-title">%s</div>',
		sprintf(
			'<span>%s</span>',
			\esc_attr( $page->site_title() )
		)
	);
}

function render_site_content( Maintenance_Page $page ): void {
	$first_column = array();

	if ( $page->page_title() ) {
		$first_column[] = sprintf(
			'<h1>%s</h1>',
			\esc_html( $page->page_title() )
		);
	}

	if ( $page->page_description() ) {
		$first_column[] = wp_kses_post( wpautop( $page->page_description() ) );
	}

	if ( $page->page_button_text() && $page->page_button_url() ) {
		$first_column[] = sprintf(
			'<a class="button hds-button" href="%s">%s</a>',
			\esc_url( $page->page_button_url() ),
			\esc_html( $page->page_button_text() )
		);
	}

	$second_column = array();

	if ( $page->page_image_url() && $page->page_image_caption() ) {
		$second_column[] = sprintf(
			'<figure>
				<img class="decoration" alt="" src="%1$s" width="%3$d" height="%4$d">
				<figcaption class="wp-caption-text">%2$s</figcaption>
			</figure>',
			\esc_url( $page->page_image_url() ),
			\esc_html( $page->page_image_caption() ),
			(int) $page->page_image_width(),
			(int) $page->page_image_height()
		);
	}

	printf(
		'<div class="grid m-up-2">
			<div class="grid__column">%s</div>
			<div class="grid__column">%s</div>
		</div>',
		implode( '', $first_column ),
		implode( '', $second_column )
	);
}

function create_maintenance_page(): Maintenance_Page {
	$site = site_data();
	$logo = site_logo_data();

	$page = new Maintenance_Page( array(
		'charset' => $site['charset'],
		'site_title' => $site['title'],
		'site_description' => $site['description'],
		'site_url' => $site['url'],
		'site_logo_url' => $logo['url'],
		'site_logo_ext' => $logo['ext'],
		'page_heading' => _x(
			'The website is under construction',
			'maintenance page title',
			'hds-wp'
		),
		'page_title' => _x(
			'The website is under construction',
			'maintenance page title',
			'hds-wp'
		),
		'page_description' => _x(
			'We are building a new website and it will be available soon. Thank you for your patience!',
			'maintenance page description',
			'hds-wp'
		),
		'page_button_text' => _x(
			'Go to hel.fi',
			'maintenance page button text',
			'hds-wp'
		),
		'page_button_url' => 'https://www.hel.fi',
		'page_image_url' => \plugin_dir_url( __FILE__ ) . 'assets/maintenance.png',
		'page_image_height' => '1168',
		'page_image_width' => '823',
		'page_image_caption' => sprintf(
			'%s: %s',
			__( 'Image', 'hds-wp' ),
			'Lille Santanen'
		),
		'credits_text' => sprintf(
			'%s %s %s',
			'&copy;',
			$site['name'],
			date( 'Y' )
		),
	) );

	\do_action( 'helsinki_wp_maintenance_page', $page );

	return $page;
}

function create_maintenance_page_meta( Maintenance_Page $page ): Maintenance_Page_Meta {
	$meta = new Maintenance_Page_Meta();

	$meta->add_property( 'og:site_name', $page->site_title() )
		->add_property( 'og:title', $page->page_title() )
		->add_property( 'og:type', 'Maintenance' )
		->add_property( 'og:url', $page->site_url() )
		->add_property( 'og:description', $page->site_description() );

	if ( $page->site_logo_url() ) {
		$meta->add_property( 'og:image', $page->site_logo_url() )
			->add_property( 'og:image:url', $page->site_logo_url() )
			->add_property( 'og:image:secure_url', $page->site_logo_url() )
			->add_property( 'og:image:type', $page->site_logo_ext() );
	}

	\do_action( 'helsinki_wp_maintenance_page_meta', $meta );

	return $meta;
}

function site_data(): array {
	return array(
		'charset' => \get_bloginfo( 'charset' ) ?: '',
		'title' => \wp_title( display: false ) ?: '',
		'name' => \get_bloginfo( 'name' ) ?: '',
		'description' => \get_bloginfo( 'description' ) ?: '',
		'url' => \site_url() ?: '',
	);
}

function site_logo_data(): array {
	$logo_id = \get_theme_mod( 'custom_logo', 0 );
	$src = \wp_get_attachment_image_src( $logo_id, 'full', false );
	$logo = $src[0] ?? '';

	return array(
		'url' => $logo,
		'ext' => $logo ? pathinfo( $logo, PATHINFO_EXTENSION ) : '',
	);
}

function is_maintenance_active(): bool {
	return true;
}

function maintenance_template_path(): string {
	return \plugin_dir_path( __FILE__ ) . 'template/maintenance.php';
}
