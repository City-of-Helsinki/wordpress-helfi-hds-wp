(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, getBlockContent } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { ToolbarGroup, ToolbarButton, Button } = wp.components;
    const { select, useSelect } = wp.data;

	function edit() {
		return function(props) {

            const isParentOfSelectedBlock = useSelect(function(selectFrom){
                return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
            });

			var content = null;
            if ( props.isSelected || isParentOfSelectedBlock ) {
                var stepClasses = 'content__inner content__inner--step' + (props.attributes.style == 'numbered' ? ' numbered' : '');
                content = createElement('div', useBlockProps(),
                    createElement('div', {className: 'content'},
                        createElement(
                            'div', {className: stepClasses},
                            props.attributes.style == 'numbered' ? props.attributes.order : ''
                        ),
                        createElement(
                            'div', {className: 'content__inner content__inner--text'},
                            hdsContentTitle(props),
                            createElement(
                                InnerBlocks,
                                {
                                    allowedBlocks: [
                                        'core/paragraph',
                                        'core/buttons'
                                    ],
                                }
                            )
                        )
                    )
                );
            }
            else {
                const innerContent = getBlockContent( select('core/block-editor').getBlock(props.clientId));
                const attributes = props.attributes;
                attributes.innerContent = innerContent;
                content = createElement('div', useBlockProps(), 
                    createElement( wp.serverSideRender, {
                        block: 'hds-wp/timeline-card',
                        attributes: attributes,
                        httpMethod: 'POST',
                    })
                );
            }

			return createElement(
				Fragment, {},
				hdsInspectorControls(
					{
						title: __( 'Content', 'hds-wp' ),
						initialOpen: false,
					},
					hdsContentTitleControl(props),
				),
				content
			);
		}
	}

	function save() {
		return function(props) {
			return createElement(InnerBlocks.Content, useBlockProps.save());
		}
	}

	registerBlockType('hds-wp/timeline-card', {
		apiVersion: 2,
		title: __( 'Helsinki - Phasing Card', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'format-gallery',
		supports: {
			anchor: true,
		},
        parent: [ 'hds-wp/timeline' ],
		attributes: {
			contentTitle: {
				type: 'string',
				default: '',
			},
            style: {
                type: 'string',
                default: 'numberless',
            },
            order: {
                type: 'number',
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
