<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Manifests_Extensions implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'manifests.extensions';
	}

	public function label(): string
	{
		return 'iframe: manifests.extensions';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Tallentaa Power BI -laajennuksista tietoja, joita käytetään käyttöliittymän mukauttamiseen tai lisäominaisuuksien tarjoamiseen.',
			'sv' => 'Sparar information om Power BI-utvidgningar, som används för att anpassa användargränssnittet eller erbjuda tilläggsfunktioner.',
			'en' => 'Stores data related to Power BI extensions, which are used to customize the user interface or provide additional features.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '-',
			'sv' => '-',
			'en' => '-',
		);
	}

	public function type(): string
	{
		return 'localstorage';
	}

	public function category(): string
	{
		return 'statistics';
	}
}
