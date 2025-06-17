<?php

namespace ArtCloud\Helsinki\Plugin\HDS;

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

class SvgProvider extends Module
{
	public function init()
	{
		\add_filter( 'hds_wp_svg_logo_html', array( $this, 'logo_html' ), 1, 2 );
		\add_filter( 'hds_wp_svg_koros_html', array( $this, 'koros_html' ), 1, 4 );
		\add_filter( 'hds_wp_svg_icon_html', array( $this, 'icon_html' ), 1, 3 );
		\add_filter( 'hds_wp_svg_placeholder_html', array( $this, 'placeholder_html' ), 1, 2 );
	}

	public function logo_html( string $html, string $name ): string
	{
		return Svg::logo( $name ) ?: $html;
	}

	public function koros_html( string $html, string $name, string $id, array $size = array() ): string
	{
		return Svg::koros( $name, $id, $size ) ?: $html;
	}

	public function icon_html( string $html, string $name, string $type ): string
	{
		return Svg::icon( $type, $name ) ?: $html;
	}

	public function placeholder_html( string $html, string $name ): string
	{
		return Svg::placeholder( $name ) ?: $html;
	}
}
