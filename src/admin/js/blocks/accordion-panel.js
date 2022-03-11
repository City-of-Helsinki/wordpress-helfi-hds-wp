(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;

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
		return element.closest('.accordion').querySelector('[aria-expanded="true"]');
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
			hdsSelectControl({
				label: __( 'Heading Level', 'hds-wp' ),
				value: props.attributes.headingLevel,
				attribute: 'headingLevel',
				options: [
					{
						label: 'h2',
						value: 'h2',
					},
					{
						label: 'h3',
						value: 'h3',
					}
				]
			}, props),
			hdsTextControl({
				label: __( 'Panel Title', 'hds-wp' ),
				value: props.attributes.panelTitle,
				attribute: 'panelTitle',
			}, props)
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
					closeCurrent(event.currentTarget);

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
			{
				id: 'panel-' + props.attributes.blockId,
				className: 'accordion__panel',
				'aria-labelledby': 'panel-toggle-' + props.attributes.blockId,
				role: 'region',
				hidden: 'hidden',
			},
			createElement(
				'div',
				{className: 'accordion__content'},
				createElement(innerBlocks)
			),
			panelClose(props)
		);
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

			return createElement(
				Fragment, {},
				panelControls(props),
				createElement(
					'div', useBlockProps({
						className: 'accordion__section',
					}),
					panelTitle(props),
					panelContent(props, InnerBlocks)
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
						className: 'accordion__section',
					}),
					panelTitle(props),
					panelContent(props, InnerBlocks.Content)
				)
			);
		}
	}

	registerBlockType('hds-wp/accordion-panel', {
		apiVersion: 2,
		title: __( 'Helsinki - Accordion Panel', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'format-gallery',
		supports: {
			anchor: true,
		},
		parent: [ 'hds-wp/accordion' ],
		attributes: {
			headingLevel: {
				type: 'string',
				default: 'h2',
			},
			panelTitle: {
				type: 'string',
				default: __( 'Panel', 'hds-wp' ),
			},
			blockId: {
				type: 'string',
			}
		},
		edit: edit(),
		save: save(),
	});

})(window.wp);
