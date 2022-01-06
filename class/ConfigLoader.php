<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class ConfigLoader extends Singleton
{

	protected static $path;

	protected function __construct( string $path ) {
		self::$path = $path;
	}

	public static function include( string $dir, array $types ) {
		foreach ($types as $type) {
			$file = self::$path . $dir . DIRECTORY_SEPARATOR . trim( $type ) . '.php';
			if ( file_exists( $file ) ) {
				include_once $file;
			}
		}
	}

	public static function load( string $dir, array $types ) {
		$config = array();
		foreach ($types as $type) {
			$file = self::$path . $dir . DIRECTORY_SEPARATOR . trim( $type ) . '.php';
			$config[$type] = file_exists( $file ) ? include_once $file : null;
		}
		return $config;
	}

}
