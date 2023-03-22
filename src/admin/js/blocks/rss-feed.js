(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, getBlockContent } = wp.blocks;
	const { Fragment, createElement, useState } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { select, useSelect } = wp.data;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;

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
      hdsTextControl({
        label: __( 'Lifetime (h)', 'hds-wp' ),
        value: props.attributes.lifespan,
        attribute: 'lifespan',
      }, props),
    );
  }


	function edit() {
		return function(props) {
        var content = null;
        props.attributes.lifespan = parseInt(props.attributes.lifespan);
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
                default: '',
            },
            url: {
                type: 'string',
                default: '',
            },
            lifespan: {
                type: 'number',
                default: 12,
            },
            anchor: {
              type: 'string',
              default: '',
            }
    },
		edit: edit(),
	});

})(window.wp);
