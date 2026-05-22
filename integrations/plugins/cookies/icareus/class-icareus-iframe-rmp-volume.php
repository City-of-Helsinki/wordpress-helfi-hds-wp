<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Icareus;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Icareus_Iframe_Rmp_Volume implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'suite.icareus.com';
	}

	public function name(): string
	{
		return 'rmpVolume';
	}

	public function label(): string
	{
		return 'iframe: rmpVolume';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Helsinkikanava-videopalvelimen eväste. Käytetään tallentamaan käyttäjän tiedot siitä, onko videossa äänet päällä vai ei.',
			'sv' => 'Kaka för videoservern Helsingforskanalen. Används för att spara användarens inställningar för om ljudet är aktiverat i videon eller inte.',
			'en' => 'Helsinkikanava video server localStorage. Used to store the user\'s information about whether the sound is on or off in the video.',
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
