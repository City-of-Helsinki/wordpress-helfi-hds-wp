<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Ai_User implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'ai_user';
	}

	public function label(): string
	{
		return 'iframe: ai_user';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Tunnistaa käyttäjän yksilöllisesti, jotta toistuvat Power BI -vierailut voidaan yhdistää samaan käyttäjään pitkällä aikavälillä.',
			'sv' => 'Identifierar en specifik användare, så att återkommande Power Bi-besök kan kopplas till samma användare över en längre tid.',
			'en' => 'Identifies the user uniquely so that recurring Power BI visits can be associated with the same user over the long term.',
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
