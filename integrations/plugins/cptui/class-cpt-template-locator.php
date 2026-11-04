<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class CPT_Template_Locator
{
	private string $template;

	public function __construct(
		private CPT_Data $cpt_data
	) {}

	public function switch_template( string $template ): void
	{
		$this->template = $template;
	}

	public function locate_template(): void
	{
		if ( $this->is_for_cpt() ) {
			\do_action( 'helsinki_wp_custom_post_type_template', $this );
		}
	}

	public function include_template( string $default_template ): string
	{
		return isset( $this->template ) ? $this->template : $default_template;
	}

	private function is_for_cpt(): bool
	{
		return \is_singular( $this->cpt_data->post_type_slugs() );
	}
}
