(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, registerBlockStyle, unregisterBlockStyle } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { ToolbarGroup, ToolbarButton, Button } = wp.components;

	function toolbar( props ) {
		return createElement(BlockControls, {key: 'controls'},
			createElement(ToolbarGroup, {},
				hdsMediaUpload(
					props.attributes.mediaId,
					function( media ) {
						props.setAttributes({
							mediaId: media.id,
							mediaUrl: media.sizes.large ? media.sizes.large.url : media.sizes.full.url,
							mediaWidth: media.sizes.large ? media.sizes.large.width : media.sizes.full.width,
							mediaHeight: media.sizes.large ? media.sizes.large.height : media.sizes.full.height,
							mediaAlt: media.alt,
							mediaSrcset: media.sizes.large ? media.sizes.large.srcset : media.sizes.full.srcset,
						});
					},
					function( mediaUpload ) {
						return createElement(Button,{
							icon: 'format-image',
							label: __( 'Select image', 'hds-wp' ),
							onClick: mediaUpload.open
						});
					}
				),
				hdsAlignLeftButton(function(value){
					props.setAttributes({
						alignment: 'left',
					});
				}),
				hdsAlignRightButton(function(value){
					props.setAttributes({
						alignment: 'right',
					});
				}),
			)
		);
	}

	function imageConfig(props) {
		return {
			id: props.attributes.mediaId,
			alt: props.attributes.mediaAlt,
			src: props.attributes.mediaUrl,
			srcset: props.attributes.mediaSrcset,
			width: props.attributes.mediaWidth,
			height: props.attributes.mediaHeight,
		};
	}

	function classNamesString(props) {
		var classNames = [
			'align-' + props.attributes.alignment,
			props.attributes.mediaId ? 'has-image' : 'has-placeholder',
			hds_wp['hasInvertedColor'] ? 'has-invert-color' : '',
		];
		return classNames.join(' ');
	}

	function contentButton(props) {
		return hdsContentButton(
			props,
			{
				className: 'content__link hds-button hds-button--primary',
				href: props.attributes.buttonUrl,
			},
		);
	}

	function edit() {
		return function(props) {
			var content = null;

			if (props.isSelected) {
				content = createElement(
					Fragment, {},
					toolbar( props ),
					hdsInspectorControls(
						{
							title: __( 'Content', 'hds-wp' ),
							initialOpen: false,
						},
						hdsButtonTextControl(props),
						hdsButtonUrlControl(props),
						hdsTargetBlankControl(props, {
							help: wp.element.createElement('p', {}, wp.i18n.__( 'I have made sure that the description of this link clearly states that it opens in a new tab. ', 'hds-wp' ), wp.element.createElement('a', {href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html', target: '_blank'}, wp.i18n.__( 'Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).', 'hds-wp' )))
						}),				
					),
					createElement('div', {className: 'image-text--wrapper'},
						hdsSingleImage(
							imageConfig(props)
						),
						hdsContent(
							props,
							hdsContentTitleRich(props, {placeholder: __( 'This is the title', 'hds-wp' )}),
							hdsContentTextRich(props, {placeholder: __( 'This is the excerpt.', 'hds-wp' )}),
							contentButton(props)
						)
					)
				);	
			}
			else {
				content = createElement( wp.serverSideRender, {
					block: 'hds-wp/image-text',
					attributes: props.attributes,
					httpMethod: 'POST',
				});
			}

			return createElement('div', useBlockProps({className: classNamesString(props)}), content);
		}	
	}

	function save() {
		return function(props) {
			return createElement( Fragment, {}, createElement(InnerBlocks.Content) );
		};
	}

	const v1 = {
		attributes: {
			alignment: {
				type: 'string',
				default: 'right',
			},
			mediaId: {
				type: 'number',
				default: 0
			},
			mediaUrl: {
				type: 'string',
				default: '',
			},
			mediaWidth: {
				type: 'number',
				default: 0
			},
			mediaHeight: {
				type: 'number',
				default: 0
			},
			mediaAlt: {
				type: 'string',
				default: '',
			},
			mediaSrcset: {
				type: 'string',
				default: '',
			},
			contentTitle: {
				type: 'string',
				default: '',
			},
			contentText: {
				type: 'string',
				default: '',
			},
			buttonText: {
				type: 'string',
				default: '',
			},
			buttonUrl: {
				type: 'string',
				default: '',
			},
			isExternalUrl: {
				type: 'boolean',
				default: false,
			},
		},
		supports: {
			color: true,
			anchor: true,
		},
		save: function(props) {
			return createElement('div', useBlockProps.save({
					className: classNamesString(props),
				}),
				hdsSingleImage(
					imageConfig(props)
				),
				hdsContent(
					props,
					hdsContentTitle(props),
					hdsContentText(props),
					hdsContentButton(
						props,
						{
							className: 'content__link hds-button hds-button--secondary',
							href: props.attributes.buttonUrl,
						},
						props.attributes.isExternalUrl ? hdsExternalLinkIcon() : hdsArrowIcon(),
					)
				)
			);
		},
	};


	registerBlockType('hds-wp/image-text', {
		apiVersion: 2,
		title: __( 'Helsinki - Image & Text', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'format-gallery',
		keywords: [ 'Helsinki - Kuva & teksti' ],
		supports: {
			color: true,
			anchor: true,
		},
		attributes: {
			alignment: {
				type: 'string',
				default: 'right',
			},
			mediaId: {
				type: 'number',
				default: 0
			},
			mediaUrl: {
				type: 'string',
				default: '',
			},
			mediaWidth: {
				type: 'number',
				default: 0
			},
			mediaHeight: {
				type: 'number',
				default: 0
			},
			mediaAlt: {
				type: 'string',
				default: '',
			},
			mediaSrcset: {
				type: 'string',
				default: '',
			},
			contentTitle: {
				type: 'string',
				default: '',
			},
			contentText: {
				type: 'string',
				default: '',
			},
			buttonText: {
				type: 'string',
				default: __('Button Text', 'hds-wp'),
			},
			buttonUrl: {
				type: 'string',
				default: '',
			},
			targetBlank: {
				type: 'boolean',
				default: false,
			},
			anchor: {
				type: 'string',
				default: '',
			},
		},
		edit: edit(),
		save: save(),
		deprecated: [
			v1,
		],
	});


	unregisterBlockStyle('hds-wp/image-text', 'default');
	registerBlockStyle('hds-wp/image-text', {
		name: 'default',
		label: __( 'Secondary color', 'hds-wp' ),
		isDefault: true,
	});

	registerBlockStyle('hds-wp/image-text', {
		name: 'primary-color',
		label: __( 'Primary color', 'hds-wp' ),
	});


})(window.wp);
