<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Wfe_Session_Id implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'WFESessionId';
	}

	public function label(): string
	{
		return 'iframe: WFESessionId';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään yksittäisen käyttäjän istunnon tunnistamiseen palvelinpuolen käsittelyä ja Power BI -sisällön näyttämistä varten.',
			'sv' => 'Används för att identifiera en enskild användares session för serversidans behandling och visning av Power BI-innehåll.',
			'en' => 'Used to identify a single user\'s session for server-side processing and displaying Power BI content.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => 'Istunto',
			'sv' => 'Session',
			'en' => 'Session',
		);
	}

	public function type(): string
	{
		return 'cookie';
	}

	public function category(): string
	{
		return 'preferences';
	}
}
