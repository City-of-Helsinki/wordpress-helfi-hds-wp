<?php
$page = $_GET['page'] ?? '';
$selected_tab = $_GET['tab'] ?? 'general';
$selected_panel = $tabs[$selected_tab] ?? array();
$admin_url = admin_url( 'admin.php' );
?>
<section id="hds-wp-settings" class="settings">
	<header class="settings__header">
		<h1 class="settings__title">
			<?php esc_html_e( 'Helsinki Design System for WordPress', 'hds-wp' ); ?>
		</h1>
	</header>

	<div class="settings__tabs nav-tab-wrapper">
		<?php
			foreach ($tabs as $key => $config) :
				$selected = $selected_tab === $key;
				$classes = array(
					'settings__tab',
					'nav-tab'
				);
				if ( $selected ) {
					$classes[] = 'nav-tab-active';
				}
				$url = add_query_arg(
					array(
						'page' => $page,
						'tab' => $key,
					),
					$admin_url
				);
			?>
			<a id="<?php echo esc_attr( $key ); ?>" class="<?php echo implode( ' ', $classes ); ?>" href="<?php echo esc_url( $url ); ?>">
				<?php echo esc_html( $config['title'] ); ?>
			</a>
		<?php endforeach; ?>
	</div>

	<div class="settings__panels">
		<?php if ( $selected_panel ) : ?>
			<div id="<?php echo esc_attr( $selected_tab ); ?>-tab" class="settings__panel">
				<h2 class="settings__title settings__title--form"><?php echo esc_html( $selected_panel['title'] ); ?></h2>
				<?php

					if ( ! empty( $selected_panel['description'] ) ) {
						echo '<p class="description">' . esc_html( $selected_panel['description'] ) . '</p>';
					}

					do_action( 'hds_wp_settings_tab_panel', $selected_tab );
				?>
			</div>
		<?php endif; ?>
	</div>

	<footer class="settings__footer">
		<?php if ( $footer_links ) : ?>
			<ul class="link-list">
				<?php foreach ( $footer_links as $footer_link ) : ?>
					<li class="link-list__item">
						<a href="<?php echo esc_url( $footer_link['url'] ); ?>" target="<?php echo ! empty( $footer_link['target'] ) ? esc_attr( $footer_link['target'] ) : ''; ?>">
							<?php echo esc_html( $footer_link['title'] ); ?>
						</a>
					</li>
				<?php endforeach; ?>
			</ul>
	<?php endif; ?>
	</footer>
</section>
