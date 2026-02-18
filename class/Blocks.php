<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

use WP_Block_Editor_Context;

class Blocks extends Module
{
	public function init() {
		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_filter( 'hds_wp_settings_tab_panel', array( $this, 'settingsTabPanel' ) );
		add_filter( 'block_categories_all', array( $this, 'category' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'allowedBlockVariations' ) );
		add_action( 'init', array( $this, 'register' ) );

		add_filter( 'allowed_block_types_all', array( $this, 'setupAllowedBlocks' ), 10, 2 );
	}

	public function register() {
		$commons = array(
			'version' => $this->config->value( 'debug' )
				? (string) time()
				: $this->config->value( 'version' ),
		);

		foreach ( $this->config->value('blocks') as $block => $args ) {
			if ( ! empty( $args['render_callback'] ) ) {
				$this->require_block_renderer( $block );
			}

			register_block_type(
				$this->block_json_path( $block ),
				array_merge( $commons, $args )
			);
		}
	}

	private function require_block_renderer( string $name ): void
	{
		$path = $this->config->value( 'path' ) . "/{$name}/render.php";

		if ( file_exists( $path ) ) {
			require_once $path;
		}
	}

	private function block_json_path( string $name ): string
	{
		return $this->config->value( 'path' ) . "/{$name}/block.json";
	}

	public function allowedBlockVariations(): void
	{
		$allowed = array();

		foreach ( $this->allowedBlocksConfig() as $type => $config ) {
			if ( $type === 'post_types' ) {
				foreach ( $config as $post_type => $type_config ) {
					$allowed = array_merge(
						$allowed,
						array_filter( $type_config, 'is_array' )
					);
				}
			} else {
				$allowed = array_merge(
					$allowed,
					array_filter( $config, 'is_array' )
				);
			}
		}

		wp_add_inline_script(
			'helsinki-wp-admin-scripts',
			sprintf(
				'const HelsinkiAllowedVariations = %s;',
				json_encode( $allowed )
			),
			'before'
		);
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

	public function settingsTabPanel( $tab ): void
	{
		if ( 'blocks' !== $tab ) {
			return;
		}

		$allowed = $this->allowedBlocksConfig();

		echo '<h2>' . esc_html__('Allowed blocks', 'hds-wp') . '</h2>';
		echo '<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));">';

		if ( ! empty( $allowed['common'] ) ) {
			$this->renderBlocksList( __('Common', 'hds-wp'), $allowed['common'] );
		}

		if ( ! empty( $allowed['vendors'] ) ) {
			$this->renderBlocksList( __('3rd party', 'hds-wp'), $allowed['vendors'] );
		}

		if ( ! empty( $allowed['post_types'] ) ) {
			foreach ( $allowed['post_types'] as $post_type => $blocks ) {
				$this->renderBlocksList(
					sprintf( '%s: %s', __('Post type', 'hds-wp'), $post_type ),
					$blocks
				);
			}
		}

		echo '</div>';
	}

	protected function renderBlocksList( string $title, array $items ): void
	{
		$names = array_map(
			function( $name ) {
				return '<li>' . esc_html( $name ) . '</li>';
			},
			array_keys( $items )
		);

		printf(
			'<div class="allowed-blocks">
				<h3>%s</h3>
				<ul>%s</ul>
			</div>',
			esc_html( $title ),
			implode( '', $names )
		);
	}

	public function setupAllowedBlocks(
		bool|array $allowed_block_types,
		\WP_Block_Editor_Context $context
	): bool|array {
		$enabled = array_flip( array_keys(
			\WP_Block_Type_Registry::get_instance()->get_all_registered()
		) );

		$allowed = $this->allowedBlocksConfig();

		if ( ! empty( $allowed['common'] ) ) {
			$enabled = array_merge( $enabled, $allowed['common'] );
		}

		if ( ! empty( $allowed['vendors'] ) ) {
			$enabled = array_merge( $enabled, $allowed['vendors'] );
		}

		$post_type = $context?->post?->post_type ?: '';
		if ( $post_type && isset( $allowed['post_types'][$post_type] ) ) {
			$enabled = array_merge( $enabled, $allowed['post_types'][$post_type] );
		}

		$enabled = array_filter( $enabled, function( $status ) {
			return true === $status
				|| ( is_array( $status ) && $status );
		} );

		return array_keys( $enabled );
	}

	protected function allowedBlocksConfig(): array
	{
		$disallowed = $this->disallowedBlocksConfig();
		$allowed = $this->config->value( 'allowed-blocks' );

		if ( ! empty( $disallowed['common'] ) ) {
			$allowed['common'] = array_merge(
				$allowed['common'],
				$disallowed['common']
			);
		}

		if ( ! empty( $disallowed['vendors'] ) ) {
			$allowed['vendors'] = array_merge(
				$allowed['vendors'],
				$disallowed['vendors']
			);
		}

		if ( ! empty( $disallowed['post_types'] ) ) {
			$allowed['post_types'] = array_merge_recursive(
				$allowed['post_types'],
				$disallowed['post_types']
			);
		}

		return apply_filters( 'helsinki_wp_allowed_blocks', $allowed );
	}

	protected function disallowedBlocksConfig(): array
	{
		return apply_filters( 'helsinki_wp_disallowed_blocks', array() );
	}
}
