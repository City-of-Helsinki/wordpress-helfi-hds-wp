<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Icons;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

final class Icons_Rest_Controller
{
	const REST_NAMESPACE = 'helsinki/icons/v1';

	public function __construct(
		private Icon_Library $library
	) {}

	function admin_scripts_dependencies( array $dependencies ): array
	{
		$dependencies[] = 'wp-api-fetch';

		return $dependencies;
	}

	public function register_routes(): void
	{
		\register_rest_route(
			self::REST_NAMESPACE,
			'/icons',
			array(
				'methods' => WP_REST_Server::READABLE,
				'callback' => array( $this, 'get_icons' ),
				'permission_callback' => fn() => \current_user_can( 'edit_posts' ),
			)
		);
	}

	/**
	  * Names of the icons selectable in the block editor.
	  */
	public function get_icons( WP_REST_Request $request ): WP_REST_Response
	{
		return \rest_ensure_response( $this->library->selectable() );
	}
}
