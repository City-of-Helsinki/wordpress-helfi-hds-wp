<?php
namespace ArtCloud\Helsinki\Plugin\HDS\Integrations\Plugins\WPMatomo;

add_filter( 'pre_option_wp-piwik_global-auto_site_config', '__return_true', 10 );
add_filter( 'pre_update_option_wp-piwik_global-auto_site_config', '__return_true', 10 );
