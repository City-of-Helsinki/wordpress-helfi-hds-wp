(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { ToolbarGroup, ToolbarButton, Button } = wp.components;

	function contentButton(props) {
		return hdsContentButton(
			props,
			{
				className: 'content__link hds-button button',
				href: props.attributes.buttonUrl,
				target: '_blank',
				rel: 'noopener',
			},
			props.attributes.isExternalUrl ? hdsExternalLinkIcon() : hdsArrowIcon(),
		);
	}

	function editBanner() {
		return function(props) {
			return createElement(
				Fragment, {},
				hdsInspectorControls(
					{
						title: wp.i18n.__('Content'),
						initialOpen: false,
					},
					hdsContentTitleControl(props),
					hdsContentTextControl(props),
					hdsButtonTextControl(props),
					hdsButtonUrlControl(props),
          hdsExternalUrlControl(props),
					hdsIconControl(props)
				),
				createElement('div', useBlockProps(),
					hdsContent(
						props,
						createElement(
							'div', {className: 'content__inner content__inner--icon'},
							hdsContentIcon(props),
						),
						createElement(
							'div', {className: 'content__inner content__inner--text'},
							hdsContentTitle(props),
							hdsContentText(props),
						),
						createElement(
							'div', {className: 'content__inner content__inner--button'},
							contentButton(props),
						),
					)
				)
			);
		}
	}

	function saveBanner() {
		return function(props) {
			return createElement('div', useBlockProps.save(),
				hdsContent(
					props,
					createElement(
						'div', {className: 'content__inner content__inner--icon'},
						hdsContentIcon(props),
					),
					createElement(
						'div', {className: 'content__inner content__inner--text'},
						hdsContentTitle(props),
						hdsContentText(props),
					),
					createElement(
						'div', {className: 'content__inner content__inner--button'},
						contentButton(props),
					),
				)
			);
		}
	}

	registerBlockType('hds-wp/banner', {
		apiVersion: 2,
		title: __( 'Helsinki - Banner' ),
		category: 'hds-wp',
		icon: 'format-gallery',
		supports: {
			anchor: true,
		},
		attributes: {
			contentTitle: {
				type: 'string',
				default: '',
			},
			contentText: {
				type: 'string',
				default: '',
			},
			contentIcon: {
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
				default: true,
			},
		},
		edit: editBanner(),
		save: saveBanner()
	});

})(window.wp);
