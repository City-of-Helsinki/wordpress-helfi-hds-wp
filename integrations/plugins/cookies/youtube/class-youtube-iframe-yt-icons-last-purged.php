<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Yt_Icons_Last_Purged implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'yt-icons-last-purged';
	}

	public function label(): string
	{
		return 'iframe: yt-icons-last-purged';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Tarpeellinen YouTube-videosisällön toteuttamiselle ja toiminnalle verkkosivustolla.',
			'sv' => 'Nödvändigt för implementering och funktionalitet av YouTube-videoinnehåll på webbplatsen.',
			'en' => 'Necessary for the implementation and functionality of YouTube video-content on the website. ',
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
