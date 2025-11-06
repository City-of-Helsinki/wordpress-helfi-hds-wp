<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Helsinki_Accordion_Exit_Panel;
use ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent\Cookies\Helsinki_Accordion_Open_Panels;

\add_filter( 'wordpress_helfi_cookie_consent_known_cookies', __NAMESPACE__ . '\\provide_cookies' );
function provide_cookies( array $cookies ): array {
	$path = \plugin_dir_path( __FILE__ );

	require_once $path . 'cookies/class-helsinki-accordion-exit-panel.php';
	require_once $path . 'cookies/class-helsinki-accordion-open-panels.php';

	return array_merge( $cookies, array(
		Helsinki_Accordion_Exit_Panel::class,
		Helsinki_Accordion_Open_Panels::class,
	) );
}
