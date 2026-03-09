<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\PowerBI;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use CityOfHelsinki\WordPress\CookieConsent\Features\Interfaces\Known_Cookie_Data;

final class Power_Bi_Iframe_Ai_Sent_Buffer_1 implements Known_Cookie_Data
{
	public function issuer(): string
	{
		return 'app.powerbi.com';
	}

	public function name(): string
	{
		return 'AI_sentBuffer_1';
	}

	public function label(): string
	{
		return 'iframe: AI_sentBuffer_1';
	}

	public function descriptionTranslations(): array
	{
		return array(
			'fi' => 'Tallentaa lähetyspuskuritiedot käyttäjän toiminnasta, joita käytetään Power BI:n suorituskyvyn analysoinnissa ja ongelmien diagnosoimisessa.',
			'sv' => 'Sparar överföringsbuffertuppgifter om användarens aktiviteter, som används för att analysera Power BI:s prestanda och diagnostisera problem.',
			'en' => 'Stores transmission buffer data on user activity, which is used for Power BI performance analysis and issue diagnostics.',
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
		return 'sessionstorage';
	}

	public function category(): string
	{
		return 'preferences';
	}
}
