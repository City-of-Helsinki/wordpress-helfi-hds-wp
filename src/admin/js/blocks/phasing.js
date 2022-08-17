(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;
	const { select, dispatch } = wp.data;

	function timelineTitle(props) {
		if (props.attributes.title != null && props.attributes.title != '') {
			return createElement(
				'h2',
				{className: 'timeline__heading'},
				createElement(
					Fragment, {},
					props.attributes.title ? props.attributes.title : ''
				),
			);
		}
		return '';
	}

	function timelineDescription(props) {
		if (props.attributes.description != null && props.attributes.description != '') {
			return createElement(
				'p',
				{className: 'excerpt'},
				createElement(
					Fragment, {},
					props.attributes.description ? props.attributes.description : ''
				),
			);
		}
		return '';
	}

    function styleOptions() {
        return [
          {label: __( 'Numberless', 'hds-wp' ), value: 'numberless'},
          {label: __( 'Numbered', 'hds-wp' ), value: 'numbered'},
        ];
      }
    

	function timelineControls(props) {
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
            hdsSelectControl({
                label: __( 'Style', 'hds-wp' ),
                value: props.attributes.style,
                attribute: 'style',
                options: styleOptions(),
            }, props)
		);
	}


	function edit() {
		return function(props) {

			const {
				clientId
			} = props;
		
			var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
            for (var i = 0; i < children.length; i++) {
                dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {
                    style: props.attributes.style,
                    order: i + 1,
                });
			}

			return createElement(
				Fragment, {},
				timelineControls(props),
				createElement(
					'div', useBlockProps({
						className: 'timeline-wrapper',
					}),
					timelineTitle(props),
                    timelineDescription(props),
					createElement(
						'div', {
							className: 'timeline',
						},
                        createElement(
                            'div', {
                                className: 'timeline-line',
                            },
                        ),    
						createElement(
							InnerBlocks,
							{
								allowedBlocks: ['hds-wp/timeline-card'],
								template: [
									['hds-wp/timeline-card', {}],
									['hds-wp/timeline-card', {}],
									['hds-wp/timeline-card', {}],
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
						className: 'timeline-wrapper',
					}),
					timelineTitle(props),
                    timelineDescription(props),
					createElement(
						'div', {
							className: 'timeline',
						},
                        createElement(
                            'div', {
                                className: 'timeline-line',
                            },
                        ),    
						createElement(InnerBlocks.Content)
					)
				)
			);
		}
	}

	registerBlockType('hds-wp/timeline', {
		apiVersion: 2,
		title: __( 'Helsinki - Phasing', 'hds-wp' ),
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
            style: {
                type: 'string',
                default: 'numberless'
            }
		},
		edit: edit(),
		save: save(),
	});

})(window.wp);
