<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Integrations extends Module {

	public function init() {
		$this->loadIncludes();

		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_filter( 'hds_wp_settings_tab_panel', array( $this, 'settingsTabPanel' ) );
	}

	protected function loadIncludes() {
		foreach ( $this->config->value('types') as $type => $integrations ) {
			foreach ($integrations as $integration => $config) {
				$file = $this->config->value('path') . $type . DIRECTORY_SEPARATOR . $integration . '.php';
				if ( file_exists( $file ) ) {
					if ( isset($config['data']) ) {
						add_filter(
							"hds_wp_{$integration}_data", 
							function () use ($integration, $config) {
								return $this->includeTypeConfig($integration, $config['data']);
							}
						);
					}
					require_once $file;
				}
			}
		}
	}
	
	protected function includeTypeConfig( string $type, array $config ) {
		$out = array();
		foreach ($config as $key) {
			$file = $this->config->value('config') . 'integrations' . DIRECTORY_SEPARATOR . $type . DIRECTORY_SEPARATOR . $key . '.php';
			if ( $file ) {
				$out[$key] = include_once $file;
			}
		}
		return $out;
	}

	public function settingsTab( $tabs ) {
		return array_merge(
			$tabs,
			array(
				'integrations' => array(
					'title' => __('Integrations', 'hds-wp'),
					'description' => __('Use Helsinki settings with plugins and enable available Helsinki APIs.', 'hds-wp'),
				),
			)
		);
	}

	public function settingsTabPanel( $tab ) {
		if ( 'integrations' !== $tab ) {
			return;
		}

		foreach ( $this->config->value('types') as $type => $integrations ) {

			if ( ! $integrations ) {
				continue;
			}

			echo '<ul class="integrations-list">';

			foreach ($integrations as $integration => $config) {
				printf(
					'<li class="integrations-list__item">%s%s</li>',
					sprintf(
						'<h3 class="title">%s</h3>',
						esc_html( $config['title'] )
					),
					! empty( $config['description'] ) ? sprintf(
						'<p class="description">%s</p>',
						esc_html( $config['description'] )
					) : ''
				);
			}

			echo '</ul>';
		}
	}

}
