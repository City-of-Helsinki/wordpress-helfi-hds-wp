<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

abstract class Singleton
{

	protected function __construct( $args = null ) {}

	public static function instance( $args = null ) {
		static $instances = array();

        $calledClass = get_called_class();

        if ( ! isset( $instances[$calledClass] ) ) {
            $instances[$calledClass] = new $calledClass( $args );
        }

        return $instances[$calledClass];
	}

}
