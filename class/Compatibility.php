<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Compatibility extends Module {

	protected $supported = null;
	protected $features = array();
	protected $settings = array();

	public function init() {
		$supports = $this->config->data();
		if ( ! $supports ) {
			$this->supported = false;
			return;
		}

		$this->supported = true;
		foreach ($this->featureDefaults() as $feature => $default ) {
			if ( ! isset( $supports[$feature] ) ) {
				$this->features[$feature] = $default;
				$this->settings[$feature] = ! $this->features[$feature];
				continue;
			}

			if ( ! is_array( $default ) ) {
				$this->features[$feature] = boolval( $supports[$feature] );
				$this->settings[$feature] = ! $this->features[$feature];
				continue;
			}

			$this->features[$feature] = array();
			$this->settings[$feature] = array();
			foreach ($default as $sub_feature => $default_value) {
				$this->features[$feature][$sub_feature] = isset( $supports[$feature][$sub_feature] ) ? boolval( $supports[$feature][$sub_feature] ) : $default_value;
				$this->settings[$feature][$sub_feature] = ! $this->features[$feature][$sub_feature];
			}
		}
	}

	protected function featureDefaults() {
		return array(
			'assets' => array(
				'scripts' => true,
				'styles' => true,
				'fonts' => true,
				'favicon' => true,
			),
			'blocks' => true,
			'cpt' => array(
				'faq' => true,
			),
			'topbar' => true,
			'widgets' => true,
		);
	}

	public function plugin() {
		return $this->supported;
	}

	public function features() {
		return $this->features;
	}

	public function settings() {
		return $this->settings;
	}

	public function topbar() {
		return $this->supports('topbar');
	}

	public function assets() {
		return $this->supports('assets');
	}

	public function scripts() {
		return $this->supports('assets', 'scripts');
	}

	public function styles() {
		return $this->supports('assets', 'styles');
	}

	public function fonts() {
		return $this->supports('assets', 'fonts');
	}

	public function favicon() {
		return $this->supports('assets', 'favicon');
	}

	public function widgets() {
		return $this->supports('widgets');
	}

	public function blocks() {
		return $this->supports('blocks');
	}

	public function cpt( string $key = '' ) {
		return $this->supports('cpt', $key);
	}

	public function useSettings( string $feature, string $key = '' ) {
		return $this->checkArray( $this->settings, $feature, $key );
	}

	public function supports( string $feature, string $key = '' ) {
		return $this->checkArray( $this->features, $feature, $key );
	}

	protected function checkArray( array $array, string $key, string $sub_key = '' ) {
		if ( $sub_key ) {
			return ! empty( $array[$key][$sub_key] );
		} else {
			if ( empty( $array[$key] ) ) {
				return false;
			}
			if ( is_array( $array[$key] ) ) {
				return ! empty( array_filter( $array[$key] ) );
			} else {
				return ! empty( $array[$key] );
			}
		}
	}

}
