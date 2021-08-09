<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Topbar extends Module {

	public function init() {
		add_filter( 'body_class', array( $this, 'bodyClass' ) );
		add_action( 'wp_footer', array( $this, 'render' ) );
	}

	public function bodyClass( $classes ) {
		return array_merge(
			$classes,
			array(
				'has-hds-topbar'
			)
		);
	}

	public function links() {
		// TODO: pass pll existance in config
		$lang = function_exists('pll_current_language') ? pll_current_language('slug') : 'fi';

		$branding = array(
			'fi' => 'https://www.hel.fi/helsinki/fi',
			'sv' => 'https://www.hel.fi/helsinki/sv',
			'en' => 'https://www.hel.fi/helsinki/en',
		);

		$feedback = array(
			'fi' => 'https://www.hel.fi/helsinki/fi/kaupunki-ja-hallinto/osallistu-ja-vaikuta/palaute',
			'sv' => 'https://www.hel.fi/helsinki/sv/stad-och-forvaltning/delta/feedback',
			'en' => 'https://www.hel.fi/helsinki/en/administration/participate/feedback',
		);

		return array(
			'branding' => array(
				'title' => 'Hel.fi',
				'url' => $branding[$lang] ?? $branding['fi'],
			),
			'feedback' => array(
				'title' => esc_html__('Feedback', 'hds-wp'),
				'url' => $feedback[$lang] ?? $feedback['fi'],
			),
		);
	}

	public function render() {
		$links = $this->links();
		include_once $this->config->value('path') . 'element.php';
	}

}
