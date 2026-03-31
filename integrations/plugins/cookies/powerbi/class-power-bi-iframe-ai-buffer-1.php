<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Ai_Buffer_1 implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'AI_buffer_1';
	}

	public function label(): string
	{
		return 'iframe: AI_buffer_1';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään käyttäjän toiminnan seuraamiseen ja tietojen väliaikaiseen tallentamiseen palvelinpuolen käsittelyä varten.',
			'sv' => 'Används för att följa användarens aktivitet och tillfälligt spara uppgifter för serversidans behandling.',
			'en' => 'Used to track user activity and temporarily store data for server-side processing.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => 'Istunto',
			'sv' => 'Session',
			'en' => 'Session',
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
