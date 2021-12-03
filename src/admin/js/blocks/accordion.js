(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;

	function editBanner() {
		return function(props) {
			return createElement(
				Fragment, {},
				createElement(
					'div', useBlockProps({
						className: 'accordion',
					}),
					createElement(
						InnerBlocks,
						{
							allowedBlocks: ['hds-wp/accordion-panel'],
							template: [
								['hds-wp/accordion-panel', {}],
								['hds-wp/accordion-panel', {}],
								['hds-wp/accordion-panel', {}],
							]
						}
					)
				)
			);
		}
	}

	function saveBanner() {
		return function( props ) {
			return createElement(
				Fragment, {},
				createElement(
					'div', useBlockProps.save({
						className: 'accordion',
					}),
					createElement(InnerBlocks.Content)
				)
			);
		}
	}

	registerBlockType('hds-wp/accordion', {
		apiVersion: 2,
		title: __( 'Helsinki - Accordion', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'format-gallery',
		supports: {
			anchor: true,
		},
		attributes: {},
		edit: editBanner(),
		save: saveBanner(),
	});

})(window.wp);
