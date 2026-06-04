<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Icareus;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Icareus_Iframe_Cookie_Support implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'suite.icareus.com';
	}

	public function name(): string
	{
		return 'COOKIE_SUPPORT';
	}

	public function label(): string
	{
		return 'iframe: COOKIE_SUPPORT';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Mahdollistaa evästeiden hallinnan sivustolla.',
			'sv' => 'Kakan möjliggör hanteringen av kakor på webbplatsen.',
			'en' => 'The cookie facilitates managing cookies on the website.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '365 päivää',
			'sv' => '365 dagar',
			'en' => '365 days',
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
