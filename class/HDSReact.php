<?php

namespace ArtCloud\Helsinki\Plugin\HDS;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class HDSReact extends Module
{
	protected array $scripts = array();

	public function init()
	{
		\add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		\add_action( 'helsinki_wp_enqueue_hds_react', array( $this, 'enqueue_scripts' ) );
		\add_action( 'helsinki_wp_add_hds_react_dependency', array( $this, 'add_dependency' ) );
	}

	public function register_scripts(): void
	{
		\wp_register_script(
			$this->script_handle(),
			$this->script_url(),
			$this->script_dependencies(),
			$this->script_version(),
			$this->script_args()
		);
	}

	public function enqueue_scripts(): void
	{
		\wp_enqueue_script( $this->script_handle() );
	}

	public function add_dependency( string $handle )
	{
		if ( ! isset( $this->scripts[$handle] ) ) {
			$this->scripts[$handle] = true;
		}
	}

	protected function script_handle(): string
	{
		return 'helsinki-wp-hds-react';
	}

	protected function script_url(): string
	{
		return $this->config->value('url') . '/react/components.js';
	}

	protected function script_dependencies(): array
	{
		return array( 'react', 'react-dom', 'lodash', ...array_keys( $this->scripts ) );
	}

	protected function script_version(): string
	{
		return $this->config->value('debug')
			? (string) time()
			: $this->config->value('version');
	}

	protected function script_args(): array
	{
		return array( 'strategy' => 'defer', 'in_footer' => true );
	}
}
