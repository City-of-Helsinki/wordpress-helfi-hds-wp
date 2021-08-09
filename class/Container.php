<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Container {

	private static $instance = null;

	private static $modules = array();

	private function __construct() {}

	public static function instance() {
		if ( self::$instance === null ) {
			self::$instance = new Container();
		}

		return self::$instance;
	}

	public static function add( string $key, Module $module ) {
		self::$modules[$key] = $module;
	}

	public static function remove( string $key ) {
		if ( isset( self::$modules[$key] ) ) {
			unset( self::$modules[$key] );
		}
	}

	public static function module( string $key ) {
		return ! empty( self::$modules[$key] ) ? self::$modules[$key] : null;
	}

}
