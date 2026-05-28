<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Ytidb_Meta_Databases implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'YtIdbMeta/databases';
	}

	public function label(): string
	{
		return 'iframe: YtIdbMeta/databases';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Tallentaa metatietoja YouTuben käyttämistä tietokannoista, jotta sovellus voi käyttää dataa nopeasti paikallisesti.',
			'sv' => 'Sparar metainformation om databaser som YouTube använder, så att applikationen snabbt kan använda data lokalt.',
			'en' => 'Stores metadata from the databases used by YouTube, allowing the application to access the data quickly locally.',
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
