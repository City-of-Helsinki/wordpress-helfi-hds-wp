(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, getBlockContent } = wp.blocks;
	const { Fragment, createElement, render, renderToString } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;
	const { select, dispatch } = wp.data;

	function closePanel(toggle, panel) {
		toggle.setAttribute('aria-expanded', 'false');
		panel.setAttribute('hidden', 'true');
	}

	function openPanel(toggle, panel) {
		toggle.setAttribute('aria-expanded', 'true');
		panel.removeAttribute('hidden');
	}

	function isOpen(toggle) {
		return 'true' === toggle.getAttribute('aria-expanded');
	}

	function currentOpen(element) {
		return element.closest('.accordion__section').querySelector('.accordion__toggle[aria-expanded="true"]');
	}

	function togglePanel(toggle) {
		return toggle.parentElement.nextElementSibling;
	}

	function closeCurrent(element) {
		var currentToggle = currentOpen(element);
		var currentPanel = currentToggle ? togglePanel(currentToggle) : null;
		if ( currentToggle && currentPanel ) {
			closePanel(
				currentToggle,
				currentPanel
			);
		}
	}

	function panelControls(props) {
		return hdsInspectorControls(
			{
				title: __( 'Settings', 'hds-wp' ),
				initialOpen: false,
			},
			hdsTextControl({
				label: __( 'Panel Title', 'hds-wp' ),
				value: props.attributes.panelTitle,
				attribute: 'panelTitle',
			}, props),
		);
	}

	function panelTitle(props) {
		return createElement(
			props.attributes.headingLevel,
			{className: 'accordion__title'},
			panelToggle(props)
		);
	}

	function panelToggle(props) {
		return createElement(
			'button',
			{
				id: 'panel-toggle-' + props.attributes.blockId,
				className: 'accordion__toggle',
				type: 'button',
				'aria-controls': 'panel-' + props.attributes.blockId,
				'aria-expanded': 'false',
				onClick: function(event) {
					//closeCurrent(event.currentTarget);

					var panel = togglePanel(event.currentTarget);
					if ( isOpen(event.currentTarget) ) {
						closePanel(event.currentTarget, panel);
					} else {
						openPanel(event.currentTarget, panel);
					}
				}
			},
			createElement(
				Fragment, {},
				props.attributes.panelTitle
			),
			panelIcon(props)
		);
	}

	function panelIcon(props) {
		return createElement(
			'span',
			{className: 'accordion__icon'},
			hdsAngleIcon()
		);
	}

	function panelContent(props, innerBlocks) {
        return createElement(
            'div',
            {className: 'accordion__content'},
            createElement(innerBlocks, 
                {
                    allowedBlocks: [
                        'core/heading',
                        'core/paragraph',
                        'core/list',
                        'core/table',
                        'core/freeform',
                        'core/quote',
                        'core/buttons',
                        'core/button',
                        'core/image',
                        'core/embed',
                        'core/file',
                    ]
                })
        );
        var el = document.createElement( 'html' );
        el.innerHTML = content;

		return el.getElementsByTagName( 'div' );
	}

	function panelClose(props) {
		return createElement(
			'button',
			{
				className: 'accordion__close',
				type: 'button',
				onClick: function(event){
					event.preventDefault();
					closeCurrent(event.currentTarget);
				}
			},
			createElement( 'span', {}, __( 'Close', 'hds-wp' ) ),
			hdsAngleIcon()
		);
	}

	function edit() {
		return function(props) {

			if ( ! props.attributes.blockId ) {
				props.setAttributes({
					blockId: props.clientId,
				});
			}

			const innerContent = getBlockContent( select('core/block-editor').getBlock(props.clientId));
			props.attributes.innerContent = innerContent;

			var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId( props.clientId ))[0];
			dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
				panels: select('core/block-editor')
				.getBlocks(parent.clientId)
				.map(function(block){
				  return block.attributes;
				})
			});

            //var pContent = panelContent(props, InnerBlocks);

			return createElement(
				Fragment, {},
				panelControls(props),
                createElement(
                    'div',
                    useBlockProps({
                        className: 'accordion__section',
                    }),
                    createElement(
                        'hds-accordion', {
                            heading: props.attributes.panelTitle,
                            language: 'fi',
                            card: props.attributes.hasCard,
                            border: props.attributes.hasBorder,
                            size: props.attributes.size,
                            headingLevel: props.attributes.headingLevel,
                        }, 
                        panelContent(props, InnerBlocks)
                    )
                ),
			);
		}
	}

	function save() {
		return function( props ) {
			const parentClientId = select( 'core/block-editor' ).getBlockHierarchyRootClientId( props.attributes.blockId );
			const parentAttributes = select('core/block-editor').getBlockAttributes( parentClientId );

			return createElement(InnerBlocks.Content, useBlockProps.save());
		}
	}

	registerBlockType('hds-wp/accordion-panel-wc', {
		apiVersion: 2,
		title: __( 'Helsinki - Web Component Accordion Panel', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'format-gallery',
		supports: {
			anchor: true,
		},
		parent: [ 'hds-wp/accordion-wc' ],
		attributes: {
			panelTitle: {
				type: 'string',
				default: __( 'Panel', 'hds-wp' ),
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
			blockId: {
				type: 'string',
			},
			headingLevel: {
				type: 'string',
				default: 'h2',
			},
			innerContent: {
				type: 'string',
				default: '',
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
