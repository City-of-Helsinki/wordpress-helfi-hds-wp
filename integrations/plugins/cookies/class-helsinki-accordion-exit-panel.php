<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Helsinki_Accordion_Exit_Panel implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'WordPress Helsinki';
	}

	public function name(): string
	{
		return 'helsinkiAccordionExitPanel';
	}

	public function label(): string
	{
		return 'helsinkiAccordionExitPanel';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Sivusto käyttää tätä tietuetta tietojen tallentamiseen siitä, mikä haitariosio on avoinna käyttäjän palatessa sivustolle poistuttuaan sivustolta haitarissa olleen linkin kautta.',
			'sv' => 'Webbplatsen använder den här posten för att lagra information om vilken panelsektion som är öppen när en användare återvänder till webbplatsen efter att ha lämnat webbplatsen via en länk i panelen.',
			'en' => 'The site uses this record to store information about which accordion section is open when a user returns to the site after leaving the site via a link in the accordion.'
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
