<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Aslbsa implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'ASLBSA';
	}

	public function label(): string
	{
		return 'iframe: ASLBSA';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Microsoft App Service ja Front Door Affinity ohjaavat tällä evästeellä selaimesi käyttämään asianmukaista taustapalvelinta.',
			'sv' => 'Används av Microsoft App Service och Front Door Affinity för att styra din webbläsare att använda lämplig backend-server.',
			'en' => 'Used by Microsoft App Service and Front Door Affinity to direct your browser to use the appropriate backend server.',
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
