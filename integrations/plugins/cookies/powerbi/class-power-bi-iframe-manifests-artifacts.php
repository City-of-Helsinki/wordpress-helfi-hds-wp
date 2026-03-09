<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Manifests_Artifacts implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'manifests.artifacts';
	}

	public function label(): string
	{
		return 'iframe: manifests.artifacts';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään Power BI -sisältöön liittyvien osien, kuten raporttien ja visualisointien, lataamisprosessin hallintaan ja nopeuttamiseen.',
			'sv' => 'Används för att administrera och försnabba laddningsprocessen för delar som anknyter till Power BI-innehåll, såsom rapporter och visualiseringar.',
			'en' => 'Used to manage and speed up the loading process of Power BI content components, such as reports and visualizations.',
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
