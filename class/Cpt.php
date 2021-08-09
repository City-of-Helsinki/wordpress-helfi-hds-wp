<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Cpt extends Module {

	public function init() {
		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_action( 'init', array( $this, 'registerPostTypes' ) );
		add_action( 'init', array( $this, 'registerTaxonomies' ) );
	}

	public function registerPostTypes() {
		foreach ( $this->config->value('post-types') as $type => $config ) {
			register_post_type( $type, $config );
		}
	}

	public function registerTaxonomies() {
		foreach ( $this->config->value('taxonomies') as $taxonomy => $config ) {
			register_taxonomy( $taxonomy, $config['post_type'], $config['args'] );
		}
	}

	public function settingsTab( $tabs ) {
		return array_merge(
			$tabs,
			array(
				'cpt' => array(
					'title' => __('Post Types', 'hds-wp'),
				),
			)
		);
	}

}
