<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Assets extends Module {
	public $minified;

	public function init() {
		$this->minified = $this->config->value('debug') ? '' : 'min';

		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );
		add_action( 'customize_register', array( $this, 'modify_customizer' ) );

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
			add_action( 'wp_enqueue_scripts', array( $this, 'publicStyles' ), 2 );
		}

		if ( $this->config->value('favicon') ) {
			add_filter( 'get_site_icon_url', array( $this, 'favicon_main' ), 100, 3 );
			add_action( 'wp_head', array( $this, 'favicon' ), 100 );
			add_action( 'admin_head', array( $this, 'favicon' ), 100 );
			add_action( 'login_head', array( $this, 'favicon' ), 100 );
			add_action( 'helsinki_login_head', array( $this, 'favicon' ), 100 );
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

	public function modify_customizer( $wp_customize ) {
		//remove site icon setting
		$wp_customize->remove_control( 'site_icon' );
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

	public function adminScripts( string $hook ) {
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
		wp_localize_script('helsinki-wp-admin-scripts', 'hds_wp', array(
			'hasInvertedColor' => function_exists('helsinki_scheme_has_invert_color') ? helsinki_scheme_has_invert_color() : false,
		));
	
	}

	public function adminStyles( string $hook ) {
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
		) );
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

	public function favicon() {
		return printf('<link rel="icon" href="%1$s/favicon-32x32.ico" sizes="any">
		<link rel="icon" href="%1$s/favicon.svg" type="image/svg+xml">
		<link rel="apple-touch-icon" href="%1$s/apple-touch-icon.png">
		<link rel="manifest" href="%1$s/manifest.webmanifest">',
		$this->assetUrl('img', 'favicon', '', ''));
	}

	public function favicon_main($url, $size, $blog_id) {
		return $this->assetUrl('img', 'favicon/favicon.svg', '', '');
	}
}
