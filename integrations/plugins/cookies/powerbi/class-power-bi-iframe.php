<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return '``';
	}

	public function label(): string
	{
		return 'iframe: ``';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Käytetään välimuistin hallintaan ja versionhallintaan, jotta Power BI voi tallentaa ja käsitellä paikallisesti tietoja, kuten tallennettuja asetuksia tai välimuistissa olevia lataustietoja, jotka nopeuttavat käyttäjän kokemusta ja vähentävät palvelinpuolen kuormitusta.',
			'sv' => 'Används för att hantera cacheminnet och versionen, så att Power BI kan spara och hantera information lokalt, såsom sparade inställningar eller nedladdningsuppgifter i cacheminnet, som gör användarens upplevelse snabbare och minskar belastningen på serversidan.',
			'en' => 'Used for cache management and version control, allowing Power BI to locally store and process data such as saved settings or cached download information, which enhances the user experience and reduces server-side load.',
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
		return 'statistics';
	}
}
