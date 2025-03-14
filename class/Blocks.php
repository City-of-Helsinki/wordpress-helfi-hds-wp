<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

use WP_Block_Editor_Context;

class Blocks extends Module
{
	public function init() {
		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_filter( 'hds_wp_settings_tab_panel', array( $this, 'settingsTabPanel' ) );
		add_filter( 'block_categories_all', array( $this, 'category' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( $this, 'disallowedBlocks' ) );
		add_action( 'init', array( $this, 'register' ) );
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

	public function disallowedBlocks(): void
	{
		$disallowed = json_encode( $this->disallowedBlocksConfig() );

		wp_add_inline_script(
			'helsinki-wp-admin-scripts',
			"const HelsinkiDisallowedBlocks = {$disallowed};",
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

		$disallowed = $this->disallowedBlocksConfig();

		echo '<h2>' . esc_html__('Disallowed blocks', 'hds-wp') . '</h2>';
		echo '<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));">';

		if ( ! empty( $disallowed['common'] ) ) {
			$this->renderBlocksList( __('Common', 'hds-wp'), $disallowed['common'] );
		}

		if ( ! empty( $disallowed['vendors'] ) ) {
			$this->renderBlocksList( __('3rd party', 'hds-wp'), $disallowed['vendors'] );
		}

		if ( ! empty( $disallowed['post_types'] ) ) {
			foreach ( $disallowed['post_types'] as $post_type => $blocks ) {
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
			array_keys( array_filter(
				$items,
				function( $item ) {
					return empty( $item );
				}
			) )
		);

		printf(
			'<div class="disallowed-blocks">
				<h3>%s</h3>
				<ul>%s</ul>
			</div>',
			esc_html( $title ),
			implode( '', $names )
		);
	}

	protected function disallowedBlocksConfig(): array
	{
		return apply_filters(
			'helsinki_wp_disallowed_blocks',
			$this->config->value( 'disallowed-blocks' )
		);
	}
}
