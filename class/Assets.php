<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Assets extends Module {
	public $minified;

	public function init() {
		$this->minified = $this->config->value('debug') ? '' : 'min';

		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );

		if ( $this->config->value('is_admin') ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'adminScripts' ), 1 );
			add_action( 'admin_enqueue_scripts', array( $this, 'commonScripts' ), 1 );
			add_action( 'admin_enqueue_scripts', array( $this, 'adminStyles' ), 1 );
		}

		if ( ! $this->config->value('enabled') ) {
			return;
		}

		if ( $this->config->value('scripts') ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'publicScripts' ), 1 );
			add_action( 'wp_enqueue_scripts', array( $this, 'commonScripts' ), 1 );
		}

		if ( $this->config->value('fonts') ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'fonts' ), 1 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'fonts' ), 1 );
		}

		if ( $this->config->value('styles') ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'publicStyles' ), 11 );
		}

		if ( $this->config->value('favicon') ) {
			add_filter( 'get_site_icon_url', array( $this, 'favicon' ), 10, 3 );
		}

	}

	public function settingsTab( $tabs ) {
		return array_merge(
			$tabs,
			array(
				'assets' => array(
					'title' => __('Assets', 'hds-wp'),
					'description' => __('Adds Helsinki styles, scripts and fonts to the site.', 'hds-wp'),
				),
			)
		);
	}

	public function implodeParts( array $parts, string $separator ) {
		return implode(
			$separator,
			array_filter( $parts )
		);
	}

	public function dir( string $base, string $separator, array $parts ) {
		return $base . $separator . $this->implodeParts($parts, '/') . $separator;
	}

	public function assetFile( array $parts ) {
		return $this->implodeParts($parts, '.');
	}

	public function assetPath( string $directory, string $name, string $minified, string $extension ) {
		return $this->dir(
			$this->config->value('path'),
			DIRECTORY_SEPARATOR,
			array($directory, $extension)
			) . $this->assetFile(array(
				$name,
				$minified,
				$extension
			));
	}

	public function assetUrl( string $directory, string $name, string $minified, string $extension ) {
		return $this->dir(
			$this->config->value('url'),
			'/',
			array($directory, $extension)
			) . $this->assetFile(array(
				$name,
				$minified,
				$extension
			));
	}

	public function assetVersion( string $path ) {
		return $this->config->value('debug') ? filemtime( $path ) : $this->config->value('version');
	}

	public function adminScripts() {
		wp_enqueue_script(
			'helsinki-wp-admin-scripts',
			$this->assetUrl('admin', 'scripts', $this->minified, 'js'),
			apply_filters( 'hds_wp_admin_scripts_dependencies', array() ),
			$this->assetVersion( $this->assetPath('admin', 'scripts', $this->minified, 'js') ),
			true
		);
		wp_set_script_translations(
			'helsinki-wp-admin-scripts',
			'hds-wp',
			untrailingslashit( PLUGIN_PATH ) . DIRECTORY_SEPARATOR . 'languages'
		);

		$pluginUrl = plugin_dir_url(__FILE__);
		$pluginUrl = str_replace('/class', '/src/admin/js/blocks', $pluginUrl);

		wp_localize_script('helsinki-wp-admin-scripts', 'hds_wp', array(
			'hasInvertedColor' => function_exists('helsinki_scheme_has_invert_color') ? helsinki_scheme_has_invert_color() : false,
			'blocksUrl' => $pluginUrl,
		));

	}

	public function adminStyles() {
		wp_enqueue_style(
			'helsinki-wp-admin-styles',
			$this->assetUrl('admin', 'styles', $this->minified, 'css'),
			apply_filters( 'hds_wp_admin_styles_dependencies', array() ),
			$this->assetVersion( $this->assetPath('admin', 'styles', $this->minified, 'css') ),
			'all'
		);
		if (function_exists('helsinki_theme_mod') && function_exists('helsinki_scheme_root_styles')) {
			$current_scheme = helsinki_theme_mod('helsinki_general_style', 'scheme');
			if (function_exists('helsinki_default_scheme')) {
				$current_scheme = $current_scheme ?: helsinki_default_scheme();
			}
			ob_start();
			helsinki_scheme_root_styles($current_scheme);
			$inlineStyle = ob_get_clean();
			wp_add_inline_style('helsinki-wp-admin-styles', $inlineStyle);
		}

	}

	public function publicScripts() {
		wp_enqueue_script(
			'helsinki-wp-scripts',
			$this->assetUrl('public', 'scripts', $this->minified, 'js'),
			apply_filters( 'hds_wp_scripts_dependencies', array('jquery', 'wp-i18n') ),
			$this->assetVersion( $this->assetPath('public', 'scripts', $this->minified, 'js') ),
			true
		);

		wp_localize_script('helsinki-wp-scripts', 'hds_wp', array(
			'cross' => Svg::icon('arrows-operators', 'cross'),
			'paperclip' => Svg::icon('forms-data', 'paperclip'),
			'remove' => __('Remove', 'hds-wp'),
			'alert-circle' => Svg::icon('notifications-expressions', 'alert-circle'),
			'info-circle' => Svg::icon('notifications-expressions', 'info-circle'),
			'check-circle' => Svg::icon('notifications-expressions', 'check-circle'),
			'error' => Svg::icon('notifications-expressions', 'error'),
			'follow_on_facebook' => __('Follow on Facebook', 'hds-wp'),
			'external_link_icon' => function_exists('helsinki_get_svg_icon') ? helsinki_get_svg_icon('link-external', 'inline-icon', __('(Link leads to external service)', 'helsinki-universal')) : Svg::icon('blocks', 'link-external'),
		) );

		add_action('wp_head', function() {
			echo '<div id="hds-cookiebanner-container"></div>';
		});

	}

	public function publicStyles() {
		wp_enqueue_style(
			'helsinki-wp-styles',
			$this->assetUrl('public', 'styles', $this->minified, 'css'),
			apply_filters( 'hds_wp_styles_dependencies', array( 'wp-block-library' ) ),
			$this->assetVersion( $this->assetPath('public', 'styles', $this->minified, 'css') ),
			'all'
		);
	}

	public function commonScripts() {
		wp_enqueue_script(
			'helsinki-wp-common-scripts',
			$this->assetUrl('common', 'scripts', $this->minified, 'js'),
			apply_filters( 'hds_wp_common_scripts_dependencies', array('jquery') ),
			$this->assetVersion( $this->assetPath('common', 'scripts', $this->minified, 'js') ),
			true
		);

		wp_enqueue_script(
			'helsinki-wp-web-components-scripts',
			$this->assetUrl('web-components', 'components', '', 'js'),
			apply_filters( 'hds_wp_scripts_dependencies', array('jquery', 'wp-i18n') ),
			$this->assetVersion( $this->assetPath('web-components', 'components', '', 'js') ),
			true
		);
	}

	public function fonts() {
		wp_enqueue_style(
			'helsinki-wp-fonts',
			$this->assetUrl('fonts', 'styles', $this->minified, 'css'),
			apply_filters( 'hds_wp_fonts_dependencies', array() ),
			$this->assetVersion( $this->assetPath('fonts', 'styles', $this->minified, 'css') ),
			'all'
		);
	}

	public function favicon($url, $size, $blog_id) {
		return $url ?: $this->assetUrl('img', 'favicon.ico', '', '');
	}

}
