<?php

namespace ArtCloud\Helsinki\Plugin\HDS;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
  * Loads styles only for the HDS icons used on the current page.
  *
  * Icons are requested with the hds_wp_use_icon action. Styles of icons
  * requested before wp_head are printed in the head as usual. Styles of
  * icons requested while rendering the page body are printed late, and
  * WordPress hoists them into the head with the template enhancement
  * output buffer (WP 6.9+). Block editor loads all icons, see Assets.
  */
class Icons extends Module
{
	const HANDLE = 'hds-wp-icons';
	const LATE_HANDLE = 'hds-wp-icons-late';

	private ?array $icons = null;
	private array $used = array();

	public function init()
	{
		if ( ! $this->config->value( 'enabled' ) || $this->config->value( 'is_admin' ) ) {
			return;
		}

		\add_action( 'hds_wp_use_icon', array( $this, 'enqueue_icon' ) );
	}

	public function enqueue_icon( $name ): void
	{
		if ( ! $this->should_enqueue( $name ) ) {
			return;
		}

		$this->used[$name] = true;

		$handle = \wp_style_is( self::HANDLE, 'done' ) ? self::LATE_HANDLE : self::HANDLE;
		if ( ! \wp_style_is( $handle, 'registered' ) ) {
			\wp_register_style( $handle, false, array(), $this->config->value( 'version' ) );
		}

		\wp_add_inline_style( $handle, $this->icons[$name] );
		\wp_enqueue_style( $handle );
	}

	private function should_enqueue( $name ): bool
	{
		if ( ! is_string( $name ) || isset( $this->used[$name] ) ) {
			return false;
		}

		if ( ! \did_action( 'init' ) || $this->load_all() ) {
			return false;
		}

		$this->prime_icons();

		return isset( $this->icons[$name] );
	}

	private function load_all(): bool
	{
		return (bool) \apply_filters( 'hds_wp_load_all_icons', false );
	}

	private function prime_icons(): void
	{
		if ( null === $this->icons ) {
			$file = $this->config->value( 'path' );
			$icons = ( $file && is_readable( $file ) ) ? include $file : array();

			$this->icons = is_array( $icons ) ? $icons : array();
		}
	}
}
