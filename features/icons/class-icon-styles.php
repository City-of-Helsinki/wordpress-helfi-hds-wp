<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Icons;

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
  * output buffer (WP 6.9+).
  *
  * Block editor, and pages when the hds_wp_load_all_icons filter returns
  * true, load the stylesheet containing all icons instead.
  */
final class Icon_Styles
{
	const HANDLE = 'hds-wp-icons';
	const LATE_HANDLE = 'hds-wp-icons-late';
	const ALL_ICONS_HANDLE = 'helsinki-wp-icons';

	private array $used = array();

	public function __construct(
		private Icon_Library $library,
		private string $all_icons_url,
		private string $version
	) {}

	public function enqueue_icon( mixed $name ): void
	{
		if ( ! $this->should_enqueue( $name ) ) {
			return;
		}

		$this->used[$name] = true;

		$handle = \wp_style_is( self::HANDLE, 'done' ) ? self::LATE_HANDLE : self::HANDLE;
		if ( ! \wp_style_is( $handle, 'registered' ) ) {
			\wp_register_style( $handle, false, array(), $this->version );
		}

		\wp_add_inline_style( $handle, $this->library->style( $name ) );
		\wp_enqueue_style( $handle );
	}

	public function enqueue_all_icons(): void
	{
		if ( ! \is_admin() && ! $this->load_all() ) {
			return;
		}

		// Respect the helsinki_wp_common_styles_enabled filter
		if ( ! \wp_style_is( 'helsinki-wp', 'enqueued' ) ) {
			return;
		}

		\wp_enqueue_style(
			self::ALL_ICONS_HANDLE,
			$this->all_icons_url,
			array( 'helsinki-wp' ),
			$this->version,
			'all'
		);
	}

	private function should_enqueue( mixed $name ): bool
	{
		if ( ! is_string( $name ) || isset( $this->used[$name] ) ) {
			return false;
		}

		if ( ! \did_action( 'init' ) || $this->load_all() ) {
			return false;
		}

		return $this->library->has( $name );
	}

	private function load_all(): bool
	{
		return (bool) \apply_filters( 'hds_wp_load_all_icons', false );
	}
}
