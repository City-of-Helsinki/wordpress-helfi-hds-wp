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

		'icareus/class-icareus-iframe-cookie-support.php' => Cookies\Icareus\Icareus_Iframe_Cookie_Support::class,
		'icareus/class-icareus-iframe-guest-language-id.php' => Cookies\Icareus\Icareus_Iframe_Guest_Language_Id::class,
		'icareus/class-icareus-iframe-icareus-device.php' => Cookies\Icareus\Icareus_Iframe_Icareus_Device::class,
		'icareus/class-icareus-iframe-jsessionid.php' => Cookies\Icareus\Icareus_Iframe_JSessionid::class,
		'icareus/class-icareus-iframe-rmp-volume.php' => Cookies\Icareus\Icareus_Iframe_Rmp_Volume::class,

		'youtube/class-youtube-iframe-asterisk-dash-asterisk.php' => Cookies\YouTube\Youtube_Iframe_Asterisk_Dash_Asterisk::class,
		'youtube/class-youtube-iframe-iu5q.php' => Cookies\YouTube\Youtube_Iframe_Iu5q::class,
		'youtube/class-youtube-iframe-logs-database-v2.php' => Cookies\YouTube\Youtube_Iframe_Logs_Database_V2::class,
		'youtube/class-youtube-iframe-secure-rollout-token.php' => Cookies\YouTube\Youtube_Iframe_Secure_Rollout_Token::class,
		'youtube/class-youtube-iframe-visitor-info1-live.php' => Cookies\YouTube\Youtube_Iframe_Visitor_Info1_Live::class,
		'youtube/class-youtube-iframe-visitor-privacy-metadata.php' => Cookies\YouTube\Youtube_Iframe_Visitor_Privacy_Metadata::class,
		'youtube/class-youtube-iframe-ysc.php' => Cookies\YouTube\Youtube_Iframe_Ysc::class,
		'youtube/class-youtube-iframe-yt-player.php' => Cookies\YouTube\Youtube_Iframe_Yt_Player::class,
		'youtube/class-youtube-iframe-yt-remote-connected-devices.php' => Cookies\YouTube\Youtube_Iframe_Yt_Remote_Connected_Devices::class,
		'youtube/class-youtube-iframe-yt-remote-device-id.php' => Cookies\YouTube\Youtube_Iframe_Yt_Remote_Device_Id::class,
		'youtube/class-youtube-iframe-yt-remote.php' => Cookies\YouTube\Youtube_Iframe_Yt_Remote::class,
		'youtube/class-youtube-iframe-ytidb-last-result-entry-key.php' => Cookies\YouTube\Youtube_Iframe_Ytidb_Last_Result_Entry_Key::class,
		'youtube/class-youtube-iframe-ytidb-meta-databases.php' => Cookies\YouTube\Youtube_Iframe_Ytidb_Meta_Databases::class,
	);
}
