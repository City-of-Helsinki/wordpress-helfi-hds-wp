<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Secure_Ynid implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return '__Secure-YNID';
	}

	public function label(): string
	{
		return 'iframe: __Secure-YNID';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään käyttäjän vuorovaikutuksen seuraamiseen upotetun sisällön kanssa.',
			'sv' => 'Används för att spåra användarens interaktion med inbäddat innehåll.',
			'en' => 'Used to track user’s interaction with embedded content.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '180 päivää',
			'sv' => '180 dagar',
			'en' => '180 days'
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
