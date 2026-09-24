<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Exception;

final class CPT_Taxonomy_Order
{
	const string SETTING_NAME = 'helsinki-custom-taxonomy-order';

	public function __construct(
		private CPT_Data $cpt_data
	) {}

	public function setting_name(): string
	{
		return self::SETTING_NAME;
	}

	public function default_value(): array
	{
		return array();
	}

	public function supported_post_types(): array
	{
		return $this->cpt_data->post_types();
	}

	public function supported_taxonomies(): array
	{
		return $this->cpt_data->taxonomies();
	}

	public function for_all_post_types(): array
	{
		$saved = \get_option( self::SETTING_NAME );

		$result = array();
		foreach ( $this->post_type_taxonomies() as $post_type => $taxonomies ) {
			$order = $saved[$post_type] ?? array();

			$result[$post_type] = array_values(
				array_unique(
					array_merge(
						array_intersect( $order, $taxonomies ),
						$taxonomies
					)
				)
			);
		}

		return $result;
	}

	public function for_post_type( string $post_type ): array
	{
		$taxonomies = $this->all_post_types()[$post_type] ?? null;

		return is_array( $taxonomies ) ? $taxonomies : $this->default_value();
	}

	public function save( array $data ): bool
	{
		$saved = \get_option( $this->setting_name() );
		if ( ! is_array( $saved ) ) {
			$saved = array();
		}

		foreach( $this->post_type_taxonomies() as $post_type => $taxonomies ) {
			$ordered = $data[$post_type] ?? null;

			if ( ! is_array( $ordered ) ) {
				continue;
			}

			$allowed = array_fill_keys( $taxonomies, true );
			$sources = array(
				$ordered,
				$saved[$post_type] ?? array(),
				$taxonomies
			);

			$next = array();
			foreach ( $sources as $source ) {
				foreach ( $source as $slug ) {
					if ( $allowed[$slug] ?? false ) {
						$next[$slug] = $slug;
					}
				}
			}

			$saved[$post_type] = array_values( $next );
		}

		if ( \get_option( $this->setting_name() ) === $saved ) {
			return true;
		}

		return \update_option( $this->setting_name(), $saved, true );
	}

	private function post_type_taxonomies(): array
	{
		$valid = array();

		foreach( $this->supported_post_types() as $post_type ) {
			$valid[ $post_type['slug'] ] = array();
		}

		foreach ( $this->supported_taxonomies() as $taxonomy ) {
			foreach ( $taxonomy['object_types'] as $object_type ) {
				if ( isset( $valid[$object_type] ) ) {
					$valid[$object_type][] = $taxonomy['slug'];
				}
			}
		}

		foreach ( $valid as $key => $values ) {
			$valid[$key] = array_values( array_unique( $values ) );
		}

		return $valid;
	}
}
