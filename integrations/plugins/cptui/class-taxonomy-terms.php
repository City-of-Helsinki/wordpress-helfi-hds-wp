<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\CPTUI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_Taxonomy;
use WP_Term;

final class Taxonomy_Terms
{
	private array $terms;

	public function __construct(
		private WP_Taxonomy $taxonomy,
		WP_Term ...$terms
	) {
		$this->terms = $terms;
	}

	public function title(): string
	{
		return $this->taxonomy->label;
	}

	public function slug(): string
	{
		return $this->taxonomy->name;
	}

	public function terms(): array
	{
		return $this->terms;
	}
}
