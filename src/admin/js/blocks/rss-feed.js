(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, getBlockContent } = wp.blocks;
	const { Fragment, createElement, useState } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { select, useSelect } = wp.data;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;

  function articleCountOptions() {
    return [
      {label: 4 + ' ' + __( 'articles', 'hds-wp' ), value: 4},
      {label: 6 + ' ' + __( 'articles', 'hds-wp' ), value: 6},
      {label: 8 + ' ' + __( 'articles', 'hds-wp' ), value: 8},
    ];
  }

  function inspectorControls(props) {
    return hdsInspectorControls(
      {
        title: __( 'Settings', 'hds-wp' ),
        initialOpen: true,
      },
      hdsTextControl({
        label: __( 'Title', 'hds-wp' ),
        value: props.attributes.title,
        attribute: 'title',
      }, props),
      hdsTextControl({
        label: __( 'URL', 'hds-wp' ),
        value: props.attributes.url,
        attribute: 'url',
      }, props),
      hdsSelectControl({
        label: __( 'Count', 'hds-wp' ),
        value: props.attributes.amount,
        attribute: 'amount',
        options: articleCountOptions()
      }, props),
    );
  }


	function edit() {
		return function(props) {
        var content = null;
        props.attributes.lifespan = parseInt(props.attributes.lifespan);
        props.attributes.amount = parseInt(props.attributes.amount);
        var blockAttributes = props.attributes;


        content = createElement( wp.serverSideRender, {
          block: 'hds-wp/rss-feed',
          attributes: blockAttributes,
          httpMethod: 'POST',
        });

			return createElement(
				Fragment, {},
        inspectorControls(props),
				createElement( 'div', useBlockProps(), content)
			);
		}
	}

	registerBlockType('hds-wp/rss-feed', {
		apiVersion: 2,
		title: __( 'Helsinki - RSS-feed', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'images-alt',
    keywords: [ __( 'Helsinki - RSS', 'hds-wp' ), __( 'news', 'hds-wp' ) ],
		supports: {
			anchor: true,
		},
		attributes: {
            title: {
                type: 'string',
                default: 'Helsingin kaupungin uutiset',
            },
            url: {
                type: 'string',
                default: 'https://www.hel.fi/fi/uutiset/rss',
            },
            lifespan: {
                type: 'number',
                default: 1,
            },
            amount: {
                type: 'number',
                default: 6,
            },
            anchor: {
              type: 'string',
              default: '',
            }
    },
		edit: edit(),
	});

})(window.wp);
