<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Generator;

final class Maintenance_Page_Meta
{
	private array $properties;

	public function __construct()
	{
		$this->properties = array();
	}

	public function add_property( string $property, string $content ): self
	{
		$content = \sanitize_text_field( $content );

		if ( $content ) {
			$this->properties[$property] = \sanitize_text_field( $content );
		}

		return $this;
	}

	public function properties(): Generator
	{
		foreach ( $this->properties as $property => $content ) {
			yield $property => $content;
		}
	}
}
