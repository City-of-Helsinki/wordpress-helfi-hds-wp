<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class CPT_Data
{
	public function post_types(): array
	{
		return array_reduce(
			\cptui_get_post_type_slugs(),
			function( $out, $slug ) {
				$object = $this->get_post_type( $slug );

				if ( $object ) {
					$out[] = $object;
				}

				return $out;
			},
			array()
		);
	}

	private function get_post_type( string $slug ): ?array
	{
		$object = \cptui_get_cptui_post_type_object( $slug );

		if ( $object ) {
			return array(
				'slug' => $slug,
				'label' => $object['label'] ?? $slug,
				'taxonomies' => $object['taxonomies'] ?? array(),
			);
		}

		return null;
	}

	public function taxonomies(): array
	{
		return array_reduce(
			\cptui_get_taxonomy_slugs(),
			function( $out, $slug ) {
				$object = $this->get_taxonomy( $slug );

				if ( $object ) {
					$out[] = $object;
				}

				return $out;
			},
			array()
		);
	}

	private function get_taxonomy( string $slug ): ?array
	{
		$object = \cptui_get_cptui_taxonomy_object( $slug );

		if ( $object ) {
			return array(
				'slug' => $slug,
				'label' => $object['label'] ?? $slug,
				'object_types' => $object['object_types'] ?? array(),
			);
		}

		return null;
	}
}
