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
				$file = implode(DIRECTORY_SEPARATOR, [
					$this->config->value('path') . $type,
					$integration . '.php'
				]);

				if ( file_exists( $file ) ) {
					if ( isset($config['data']) ) {
						$this->provideIntegrationData($integration, $config['data']);
					}

					require_once $file;
				}
			}
		}
	}

	protected function provideIntegrationData( string $integration, array $files ) {
		add_filter(
			"hds_wp_{$integration}_data",
			function () use ($integration, $files) {
				return $this->includeTypeConfig($integration, $files);
			}
		);
	}

	protected function includeTypeConfig( string $type, array $files ) {
		$out = array();
		foreach ($files as $fileName) {
			$file = implode(DIRECTORY_SEPARATOR, [
				$this->config->value('config') . 'integrations',
				$type,
				$fileName . '.php'
			]);

			if ( file_exists( $file ) ) {
				$out[$fileName] = include $file;
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
