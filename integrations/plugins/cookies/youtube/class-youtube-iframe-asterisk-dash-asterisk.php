<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Asterisk_Dash_Asterisk implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return '*-*';
	}

	public function label(): string
	{
		return 'iframe: *-*';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään istuntokohtaisiin tietoihin, kuten käyttäjän katselutilanteen seurantaan ja Youtube-asetusten ylläpitoon.',
			'sv' => 'Används för sessionsspecifika uppgifter, exempelvis för att följa användarens visningssituation och upprätthålla YouTube-inställningar.',
			'en' => 'Used for session-specific data, such as tracking the user\'s viewing status and maintaining YouTube settings.',
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
