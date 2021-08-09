<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Assets extends Module {
	public $prefix;

	public function init() {
		$this->prefix = $this->config->value('debug') ? '' : 'min';

		add_filter( 'hds_wp_settings_tabs', array( $this, 'settingsTab' ) );

		if ( $this->config->value('is_admin') ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'adminScripts' ), 1 );
			add_action( 'admin_enqueue_scripts', array( $this, 'adminStyles' ), 1 );
		}
		
		add_action( 'do_faviconico', array( $this, 'favicon' ), 1 );

		if ( ! $this->config->value('enabled') ) {
			return;
		}

		if ( $this->config->value('scripts') ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'publicScripts' ), 1 );
		}

		if ( $this->config->value('fonts') ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'fonts' ), 1 );
		}

		if ( $this->config->value('styles') ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'publicStyles' ), 2 );
		}

	}

	public function settingsTab( $tabs ) {
		return array_merge(
			$tabs,
			array(
				'assets' => array(
					'title' => __('Assets', 'hds-wp'),
					'description' => __('Adds HDS styles, scripts and fonts to the site.', 'hds-wp'),
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

	public function assetPath( string $directory, string $name, string $extension ) {
		return $this->dir(
			$this->config->value('path'),
			DIRECTORY_SEPARATOR,
			array($directory, $extension)
			) . $this->assetFile(array(
				$name,
				$this->prefix,
				$extension
			));
	}

	public function assetUrl( string $directory, string $name, string $extension ) {
		return $this->dir(
			$this->config->value('url'),
			'/',
			array($directory, $extension)
			) . $this->assetFile(array(
				$name,
				$this->prefix,
				$extension
			));
	}

	public function assetVersion( string $path ) {
		return $this->config->value('debug') ? filemtime( $path ) : $this->config->value('version');
	}

	public function adminScripts( string $hook ) {
		wp_enqueue_script(
			'hds-wp-admin-scripts',
			$this->assetUrl('admin', 'scripts', 'js'),
			apply_filters( 'hds_wp_admin_scripts_dependencies', array() ),
			$this->assetVersion( $this->assetPath('admin', 'scripts', 'js') ),
			true
		);
	}

	public function adminStyles( string $hook ) {
		wp_enqueue_style(
			'hds-wp-admin-styles',
			$this->assetUrl('admin', 'styles', 'css'),
			apply_filters( 'hds_wp_admin_styles_dependencies', array() ),
			$this->assetVersion( $this->assetPath('admin', 'styles', 'css') ),
			'all'
		);
	}

	public function publicScripts() {
		wp_enqueue_script(
			'hds-wp-scripts',
			$this->assetUrl('public', 'scripts', 'js'),
			apply_filters( 'hds_wp_scripts_dependencies', array() ),
			$this->assetVersion( $this->assetPath('public', 'scripts', 'js') ),
			true
		);
	}

	public function publicStyles() {
		wp_enqueue_style(
			'hds-wp-styles',
			$this->assetUrl('public', 'styles', 'css'),
			apply_filters( 'hds_wp_styles_dependencies', array() ),
			$this->assetVersion( $this->assetPath('public', 'styles', 'css') ),
			'all'
		);
	}

	public function fonts() {
		wp_enqueue_style(
			'hds-wp-fonts',
			$this->assetUrl('fonts', 'styles', 'css'),
			apply_filters( 'hds_wp_fonts_dependencies', array() ),
			$this->assetVersion( $this->assetPath('fonts', 'styles', 'css') ),
			'all'
		);
	}

	public function favicon() {
		wp_redirect(
			get_site_icon_url(
				32,
				$this->config->value('url') . '/img/favicon.ico'
			)
		);
		exit;
	}

}
