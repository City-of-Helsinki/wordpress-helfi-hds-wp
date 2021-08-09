<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

use ArtCloud\Helsinki\Plugin\HDS\Interfaces\ModuleConfig;

class BaseConfig implements ModuleConfig {

	protected $data;

	public function __construct( array $data = array() ) {
		$this->data = $data;
	}

	public function data() {
		return $this->data;
	}

	public function value( string $key, string $name = '' ) {
		if ( $name ) {
			return $this->data[$key][$name] ?? null;
		} else {
			return $this->data[$key] ?? null;
		}
	}

}
