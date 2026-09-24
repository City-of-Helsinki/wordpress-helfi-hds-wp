<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_Error;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;
use WP_Http;
use Exception;

final class Taxonomy_Order_Settings
{
	const string MENU_PAGE_SLUG = 'helsinki-custom-taxonomy-order';
	const string REST_ROUTE = 'helsinki-custom-taxonomy-order';

	private array $rest_routes;

	public function __construct(
		private CPT_Taxonomy_Order $cpt_tax_order,
		private bool $is_debug,
		private string $plugin_version,
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
				\plugin_dir_url( __FILE__ ) . 'assets/settings.js',
				array(
					'wp-element',
					'wp-components',
					'wp-api-fetch',
				),
				$this->plugin_version,
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
			'settingName' => $this->cpt_tax_order->setting_name(),
			'appRoot' => $this->cpt_tax_order->setting_name(),
			'rest' => array(
				'routes' => array(),
				'nonce' => \wp_create_nonce( 'wp_rest' ),
			),
		);

		foreach ( $this->rest_routes as $key => $route ) {
			$data['rest']['routes'][$key] = $route['namespace'] . $route['name'];
		}

		return $data;
	}

	private function inline_translations(): array
	{
		return array(
			'ui' => array(
				'loading' => __( 'Loading...', 'hds-wp' ),
				'save' => __( 'Save', 'hds-wp' ),
			),
			'postTypes' => array(
				'none' => __( 'No registered custom post types.', 'hds-wp' ),
			),
			'taxonomies' => array(
				'title' => __( 'Taxonomy', 'hds-wp' ),
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
			$this->cpt_tax_order->setting_name()
		);
	}

	public function register_settings(): void
	{
		\register_setting(
			self::MENU_PAGE_SLUG,
			$this->cpt_tax_order->setting_name(),
			array(
				'type' => 'array',
				'label' => __( 'Taxonomy order', 'hds-wp' ),
				'default' => $this->cpt_tax_order->default_value(),
			)
		);
	}

	private function setup_rest_routes( string $base_rest_route ): void
	{
		$base_rest_route = sprintf(
			'%s/%s/v1',
			$base_rest_route,
			self::REST_ROUTE
		);

		$this->rest_routes = array(
			'getSettings' => array(
				'namespace' => $base_rest_route,
				'name' => '/settings',
				'args' => array(
					'methods'  => WP_REST_Server::READABLE,
					'callback' => array( $this, 'rest_get_settings' ),
					'permission_callback' => array( $this, 'rest_check_permission' )
				),
			),
			'updateSettings' => array(
				'namespace' => $base_rest_route,
				'name' => '/settings',
				'args' => array(
					'methods'  => WP_REST_Server::CREATABLE,
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

	public function rest_get_settings( WP_REST_Request $request ): WP_REST_Response|WP_Error
	{
		return \rest_ensure_response( array(
			'postTypes' => $this->cpt_tax_order->supported_post_types(),
			'taxonomies' => $this->cpt_tax_order->supported_taxonomies(),
			'taxonomyOrder' => $this->cpt_tax_order->for_all_post_types(),
		) );
	}

	public function rest_post_settings( WP_REST_Request $request ): WP_REST_Response|WP_Error
	{
		try {
			$this->cpt_tax_order->save( $request->get_params() );

			return rest_ensure_response( array(
				'message' => __( 'Taxonomy orders saved.', 'hds-wp' ),
			) );

		} catch ( Exception $exception ) {
			if ( $this->is_debug ) {
				error_log( $exception->getMessage() );
			}

			return \rest_ensure_response(
				new WP_Error(
					'update_failed',
					$exception->getMessage(),
					array( 'status' => $exception->getCode() ?: WP_Http::BAD_REQUEST )
				)
			);
		}
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
