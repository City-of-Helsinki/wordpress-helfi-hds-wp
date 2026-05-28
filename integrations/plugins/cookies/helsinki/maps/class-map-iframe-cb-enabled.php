<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Helsinki\Maps;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Map_Iframe_Cb_Enabled implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'kartta.hel.fi';
	}

	public function name(): string
	{
		return 'cb-enabled';
	}

	public function label(): string
	{
		return 'iframe: cb-enabled';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Kaupungin karttapalvelun evästeeseen tallennetaan tieto, onko käyttäjä hyväksynyt keksit.',
			'sv' => 'Information om huruvida användaren har godkänt kakor lagras i stadens karttjänsts kaka.',
			'en' => 'Information on whether the user has accepted cookies is stored in the city\'s map service cookie.'
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '400 päivää',
			'sv' => '400 dagar',
			'en' => '400 days'
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
