<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Aslbsacors implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'ASLBSACORS';
	}

	public function label(): string
	{
		return 'iframe: ASLBSACORS';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Microsoft App Servicen ja Front Door Affinityn eväste, jota käytetään pyyntöjen reitittämiseen oikeaan verkkosovellusinstanssiin.',
			'sv' => 'Används av Microsoft App Service och Front Door Affinity för att dirigera förfrågningar till rätt webbappinstans.',
			'en' => 'Used by Microsoft App Service and Front Door Affinity to help route requests to the correct web app instance.',
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
