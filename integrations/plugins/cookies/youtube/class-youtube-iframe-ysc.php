<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Ysc implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return 'YSC';
	}

	public function label(): string
	{
		return 'iframe: YSC';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'YouTuben eväste mahdollistaa videoiden upottamisen sivustolle.',
			'sv' => 'YouTubes kaka gör det möjligt att göra videor till en del av innehållet på webbplatsen.',
			'en' => 'The YouTube cookie facilitates including videos as part of the website\'s content.',
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
		return 'cookie';
	}

	public function category(): string
	{
		return 'preferences';
	}
}
