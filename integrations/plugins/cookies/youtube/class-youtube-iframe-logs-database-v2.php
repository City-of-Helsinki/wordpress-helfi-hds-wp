<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Logs_Database_V2 implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'LogsDatabaseV2:*';
	}

	public function label(): string
	{
		return 'iframe: LogsDatabaseV2:*';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Tallentaa lokitietoja, joita käytetään virheiden analysointiin ja käyttäjän Youtube-katselukokemuksen optimointiin.',
			'sv' => 'Sparar logguppgifter som används för att analysera fel och optimera användarens YouTube-upplevelse.',
			'en' => 'Stores log data used for error analysis and optimizing the user\'s YouTube viewing experience.',
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
		return 'indexeddb';
	}

	public function category(): string
	{
		return 'preferences';
	}
}
