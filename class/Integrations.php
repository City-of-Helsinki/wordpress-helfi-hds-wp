<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Integrations extends Module {

	public function init()
	{
		$this->loadIncludes();

		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_filter( 'hds_wp_settings_tab_panel', array( $this, 'settingsTabPanel' ) );
	}

	protected function loadIncludes()
	{
		foreach ( $this->integrationTypes() as $type => $integrations ) {
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

	protected function provideIntegrationData( string $integration, array $files )
	{
		add_filter(
			"hds_wp_{$integration}_data",
			function () use ($integration, $files) {
				return $this->includeTypeConfig($integration, $files);
			}
		);
	}

	protected function includeTypeConfig( string $type, array $files )
	{
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

	public function settingsTab( $tabs )
	{
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

	public function settingsTabPanel( $tab ): void
	{
		if ( 'integrations' !== $tab ) {
			return;
		}

		foreach ( $this->integrationTypes() as $type => $integrations ) {

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

	private function integrationTypes(): array
	{
		return array(
			'api' => array(),
			'plugins' => array(
				'contact-form-7' => array(
					'title' => __( 'Contact Form 7', 'hds-wp' ),
					'description' => sprintf(
						'%s %s',
						__( 'Add Helsinki styling to contact forms.', 'hds-wp' ),
						__( 'Replaces date field with HDS DateInput.', 'hds-wp' )
					),
				),
				'wp-rss-aggregator' => array(
					'title' => __( 'WP RSS Aggregator', 'hds-wp' ),
					'description' => __( 'Enable custom default template for Helsinki theme.', 'hds-wp' ),
				),
				'yoast-seo' => array(
					'title' => __( 'Yoast SEO', 'hds-wp' ),
					'description' => __( 'Default configuration meta titles and descriptions, and custom meta variables.', 'hds-wp' ),
				),
			),
			'themes' => array(
				'helsinkiteema' => array(
					'title' => __( 'Helsinkiteema #1', 'hds-wp' ),
					'description' => __( 'A multipurpose WordPress theme of City of Helsinki.', 'hds-wp' ),
				),
			),
		);
	}
}
