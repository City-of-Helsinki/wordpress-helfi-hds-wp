<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Settings extends Module {

	const PAGE_SLUG = 'helsinki-wp-settings';

	public function init() {
		add_action( 'admin_init', array( $this, 'tabSettings' ) );
		add_action( 'admin_menu', array( $this, 'page' ) );
		add_action( 'hds_wp_settings_tab_panel', array( $this, 'renderTabPanel' ) );
	}

	public function page(): void
	{
		add_menu_page(
			__('Helsinki WP', 'hds-wp'),
			__('Helsinki WP', 'hds-wp'),
			apply_filters(
				'hds_wp_settings_page_capability_requirement',
				'manage_options'
			),
			self::PAGE_SLUG,
		  array( $this, 'renderPage' ),
			'',
			null
		);
	}

	public function renderPage(): void
	{
		$tabs = $this->settingsPageTabs();
		$footer_links = $this->footer_links();

		include_once $this->config->value('path') . 'page.php';
	}

	protected function footer_links(): array
	{
		return \apply_filters(
			'hds_wp_settings_footer_links',
			array(
				array(
					'title' => __( 'Helsinki WordPress portal', 'hds-wp' ),
					'url' => 'https://wordpress.hel.fi/',
					'target' => '_blank',
				),
				array(
					'title' => __( 'WordPress User Guides', 'hds-wp' ),
					'url' => 'https://wordpressohjeet.hel.fi/',
					'target' => '_blank',
				),
			)
		);
	}

	public function renderTabPanel( string $tab ): void
	{
		$tabs = $this->settingsPageTabs();
		if ( ! isset( $tabs[$tab] ) ) {
			return;
		}

		$settingsConfig = $this->settingsConfig( $tab );
		$page = $settingsConfig['page'];
		$section = $settingsConfig['section'];
		unset( $settingsConfig );

		if ( $this->config->value('compatibility')->supports( $tab ) ) {
			echo $this->themeCompatibilityNotice( $tabs[$tab]['title'] );
		}

		if ( $this->config->value('compatibility')->useSettings( $tab ) ) {
			include_once $this->config->value('path') . 'form.php';
		}
	}

	public function themeCompatibilityNotice( string $title ): string
	{
		return sprintf(
			'<div class="notice notice-success">
				<p>%s</p>
			</div>',
			sprintf(
				esc_html__( 'The "%s" feature is automatically enabled as the current theme declares compatibility with it.', 'hds-wp' ),
				$title
			)
		);
	}

	function settingsConfig( string $tab ): array
	{
		return array(
			'page' => 'helsinki-wp-settings-' . $tab,
			'section' => 'hds_wp_settings_' . $tab,
		);
	}

	public function tabSettings(): void
	{
		$settings = $this->config->value('compatibility')->settings();

		foreach ( $this->settingsPageTabs() as $tab => $config ) {
			if ( ! isset( $settings[$tab] ) ) {
				continue;
			}

			$hasSubSettings = is_array( $settings[$tab] );
			$enableSetting = $hasSubSettings ? array_filter( $settings[$tab] ) : $settings[$tab];

			if ( ! $enableSetting  ) {
				continue;
			}

			$settingsConfig = $this->settingsConfig( $tab );
			register_setting(
				$settingsConfig['page'],
				$settingsConfig['section'],
				array(
					'type' => 'array',
					'description' => '',
					'sanitize_callback' => array( $this, 'sanitizeSettings' ),
					'show_in_rest' => false,
					'default' => array(
						'enabled' => null,
					)
				)
			);

			$values = get_option( $settingsConfig['section'] );

			add_settings_section(
				$settingsConfig['section'],
				__( 'Settings', 'hds-wp' ),
				'__return_empty_string',
				$settingsConfig['page']
			);

			if ( $hasSubSettings ) {

				foreach ( $settings[$tab] as $key => $value ) {
					$field_name = $key . '_enabled';
					add_settings_field(
						$field_name,
						sprintf(
							'%s: %s',
							esc_html( 'Enabled', 'hds-wp' ),
							esc_html( $key )
						),
						array( $this, 'enabledSetting' ),
						$settingsConfig['page'],
						$settingsConfig['section'],
						array(
							'tab' => $tab,
							'section' => $settingsConfig['section'],
							'value' => $values[$field_name] ?? '',
						)
					);
				}

			} else {
				add_settings_field(
					'enabled',
					esc_html( 'Enabled', 'hds-wp' ),
					array( $this, 'enabledSetting' ),
					$settingsConfig['page'],
					$settingsConfig['section'],
					array(
						'tab' => $tab,
						'section' => $settingsConfig['section'],
						'value' => $values['enabled'],
					)
				);
			}

			do_action( 'hds_wp_register_tab_settings', $tab, $settingsConfig, $values );
		}
	}

	protected function settingsPageTabs(): array
	{
		return apply_filters( 'hds_wp_settings_tabs', array(
			'general' => array(
				'title' => __('General', 'hds-wp'),
			),
		) );
	}

	public function enabledSetting( array $args ): void
	{
		printf(
			'<label>
				<input class="code" type="checkbox" name="%s[enabled]" value="1" %s>
			</label>',
			esc_attr( $args['section'] ),
			checked( '1', $args['value'] ?? '0', false )
		);
	}

	public function sanitizeSettings( $option ): mixed
	{
		if ( is_array( $option ) ) {
			$out = array();
			foreach ($option as $key => $value) {
				$out[$key] = sanitize_text_field( $value );
			}
			return $out;
		} else {
			return sanitize_text_field( $option );
		}
	}

}
