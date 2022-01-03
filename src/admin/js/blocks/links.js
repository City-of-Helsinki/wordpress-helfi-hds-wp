(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType, getBlockContent } = wp.blocks;
	const { Fragment, createElement, useState } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { select, useSelect } = wp.data;
	const { ToolbarGroup, ToolbarButton, Button, ToggleControl } = wp.components;

  function linkTypeOptions() {
    return [
      {label:__( 'Only title', 'hds-wp' ), value: 'title'},
      {label:__( 'Title & Excerpt', 'hds-wp' ), value: 'title-excerpt'},
      {label:__( 'Image & Title', 'hds-wp' ), value: 'image-title'},
    ];
  }

  function inspectorControls(props) {
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
      hdsSelectControl({
        label: __( 'Link type', 'hds-wp' ),
        value: props.attributes.linkType,
        attribute: 'linkType',
        options: linkTypeOptions()
      }, props),
      hdsCheckboxControl({
        label: __( 'Has background', 'hds-wp' ),
        value: props.attributes.hasBackground,
        attribute: 'hasBackground',
      }, props)
    );
  }

  function classNamesString(props) {
		var classNames = [
			'links',
      'type-' + props.attributes.linkType,
			props.attributes.hasBackground ? 'has-background' : '',
		];
		return classNames.join(' ');
	}

  function title(props) {
    if ( ! props.attributes.title ) {
      return;
    }

    return createElement( 'h2',
      {className: 'links__title'},
      props.attributes.title
    );
  }

	function edit() {
		return function(props) {
      var content = null;

      const isParentOfSelectedBlock = useSelect(function(selectFrom){
        return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
      });

      if ( props.isSelected || isParentOfSelectedBlock ) {
        content = createElement(
          Fragment, {},
          title(props),
          createElement( InnerBlocks, {
            allowedBlocks: ['hds-wp/link'],
            template: [
              ['hds-wp/link', {}],
              ['hds-wp/link', {}],
              ['hds-wp/link', {}],
            ] }
          )
        );
      } else {
        var blockAttributes = props.attributes;

        blockAttributes.links = select('core/block-editor')
          .getBlocks( props.clientId )
          .map(function(block){
            return block.attributes.postId;
          });

        content = createElement( wp.serverSideRender, {
          block: 'hds-wp/links',
          attributes: blockAttributes,
          httpMethod: 'POST',
        });
      }

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

	registerBlockType('hds-wp/links', {
		apiVersion: 2,
		title: __( 'Helsinki - Links', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'screenoptions',
		supports: {
			anchor: true,
		},
		attributes: {
      hasBackground: {
				type: 'boolean',
				default: false,
			},
      linkType: {
				type: 'string',
				default: 'title',
			},
      title: {
				type: 'string',
				default: '',
			},
      links: {
				type: 'array',
				default: [],
			},
    },
		edit: edit(),
		save: save(),
	});

})(window.wp);
