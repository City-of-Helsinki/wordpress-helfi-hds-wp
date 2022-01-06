<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class ModuleFactory extends Singleton
{

	protected static $configLoader;

	protected function __construct( ConfigLoader $configLoader ) {
		self::$configLoader = $configLoader;
	}

	public static function module( string $name, array $args = array(), array $types = array(), array $includes = array() )
	{
		$class = __NAMESPACE__ . '\\' . $name;

		if ( $includes ) {
			self::$configLoader::include(
				strtolower( $name ),
				$includes
			);
		}

		return new $class(
			self::moduleConfig( $name, $args, $types )
		);
	}

	public static function moduleConfig( string $name, array $args = array(), array $types = array() )
	{
		if ( $types ) {
			return new BaseConfig( array_merge(
				$args,
				self::$configLoader::load(
					strtolower( $name ),
					$types
				)
			) );
		} else {
			return new BaseConfig( $args );
		}
	}

}
