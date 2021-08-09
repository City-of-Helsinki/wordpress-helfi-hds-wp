<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

use ArtCloud\Helsinki\Plugin\HDS\Interfaces\Module as ModuleInterface;
use ArtCloud\Helsinki\Plugin\HDS\Interfaces\ModuleConfig as ModuleConfig;

class Module implements ModuleInterface {

	protected $config;

	public function __construct( ModuleConfig $config ) {
		$this->config = $config;
	}

	public function init() {}

}
