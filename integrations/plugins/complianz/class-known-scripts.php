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
	case HEL_SERVICE_MAP = 'palvelukarttahelfi';
	case HEL_MAP_SERVICE = 'karttahelfi';

	public function label(): string
	{
		return match($this) {
			self::POWER_BI => __( 'Power BI', 'hds-wp' ),
			self::ICAREUS => __( 'Helsinki Channel', 'hds-wp' ),
			self::HEL_SERVICE_MAP => 'palvelukartta.hel.fi',
			self::HEL_MAP_SERVICE => 'kartta.hel.fi',
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
			self::HEL_SERVICE_MAP => array(
				'name' => $this->value,
				'category' => 'preferences',
				'urls' => array( 'palvelukartta.hel.fi' ),
				'placeholder' => 'googlemaps',
				'enable_placeholder' => 1,
				'iframe' => 1,
				'enable_dependency' => 0,
				'dependency' => array(),
			),
			self::HEL_MAP_SERVICE => array(
				'name' => $this->value,
				'category' => 'preferences',
				'urls' => array( 'kartta.hel.fi' ),
				'placeholder' => 'googlemaps',
				'enable_placeholder' => 1,
				'iframe' => 1,
				'enable_dependency' => 0,
				'dependency' => array(),
			),
		};
	}
}
