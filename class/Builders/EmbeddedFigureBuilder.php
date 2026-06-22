<?php

declare(strict_types = 1);

namespace ArtCloud\Helsinki\Plugin\HDS\Builders;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class EmbeddedFigureBuilder
{
	private array $config;

	public function __construct()
	{
		$this->config = array();
	}

	public function id( string $id ): self
	{
		if ( $id ) {
			$this->config['id'] = $id;
		}

		return $this;
	}

	public function type( string $type ): self
	{
		if ( $type ) {
			$this->config['type'] = $type;
		}

		return $this;
	}

	public function source( string $source ): self
	{
		if ( $source ) {
			$this->config['source'] = $source;
		}

		return $this;
	}

	public function attribute( string $key, string|int|float|bool $value ): self
	{
		if ( 'src' === $key ) {
			return $this->source( $value );
		}

		if ( ! isset( $this->config['attributes'] ) ) {
			$this->config['attributes'] = array();
		}

		$this->config['attributes'][$key] = $value;

		return $this;
	}

	public function skip_link_before( string $text ): self
	{
		if ( $text ) {
			$this->config['skip_link_before'] = $text;
		}

		return $this;
	}

	public function skip_link_after( string $text ): self
	{
		if ( $text ) {
			$this->config['skip_link_after'] = $text;
		}

		return $this;
	}

	public function caption( string $text ): self
	{
		if ( $text ) {
			$this->config['caption'] = $text;
		}

		return $this;
	}

	public function external_link( string $url, string $label = '' ): self
	{
		if ( $url ) {
			$this->config['external_link'] = array(
				'url' => $url,
				'label' => $label ?: __( 'Open in new window', 'hds-wp' ),
			);
		}

		return $this;
	}

	public function aspect_ratio_16_9(): self
	{
		$this->config['aspect_ratio'] = '16-9';

		return $this;
	}

	public function with_container(): self
	{
		$this->config['with_container'] = true;

		return $this;
	}

	public function render(): string
	{
		$this->ensure_required_attributes();

		return $this->container_open()
			. $this->figure_open()
			. $this->figure_top()
			. $this->figure_inner_open()
			. $this->figure_iframe()
			. $this->figure_inner_close()
			. $this->figure_bottom()
			. $this->figure_close()
			. $this->container_close();
	}

	private function container_open(): string
	{
		return isset( $this->config['with_container'] )
			? sprintf(
				'<div class="hds-%s__container">',
				\esc_attr( $this->config['type'] )
			)
			: '';
	}

	private function figure_open(): string
	{
		$classes = 'wp-block-embed';

		if ( isset( $this->config['aspect_ratio'] ) ) {
			$classes .= sprintf(
				' wp-has-aspect-ratio wp-embed-aspect-%s',
				$this->config['aspect_ratio']
			);
		}

		return sprintf( '<figure class="%s">', \esc_attr( $classes ) );
	}

	private function figure_top(): string
	{
		return $this->skip_link_html(
			$this->config['skip_link_before'] ?? __( 'Move below the figure', 'hds-wp' ),
			'before',
			'after'
		);
	}

	private function figure_inner_open(): string
	{
		return '<div class="wp-block-embed__wrapper">';
	}

	private function figure_iframe(): string
	{
		if ( isset( $this->config['source'] ) ) {
			$attributes = $this->config['attributes'] ?? array();
			$attributes['src'] = $this->config['source'];

			$iframe = sprintf(
				'<iframe %s></iframe>',
				\hds_wp_reduce_html_attributes( $attributes )
			);

			return \apply_filters(
				'hds_wp_embedded_figure_iframe_html',
				$iframe,
				$this->config['type'],
				$attributes
			);
		}

		return '';
	}

	private function figure_inner_close(): string
	{
		return '</div>';
	}

	private function figure_bottom(): string
	{
		$content = $this->skip_link_html(
			$this->config['skip_link_after'] ?? __( 'Move above the figure', 'hds-wp' ),
			'after',
			'before'
		);

		return $content
			. $this->caption_html()
			. $this->external_link_html();
	}

	private function figure_close(): string
	{
		return '</figure>';
	}

	private function container_close(): string
	{
		return isset( $this->config['with_container'] ) ? '</div>' : '';
	}

	private function skip_link_html(
		string $label,
		string $from,
		string $to,
	): string
	{
		return \hds_wp_block_skip_link(
			$this->config['id'],
			$this->config['type'],
			$from,
			$to,
			$label
		);
	}

	private function external_link_html(): string
	{
		if ( isset( $this->config['external_link'] ) ) {
			return sprintf(
				'<a href="%s" target="_blank" class="block-embed-external-link" rel="noopener">%s</a>',
				\esc_url( $this->config['external_link']['url'] ),
				\esc_html( $this->config['external_link']['label'] )
			);
		}

		return '';
	}

	private function caption_html(): string
	{
		if ( isset( $this->config['caption'] ) ) {
			return sprintf(
				'<figcaption>%s</figcaption>',
				\esc_html( $this->config['caption'] )
			);
		}

		return '';
	}

	private function ensure_required_attributes(): void
	{
		if ( ! isset( $this->config['id'] ) ) {
			$this->config['id'] = sprintf( '%d%d', rand(1, 100), time() );
		}

		if ( ! isset( $this->config['type'] ) ) {
			$this->config['type'] = 'embedded-content';
		}
	}
}
