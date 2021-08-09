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
							label: __('Select image'),
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
				className: 'content__link hds-button button',
				href: props.attributes.buttonUrl,
			},
			hdsArrowIcon()
		);
	}

	function editBanner() {
		return function(props) {
			return createElement(
				Fragment, {},
				toolbar( props ),
				hdsInspectorControls(
					{
						title: wp.i18n.__('Content'),
						initialOpen: false,
					},
					hdsContentTitleControl(props),
					hdsContentTextControl(props),
					hdsButtonTextControl(props),
					hdsButtonUrlControl(props),
				),
				createElement('div', useBlockProps({
						className: classNamesString(props),
					}),
					hdsSingleImage(
						imageConfig(props)
					),
					hdsContent(
						props,
						hdsContentTitle(props),
						hdsContentText(props),
						contentButton(props)
					)
				)
			);
		}
	}

	function saveBanner() {
		return function(props) {
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
					contentButton(props)
				)
			);
		}
	}

	registerBlockType('hds-wp/image-text', {
		apiVersion: 2,
		title: __( 'HDS - Image & Text' ),
		category: 'hds-wp',
		icon: 'format-gallery',
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
				default: '',
			},
			buttonUrl: {
				type: 'string',
				default: '',
			},
		},
		edit: editBanner(),
		save: saveBanner()
	});

})(window.wp);
