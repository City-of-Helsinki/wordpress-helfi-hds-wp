<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Icareus;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Icareus_Iframe_JSessionid implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'suite.icareus.com';
	}

	public function name(): string
	{
		return 'JSESSIONID';
	}

	public function label(): string
	{
		return 'iframe: JSESSIONID';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Sivuston pakollinen eväste mahdollistaa kävijän vierailun sivustolla.',
			'sv' => 'Kakan är en obligatorisk kaka som gör det möjligt för besökaren att besöka webbplatsen.',
			'en' => 'The cookie is an obligatory cookie that facilitates visiting the website.',
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
		return 'cookie';
	}

	public function category(): string
	{
		return 'preferences';
	}
}
