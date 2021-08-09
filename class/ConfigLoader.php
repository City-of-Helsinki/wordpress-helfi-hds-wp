<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class ConfigLoader {

	protected $path;

	public function __construct( string $path ) {
		$this->path = $path;
	}

	public function include( string $dir, array $types ) {
		foreach ($types as $type) {
			$file = $this->path . $dir . DIRECTORY_SEPARATOR . trim( $type ) . '.php';
			if ( file_exists( $file ) ) {
				include_once $file;
			}
		}
	}

	public function load( string $dir, array $types ) {
		$config = array();
		foreach ($types as $type) {
			$file = $this->path . $dir . DIRECTORY_SEPARATOR . trim( $type ) . '.php';
			$config[$type] = file_exists( $file ) ? include_once $file : null;
		}
		return $config;
	}

}
