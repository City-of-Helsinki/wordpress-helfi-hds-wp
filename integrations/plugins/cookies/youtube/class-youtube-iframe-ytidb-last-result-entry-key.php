<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Ytidb_Last_Result_Entry_Key implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'ytidb::LAST_RESULT_ENTRY_KEY';
	}

	public function label(): string
	{
		return 'iframe: ytidb::LAST_RESULT_ENTRY_KEY';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään tallentamaan viimeisin hakutulos tai kysely YouTube-sisällöstä, joka nopeuttaa seuraavia hakuja.',
			'sv' => 'Används för att spara senaste sökresultat eller förfrågan i YouTube-innehåll, vilket gör följande sökningar snabbare.',
			'en' => 'Used to store the most recent search result or query for YouTube content, which speeds up subsequent searches.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '-',
			'sv' => '-',
			'en' => '-'
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
