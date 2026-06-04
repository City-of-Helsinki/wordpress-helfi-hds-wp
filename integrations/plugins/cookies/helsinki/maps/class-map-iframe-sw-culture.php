<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Helsinki\Maps;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Map_Iframe_Sw_Culture implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'kartta.hel.fi';
	}

	public function name(): string
	{
		return 'httpskartta.hel.fi.SWCulture';
	}

	public function label(): string
	{
		return 'iframe: httpskartta.hel.fi.SWCulture';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Kaupungin karttapalvelun evästeeseen tallennetaan kieli, jolla palvelua käytetään.',
			'sv' => 'Kakan på stadens kaktjänst sparas det språk som användaren använder i tjänsten.',
			'en' => 'The City\'s map service cookie saves the language in which the service is used.'
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '1826 päivää',
			'sv' => '1826 dagar',
			'en' => '1826 days'
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
