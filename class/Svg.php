<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Svg extends Module {

	public function logo( string $name = 'default' ) {
		$path = $this->config->value( 'logos', $name );

		$viewboxes = array(
			'default' => '0 0 78 36',
			'sv' => '0 0 104 36',
		);

		return $path ? sprintf(
			'<svg class="logo-icon logo-icon--%s" viewBox="%s" aria-hidden="true">
				<path d="%s"></path>
			</svg>',
			esc_attr( $name ),
			esc_attr( $viewboxes[$name] ?? $viewboxes['default'] ),
			$path
		) : '';
	}

	public function koros( string $name, string $id, array $size = array() ) {
		$path = $this->config->value( 'koros', $name );
		$size = wp_parse_args(
			$size,
			array(
				'height' => 42, //85
				'width' => 53, // 106
				'scale' => 2.65, // 5.3
			)
		);

		return $path ? sprintf(
			'<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="%6$s" height="%3$d">
				<defs>
					<pattern id="%1$s" x="0" y="0" width="%2$d" height="%3$d" patternUnits="userSpaceOnUse">
						<path transform="scale(%4$s)" d="%5$s"></path>
					</pattern>
				</defs>
				<rect fill="url(#%1$s)" width="%6$s" height="%3$d"></rect>
			</svg>',
			esc_attr( "koros_{$name}-{$id}" ),
			esc_attr( $size['width'] ),
			esc_attr( $size['height'] ),
			esc_attr( $size['scale'] ),
			$path,
			'100%'
		) : '';
	}

	public function icon( string $type, string $name ) {
		$path = $this->config->value( $type, $name );
		return $path ? sprintf(
			'<svg class="icon icon--%s icon--%s" viewBox="%s" aria-hidden="true" tabindex="-1">
				<path d="%s"></path>
			</svg>',
			esc_attr( $type ),
			esc_attr( $name ),
			'0 0 24 24',
			$path
		) : '';
	}

	public function placeholder( string $name ) {
		$path = $this->config->value( 'placeholder', $name );
		return $path ? sprintf(
			'<svg class="icon icon--%s" viewBox="%s" aria-hidden="true" tabindex="-1">
				<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<path d="%s" fill-rule="nonzero"></path>
				</g>
			</svg>',
			esc_attr( $name ),
			'0 0 182 182',
			$path
		) : '';
	}

}
