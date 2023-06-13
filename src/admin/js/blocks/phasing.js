(function (wp) {
  const __ = wp.i18n.__;
  const {registerBlockType, getBlockContent} = wp.blocks;
  const {Fragment, createElement} = wp.element;
  const {useBlockProps, BlockControls, InnerBlocks} = wp.blockEditor;
  const {InspectorControls} = wp.editor;
  const {ToolbarGroup, ToolbarButton, Button, ToggleControl} = wp.components;
  const {select, dispatch, useSelect} = wp.data;

  function timelineTitle(props) {
    if (props.attributes.title != null && props.attributes.title != '') {
      return createElement(
        'h2',
        {className: 'timeline__heading'},
        createElement(
          Fragment,
          {},
          props.attributes.title ? props.attributes.title : ''
        )
      );
    }
    return '';
  }

  function timelineDescription(props) {
    if (
      props.attributes.description != null &&
      props.attributes.description != ''
    ) {
      return createElement(
        'p',
        {className: 'excerpt'},
        createElement(
          Fragment,
          {},
          props.attributes.description ? props.attributes.description : ''
        )
      );
    }
    return '';
  }

  function styleOptions() {
    return [
      {label: __('Numberless', 'hds-wp'), value: 'numberless'},
      {label: __('Numbered', 'hds-wp'), value: 'numbered'},
    ];
  }

  function timelineControls(props) {
    return hdsInspectorControls(
      {
        title: __('Settings', 'hds-wp'),
        initialOpen: false,
      },
      hdsSelectControl(
        {
          label: __('Style', 'hds-wp'),
          value: props.attributes.style,
          attribute: 'style',
          options: styleOptions(),
        },
        props
      )
    );
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return <img src={props.attributes.preview} />;
      }
      props.attributes.blockVersion = 2;

      var content = null;
      const {clientId} = props;

      var children =
        select('core/block-editor').getBlocksByClientId(clientId)[0]
          .innerBlocks;
      for (var i = 0; i < children.length; i++) {
        dispatch('core/block-editor').updateBlockAttributes(
          children[i].clientId,
          {
            style: props.attributes.style,
            order: i + 1,
          }
        );
      }

      const isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(
          props.clientId,
          true
        );
      });

      props.attributes.cards = select('core/block-editor')
        .getBlocks(props.clientId)
        .map(function (block) {
          var innerContent = '';

          if (block.innerBlocks.length > 0) {
            innerContent = getBlockContent(
              select('core/block-editor').getBlock(block.clientId)
            );
          }
          block.attributes.innerContent = innerContent;

          return block.attributes;
        });

      if (props.isSelected || isParentOfSelectedBlock) {
        content = createElement(
          Fragment,
          {},
          timelineControls(props),
          createElement(
            'div',
            {
              className: 'timeline-wrapper',
            },
            hdsContentTitleRich(props, {
              placeholder: __('This is the title', 'hds-wp'),
              titleAttribute: 'title',
              className: 'timeline__heading',
            }),
            hdsContentTextRich(props, {
              placeholder: __('This is the excerpt.', 'hds-wp'),
              textAttribute: 'description',
              className: 'excerpt',
            }),
            createElement(
              'div',
              {
                className: 'timeline',
              },
              createElement('div', {
                className: 'timeline-line',
              }),
              createElement(InnerBlocks, {
                allowedBlocks: ['hds-wp/timeline-card'],
                template: [
                  ['hds-wp/timeline-card', {}],
                  ['hds-wp/timeline-card', {}],
                  ['hds-wp/timeline-card', {}],
                ],
              })
            )
          )
        );
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/timeline',
          attributes: props.attributes,
          httpMethod: 'POST',
        });
      }

      return createElement(
        Fragment,
        {},
        createElement('div', useBlockProps(), content)
      );
    };
  }

  function save() {
    return function (props) {
      return createElement(InnerBlocks.Content, useBlockProps.save());
    };
  }

  registerBlockType('hds-wp/timeline', {
    apiVersion: 2,
    title: __('Helsinki - Phasing', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    supports: {
      anchor: true,
    },
    attributes: {
      title: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      style: {
        type: 'string',
        default: 'numberless',
      },
      cards: {
        type: 'array',
        default: [],
      },
      blockVersion: {
        type: 'number',
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
    deprecated: [
      {
        attributes: {
          title: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          style: {
            type: 'string',
            default: 'numberless',
          },
        },
        supports: {
          anchor: true,
        },
        save(props) {
          return createElement(
            Fragment,
            {},
            createElement(
              'div',
              useBlockProps.save({
                className: 'timeline-wrapper',
              }),
              timelineTitle(props),
              timelineDescription(props),
              createElement(
                'div',
                {
                  className: 'timeline',
                },
                createElement('div', {
                  className: 'timeline-line',
                }),
                createElement(InnerBlocks.Content)
              )
            )
          );
        },
      },
    ],
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/phasing.png',
      },
    },
  });
})(window.wp);
