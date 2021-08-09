<?php
namespace ArtCloud\Helsinki\Plugin\HDS\Interfaces;

interface ModuleConfig {
	public function data();
	public function value( string $key );
}
