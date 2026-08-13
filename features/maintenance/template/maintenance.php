<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use function ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance\create_maintenance_page;
use function ArtCloud\Helsinki\Plugin\HDS\Features\Maintenance\create_maintenance_page_meta;

$maintenance = create_maintenance_page();

do_action( 'helsinki_maintenance', $maintenance );

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<title><?php echo esc_html( $maintenance->site_title() ); ?></title>
		<meta charset="<?php echo esc_attr( $maintenance->charset() ); ?>" />
		<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, minimum-scale=1">
		<meta name="description" content="<?php echo esc_attr( $maintenance->site_description() ); ?>"/>
		<meta http-equiv="X-UA-Compatible" content="" />

		<?php
			$meta = create_maintenance_page_meta( $maintenance );

			foreach ( $meta->properties() as $property => $content ) {
				printf(
					'<meta property="%s" content="%s" />',
					esc_attr( $property ),
					parse_url( $content, PHP_URL_HOST ) ? esc_url( $content ) : esc_attr( $content )
				);
			}

		?>

		<?php do_action( 'helsinki_maintenance_head' ); ?>
	</head>

	<body class="maintenance">

		<?php do_action( 'helsinki_maintenance_top', $maintenance ); ?>

		<header id="masthead">
			<?php do_action( 'helsinki_maintenance_header_top', $maintenance ); ?>

			<div class="hds-container">
			  <?php do_action( 'helsinki_maintenance_header', $maintenance ); ?>
			</div>

			<?php do_action( 'helsinki_maintenance_header_bottom', $maintenance ); ?>
		</header>

		<main id="main">
			<?php do_action( 'helsinki_maintenance_main_top', $maintenance ); ?>

		    <div class="content">

				<div class="hds-container content__container">

					<?php do_action( 'helsinki_maintenance_main_before', $maintenance ); ?>

					<div class="content__main">
						<?php do_action( 'helsinki_maintenance_main', $maintenance ); ?>
					</div>

					<?php do_action( 'helsinki_maintenance_main_after', $maintenance ); ?>

				</div>
		    </div>

			<?php do_action( 'helsinki_maintenance_main_bottom', $maintenance ); ?>
		</main>

		<footer id="footer">
			<?php do_action( 'helsinki_maintenance_footer_top', $maintenance ); ?>

		    <div class="hds-container">
				<?php do_action( 'helsinki_maintenance_footer', $maintenance ); ?>
		    </div>

			<?php do_action( 'helsinki_maintenance_footer_bottom', $maintenance ); ?>
		</footer>

  		<?php do_action( 'helsinki_maintenance_bottom', $maintenance ); ?>

	</body>
</html>
