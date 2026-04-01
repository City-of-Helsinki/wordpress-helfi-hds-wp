<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPHelfiCookieConsent;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

\add_filter( 'wordpress_helfi_cookie_consent_known_cookies', __NAMESPACE__ . '\\provide_cookies' );
function provide_cookies( array $cookies ): array {
	$path = \plugin_dir_path( __FILE__ );

	foreach ( cookie_files_classes() as $file_name => $cookie_class ) {
		require_once $path . 'cookies/' . $file_name;

		$cookies[] = $cookie_class;
	}

	return $cookies;
}

function cookie_files_classes(): array {
	return array(
		'helsinki/class-helsinki-accordion-exit-panel.php' => Cookies\Helsinki\Helsinki_Accordion_Exit_Panel::class,
		'helsinki/class-helsinki-accordion-open-panels.php' => Cookies\Helsinki\Helsinki_Accordion_Open_Panels::class,

		'powerbi/class-power-bi-iframe.php' => Cookies\PowerBI\Power_Bi_Iframe::class,
		'powerbi/class-power-bi-iframe-ai-buffer-1.php' => Cookies\PowerBI\Power_Bi_Iframe_Ai_Buffer_1::class,
		'powerbi/class-power-bi-iframe-ai-sent-buffer-1.php' => Cookies\PowerBI\Power_Bi_Iframe_Ai_Sent_Buffer_1::class,
		'powerbi/class-power-bi-iframe-ai-session.php' => Cookies\PowerBI\Power_Bi_Iframe_Ai_Session::class,
		'powerbi/class-power-bi-iframe-ai-user.php' => Cookies\PowerBI\Power_Bi_Iframe_Ai_User::class,
		'powerbi/class-power-bi-iframe-arr-affinity-same-site.php' => Cookies\PowerBI\Power_Bi_Iframe_Arr_Affinity_Same_Site::class,
		'powerbi/class-power-bi-iframe-geocoder-cache-objects.php' => Cookies\PowerBI\Power_Bi_Iframe_Geocoder_Cache_Objects::class,
		'powerbi/class-power-bi-iframe-manifests-artifacts.php' => Cookies\PowerBI\Power_Bi_Iframe_Manifests_Artifacts::class,
		'powerbi/class-power-bi-iframe-manifests-extensions.php' => Cookies\PowerBI\Power_Bi_Iframe_Manifests_Extensions::class,
		'powerbi/class-power-bi-iframe-manifests-products.php' => Cookies\PowerBI\Power_Bi_Iframe_Manifests_Products::class,
		'powerbi/class-power-bi-iframe-manifests-tabs.php' => Cookies\PowerBI\Power_Bi_Iframe_Manifests_Tabs::class,
		'powerbi/class-power-bi-iframe-wfe-session-id.php' => Cookies\PowerBI\Power_Bi_Iframe_Wfe_Session_Id::class,
	);
}
