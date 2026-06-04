<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Iu5q implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'iU5q-!O9@$';
	}

	public function label(): string
	{
		return 'iframe: iU5q-!O9@$';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään tilapäiseen tietojen tallentamiseen istunnon aikana, esimerkiksi YouTube-toiston tai käyttäjän asetusten käsittelyyn.',
			'sv' => 'Används för att tillfälligt spara uppgifter under en session, exempelvis för att hantera YouTube-uppspelning eller användarens inställningar.',
			'en' => 'Used for temporarily storing data during a session, such as handling YouTube playback or user settings.',
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
		return 'sessionstorage';
	}

	public function category(): string
	{
		return 'preferences';
	}
}
