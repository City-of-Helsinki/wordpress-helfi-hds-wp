(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, getBlockContent } = wp.blocks;
	const { Fragment, createElement, useState } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { select, useSelect } = wp.data;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;

    const PostCategorySelect = hdsWithPostCategorySelectControl();


  function articleCountOptions() {
    return [
      {label: 3, value: 3},
      {label: 6, value: 6},
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
      hdsSelectControl({
        label: __( 'Article count', 'hds-wp' ),
        value: props.attributes.articles,
        attribute: 'articles',
        options: articleCountOptions()
      }, props),
      hdsPanelRow( {}, createElement(PostCategorySelect, props) ),
    );
  }

  function title(props) {
    if ( ! props.attributes.title ) {
      return;
    }

    return createElement( 'h2',
      {className: 'content-cards__title'},
      props.attributes.title
    );
  }

	function edit() {
		return function(props) {
        var content = null;
        props.attributes.articles = parseInt(props.attributes.articles);
        props.attributes.category = parseInt(props.attributes.category);
        var blockAttributes = props.attributes;


        content = createElement( wp.serverSideRender, {
          block: 'hds-wp/recent-posts',
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

  function save() {
    return function(props) {
      return createElement( Fragment, {}, createElement(InnerBlocks.Content) );
    };
  }

	registerBlockType('hds-wp/recent-posts', {
		apiVersion: 2,
		title: __( 'Helsinki - Recent Posts', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'images-alt',
		supports: {
			anchor: true,
		},
		attributes: {
            articles: {
                type: 'number',
                default: 3,
            },
            title: {
                type: 'string',
                default: '',
            },
            category: {
                type: 'number',
                default: 0,
            },
            anchor: {
              type: 'string',
              default: '',
            }
    },
		edit: edit(),
	});

})(window.wp);
