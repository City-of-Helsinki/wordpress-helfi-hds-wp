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
      {label: __('Without image', 'hds-wp'), value: 'title'},
      {label: __('Title & excerpt', 'hds-wp'), value: 'title-excerpt'},
      {label: __('With image', 'hds-wp'), value: 'image-title'},
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
          label: __('Link type', 'hds-wp'),
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
          label: __('Background', 'hds-wp'),
          checked: props.attributes.hasBackground,
          attribute: 'hasBackground',
        },
        props
      )
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
    if (!props.attributes.title) {
      return;
    }

    return createElement(
      'h2',
      {className: 'links__title'},
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
          Fragment,
          {},
          hdsContentTitleRich(props, {
            placeholder: __('This is the title', 'hds-wp'),
            titleAttribute: 'title',
            className: 'links__title',
          }),
          hdsContentTextRich(props, {
            placeholder: __('This is the excerpt.', 'hds-wp'),
          }),
          createElement(InnerBlocks, {
            allowedBlocks: ['hds-wp/link'],
            template: [
              ['hds-wp/link', {}],
              ['hds-wp/link', {}],
              ['hds-wp/link', {}],
            ],
          })
        );
      } else {
        var blockAttributes = props.attributes;

        blockAttributes.links = select('core/block-editor')
          .getBlocks(props.clientId)
          .map(function (block) {
            return block.attributes;
          });

        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/links',
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

  registerBlockType('hds-wp/links', {
    title: __('Helsinki - Links', 'hds-wp'),
    edit: edit(),
    save: save(),
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/links.png',
      },
    },
  });
})(window.wp);
