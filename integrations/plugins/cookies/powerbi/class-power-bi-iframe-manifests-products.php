<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Manifests_Products implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'manifests.products';
	}

	public function label(): string
	{
		return 'iframe: manifests.products';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Sisältää tietoja eri tuotteiden tai palveluiden manifestoista, joita Power BI käyttää näyttääkseen oikeanlaista sisältöä.',
			'sv' => 'Innehåller information om olika produkters eller tjänsters manifest, som Power BI använder för att visa rätt sorts innehåll.',
			'en' => 'Contains information about the manifests of different products or services, which Power BI uses to display the correct content.',
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
		return 'preferences';
	}
}
