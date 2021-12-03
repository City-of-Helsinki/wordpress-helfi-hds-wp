function hdsSingleImage( attributes ) {
	var imageOrPlaceholder = attributes.src ?
		wp.element.createElement('img', attributes) :
		wp.element.createElement('div', {
			className: 'placeholder',
		});
	return wp.element.createElement('div', {className: 'image'},
		imageOrPlaceholder
	);
}

function hdsMediaUpload(defaultValue, selectCallback, renderCallback) {
	return wp.element.createElement(wp.blockEditor.MediaUploadCheck, {},
		wp.element.createElement(wp.blockEditor.MediaUpload, {
			onSelect: selectCallback,
			allowedTypes: ['image'],
			value: defaultValue,
			render: renderCallback,
		})
	);
}

function hdsMediaRemoveButton(callback) {
	return wp.element.createElement(wp.blockEditor.MediaUploadCheck, {},
		wp.element.createElement( wp.components.Button, {
			icon: 'no-alt',
			isDestructive: true,
			label: wp.i18n.__( 'Remove image', 'hds-wp' ),
			onClick: callback,
		})
	);
}

function hdsAlignLeftButton(callback) {
	return wp.element.createElement( wp.components.ToolbarButton, {
		icon: 'align-pull-left',
		label: wp.i18n.__( 'Align Left', 'hds-wp'),
		onClick: callback,
	});
}

function hdsAlignRightButton(callback) {
	return wp.element.createElement( wp.components.ToolbarButton, {
		icon: 'align-pull-right',
		label: wp.i18n.__( 'Align Right', 'hds-wp' ),
		onClick: callback,
	});
}

function hdsTextColumn( withButton ) {
	var allowed = ['core/heading', 'core/paragraph'],
			template = [['core/heading'], ['core/paragraph']];

	if ( withButton ) {
		allowed.push('core/button');
		template.push(['core/button']);
	}

	return wp.element.createElement('div',
		{className: 'content'},
		wp.element.createElement(wp.blockEditor.InnerBlocks, {
			allowedBlocks: allowed,
			templateLock: "all",
			template: template
		})
	);
}

function hdsTextColumnContent() {
	return wp.element.createElement('div',
		{className: 'content'},
		wp.element.createElement(
			wp.blockEditor.InnerBlocks.Content
		)
	);
}

function hdsIsChildBlock(clientId) {
	var parents = wp.data.select('core/block-editor').getBlockParents(clientId);
	return parents.length > 0;
}

function hdsRootParent(clientId) {
	var parents = wp.data.select('core/block-editor').getBlockParents(clientId);
	return parents[0];
}

function hdsContent(props, ...children) {
	return wp.element.createElement('div',
		{className: 'content'},
		children
	);
}

function hdsInspectorControls(config, ...children) {
	return wp.element.createElement(
		wp.element.Fragment, {},
		wp.element.createElement(
			wp.blockEditor.InspectorControls, {},
			wp.element.createElement(
				wp.components.PanelBody, config,
				children
			)
		)
	);
}

function hdsPanelRow(config, ...children) {
	return wp.element.createElement(
		wp.components.PanelRow, {},
		children
	);
}

function hdsContentTitleControl(props) {
	return hdsTextControl({
		label: wp.i18n.__( 'Title', 'hds-wp' ),
		value: props.attributes.contentTitle,
		attribute: 'contentTitle',
	}, props);
}

function hdsContentTitle(props) {
	return props.attributes.contentTitle ? wp.element.createElement(
		'h2',
		{className: 'content__heading'},
		props.attributes.contentTitle
	) : '';
}

function hdsContentTextControl(props) {
	return hdsTextControl({
		label: wp.i18n.__( 'Excerpt', 'hds-wp' ),
		value: props.attributes.contentText,
		attribute: 'contentText',
	}, props);
}

function hdsContentText(props) {
	return props.attributes.contentText ? wp.element.createElement(
		'p',
		{className: 'content__text'},
		props.attributes.contentText
	) : '';
}

function hdsButtonTextControl(props) {
	return hdsTextControl({
		label: wp.i18n.__( 'Button Text', 'hds-wp' ),
		value: props.attributes.buttonText,
		attribute: 'buttonText',
	}, props);
}

function hdsButtonUrlControl(props) {
	return hdsTextControl({
		label: wp.i18n.__( 'Button URL', 'hds-wp' ),
		type: 'url',
		value: props.attributes.buttonUrl,
		attribute: 'buttonUrl',
	}, props);
}

function hdsExternalUrlControl(props) {
	return hdsCheckboxControl({
		label: wp.i18n.__( 'Is external URL', 'hds-wp' ),
		value: props.attributes.isExternalUrl,
		attribute: 'isExternalUrl',
	}, props);
}

function hdsContentButton(props, config, icon) {
	return props.attributes.buttonText && props.attributes.buttonUrl ? wp.element.createElement(
		'a',
		config,
		wp.element.createElement(
			wp.element.Fragment, {},
			props.attributes.buttonText,
			icon ? icon : null
		)
	) : '';
}

function hdsTextControl(config, props) {
	var attributeKey = config['attribute'];
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.TextControl,
			{
				label: config.label,
				type: config.type ? config.type : 'text',
				value: config.value,
				onChange: function(text) {
					var newAttributes = {};
					newAttributes[config.attribute] = text;
					props.setAttributes(newAttributes);
				}
			}
		)
	);
}

function hdsRadioControl(config, props) {
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.RadioControl,
			{
				label: config.label,
				selected: config.selected,
				options: config.options,
				onChange: function(value) {
					var newAttributes = {};
					newAttributes[config.attribute] = value;
					props.setAttributes(newAttributes);
				}
			}
		)
	);
}

function hdsCheckboxControl(config, props) {
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.CheckboxControl,
			{
				label: config.label,
				checked: config.checked,
				onChange: function(value) {
					var newAttributes = {};
					newAttributes[config.attribute] = value;
					props.setAttributes(newAttributes);
				}
			}
		)
	);
}

function hdsIconControl(props) {
	var iconsJson = hdsIcons(),
			options = [];

	for (var iconName in iconsJson) {
		options.push({
			label: iconName,
			value: iconName,
		});
	}

	return hdsSelectControl({
		label: wp.i18n.__( 'Icon', 'hds-wp' ),
		value: props.attributes.contentIcon,
		attribute: 'contentIcon',
		options: options
	}, props);
}

function hdsSelectControl(config, props) {
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.SelectControl,
			{
				label: config.label,
				value: config.value,
				onChange: function(value) {
					var newAttributes = {};
					newAttributes[config.attribute] = value;
					props.setAttributes(newAttributes);
				},
				options: config.options
			}
		)
	);
}

function hdsContentIcon(props) {
	return props.attributes.contentIcon ? wp.element.createElement(
		'svg',
		{
			className: 'icon icon--' + props.attributes.contentIcon,
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: hdsIcons(props.attributes.contentIcon),
		})
	) : '';
}

function hdsAngleIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon icon--angle-up',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: 'M12 11.5l5 5 1.5-1.5L12 8.5 5.5 15 7 16.5z',
		})
	);
}

function hdsExternalLinkIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon icon--link-external',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: 'M10 3v2H5v14h14v-5h2v7H3V3h7zm11 0v8h-2V6.413l-7 7.001L10.586 12l6.999-7H13V3h8z',
		})
	);
}

function hdsArrowIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon icon--arrow-right',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: 'M10.5 5.5 12 7 8 11 20.5 11 20.5 13 8 13 12 17 10.5 18.5 4 12',
		})
	);
}
