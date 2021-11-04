(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, MediaUpload, MediaUploadCheck, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;

	function editBanner() {
		return function(props) {
			return createElement(
				Fragment, {},
				createElement(
					'div', {},
					'Hello editor'
				)
			);
		}
	}

	function saveBanner() {
		return function( props ) {
			return createElement(
				Fragment, {},
				createElement(
					'div', {},
					'Hello public'
				)
			);
		}
	}

	// registerBlockType('hds-wp/koros', {
	// 	apiVersion: 2,
	// 	title: __( 'Helsinki - Koros' ),
	// 	category: 'hds-wp',
	// 	icon: 'format-gallery',
	// 	supports: {
	// 	anchor: true,
	// },
	// 	attributes: {},
	// 	edit: editBanner(),
	// 	save: saveBanner(),
	// });

})(window.wp);
