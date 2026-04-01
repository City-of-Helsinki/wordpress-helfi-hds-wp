<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Geocoder_Cache_Objects implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'GeocoderCache/objects';
	}

	public function label(): string
	{
		return 'iframe: GeocoderCache/objects';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Tallentaa välimuistiin sijaintitietoja, kuten geokoodauskyselyitä, jotka nopeuttavat Power BI:n karttatoimintojen suorittamista.',
			'sv' => 'Sparar positionsuppgifter i cacheminnet, till exempel geokodningsförfrågningar, som försnabbar Power BI:s kartfunktioner.',
			'en' => 'Caches location data, such as geocoding queries, to speed up the performance of Power BI map features.',
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
		return 'indexeddb';
	}

	public function category(): string
	{
		return 'preferences';
	}
}
