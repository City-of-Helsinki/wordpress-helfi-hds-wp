<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Yt_Remote_Connected_Devices implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'yt-remote-connected-devices';
	}

	public function label(): string
	{
		return 'iframe: yt-remote-connected-devices';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään tallentamaan käyttäjän laitteiden tiedot, etäyhteyden tila ja istuntotiedot, jotta videoiden suoratoisto eri laitteisiin, kuten televisioon, sujuisi saumattomasti ja katselukokemus jatkuisi helposti laitteelta toiselle.',
			'sv' => 'Används för att spara uppgifter om användarens apparater, distansförbindelsens status och sessionsuppgifter, så att strömning av videor på olika apparater, såsom en tv, går smidigt och visningsupplevelsen enkelt kan fortsätta fastän man byter apparat.',
			'en' => 'Used to store user device information, remote connection status, and session data to ensure seamless video streaming to different devices, such as TVs, and to allow easy continuation of the viewing experience across devices.',
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
