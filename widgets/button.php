<?php

class HDS_WP_Button extends WP_Widget {
	/**
	 * Constructs the new widget.
	 *
	 * @see WP_Widget::__construct()
	 */
	function __construct() {
		// Instantiate the parent object.
		parent::__construct(
			__CLASS__,
			_x( 'HDS Button', 'widget title', 'hds-wp' )
		);
	}

	/**
	 * The widget's HTML output.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Display arguments including before_title, after_title,
	 *                        before_widget, and after_widget.
	 * @param array $instance The settings for the particular instance of the widget.
	 */
	function widget( $args, $instance ) {}

	/**
	 * The widget update handler.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance The new instance of the widget.
	 * @param array $old_instance The old instance of the widget.
	 * @return array The updated instance of the widget.
	 */
	function update( $new_instance, $old_instance ) {
		return $new_instance;
	}

	/**
	 * Output the admin widget options form HTML.
	 *
	 * @param array $instance The current widget settings.
	 * @return string The HTML markup for the form.
	 */
	function form( $instance ) {
		return '';
	}
}
