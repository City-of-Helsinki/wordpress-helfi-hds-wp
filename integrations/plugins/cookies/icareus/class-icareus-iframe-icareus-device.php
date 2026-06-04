<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Icareus;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Icareus_Iframe_Icareus_Device implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'suite.icareus.com';
	}

	public function name(): string
	{
		return 'icareusDevice';
	}

	public function label(): string
	{
		return 'iframe: icareusDevice';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Helsinki-kanavan videopalvelimen eväste.',
			'sv' => 'Helsinki-kanavas kaka gör det möjligt att göra videor till en del av innehållet på webbplatsen.',
			'en' => 'The Helsinki Channel video server cookie facilitates including videos as part of the website\'s content.',
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
