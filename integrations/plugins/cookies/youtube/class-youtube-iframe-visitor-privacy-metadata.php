<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Visitor_Privacy_Metadata implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'VISITOR_PRIVACY_METADATA';
	}

	public function label(): string
	{
		return 'iframe: VISITOR_PRIVACY_METADATA';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään tallentamaan käyttäjän yksityisyysasetuksia, kuten mainos- ja sisältövalintoja, YouTube-videoupotuksen aikana.',
			'sv' => 'Används för att spara användarens integritetsinställningar, såsom reklam- och innehållsval, under YouTube-videoinbäddning.',
			'en' => 'Used to store the user\'s privacy settings, such as ad and content preferences, during a YouTube video embed.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '180 päivää',
			'sv' => '180 dagar',
			'en' => '180 days',
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
