<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Container extends Singleton
{

	private static $modules = array();

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
