<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use function ArtCloud\Helsinki\Plugin\HDS\plugin_version;
use WP_Error;
use WP_REST_Response;
use WP_Http;

final class Taxonomy_Order_Settings
{
	const string MENU_PAGE_SLUG = 'helsinki-custom-taxonomy-order';
	const string TAX_ORDER_SETTING = 'helsinki-custom-taxonomy-order';
	const string REST_ROUTE = 'helsinki-custom-taxonomy-order';

	private array $rest_routes;

	public function __construct(
		private CPT_Data $cptui,
		private string $required_permission,
		string $base_rest_route
	) {
		$this->setup_rest_routes( $base_rest_route );
	}

	public function add_menu_page( string $parent_slug, string $capability ): void
	{
		\add_submenu_page(
			$parent_slug,
			\esc_html( __( 'Taxonomy order', 'hds-wp' ) ),
			\esc_html( __( 'Taxonomy order', 'hds-wp' ) ),
			$this->required_permission,
			self::MENU_PAGE_SLUG,
			array( $this, 'render_menu_page' )
		);
	}

	public function enqueue_menu_page_assets( string $hook ): void
	{
		if ( ('cpt-ui_page_' . self::MENU_PAGE_SLUG) === $hook ) {
			\wp_enqueue_style( 'wp-components' );

			\wp_enqueue_script(
				self::MENU_PAGE_SLUG,
				\plugin_dir_url( __FILE__ ) . 'assets/js/settings.js',
				array(
					'wp-element',
					'wp-components',
					'wp-api-fetch',
				),
				plugin_version(),
				array(
					'strategy' => 'defer',
					'in_footer' => true,
				)
			);

			\wp_add_inline_script(
				self::MENU_PAGE_SLUG,
				sprintf(
					'const HELSINKI_TAXONOMY_ORDER = %s;',
					json_encode( $this->inline_data() )
				),
				'before'
			);

			\wp_localize_script(
				self::MENU_PAGE_SLUG,
				'HELSINKI_TAXONOMY_ORDER_I18N',
				$this->inline_translations()
			);
		}
	}

	private function inline_data(): array
	{
		$data = array(
			'menuPageSlug' => self::MENU_PAGE_SLUG,
			'settingName' => self::TAX_ORDER_SETTING,
			'appRoot' => self::TAX_ORDER_SETTING,
			'rest' => array(
				'routes' => array(),
				'nonce' => \wp_create_nonce( 'wp_rest' ),
			),
		);

		foreach ( $this->rest_routes as $route ) {
			$key = $route['args']['methods'];
			$path = $route['namespace'] . $route['name'];

			$data['rest']['routes'][$key] = $path;
		}

		return $data;
	}

	private function inline_translations(): array
	{
		return array(
			'ui' => array(
				'loading' => __( 'Loading...', 'hds-wp' ),
			),
			'postTypes' => array(
				'none' => __( 'No registered custom post types.', 'hds-wp' ),
			),
			'taxonomies' => array(
				'none' => __( 'No registered custom taxonomies.', 'hds-wp' ),
			),
		);
	}

	public function render_menu_page(): void
	{
		printf(
			'<div class="wrap">
				<h1>%1$s</h1>
				<hr>
				<div id="%2$s"></div>
			</div>',
			\esc_html( __( 'Taxonomy order', 'hds-wp' ) ),
			self::TAX_ORDER_SETTING
		);
	}

	public function register_settings(): void
	{
		\register_setting(
			self::MENU_PAGE_SLUG,
			self::TAX_ORDER_SETTING,
			array(
				'type' => 'array',
				'label' => __( 'Taxonomy order', 'hds-wp' ),
				'sanitize_callback' => array( $this, 'sanitize_taxonomy_order' ),
				'show_in_rest' => true,
				'default' => array(),
			)
		);
	}

	public function sanitize_taxonomy_order( mixed $value ): mixed
	{
		if ( is_array( $value ) ) {
			return array_map( 'sanitize_text_field', $value );
		}

		return array();
	}

	private function setup_rest_routes( string $base_rest_route ): void
	{
		$base_rest_route = sprintf(
			'%s/%s/v1',
			$base_rest_route,
			self::REST_ROUTE
		);

		$this->rest_routes = array(
			array(
				'namespace' => $base_rest_route,
				'name' => '/settings',
				'args' => array(
					'methods'  => 'GET',
					'callback' => array( $this, 'rest_get_settings' ),
					'permission_callback' => array( $this, 'rest_check_permission' )
				),
			),
			array(
				'namespace' => $base_rest_route,
				'name' => '/settings',
				'args' => array(
					'methods'  => 'POST',
					'callback' => array( $this, 'rest_post_settings' ),
					'permission_callback' => array( $this, 'rest_check_permission' )
				),
			),
		);
	}

	public function register_settings_routes(): void
	{
		foreach ( $this->rest_routes as $route ) {
			\register_rest_route(
				$route['namespace'],
				$route['name'],
				$route['args'],
			);
		}
	}

	public function rest_get_settings(): WP_REST_Response|WP_Error
	{
		return \rest_ensure_response( array(
			'postTypes' => $this->cptui->post_types(),
			'taxonomies' => $this->cptui->taxonomies(),
			'settings' => array(),
		) );
	}

	public function rest_post_settings(): WP_REST_Response|WP_Error
	{
		return \rest_ensure_response( array() );
	}

	public function rest_check_permission(): bool|WP_Error
	{
		if ( ! current_user_can( $this->required_permission ) ) {
			return new WP_Error(
				'rest_forbidden',
				\esc_html( __( 'You are not allowed to access this resource.', 'hds-wp' ) ),
				array( 'status' => WP_Http::FORBIDDEN )
			);
		}

		return true;
	}
}
