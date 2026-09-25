<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_Term;

final class CPT_Template
{
	public function __construct(
		private CPT_Terms $cpt_terms
	) {}

	public function post_terms(): void
	{
		$items = array();
		foreach ( $this->cpt_terms->of_post( \get_post() ) as $taxonomy ) {
			$terms = array_map(
				fn( WP_Term $term ) => $term->name,
				$taxonomy->terms()
			);

			if ( $terms ) {
				$items[] = sprintf(
					'<div class="item item--%1$s">
						<dt class="label">%2$s</dt>
						<dd class="text">%3$s</dd>
					</div>',
					\esc_attr( $taxonomy->slug() ),
					\esc_html( $taxonomy->title() ),
					\esc_html( implode( ', ', $terms ) )
				);
			}
		}

		if ( $items ) {
			printf(
				'<div class="classifications has-secondary-background-color has-secondary-content-color">
					<dl clss="list">%1$s</dl>
				</div>',
				implode( '', $items )
			);
		}
	}
}
