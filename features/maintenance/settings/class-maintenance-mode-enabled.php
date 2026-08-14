<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_Admin_Bar;

final class Maintenance_Mode_Enabled
{
	private const SETTING_ID = 'helsinki_wp_maintenance_mode_enabled';

	public function __construct(
		private string $menu_page,
		private string $section
	) {}

	public function title(): string
	{
		return __( 'Maintenance mode', 'hds-wp' );
	}

	public function value(): bool
	{
		return (bool) \get_option( self::SETTING_ID, false );
	}

	public function settings_page_url(): string
	{
		return \admin_url( sprintf( 'options-%s.php', $this->menu_page ) );
	}

	public function admin_notice(): void
	{
		if ( $this->value() ) {
			$message = array(
				sprintf(
					'<strong>%s</strong>:',
					_x( 'Maintenance mode enabled', 'admin notice', 'hds-wp' ),
				),
				_x(
					'Only logged-in users can access the site content at the moment.',
					'admin notice',
					'hds-wp'
				),
				sprintf(
					'%1$s <a href="%3$s">%2$s</a>.',
					_x( 'You can disable maintenance mode from', 'admin notice', 'hds-wp' ),
					_x( 'the settings page', 'admin notice', 'hds-wp' ),
					\esc_url( $this->settings_page_url() )
				),
			);

			\wp_admin_notice(
				implode( ' ', $message ),
				array(
					'type' => 'warning',
					'dismissible' => false,
				)
			);
		}
	}

	public function admin_bar_item( WP_Admin_Bar $wp_admin_bar ): void
	{
		if ( $this->value() ) {
			$wp_admin_bar->add_node( array(
				'id' => self::SETTING_ID,
				'title' => _x( 'Maintenance mode enabled', 'admin notice', 'hds-wp' ),
				'href' => sprintf(
					'%s#%s',
					$this->settings_page_url(),
					self::SETTING_ID,
				),
				'meta' => array(
					'class' => 'maintenance-mode-toolbar-item',
				),
			) );
		}
	}

	public function admin_style(): void
	{
		if ( $this->value() ) {
			echo '<style>
				#wp-toolbar .maintenance-mode-toolbar-item .ab-item {
					background-color: #fff4b4 !important;
					color: #1a1a1a !important;
				}
				#wp-toolbar .maintenance-mode-toolbar-item .ab-item:focus,
				#wp-toolbar .maintenance-mode-toolbar-item .ab-item:hover {
					background-color: #c27900 !important;
					color: #1a1a1a !important;
				}
			</style>';
		}
	}

	public function register(): void
	{
		\add_settings_section(
			$this->section,
			$this->title(),
			array( $this, 'section_callback' ),
			$this->menu_page
		);

		\add_settings_field(
			self::SETTING_ID,
			$this->title(),
			array( $this, 'setting_callback' ),
			$this->menu_page,
			$this->section
		);

		\register_setting(
			$this->menu_page,
			self::SETTING_ID,
			array(
				'type' => 'boolean',
				'sanitize_callback' => array( $this, 'sanitize_callback' ),
				'default' => false,
			)
		);
	}

	public function section_callback(): void
	{
		$messages = array(
			__( 'Prevent visitors temporarily from accessing the website.', 'hds-wp' ),
			__( 'When maintenance mode is enabled the site visitors will see a notice that the website is currently unavailable.', 'hds-wp' ),
			__( 'Logged-in users can access the website as usual.', 'hds-wp' ),
		);

		$paragrapher = fn( $message ) => sprintf( '<p>%s</p>', \esc_html( $message ) );

		echo implode( '', array_map( $paragrapher, $messages ) );
	}

	public function setting_callback(): void
	{
		echo sprintf(
			'<fieldset>
				<legend class="screen-reader-text">
					<span>%3$s</span>
				</legend>
				<input id="%1$s" name="%1$s" type="checkbox" value="1" %2$s>
				<label for="%1$s">%4$s</label>
			</fieldset>',
			\esc_attr( self::SETTING_ID ),
			\checked( true, $this->value(), false ),
			\esc_html( $this->title() ),
			\esc_html( __( 'Enable maintenance mode', 'hds-wp' ) )
		);
	}

	public function sanitize_callback( mixed $value ): bool
	{
		return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
	}
}
