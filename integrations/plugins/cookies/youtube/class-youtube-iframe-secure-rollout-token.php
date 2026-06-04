<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\YouTube;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Youtube_Iframe_Secure_Rollout_Token implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'www.youtube.com';
	}

	public function name(): string
	{
		return '__Secure-ROLLOUT_TOKEN';
	}

	public function label(): string
	{
		return 'iframe: __Secure-ROLLOUT_TOKEN';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Youtuben evästettä käytetään sisäisiin tarkoituksiin uusien ominaisuuksien tai päivitysten julkaisun hallintaan. Se auttaa YouTubea hallitsemaan, millä käyttäjillä on käytössä tietyt kokeelliset ominaisuudet tai kokoonpanot kehityksen ja käyttöönoton aikana.',
			'sv' => 'YouTubes kaka används för interna syften för att hantera lanseringen av nya funktioner eller uppdateringar. Den hjälper YouTube att kontrollera vilka användare som använder vissa experimentella funktioner eller sammansättningar under utvecklingen och ibruktagandet.',
			'en' => 'Cookie is used for internal purposes to manage the rollout of new features or updates. It helps YouTube control which users are included in certain experimental features or configurations during development and deployment.',
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
