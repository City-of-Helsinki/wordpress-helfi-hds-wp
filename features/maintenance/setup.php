<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance\Settings\Maintenance_Mode_Enabled;
use ArtCloud\Helsinki\Plugin\HDS\Compatibility;
use function ArtCloud\Helsinki\Plugin\HDS\plugin_url;

\add_action( 'helsinki_wp_setup', function( Compatibility $compatibility ) {
	$setting = create_maintenance_mode_setting();

	\add_action( 'admin_init', array( $setting, 'register' ) );
	\add_action( 'admin_head', array( $setting, 'admin_style' ) );
	\add_action( 'wp_head', array( $setting, 'admin_style' ) );
	\add_action( 'admin_notices', array( $setting, 'admin_notice' ) );
	\add_action( 'admin_bar_menu', array( $setting, 'admin_bar_item' ), 10000 );

	\add_filter( 'helsinki_maintenance_enabled', array( $setting, 'value' ), 5 );

	\add_action(
		'template_include',
		__NAMESPACE__ . '\\provide_maintenance_template',
		999999
	);

	\add_action(
		'update_option_' . $setting->name(),
		function() {
			\do_action( 'helsinki_site_core_cache_clear' );
		}
	);
} );

function provide_maintenance_template( mixed $template ): mixed {
	if ( ! is_maintenance_active() ) {
		return $template;
	}

	if ( should_return_false() ) {
		return false;
	}

	\add_action(
		'wp_before_include_template',
		__NAMESPACE__ . '\\setup_maintenance_template'
	);

	return maintenance_template_path();
}

function setup_maintenance_template( string $template ): void {
	if ( maintenance_template_path() === $template ) {
		\add_action( 'helsinki_maintenance_assets', __NAMESPACE__ . '\\enqueue_styles' );

		\add_action( 'helsinki_maintenance', __NAMESPACE__ . '\\send_maintenance_headers' );

		\add_action( 'helsinki_maintenance_head', __NAMESPACE__ . '\\enqueue_assets', 1 );

		\add_action( 'helsinki_maintenance_header', __NAMESPACE__ . '\\render_inline_wrap_open', 5 );
		\add_action( 'helsinki_maintenance_header', __NAMESPACE__ . '\\render_site_logo', 10 );
		\add_action( 'helsinki_maintenance_header', __NAMESPACE__ . '\\render_site_title', 20 );
		\add_action( 'helsinki_maintenance_header', __NAMESPACE__ . '\\render_inline_wrap_close', 25 );

		\add_action( 'helsinki_maintenance_main', __NAMESPACE__ . '\\render_site_content', 10 );

		\add_action( 'helsinki_maintenance_footer_top', __NAMESPACE__ . '\\render_koros_decoration' );
		\add_action( 'helsinki_maintenance_footer', __NAMESPACE__ . '\\render_inline_wrap_open', 5 );
		\add_action( 'helsinki_maintenance_footer', __NAMESPACE__ . '\\render_site_logo', 10 );
		\add_action( 'helsinki_maintenance_footer', __NAMESPACE__ . '\\render_site_copyright', 20 );
		\add_action( 'helsinki_maintenance_footer', __NAMESPACE__ . '\\render_inline_wrap_close', 25 );

		/**
		  * Mimic wp_head, wp_footer and wp_enqueue_scripts
		  */
		\add_action( 'helsinki_maintenance_head', 'wp_resource_hints', 2 );
		\add_action( 'helsinki_maintenance_head', 'wp_preload_resources', 1 );
		\add_action( 'helsinki_maintenance_head', 'wp_robots', 1 );
		\add_action( 'helsinki_maintenance_head', 'locale_stylesheet' );
		\add_action( 'helsinki_maintenance_head', 'wp_print_styles', 8 );
		\add_action( 'helsinki_maintenance_head', 'wp_print_head_scripts', 9 );
		\add_action( 'helsinki_maintenance_head', 'wp_custom_css_cb', 101 );
		\add_action( 'helsinki_maintenance_head', 'wp_site_icon', 99 );

		\add_action( 'helsinki_maintenance_assets', 'wp_common_block_scripts_and_styles' );
		\add_action( 'helsinki_maintenance_assets', 'wp_enqueue_classic_theme_styles' );
		\add_action( 'helsinki_maintenance_assets', 'wp_enqueue_global_styles' );

		\add_action( 'helsinki_maintenance_head', 'wp_enqueue_img_auto_sizes_contain_css_fix', 0 );
		\add_action( 'helsinki_maintenance_head', 'wp_print_auto_sizes_contain_css_fix', 1 );
		\add_action( 'helsinki_maintenance_head', 'wp_maybe_inline_styles', 1 );
		\add_action( 'helsinki_maintenance_bottom', 'wp_maybe_inline_styles', 1 );

		\add_action( 'helsinki_maintenance_bottom', 'wp_print_speculation_rules' );
		\add_action( 'helsinki_maintenance_bottom', 'wp_print_footer_scripts', 20 );
		\add_action( 'helsinki_maintenance_bottom', 'wp_enqueue_global_styles' );
	}
}

function send_maintenance_headers( Maintenance_Page $page ): void {
	if ( ! headers_sent() ) {
		header( sprintf(
			'Content-Type: text/html; charset=%s',
			\esc_attr( $page->charset() )
		) );

		\status_header( $page->response_status() );

		\nocache_headers();

		header( 'Retry-After: 3600' );
	}
}

function enqueue_assets(): void {
	\do_action( 'helsinki_maintenance_assets' );
}

