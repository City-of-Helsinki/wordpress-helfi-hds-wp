<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

use WP_Block_Editor_Context;

class Blocks extends Module {

	protected $dependencies = array();

	public function init() {
		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_filter( 'block_categories_all', array( $this, 'category' ), 10, 2 );
		add_filter( 'hds_wp_admin_scripts_dependencies', array( $this, 'dependencies' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'disallowedBlocks' ) );
		add_action( 'init', array( $this, 'register' ) );
	}

	public function register() {
		foreach ( $this->config->value('blocks') as $block => $config ) {
			if ( ! empty( $config['dependencies'] ) ) {
				$this->dependencies = array_merge(
					$this->dependencies,
					$config['dependencies']
				);
				unset( $config['dependencies'] );
			}
			register_block_type( "hds-wp/{$block}", $config );
		}
	}

	public function disallowedBlocks(): void
	{
		$disallowed = json_encode( $this->config->value( 'disallowed-blocks' ) );

		wp_add_inline_script(
			'helsinki-wp-admin-scripts',
			"const HelsinkiDisallowedBlocks = {$disallowed};",
			'before'
		);
	}

	public function dependencies( $dependencies ) {
		return $this->dependencies ? array_merge(
			$dependencies,
			array_unique(
				$this->dependencies,
				SORT_STRING
			)
		) : $dependencies;
	}

	public function category( $block_categories, $block_editor_context ) {
		if ( ! ( $block_editor_context instanceof WP_Block_Editor_Context ) ) {
			return $block_categories;
    	}

		return array_merge(
			$block_categories,
			array(
				array(
					'slug' => 'hds-wp',
					'title' => __( 'Helsinki', 'hds-wp' ),
					'icon'  => 'generic',
				),
			)
		);
	}

	public function settingsTab( $tabs ) {
		return array_merge(
			$tabs,
			array(
				'blocks' => array(
					'title' => __('Blocks', 'hds-wp'),
				),
			)
		);
	}

}
