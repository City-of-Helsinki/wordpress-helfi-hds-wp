(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, getBlockContent, hasChildBlocks } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;
	const { select, dispatch, useSelect } = wp.data;

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
			}, props),
			hdsCheckboxControl({
                label: wp.i18n.__( 'Card', 'hds-wp' ),
                checked: props.attributes.hasCard,
                attribute: 'hasCard',
            }, props),
            hdsCheckboxControl({
                label: wp.i18n.__( 'Border', 'hds-wp' ),
                checked: props.attributes.hasBorder,
                attribute: 'hasBorder',
            }, props),
			hdsSelectControl({
				label: __( 'Size', 'hds-wp' ),
				value: props.attributes.size,
				attribute: 'size',
				options: [
					{label: __( 'Small', 'hds-wp' ), value: 's'},
					{label: __( 'Medium', 'hds-wp' ), value: 'm'},
					{label: __( 'Large', 'hds-wp' ), value: 'l'},
				  ]
			}, props),
		
		);
	}


	function edit() {
		return function(props) {
			props.attributes.blockVersion = 2;

			var content = null;
			const {
				clientId
			} = props;
		
			var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
			children.forEach(function(child){
				if (props.attributes.title != null && props.attributes.title != '') {
					dispatch('core/block-editor').updateBlockAttributes(child.clientId, {headingLevel: '3'});
				}
				else {
					dispatch('core/block-editor').updateBlockAttributes(child.clientId, {headingLevel: '2'});
				}
				dispatch('core/block-editor').updateBlockAttributes(child.clientId, {hasCard: props.attributes.hasCard, hasBorder: props.attributes.hasBorder, size: props.attributes.size});

			});

			const isParentOfSelectedBlock = useSelect(function(selectFrom){
                return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
            });

			props.attributes.panels = select('core/block-editor')
			.getBlocks( props.clientId )
			.map(function(block){
			  var innerContent = '';
			  
			  if (block.innerBlocks.length > 0) {
				innerContent = getBlockContent( select('core/block-editor').getBlock(block.clientId));
			  }
			  block.attributes.innerContent = innerContent;
  
			  return block.attributes;
			});

			if ( props.isSelected || isParentOfSelectedBlock ) {
				content = createElement(
					Fragment, {},
					accordionControls(props),
					createElement(
						'div', {
							className: 'accordion-wrapper',
						},
						accordionTitle(props),
						accordionDescription(props),
						createElement(
							'div', {
								className: 'accordion',
							},
							createElement(
								InnerBlocks,
								{
									allowedBlocks: ['hds-wp/accordion-panel-wc'],
									template: [
										['hds-wp/accordion-panel-wc', {}],
										['hds-wp/accordion-panel-wc', {}],
										['hds-wp/accordion-panel-wc', {}],
									]
								}
							)
						)
					)
				);
			} else {
				content = createElement( wp.serverSideRender, {
				  block: 'hds-wp/accordion-wc',
				  attributes: props.attributes,
				  httpMethod: 'POST',
				});
			}
		
			return createElement(
				Fragment, {},
				createElement( 'div', useBlockProps(), content)
			);
		}
	}

	function save() {
		return function( props ) {
			return createElement(InnerBlocks.Content, useBlockProps.save());
		}
	}

	registerBlockType('hds-wp/accordion-wc', {
		apiVersion: 2,
		title: __( 'Helsinki - Web Component Accordion', 'hds-wp' ),
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
			},
			panels: {
				type: 'array',
				default: [],
			},
			hasCard: {
				type: 'boolean',
				default: false,
			},
			hasBorder: {
				type: 'boolean',
				default: false,
			},
			size: {
				type: 'string',
				default: 'm',
			},
			blockVersion: {
				type: 'number',
			},
			anchor: {
				type: 'string',
				default: '',
			},
		},
		edit: edit(),
		save: save(),
	});

})(window.wp);
