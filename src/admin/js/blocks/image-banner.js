(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
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
							mediaUrl: media.sizes.full.url,
							mediaWidth: media.sizes.full.width,
							mediaHeight: media.sizes.full.height,
							mediaAlt: media.alt,
							mediaSrcset: media.sizes.full.srcset,
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
		];
		return classNames.join(' ');
	}

	function contentButton(props) {
		return hdsContentButton(
			props,
			{
				className: 'content__link hds-button hds-button--supplementary',
				href: props.attributes.buttonUrl,
			},
			props.attributes.isExternalUrl ? hdsExternalLinkIcon() : hdsArrowIcon(),
		);
	}

	function edit() {
		return function(props) {
			return createElement(
				Fragment, {},
				toolbar( props ),
				hdsInspectorControls(
					{
						title: wp.i18n.__( 'Content', 'hds-wp' ),
						initialOpen: false,
					},
					hdsContentTitleControl(props),
					hdsContentTextControl(props),
					hdsButtonTextControl(props),
					hdsButtonUrlControl(props),
          hdsExternalUrlControl(props)
				),
				createElement('div', useBlockProps({
						className: classNamesString(props),
					}),
					hdsSingleImage(
						imageConfig(props)
					),
					hdsContent(
						props,
						createElement(
							'div', {className: 'content__inner'},
							hdsContentTitle(props),
							hdsContentText(props),
							contentButton(props)
						)
					)
				)
			);
		}
	}

	function save() {
		return function(props) {
			return createElement('div', useBlockProps.save({
					className: classNamesString(props),
				}),
				hdsSingleImage(
					imageConfig(props)
				),
				hdsContent(
					props,
					createElement(
						'div', {className: 'content__inner'},
						hdsContentTitle(props),
						hdsContentText(props),
						contentButton(props)
					)
				)
			);
		}
	}

	registerBlockType('hds-wp/image-banner', {
		apiVersion: 2,
		title: __( 'Helsinki - Image Banner', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'format-gallery',
		supports: {
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
		edit: edit(),
		save: save()
	});

})(window.wp);
