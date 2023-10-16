(function (wp) {
  const __ = wp.i18n.__;
  const {registerBlockType, getBlockContent} = wp.blocks;
  const {Fragment, createElement, useState} = wp.element;
  const {useBlockProps, BlockControls, InnerBlocks} = wp.blockEditor;
  const {InspectorControls} = wp.editor;
  const {select, useSelect} = wp.data;
  const {ToolbarGroup, ToolbarButton, Button, ToggleControl} = wp.components;

  function linkTypeOptions() {
    return [
      {label: __('Image & Title', 'hds-wp'), value: 'image-title'},
      {
        label: __('Image, Title & Excerpt', 'hds-wp'),
        value: 'image-title-excerpt',
      },
    ];
  }

  function columnCountOptions() {
    return [
      {label: 2 + ' ' + __('Columns', 'hds-wp'), value: 2},
      {label: 3 + ' ' + __('Columns', 'hds-wp'), value: 3},
      {label: 4 + ' ' + __('Columns', 'hds-wp'), value: 4},
    ];
  }

  function inspectorControls(props) {
    return hdsInspectorControls(
      {
        title: __('Settings', 'hds-wp'),
        initialOpen: false,
      },
      hdsSelectControl(
        {
          label: __('Style', 'hds-wp'),
          value: props.attributes.linkType,
          attribute: 'linkType',
          options: linkTypeOptions(),
        },
        props
      ),
      hdsSelectControl(
        {
          label: __('Column count', 'hds-wp'),
          value: props.attributes.columns,
          attribute: 'columns',
          options: columnCountOptions(),
        },
        props
      ),
      hdsCheckboxControl(
        {
          label: __('Has background', 'hds-wp'),
          checked: props.attributes.hasBackground,
          attribute: 'hasBackground',
        },
        props
      )
    );
  }

  function title(props) {
    if (!props.attributes.title) {
      return;
    }

    return createElement(
      'h2',
      {className: 'content-cards__title'},
      props.attributes.title
    );
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return <img src={props.attributes.preview} />;
      }
      props.attributes.columns = parseInt(props.attributes.columns);
      var content = null;

      const isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(
          props.clientId,
          true
        );
      });

      if (props.isSelected || isParentOfSelectedBlock) {
        content = createElement(
          'div',
          {
            className:
              'content-card ' + props.attributes.hasBackground
                ? 'has-background'
                : '',
          },
          hdsContent(
            props,

            hdsContentTitleRich(props, {
              placeholder: __('This is the title', 'hds-wp'),
              titleAttribute: 'title',
            }),
            hdsContentTextRich(props, {
              placeholder: __('This is the excerpt.', 'hds-wp'),
              textAttribute: 'description',
            }),
            createElement(InnerBlocks, {
              allowedBlocks: ['hds-wp/content-card'],
              template: [
                ['hds-wp/content-card', {}],
                ['hds-wp/content-card', {}],
                ['hds-wp/content-card', {}],
              ],
            })
          )
        );
      } else {
        var blockAttributes = props.attributes;

        blockAttributes.cards = select('core/block-editor')
          .getBlocks(props.clientId)
          .map(function (block) {
            return block.attributes.postId;
          });

        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/content-cards',
          attributes: blockAttributes,
          httpMethod: 'POST',
        });
      }

      return createElement(
        Fragment,
        {},
        inspectorControls(props),
        createElement('div', useBlockProps(), content)
      );
    };
  }

  function save() {
    return function (props) {
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  const v1 = {
    attributes: {
      columns: {
        type: 'number',
        default: 3,
      },
      hasBackground: {
        type: 'boolean',
        default: false,
      },
      title: {
        type: 'string',
        default: '',
      },
      linkType: {
        type: 'string',
        default: 'image-title',
      },
      cards: {
        type: 'array',
        default: [],
      },
      anchor: {
        type: 'string',
        default: '',
      },
      preview: {
        type: 'string',
        default: '',
      },
    },
    edit: function (props) {
      if (props.attributes.preview) {
        return <img src={props.attributes.preview} />;
      }
      props.attributes.columns = parseInt(props.attributes.columns);
      var content = null;

      const isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(
          props.clientId,
          true
        );
      });

      if (props.isSelected || isParentOfSelectedBlock) {
        content = createElement(
          Fragment,
          {},
          title(),
          createElement(InnerBlocks, {
            allowedBlocks: ['hds-wp/content-card'],
            template: [
              ['hds-wp/content-card', {}],
              ['hds-wp/content-card', {}],
              ['hds-wp/content-card', {}],
            ],
          })
        );
      } else {
        var blockAttributes = props.attributes;

        blockAttributes.cards = select('core/block-editor')
          .getBlocks(props.clientId)
          .map(function (block) {
            return block.attributes.postId;
          });

        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/content-cards',
          attributes: blockAttributes,
          httpMethod: 'POST',
        });
      }

      return createElement(
        Fragment,
        {},
        inspectorControls(props),
        createElement('div', useBlockProps(), content)
      );
    },
    save: save(),
  };

  registerBlockType('hds-wp/content-cards', {
    apiVersion: 2,
    title: __('Helsinki - Content Cards', 'hds-wp'),
    category: 'hds-wp',
    icon: 'images-alt',
    supports: {
      anchor: true,
    },
    attributes: {
      columns: {
        type: 'number',
        default: 3,
      },
      hasBackground: {
        type: 'boolean',
        default: false,
      },
      title: {
        type: 'string',
        default: '',
      },
      description: {
        type: 'string',
        default: '',
      },
      linkType: {
        type: 'string',
        default: 'image-title',
      },
      cards: {
        type: 'array',
        default: [],
      },
      anchor: {
        type: 'string',
        default: '',
      },
      preview: {
        type: 'string',
        default: '',
      },
    },
    edit: edit(),
    save: save(),
    deprecated: [v1],
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/content-cards.png',
      },
    },
  });
})(window.wp);
