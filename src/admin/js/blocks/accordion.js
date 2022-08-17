(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;
	const { select, dispatch } = wp.data;

	function accordionTitle(props) {
		if (props.attributes.title != null && props.attributes.title != '') {
			return createElement(
				'h2',
				{className: 'accordion__heading'},
				createElement(
					Fragment, {},
					props.attributes.title ? props.attributes.title : ''
				),
			);
		}
		return '';
	}

	function accordionDescription(props) {
		if (props.attributes.description != null && props.attributes.description != '') {
			return createElement(
				'p',
				{className: 'accordion-description'},
				createElement(
					Fragment, {},
					props.attributes.description ? props.attributes.description : ''
				),
			);
		}
		return '';
	}

	function accordionControls(props) {
		return hdsInspectorControls(
			{
				title: __( 'Settings', 'hds-wp' ),
				initialOpen: false,
			},
			hdsTextControl({
				label: __( 'Title', 'hds-wp' ),
				value: props.attributes.title,
				attribute: 'title',
			}, props),
			hdsTextAreaControl({
				label: __( 'Description', 'hds-wp' ),
				value: props.attributes.description,
				attribute: 'description',
			}, props)
		);
	}


	function edit() {
		return function(props) {

			const {
				clientId
			} = props;
		
			var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
			children.forEach(function(child){
				if (props.attributes.title != null && props.attributes.title != '') {
					dispatch('core/block-editor').updateBlockAttributes(child.clientId, {headingLevel: 'h3'});
				}
				else {
					dispatch('core/block-editor').updateBlockAttributes(child.clientId, {headingLevel: 'h2'});
				}
			});

			return createElement(
				Fragment, {},
				accordionControls(props),
				createElement(
					'div', useBlockProps({
						className: 'accordion-wrapper',
					}),
					accordionTitle(props),
					accordionDescription(props),
					createElement(
						'div', {
							className: 'accordion',
						},
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
				)
			);
		}
	}

	function save() {
		return function( props ) {
			return createElement(
				Fragment, {},
				createElement(
					'div', useBlockProps.save({
						className: 'accordion-wrapper',
					}),
					accordionTitle(props),
					accordionDescription(props),
					createElement(
						'div', {
							className: 'accordion',
						},
						createElement(InnerBlocks.Content)
					)
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
		attributes: {
			title: {
				type: 'string',
			},
			description: {
				type: 'string',
			}
		},
		edit: edit(),
		save: save(),
	});

})(window.wp);