function enqueue_styles(): void {
	\wp_enqueue_style(
		'helsinki-maintenance',
		plugin_url() . 'assets/public/css/maintenance.min.css',
		array(),
		false,
		null
	);
}

function render_inline_wrap_open(): void {
	echo '<div class="inline-wrap">';
}

function render_inline_wrap_close(): void {
	echo '</div>';
}

function render_site_logo( Maintenance_Page $page ): void {
	$logo = \apply_filters(
		'hds_wp_svg_logo_html',
		'',
		( $page->site_language() === 'sv' ? 'sv' : 'default')
	);

	if ( $logo ) {
		printf(
			'<div class="logo">%s</div>',
			\wp_kses( $logo, array(
				'div' => array(
					'id' => true,
					'class' => true,
				),
				'span' => array(
					'id' => true,
					'class' => true,
				),
				'svg' => array(
					'class' => true,
					'aria-hidden' => true,
					'aria-labelledby' => true,
					'role' => true,
					'xmlns' => true,
					'width' => true,
					'height' => true,
					'viewbox' => true,
				),
				'path' => array(
					'd' => true,
					'fill' => true,
				),
			) )
		);
	}
}

function render_site_title( Maintenance_Page $page ): void {
	if ( $page->site_title() ) {
		printf(
			'<div class="site-title">
				<span>%s</span>
			</div>',
			\esc_attr( $page->site_name() )
		);
	}
}

function render_site_content( Maintenance_Page $page ): void {
	$first_column = array();

	if ( $page->page_title() ) {
		$first_column[] = sprintf(
			'<h1 class="wp-block-heading">%s</h1>',
			\esc_html( $page->page_title() )
		);
	}

	if ( $page->page_description() ) {
		$first_column[] = wp_kses_post( wpautop( $page->page_description() ) );
	}

	if ( $page->page_button_text() && $page->page_button_url() ) {
		$first_column[] = sprintf(
			'<div class="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
				<div class="wp-block-button">
					<a class="wp-block-button__link wp-element-button" href="%s">%s</a>
				</div>
			</div>',
			\esc_url( $page->page_button_url() ),
			\esc_html( $page->page_button_text() )
		);
	}

	$second_column = array();

	if ( $page->page_image_url() ) {
		$image = sprintf(
			'<img alt="" src="%1$s" width="%2$d" height="%3$d" fetchpriority="high" decoding="async">',
			\esc_url( $page->page_image_url() ),
			(int) $page->page_image_width(),
			(int) $page->page_image_height()
		);

		if ( $page->page_image_caption() ) {
			$image .= sprintf(
				'<figcaption class="wp-element-caption">%1$s</figcaption>',
				\esc_html( $page->page_image_caption() )
			);
		}

		$second_column[] = sprintf(
			'<figure class="wp-block-image decoration">%s</figure>',
			$image
		);
	}

	printf(
		'<div class="grid">
			<div class="grid__column">%s</div>
			<div class="grid__column">%s</div>
		</div>',
		implode( '', $first_column ),
		implode( '', $second_column )
	);
}

function render_site_copyright( Maintenance_Page $page ): void {
	if ( $page->credits_text() ) {
		printf(
			'<div class="copyright">%s</div>',
			\esc_html( $page->credits_text() )
		);
	}
}

function render_koros_decoration( Maintenance_Page $page ): void {
	echo '<div class="hds-koros">
		<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100%" height="42">
			<defs>
				<pattern id="koros" x="0" y="0" width="53" height="43" patternUnits="userSpaceOnUse">
					<path transform="scale(2.65)" d="M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z"></path>
				</pattern>
			</defs>
			<rect fill="url(#koros)" width="100%" height="42"></rect>
		</svg>
	</div>';
}

function create_maintenance_mode_setting(): Maintenance_Mode_Enabled {
	return new Maintenance_Mode_Enabled( 'reading', 'reading' );
}

function create_maintenance_page(): Maintenance_Page {
	$site = site_data();
	$logo = site_logo_data();

	$page = new Maintenance_Page( array(
		'response_status' => 503,
		'charset' => $site['charset'],
		'site_language' => $site['language'],
		'site_name' => $site['name'],
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
		'page_image_url' => plugin_url() . 'assets/img/maintenance.png',
		'page_image_height' => '1168',
		'page_image_width' => '823',
		'page_image_caption' => sprintf(
			'%s: %s',
			__( 'Image', 'hds-wp' ),
			'Lille Santanen'
		),
		'credits_text' => sprintf(
			'%s %s, %s',
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
	$name = \get_bloginfo( 'name' ) ?: '';

	$language = function_exists( 'pll_current_language' )
		? \pll_current_language( 'slug' )
		: substr( \get_locale(), 0, 2 );

	return array(
		'charset' => \get_bloginfo( 'charset' ) ?: '',
		'language' => $language,
		'title' => sprintf(
			'%s | %s',
			$name,
			__( 'City of Helsinki', 'hds-wp' )
		),
		'name' => $name,
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
	return \apply_filters( 'helsinki_maintenance_enabled', false )
		&& ! \is_user_logged_in();
}

function should_return_false(): bool {
	return ( defined('DOING_CRON') && DOING_CRON )
		|| ( defined('DOING_AJAX') && DOING_AJAX )
		|| ( defined('WP_CLI') && WP_CLI );
}

function maintenance_template_path(): string {
	return \plugin_dir_path( __FILE__ ) . 'template/maintenance.php';
}
