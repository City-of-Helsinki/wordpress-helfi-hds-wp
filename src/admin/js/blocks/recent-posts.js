(function (wp) {
  const __ = wp.i18n.__;
  const {
    registerBlockType,
    registerBlockStyle,
    unregisterBlockStyle,
    getBlockContent,
  } = wp.blocks;
  const {Fragment, createElement, useState} = wp.element;
  const {useBlockProps, BlockControls, InnerBlocks} = wp.blockEditor;
  const {InspectorControls} = wp.editor;
  const {select, useSelect} = wp.data;
  const {ToolbarGroup, ToolbarButton, Button, ToggleControl} = wp.components;

  const PostCategorySelect = hdsWithPostCategorySelectControl();

  function articleCountOptions() {
    return [
      {label: 4, value: 4},
      {label: 8, value: 8},
    ];
  }

  function inspectorControls(props) {
    return hdsInspectorControls(
      {
        title: __('Settings', 'hds-wp'),
        initialOpen: true,
      },
      hdsSelectControl(
        {
          label: __('Article count', 'hds-wp'),
          value: props.attributes.articles,
          attribute: 'articles',
          options: articleCountOptions(),
        },
        props
      ),
      hdsPanelRow({}, createElement(PostCategorySelect, props))
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

  var cachedProps = null;
  var cachedArticles = null;
  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return <img src={props.attributes.preview} />;
      }
      var content = null;
      props.attributes.articles = parseInt(props.attributes.articles);
      props.attributes.category = parseInt(props.attributes.category);
      var blockAttributes = props.attributes;

      if (props.isSelected) {
        //we must serverside render only the articles, so the title can be edited from the editor!
        //only re-render articles if relevant attributes have changed
        if (
          cachedProps == null ||
          cachedProps.articles != props.attributes.articles ||
          cachedProps.category != props.attributes.category ||
          cachedProps.className != props.attributes.className
        ) {
          cachedProps = props.attributes;
          cachedArticles = createElement(wp.serverSideRender, {
            block: 'hds-wp/recent-posts',
            attributes: {...blockAttributes, isEditRender: true},
            httpMethod: 'POST',
          });
        }

        content = createElement(
          'div',
          {className: 'front-page-section posts'},
          createElement(
            'div',
            {className: 'hds-container'},
            hdsContentTitleRich(props, {
              placeholder: __('This is the title', 'hds-wp'),
              titleAttribute: 'title',
              className: 'container__heading',
            }),
            cachedArticles
          )
        );
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/recent-posts',
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
      props.isEditRender = false;
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  registerBlockType('hds-wp/recent-posts', {
    apiVersion: 2,
    title: __('Helsinki - Posts', 'hds-wp'),
    category: 'hds-wp',
    icon: 'images-alt',
    keywords: [
      __('Helsinki - Recent Posts', 'hds-wp'),
      __('news', 'hds-wp'),
      __('blog', 'hds-wp'),
    ],
    supports: {
      anchor: true,
    },
    attributes: {
      articles: {
        type: 'number',
        default: 4,
      },
      title: {
        type: 'string',
        default: __('Latest news', 'hds-wp'),
      },
      category: {
        type: 'number',
        default: 0,
      },
      anchor: {
        type: 'string',
        default: '',
      },
      isEditRender: {
        type: 'boolean',
        default: false,
      },
      preview: {
        type: 'string',
        default: '',
      },
    },
    edit: edit(),
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/recent-posts.png',
      },
    },
  });

  unregisterBlockStyle('hds-wp/recent-posts', 'default');
  registerBlockStyle('hds-wp/recent-posts', {
    name: 'default',
    label: __('With image', 'hds-wp'),
    isDefault: true,
  });

  registerBlockStyle('hds-wp/recent-posts', {
    name: 'without-image',
    label: __('Without image', 'hds-wp'),
  });
})(window.wp);
