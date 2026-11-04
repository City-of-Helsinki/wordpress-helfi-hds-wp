<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Icons;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
  * HDS icon data.
  *
  * data/hds-icons.php is generated from hds-core by the gulp icons task.
  * data/selectable.php lists the icons selectable in the block editor.
  */
final class Icon_Library
{
	private ?array $styles = null;
	private ?array $selectable = null;

	public function __construct(
		private string $data_path
	) {}

	public function has( string $name ): bool
	{
		return isset( $this->styles()[$name] );
	}

	public function style( string $name ): string
	{
		return $this->styles()[$name] ?? '';
	}

	/**
	  * @return string[] Names of the icons selectable in the block editor.
	  */
	public function selectable(): array
	{
		if ( null === $this->selectable ) {
			$names = \apply_filters( 'hds_wp_selectable_icons', $this->load( 'selectable' ) );

			$names = array_filter(
				is_array( $names ) ? $names : array(),
				fn( $name ) => is_string( $name ) && $this->has( $name )
			);

			$this->selectable = array_values( array_unique( $names ) );
		}

		return $this->selectable;
	}

	private function styles(): array
	{
		if ( null === $this->styles ) {
			$this->styles = $this->load( 'hds-icons' );
		}

		return $this->styles;
	}

	private function load( string $name ): array
	{
		$file = $this->data_path . $name . '.php';
		$data = is_readable( $file ) ? include $file : array();

		return is_array( $data ) ? $data : array();
	}
}
