<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Exception;
use ReflectionClass;

final class Maintenance_Page
{
	private ReflectionClass $reflection;

	public function __construct(
		private array $data
	) {}

	public function charset(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function site_title(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function site_description(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function site_url(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function site_logo_url(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function site_logo_ext(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_title(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_heading(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_description(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_button_text(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_button_url(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_image_url(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_image_height(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_image_width(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function page_image_caption(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function credits_text(): string
	{
		return $this->get_value( __FUNCTION__, '' );
	}

	public function set_value( string $type, string $value ): self
	{
		if ( ! isset( $this->reflection ) ) {
			$this->reflection = new ReflectionClass( get_class( $this ) );
		}

		try {
			$method = $this->reflection->getMethod( $type );

			if ( $method->isPublic() ) {
				$this->data[$type] = \sanitize_text_field( $value );
			}
		} catch ( Exception $exception ) {}

		return $this;
	}

	private function get_value( string $type, string $default = '' ): string
	{
		return $this->data[$type] ?? $default;
	}
}
