<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\Complianz;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

enum Known_Scripts: string
{
	case POWER_BI = 'powerbi';
	case ICAREUS = 'icareus';

	public function label(): string
	{
		return match($this) {
			self::POWER_BI => __( 'Power BI', 'hds-wp' ),
			self::ICAREUS => __( 'Helsinki Channel', 'hds-wp' ),
		};
	}

	public function firstparty_marketing(): bool
	{
		return false;
	}

	public function script_tag(): array
	{
		return match($this) {
			self::POWER_BI => array(
				'name' => $this->value,
				'category' => 'preferences',
				'urls' => array( 'app.powerbi.com' ),
				'enable_placeholder' => '1',
				'placeholder' => 'default-minimal',
				'placeholder_class' => $this->value,
				'enable_dependency' => '0',
			),
			self::ICAREUS => array(
				'name' => $this->value,
				'category' => 'preferences',
				'urls' => array(
					'helsinkikanava.fi',
					'players.icareus.com',
				),
				'enable_placeholder' => '1',
				'placeholder' => 'default-minimal',
				'placeholder_class' => $this->value,
				'enable_dependency' => '0',
			),
		};
	}
}
