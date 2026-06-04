<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Helsinki\Maps;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Map_Iframe_Louhi_Asp_Xsrf_Token implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'kartta.hel.fi';
	}

	public function name(): string
	{
		return 'LOUHI-ASP-XSRF-TOKEN';
	}

	public function label(): string
	{
		return 'iframe: LOUHI-ASP-XSRF-TOKEN';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Kaupungin karttapalvelun toiminnalle tarpeellinen eväste.',
			'sv' => 'En cookie som är nödvändig för stadens karttjänst att fungera.',
			'en' => 'A cookie necessary for the city\'s map service to function.'
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => 'Istunto',
			'sv' => 'Session',
			'en' => 'Session'
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
