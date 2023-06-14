(function (wp) {
  const __ = wp.i18n.__;
  const {registerBlockType, registerBlockStyle, unregisterBlockStyle} =
    wp.blocks;
  const {Fragment, createElement} = wp.element;
  const {useBlockProps, BlockControls, InnerBlocks, RichText} = wp.blockEditor;
  const {ToolbarGroup, ToolbarButton, Button} = wp.components;

  function contentButton(props) {
    return hdsContentButton(props, {
      className: 'content__link hds-button',
      href: props.attributes.buttonUrl,
      target: '_blank',
      rel: 'noopener',
    });
  }

  function hasIcon(props, checkAttribute = true) {
    if (props.attributes.className) {
      if (props.attributes.className.includes('align-center')) {
        return false;
      }
    }
    if (checkAttribute) {
      if (
        !props.attributes.contentIcon ||
        props.attributes.contentIcon === '(empty)'
      ) {
        return false;
      }
    }
    return true;
  }

  function hasButton(props) {
    return props.attributes.buttonText && props.attributes.buttonUrl
      ? true
      : false;
  }

  function edit() {
    return function (props) {
      var content = null;
      if (props.isSelected) {
        content = createElement(
          'div',
          {className: 'content'},
          hasIcon(props)
            ? createElement(
                'div',
                {className: 'content__inner content__inner--icon'},
                hdsContentIcon(props)
              )
            : '',
          createElement(
            'div',
            {className: 'content-wrapper'},
            createElement(
              'div',
              {className: 'content__inner content__inner--text'},
              hdsContentTitleRich(props, {
                placeholder: __('This is the title', 'hds-wp'),
              }),
              hdsContentTextRich(props, {
                placeholder: __('This is the excerpt.', 'hds-wp'),
              })
            ),
            createElement(
              'div',
              {className: 'content__inner content__inner--button'},
              contentButton(props)
            )
          )
        );
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/banner',
          attributes: props.attributes,
          httpMethod: 'POST',
        });
      }

      var wrapperClasses = '';
      if (!hasIcon(props)) {
        wrapperClasses += 'no-icon ';
      }
      if (!hasButton(props)) {
        wrapperClasses += 'no-button ';
      }

      return createElement(
        Fragment,
        {},
        hdsInspectorControls(
          {
            title: __('Content', 'hds-wp'),
            initialOpen: false,
          },
          hdsButtonTextControl(props),
          hdsButtonUrlControl(props),
          hdsTargetBlankControl(props, {
            help: wp.element.createElement(
              'p',
              {},
              wp.i18n.__(
                'I have made sure that the description of this link clearly states that it opens in a new tab. ',
                'hds-wp'
              ),
              wp.element.createElement(
                'a',
                {
                  href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html',
                  target: '_blank',
                },
                wp.i18n.__(
                  'Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).',
                  'hds-wp'
                )
              )
            ),
          }),
          hasIcon(props, false) ? hdsIconControl(props) : ''
        ),
        createElement(
          'div',
          useBlockProps({className: wrapperClasses}),
          content
        )
      );
    };
  }

  function save() {
    return function (props) {
      return createElement(
        'div',
        useBlockProps.save(),
        hdsContent(
          props,
          createElement(
            'div',
            {className: 'content__inner content__inner--icon'},
            hdsContentIcon(props)
          ),
          createElement(
            'div',
            {className: 'content__inner content__inner--text'},
            hdsContentTitle(props),
            hdsContentText(props)
          ),
          createElement(
            'div',
            {className: 'content__inner content__inner--button'},
            contentButton(props)
          )
        )
      );
    };
  }

  registerBlockType('hds-wp/banner', {
    apiVersion: 2,
    title: __('Helsinki - Banner', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    supports: {
      anchor: true,
    },
    attributes: {
      contentTitle: {
        type: 'string',
        default: '',
      },
      contentText: {
        type: 'string',
        default: '',
      },
      contentIcon: {
        type: 'string',
        default: '',
      },
      buttonText: {
        type: 'string',
        default: __('Button Text', 'hds-wp'),
      },
      buttonUrl: {
        type: 'string',
        default: '',
      },
      targetBlank: {
        type: 'boolean',
        default: false,
      },
      isExternalUrl: {
        type: 'boolean',
        default: true,
      },
      anchor: {
        type: 'string',
        default: '',
      },
    },
    edit: edit(),
    example: {
      attributes: {
        contentTitle: 'Banneri',
        contentText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ullamcorper velit. Sed fringilla ultricies pharetra. Duis vestibulum faucibus justo, eu bibendum mi eleifend vel.',
        buttonText: 'Painikkeen teksti',
        buttonUrl: 'https://www.hel.fi',
        targetBlank: true,
        isExternalUrl: true,
        contentIcon: 'info-circle',
      },
      viewportWidth: 1200,
    },
  });

  unregisterBlockStyle('hds-wp/banner', 'default');
  registerBlockStyle('hds-wp/banner', {
    name: 'default',
    label: __('Align to left, primary color', 'hds-wp'),
    isDefault: true,
  });

  registerBlockStyle('hds-wp/banner', {
    name: 'align-center',
    label: __('Align to center, primary color', 'hds-wp'),
  });

  registerBlockStyle('hds-wp/banner', {
    name: 'align-left-secondary-color',
    label: __('Align to left, secondary color', 'hds-wp'),
  });

  registerBlockStyle('hds-wp/banner', {
    name: 'align-center-secondary-color',
    label: __('Align to center, secondary color', 'hds-wp'),
  });
})(window.wp);
