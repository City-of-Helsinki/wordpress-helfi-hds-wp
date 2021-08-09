<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Widgets extends Module {

	public function init() {
		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_action( 'widgets_init', array( $this, 'register' ) );
	}

	public function register() {
		foreach ( $this->config->value('widgets') as $file => $class ) {
			$file = $this->config->value('path') . $file . '.php';
			if ( file_exists( $file ) ) {
				require_once $file;
				register_widget( $class );
			}
		}
	}

	public function settingsTab( $tabs ) {
		return array_merge(
			$tabs,
			array(
				'widgets' => array(
					'title' => __('Widgets', 'hds-wp'),
				),
			)
		);
	}

}
