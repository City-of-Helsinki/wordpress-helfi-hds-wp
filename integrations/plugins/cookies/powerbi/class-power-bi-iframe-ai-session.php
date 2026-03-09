<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Ai_Session implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'ai_session';
	}

	public function label(): string
	{
		return 'iframe: ai_session';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään käyttäjän istuntotietojen seuraamiseen ja yksittäisten Power BI -istuntojen erottamiseen toisistaan. Tämä auttaa analysoimaan vierailujen määrää ja kestoa.',
			'sv' => 'Används för att följa användarnas sessioner och skilja mellan enskilda Power BI-sessioner. Detta underlättar analysen av besökens antal och längd.',
			'en' => 'Used to track the user\'s session data and differentiate individual Power BI sessions. This helps analyze the number and duration of visits.',
		);
	}

	public function retentionTranslations(): array
	{
		return array(
			'fi' => '30 minuuttia',
			'sv' => '30 minuter',
			'en' => '30 minutes',
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
