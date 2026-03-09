<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Arr_Affinity_Same_Site implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'ARRAffinitySameSite';
	}

	public function label(): string
	{
		return 'iframe: ARRAffinitySameSite';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään Power BI -palvelimen kuormantasaajassa varmistamaan, että käyttäjä ohjataan aina samaan palvelininstanssiin nykyisen istunnon aikana.',
			'sv' => 'Används i Power BI-serverns belastningsutjämnare för att säkerställa att användaren alltid styrs till samma serverinstans under en session.',
			'en' => 'Used in the Power BI server load balancer to ensure that the user is always directed to the same server instance during the current session.',
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
		return 'statistics';
	}
}
