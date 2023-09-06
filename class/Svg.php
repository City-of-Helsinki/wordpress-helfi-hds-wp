<?php
namespace ArtCloud\Helsinki\Plugin\HDS;

class Svg extends Singleton {

	static $config;

	protected function __construct( $config ) {
		static::$config = $config;
	}

	public static function logo( string $name = 'default' ) {
		$path = static::$config->value( 'logos', $name );

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

	public static function koros( string $name, string $id, array $size = array() ) {
		$path = static::$config->value( 'koros', $name );
		$size = wp_parse_args(
			$size,
			array(
				'height' => 42, //85
				'width' => 53, // 106
				'scale' => 2.65, // 5.3
			)
		);

		$pathHtml = '';
		if ($name == 'vibration') {
			$pathHtml = sprintf(
				'<polygon transform="scale(%1$s)" points="%2$s"></polygon>',
				esc_attr( $size['scale'] ),
				$path
			);
		}
		else {
			$pathHtml = sprintf(
				'<path transform="scale(%1$s)" d="%2$s"></path>',
				esc_attr( $size['scale'] ),
				$path
			);

		}

		return $path ? sprintf(
			'<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="%5$s" height="%3$d">
				<defs>
					<pattern id="%1$s" x="0" y="0" width="%2$d" height="%3$d" patternUnits="userSpaceOnUse">
						%4$s
					</pattern>
				</defs>
				<rect fill="url(#%1$s)" width="%5$s" height="%3$d"></rect>
			</svg>',
			esc_attr( "koros_{$name}-{$id}" ),
			esc_attr( $size['width'] ),
			esc_attr( $size['height'] ),
			$pathHtml,
			'100%'
		) : '';
	}

	public static function icon( string $type, string $name ) {
		return sprintf(
			'<svg class="icon mask-icon icon--%s icon--%s hds-icon--%s" viewBox="%s" aria-hidden="true"></svg>',
			esc_attr( $type ),
			esc_attr( $name ),
			esc_attr( $name ),
			'0 0 24 24',
		);
	}

	public static function placeholder( string $name ) {
		$path = static::$config->value( 'placeholder', $name );
		return $path ? sprintf(
			'<svg class="icon icon--%s" viewBox="%s" aria-hidden="true">
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
