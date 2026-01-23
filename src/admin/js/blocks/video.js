(function (wp) {
  const {__} = wp.i18n;
  const {registerBlockType} = wp.blocks;
  const {Fragment, useState, useEffect, createElement} = wp.element;
  const {useBlockProps, RichText} = wp.blockEditor;
  const {InspectorControls} = wp.editor;
  const {useDispatch, dispatch} = wp.data;
  const {
    TextControl,
    Panel,
    PanelBody
  } = wp.components;
  const {store} = wp.notices;

  registerBlockType('hds-wp/video', {
    title: __('Helsinki - Video', 'hds-wp'),
    edit: edit,
    example: {
      attributes: {
        title: __('Video title', 'hds-wp'),
        description: __('Video description', 'hds-wp'),
        iframeUrl:
          'https://www.helsinkikanava.fi/fi_FI/web/helsinkikanava/player/embed/vod?assetId=107834317',
        url: 'https://www.helsinkikanava.fi/fi_FI/web/helsinkikanava/player/vod?assetId=107834317',
        assistive_title: __('Video title', 'hds-wp'),
      },
    },
  });

  function createControlsPanel({title, initialOpen}, children) {
    return createElement(Panel, {},
      createElement(PanelBody, {title, initialOpen}, children)
    );
  }

  function inspectorControls({
    attributes,
    setAttributes,
    urlError,
    setUrlError,
    assistiveTitleError,
    setAssistiveTitleError,
  }) {
    const {assistive_title, url} = attributes;

    const videoUrlHelp = () => {
      return createElement('div', {style: {color: 'grey', marginBottom: '1rem'}},
        createElement('small', {},
          __('Add video url from:', 'hds-wp'),
          createElement('br', {}),
          createElement('a', {href: 'https://youtube.com', target: '_blank'}, 'youtube.com'),
          createElement('br', {}),
          createElement('a', {href: 'https://helsinkikanava.fi', target: '_blank'}, 'helsinkikanava.fi'),
        )
      );
    }

    const isYouTube = (value) => value.includes('youtube.com');
    const isHelsinkiKanava = (value) => value.includes('helsinkikanava.fi');

    const saveVideoUrl = (value) => {
      setAttributes({url: value});
      setUrlError(!isYouTube(value) && !isHelsinkiKanava(value));

      if (isYouTube(value)) {
        setAttributes({iframeUrl: value.replace('watch?v=', 'embed/')});
      }

      if (isHelsinkiKanava(value)) {
        setAttributes({iframeUrl: value.replace('player/vod', 'player/embed/vod')});
      }
    };

    const saveAssistiveTitle = (value) => {
      setAttributes({assistive_title: value});
      setAssistiveTitleError(value ? false : true);
    };

    const inspectorErrorNotice = (enabled, text) => {
      if (enabled) {
        return createElement('div', {className: 'inspector-errornotice'}, text);
      }
    }

    return createElement(InspectorControls, {},
      createControlsPanel({title: __('Accessibility', 'hds-wp'), initialOpen: true}, [
        createElement(TextControl, {
          className: 'is-required',
          label: __('Assistive title', 'hds-wp'),
          value: assistive_title,
          onChange: saveAssistiveTitle,
          required: true,
        }),
        inspectorErrorNotice(
          assistiveTitleError,
          __('Please enter assistive technology title', 'hds-wp')
        ),
      ]),
      createControlsPanel({title: __('Source', 'hds-wp'), initialOpen: true}, [
        createElement(TextControl, {
          className: 'is-required',
          label: __('Video URL', 'hds-wp'),
          value: url,
          onChange: saveVideoUrl,
          required: true,
        }),
        inspectorErrorNotice(
          urlError,
          __('Please enter a valid video URL', 'hds-wp')
        ),
        videoUrlHelp(),
      ]),
    );
  }

  function createRequiredError(handler, title, name, clientId) {
    handler([__('Helsinki - Video', 'hds-wp'), title].join(': '), {
      type: 'default',
      id: [name, clientId].join('-'),
      isDismissible: false,
      actions: [{
        label: __('Select', 'hds-wp'),
        onClick: () => {
          document
            .getElementById(`block-${clientId}`)
            .scrollIntoView({behavior: 'smooth'});
          dispatch('core/block-editor').selectBlock(clientId);
        },
      }],
    });
  }

  function editBlockTitle({attributes, setAttributes}) {
    return createElement(RichText, {
      tagName: 'h2',
      value: attributes.title,
      placeholder: __('Title', 'hds-wp'),
      allowedFormats: [],
      onChange: value => setAttributes({title: value}),
    });
  }

  function editBlockDescription({attributes, setAttributes}) {
    return createElement(RichText, {
      tagName: 'p',
      value: attributes.description,
      placeholder: __('Description', 'hds-wp'),
      allowedFormats: [
        'core/bold',
        'core/italic',
        'core/link',
        'core/paragraph',
      ],
      onChange: value => setAttributes({description: value}),
    });
  }

  function editVideoTitle({attributes, setAttributes}) {
    return createElement(RichText, {
      tagName: 'h3',
      value: attributes.videoTitle,
      placeholder: __('Video title', 'hds-wp'),
      allowedFormats: [],
      onChange: value => setAttributes({videoTitle: value}),
    });
  }

  function videoFigure(props) {
    if (props.attributes.iframeUrl) {
      return createElement('figure', {className: 'wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9'},
        videoEmbedPreview(props),
        editVideoCaption(props)
      );
    }
  }

  function videoEmbedPreview({attributes}) {
    return createElement('div', {className: 'wp-block-embed__wrapper'},
      createElement('iframe', {
        src: attributes.iframeUrl,
        title: attributes.assistive_title || attributes.title,
        scrolling: 'no',
      })
    );
  }

  function editVideoCaption(props) {
    return createElement('figcaption', {},
      editVideoDescription(props),
      editVideoCredits(props),
    );
  }

  function editVideoDescription({attributes, setAttributes}) {
    return createElement(RichText, {
      tagName: 'span',
      value: attributes.videoDescription,
      placeholder: __('Video description', 'hds-wp'),
      allowedFormats: [],
      onChange: value => setAttributes({videoDescription: value}),
    });
  }

  function editVideoCredits({attributes, setAttributes}) {
    return createElement('span', {},
      createElement('span', {}, __('Video:', 'hds-wp')),
      createElement(RichText, {
        tagName: 'span',
        value: attributes.videoCredits,
        placeholder: __('Video credits', 'hds-wp'),
        allowedFormats: [],
        onChange: value => setAttributes({videoCredits: value}),
      })
    );
  }

  function edit(props) {
    const {attributes, setAttributes, clientId} = props;
    const {assistive_title, url} = attributes;

    const blockProps = useBlockProps({});
    const [urlError, setUrlError] = useState(url ? false : true);
    const [assistiveTitleError, setAssistiveTitleError] = useState(assistive_title ? false : true);
    const {createErrorNotice, removeNotice} = useDispatch(store);

    // Set unique block id, needed for skip link
    useEffect(() => {
      if (clientId) {
        setAttributes({blockId: clientId});
      }
    }, []);

    // Check if url is valid, if not, show error notice
    useEffect(() => {
      if (url) {
        dispatch('core/notices').removeNotice('urlError-' + clientId);
      } else {
        createRequiredError(
          createErrorNotice,
          __('Please enter a valid video URL', 'hds-wp'),
          'urlError',
          clientId
        );
      }
    }, [urlError]);

    // Check if assistive title is set, if not, show error notice
    useEffect(() => {
      if (assistive_title) {
        dispatch('core/notices').removeNotice('assistiveTitleError-' + clientId);
      } else {
        createRequiredError(
          createErrorNotice,
          __('Please enter assistive technology title', 'hds-wp'),
          'assistiveTitleError',
          clientId
        );
      }
    }, [assistiveTitleError]);

    return createElement(Fragment, {},
      inspectorControls({
        attributes, setAttributes,
        urlError, setUrlError,
        assistiveTitleError, setAssistiveTitleError
      }),
      createElement('div', useBlockProps(),
        createElement('div', {className: 'hds-video has-background'},
          createElement('div', {className: 'hds-container'},
            editBlockTitle(props),
            editBlockDescription(props),
            editVideoTitle(props),
            videoFigure(props),
          ),
        ),
      ),
    );
  }
})(window.wp);
