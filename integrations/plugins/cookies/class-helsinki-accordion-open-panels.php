<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Helsinki_Accordion_Open_Panels implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'WordPress Helsinki';
	}

	public function name(): string
	{
		return 'helsinkiAccordionOpenPanels';
	}

	public function label(): string
	{
		return 'helsinkiAccordionOpenPanels';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Sivusto käyttää tätä tietuetta tietojen tallentamiseen siitä, mitkä haitariosiot ovat avoinna.',
			'sv' => 'Webbplatsen använder den här posten för att lagra information om vilka panelsektioner som är öppna.',
			'en' => 'The site uses this record to store information about which accordion sections are open.'
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
		return 'sessionstorage';
	}

	public function category(): string
	{
		return 'functional';
	}
}
