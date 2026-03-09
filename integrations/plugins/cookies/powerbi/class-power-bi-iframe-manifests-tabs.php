<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Manifests_Tabs implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'manifests.tabs';
	}

	public function label(): string
	{
		return 'iframe: manifests.tabs';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään hallinnoimaan ja esittämään erilaisia välilehtikohtaisia konfiguraatioita ja sisältöä Power BI -raporteissa.',
			'sv' => 'Används för att administrera och visa olika flikspecifika konfigurationer och innehåll i Power BI-rapporter.',
			'en' => 'Used to manage and display various tab-specific configurations and content in Power BI reports.',
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
