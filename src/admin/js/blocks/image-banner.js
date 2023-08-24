(function (wp) {
  const __ = wp.i18n.__;
  const {registerBlockType} = wp.blocks;
  const {Fragment, createElement} = wp.element;
  const {useBlockProps, BlockControls, InnerBlocks} = wp.blockEditor;
  const {ToolbarGroup, ToolbarButton, Button} = wp.components;

  function toolbar(props) {
    return createElement(
      BlockControls,
      {key: 'controls'},
      createElement(
        ToolbarGroup,
        {},
        hdsMediaUpload(
          props.attributes.mediaId,
          function (media) {
            props.setAttributes({
              mediaId: media.id,
              mediaUrl: media.sizes.full.url,
              mediaWidth: media.sizes.full.width,
              mediaHeight: media.sizes.full.height,
              mediaAlt: media.alt,
              mediaSrcset: media.sizes.full.srcset,
            });
          },
          function (mediaUpload) {
            return createElement(Button, {
              icon: 'format-image',
              label: __('Select image', 'hds-wp'),
              onClick: mediaUpload.open,
            });
          }
        ),
        hdsAlignLeftButton(function (value) {
          props.setAttributes({
            alignment: 'left',
          });
        }),
        hdsAlignRightButton(function (value) {
          props.setAttributes({
            alignment: 'right',
          });
        })
      )
    );
  }

  function imageConfig(props) {
    return {
      id: props.attributes.mediaId,
      alt: props.attributes.mediaAlt,
      src: props.attributes.mediaUrl,
      srcset: props.attributes.mediaSrcset,
      width: props.attributes.mediaWidth,
      height: props.attributes.mediaHeight,
    };
  }

  function classNamesString(props) {
    var classNames = [
      'align-' + props.attributes.alignment,
      props.attributes.mediaId ? 'has-image' : 'has-placeholder',
    ];
    return classNames.join(' ');
  }

  function contentButton(props) {
    return hdsContentButton(props, {
      className: 'content__link hds-button hds-button--primary',
      href: props.attributes.buttonUrl,
    });
  }

  function deprecatedContentButton(props) {
    return hdsContentButton(
      props,
      {
        className: 'content__link hds-button',
        href: props.attributes.buttonUrl,
      },
      props.attributes.isExternalUrl ? hdsDeprecatedExternalLinkIcon() : hdsDeprecatedArrowIcon()
    );
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return <img src={props.attributes.preview} />;
      }

      var content = null;

      content = createElement(
        Fragment,
        {},
        toolbar(props),
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
          })
        ),
        createElement(
          'div',
          {className: 'image-banner--wrapper'},
          hdsSingleImage(imageConfig(props)),
          hdsContent(
            props,
            createElement(
              'div',
              {className: 'content__inner'},
              hdsContentTitleRich(props, {
                placeholder: __('This is the title', 'hds-wp'),
              }),
              hdsContentTextRich(props, {
                placeholder: __('This is the excerpt.', 'hds-wp'),
              }),
              contentButton(props)
            )
          )
        )
      );

      var SSRContent = createElement(wp.serverSideRender, {
        block: 'hds-wp/image-banner',
        attributes: props.attributes,
        httpMethod: 'POST',
      });

      if (props.isSelected) {
        return createElement(
          'div',
          useBlockProps({className: classNamesString(props)}),
          content
        );
      } else {
        return createElement(
          'div',
          useBlockProps({className: classNamesString(props)}),
          SSRContent
        );
      }
    };
  }

  function save() {
    return function (props) {
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  function classNamesStringV1(props) {
    var classNames = [
      'align-' + props.attributes.alignment,
      props.attributes.mediaId ? 'has-image' : 'has-placeholder',
    ];
    return classNames.join(' ');
  }

  const v1 = {
    supports: {
      anchor: true,
    },
    attributes: {
      alignment: {
        type: 'string',
        default: 'right',
      },
      mediaId: {
        type: 'number',
        default: 0,
      },
      mediaUrl: {
        type: 'string',
        default: '',
      },
      mediaWidth: {
        type: 'number',
        default: 0,
      },
      mediaHeight: {
        type: 'number',
        default: 0,
      },
      mediaAlt: {
        type: 'string',
        default: '',
      },
      mediaSrcset: {
        type: 'string',
        default: '',
      },
      contentTitle: {
        type: 'string',
        default: '',
      },
      contentText: {
        type: 'string',
        default: '',
      },
      buttonText: {
        type: 'string',
        default: '',
      },
      buttonUrl: {
        type: 'string',
        default: '',
      },
      isExternalUrl: {
        type: 'boolean',
        default: false,
      },
      preview: {
        type: 'string',
        default: '',
      },
    },
    save: function (props) {
      return createElement(
        'div',
        useBlockProps.save({
          className: classNamesStringV1(props),
        }),
        hdsSingleImage(imageConfig(props)),
        hdsContent(
          props,
          createElement(
            'div',
            {className: 'content__inner'},
            hdsContentTitle(props),
            hdsContentText(props),
            deprecatedContentButton(props)
          )
        )
      );
    },
  }

  registerBlockType('hds-wp/image-banner', {
    apiVersion: 2,
    title: __('Helsinki - Image Banner', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    keywords: ['Helsinki - Kuvabanneri'],
    supports: {
      anchor: true,
    },
    attributes: {
      alignment: {
        type: 'string',
        default: 'right',
      },
      mediaId: {
        type: 'number',
        default: 0,
      },
      mediaUrl: {
        type: 'string',
        default: '',
      },
      mediaWidth: {
        type: 'number',
        default: 0,
      },
      mediaHeight: {
        type: 'number',
        default: 0,
      },
      mediaAlt: {
        type: 'string',
        default: '',
      },
      mediaSrcset: {
        type: 'string',
        default: '',
      },
      contentTitle: {
        type: 'string',
        default: '',
      },
      contentText: {
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
        preview: hds_wp.blocksUrl + '/previews/image-banner.png',
      },
    },
  });
})(window.wp);
