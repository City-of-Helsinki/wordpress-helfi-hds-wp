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
			}, props)
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
					dispatch('core/block-editor').updateBlockAttributes(child.clientId, {headingLevel: 'h3'});
				}
				else {
					dispatch('core/block-editor').updateBlockAttributes(child.clientId, {headingLevel: 'h2'});
				}
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
			} else {
				content = createElement( wp.serverSideRender, {
				  block: 'hds-wp/accordion',
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
			},
			panels: {
				type: 'array',
				default: [],
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
		deprecated: [
			{
				save( props ) {
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
				},
			},
		],

	});

})(window.wp);
