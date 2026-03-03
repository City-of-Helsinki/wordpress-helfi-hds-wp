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

  registerBlockType('hds-wp/diagram', {
    title: __('Helsinki - Diagram', 'hds-wp'),
    edit: edit,
    example: {
      attributes: {
        title: __('Diagram title', 'hds-wp'),
        description: __('Diagram description', 'hds-wp'),
        diagramTitle: __('Example diagram', 'hds-wp'),
        diagramDescription: __('This is a diagram.', 'hds-wp'),
        url: 'https://app.powerbi.com/view?r=eyJrIjoiMjI5OWMyYTYtMGYyZi00ZjhhLWJjODMtMDNhYTczMmI2YmM3IiwidCI6IjNmZWI2YmMxLWQ3MjItNDcyNi05NjZjLTViNThiNjRkZjc1MiIsImMiOjh9',
        assistiveTitle: __('Diagram title', 'hds-wp'),
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
    const {assistiveTitle, url} = attributes;

    const diagramUrlHelp = () => {
      return createElement('div', {style: {color: 'grey', marginBottom: '1rem'}},
        createElement('small', {},
          __('Add diagram url from:', 'hds-wp'),
          createElement('br', {}),
          createElement('a', {href: 'https://app.powerbi.com/', target: '_blank'}, 'app.powerbi.com'),
        )
      );
    }

    const isPowerBI = (value) => value.includes('app.powerbi.com');

    const saveDiagramUrl = (value) => {
      if (isPowerBI(value)) {
        setAttributes({url: value});
        setUrlError(false);
      } else {
        setUrlError(true);
      }
    };

    const saveAssistiveTitle = (value) => {
      setAttributes({assistiveTitle: value});
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
          value: assistiveTitle,
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
          label: __('Diagram URL', 'hds-wp'),
          value: url,
          onChange: saveDiagramUrl,
          required: true,
        }),
        inspectorErrorNotice(
          urlError,
          __('Please enter a valid diagram URL', 'hds-wp')
        ),
        diagramUrlHelp(),
      ]),
    );
  }

  function createRequiredError(handler, title, name, clientId) {
    handler([__('Helsinki - Diagram', 'hds-wp'), title].join(': '), {
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

  function editEmbedTitle({attributes, setAttributes}) {
    return createElement(RichText, {
      tagName: 'h3',
      value: attributes.diagramTitle,
      placeholder: __('Diagram title', 'hds-wp'),
      allowedFormats: [],
      onChange: value => setAttributes({diagramTitle: value}),
    });
  }

  function embedFigure(props) {
    if (props.attributes.url) {
      return createElement('figure', {className: 'wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9'},
        embedPreview(props),
        editEmbedCaption(props)
      );
    }
  }

  function embedPreview({attributes}) {
    return createElement('div', {className: 'wp-block-embed__wrapper'},
      createElement('iframe', {
        src: attributes.url,
        title: attributes.assistiveTitle || attributes.title,
        scrolling: 'no',
      })
    );
  }

  function editEmbedCaption(props) {
    return createElement('figcaption', {},
      editEmbedDescription(props),
    );
  }

  function editEmbedDescription({attributes, setAttributes}) {
    return createElement(RichText, {
      tagName: 'span',
      value: attributes.diagramDescription,
      placeholder: __('Diagram description', 'hds-wp'),
      allowedFormats: [],
      onChange: value => setAttributes({diagramDescription: value}),
    });
  }

  function edit(props) {
    const {attributes, setAttributes, clientId} = props;
    const {assistiveTitle, url} = attributes;

    const blockProps = useBlockProps({});
    const [urlError, setUrlError] = useState(url ? false : true);
    const [assistiveTitleError, setAssistiveTitleError] = useState(assistiveTitle ? false : true);
    const {createErrorNotice, removeNotice} = useDispatch(store);

    useEffect(() => {
      if (clientId) {
        setAttributes({blockId: clientId});
      }
    }, []);

    useEffect(() => {
      if (url) {
        dispatch('core/notices').removeNotice('urlError-' + clientId);
      } else {
        createRequiredError(
          createErrorNotice,
          __('Please enter a valid diagram URL', 'hds-wp'),
          'urlError',
          clientId
        );
      }
    }, [urlError]);

    useEffect(() => {
      if (assistiveTitle) {
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
        createElement('div', {className: 'hds-diagram'},
          createElement('div', {className: 'hds-container'},
            editBlockTitle(props),
            editBlockDescription(props),
            editEmbedTitle(props),
            embedFigure(props),
          ),
        ),
      ),
    );
  }
})(window.wp);
