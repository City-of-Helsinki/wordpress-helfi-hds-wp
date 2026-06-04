<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Visitor_Info1_Live implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'VISITOR_INFO1_LIVE';
	}

	public function label(): string
	{
		return 'iframe: VISITOR_INFO1_LIVE';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'YouTuben eväste valitsee käyttäjän verkkoyhteyden nopeuden mukaan joko vanhan tai uuden videosoittimen.',
			'sv' => 'YouTubes kaka väljer antingen den nya eller gamla videospelaren enligt förbindelsens hastighet.',
			'en' => 'The YouTube cookie selects the old or new video player depending on the connection speed.',
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
