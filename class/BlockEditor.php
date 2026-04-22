<?php

namespace ArtCloud\Helsinki\Plugin\HDS;

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

use WP_Theme_JSON_Data;

class BlockEditor extends Module
{
	private array $no_styles = array(
		'core/button' => true,
		'core/image' => true,
		'core/paragraph' => true,
		'core/quote' => true,
	);

	public function init()
	{
		\add_filter( 'wp_theme_json_data_theme', array( $this, 'theme_json' ) );

		\add_filter( 'register_block_type_args', array( $this, 'disable_block_alignment' ), 10, 2 );
		\add_filter( 'register_block_type_args', array( $this, 'disable_core_block_styles' ), 10, 2 );

		\add_filter( 'block_bindings_supported_attributes', '__return_empty_array' );
	}

	public function disable_block_alignment( array $args, string $block_type ): array
	{
		if ( isset( $args['supports']['align'] ) ) {
			$args['supports']['align'] = false;
		}

		return $args;
	}

	public function disable_core_block_styles( array $args, string $block_type ): array
	{
		if (
			isset( $this->no_styles[$block_type] )
			&& isset( $args['styles'] )
		) {
			$args['styles'] = array();
		}

		return $args;
	}

	public function theme_json( WP_Theme_JSON_Data $theme_json ): WP_Theme_JSON_Data
	{
		$new_data = array_reduce(
			$this->theme_json_modifiers(),
			function( $theme_json, $modifier ) {
				$this->$modifier( $theme_json );

				return $theme_json;
			},
			array(
				'version' => 3,
				'settings' => array(),
				'styles' => array(),
			)
		);

		return $theme_json->update_with( $new_data );
	}

	private function theme_json_modifiers(): array
	{
		return array(
			'settings_layout',
			'settings_shadow',
		);
	}

	private function settings_layout( array &$theme_json ): void
	{
		$theme_json['settings']['layout'] = array(
			'allowEditing' => false,
		);
	}

	private function settings_shadow( array &$theme_json ): void
	{
		$theme_json['settings']['shadow'] = array(
			'defaultPresets' => false,
		);
	}
}
