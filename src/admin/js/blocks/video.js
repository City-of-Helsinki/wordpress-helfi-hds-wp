const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {Fragment, createElement, useState, useEffect} = wp.element;
const {useBlockProps, BlockControls, InnerBlocks, RichText} = wp.blockEditor;
const {InspectorControls} = wp.editor;
const {select, useSelect, useDispatch, dispatch, subscribe} = wp.data;
const {
  ToolbarGroup,
  ToolbarButton,
  Button,
  ToggleControl,
  TextControl,
  Notice,
} = wp.components;
const {store} = wp.notices;

registerBlockType('hds-wp/video', {
  apiVersion: 2,
  title: __('Helsinki - Video', 'hds-wp'),
  icon: 'video-alt3',
  category: 'hds-wp',
  style: 'hds-video',
  attributes: {
    blockId: {
      type: 'string',
    },
    title: {
      type: 'string',
      default: '',
    },
    description: {
      type: 'string',
      default: '',
    },
    iframeUrl: {
      type: 'string',
      default: '',
    },
    url: {
      type: 'string',
      default: '',
    },
    assistive_title: {
      type: 'string',
    },
  },
  edit: edit,
});

function edit({attributes, setAttributes, clientId}) {
  const blockProps = useBlockProps({});
  const [titleError, setTitleError] = useState(attributes.title ? false : true);
  const [urlError, setUrlError] = useState(attributes.url ? false : true);
  const [assistiveTitleError, setAssistiveTitleError] = useState(
    attributes.assistive_title ? false : true
  );
  const {createErrorNotice, removeNotice} = useDispatch(store);

  // Set unique block id, needed for skip link
  useEffect(() => {
    if (clientId) {
      setAttributes({blockId: clientId});
    }
  }, []);

  // Check if title is valid, if not, show error notice
  useEffect(() => {
    const title = attributes.title;
    if (!title) {
      createErrorNotice(
        __('Helsinki - Video', 'hds-wp') +
          ': ' +
          __('Please enter a title', 'hds-wp'),
        {
          type: 'default',
          id: 'titleError-' + clientId,
          isDismissible: false,
          actions: [
            {
              label: __('Select', 'hds-wp'),
              onClick: () => {
                document
                  .getElementById(`block-${clientId}`)
                  .scrollIntoView({behavior: 'smooth'});
                dispatch('core/block-editor').selectBlock(clientId);
              },
            },
          ],
        }
      );
    } else {
      dispatch('core/notices').removeNotice('titleError-' + clientId);
    }
  }, [titleError]);

  // Check if url is valid, if not, show error notice
  useEffect(() => {
    const url = attributes.url;
    if (!url) {
      createErrorNotice(
        __('Helsinki - Video', 'hds-wp') +
          ': ' +
          __('Please enter a valid video URL', 'hds-wp'),
        {
          type: 'default',
          id: 'urlError-' + clientId,
          isDismissible: false,
          actions: [
            {
              label: __('Select', 'hds-wp'),
              onClick: () => {
                document
                  .getElementById(`block-${clientId}`)
                  .scrollIntoView({behavior: 'smooth'});
                dispatch('core/block-editor').selectBlock(clientId);
              },
            },
          ],
        }
      );
    } else {
      dispatch('core/notices').removeNotice('urlError-' + clientId);
    }
  }, [urlError]);

  // Check if assistive title is set, if not, show error notice
  useEffect(() => {
    const assistiveTitle = attributes.assistive_title;
    if (!assistiveTitle) {
      createErrorNotice(
        __('Helsinki - Video', 'hds-wp') +
          ': ' +
          __('Please enter assistive technology title', 'hds-wp'),
        {
          type: 'default',
          isDismissible: false,
          id: 'assistiveTitleError-' + clientId,
          actions: [
            {
              label: __('Select', 'hds-wp'),
              onClick: () => {
                document
                  .getElementById(`block-${clientId}`)
                  .scrollIntoView({behavior: 'smooth'});
                dispatch('core/block-editor').selectBlock(clientId);
              },
            },
          ],
        }
      );
    } else {
      dispatch('core/notices').removeNotice('assistiveTitleError-' + clientId);
    }
  }, [assistiveTitleError]);

  return (
    <Fragment>
      <div {...blockProps}>
        <div className="hds-video has-background">
          <div className="hds-container">
            <RichText
              tagName="h2"
              value={attributes.title}
              onChange={(value) => {
                setTitleError(value ? false : true);
                setAttributes({title: value});
              }}
              placeholder={__('Video title*', 'hds-wp')}
              allowedFormats={[]}
            />
            <RichText
              tagName="p"
              value={attributes.description}
              onChange={(value) => setAttributes({description: value})}
              placeholder={__('Video description', 'hds-wp')}
              allowedFormats={[
                'core/bold',
                'core/italic',
                'core/link',
                'core/paragraph',
              ]}
            />
            {attributes.iframeUrl && (
              <figure class="wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9">
                <div class="wp-block-embed__wrapper">
                  <iframe
                    src={attributes.iframeUrl}
                    title={attributes.assistive_title || attributes.title}
                    scrolling="no"
                  ></iframe>
                  <a
                    href={attributes.url}
                    target="_blank"
                    className="hds-video__link"
                    rel="noopener"
                  >
                    {__('Open video in new window', 'hds-wp')}{' '}
                    {hdsExternalLinkIcon()}
                  </a>
                </div>
              </figure>
            )}
          </div>
        </div>
      </div>
      <InspectorControls>
        <div style={{padding: '1rem'}}>
          <TextControl
            label={__('Video URL', 'hds-wp')}
            value={attributes.url}
            onChange={(value) => {
              if (
                value.includes('youtube.com') ||
                value.includes('helsinkikanava.fi')
              ) {
                setUrlError(false);
                setAttributes({url: value});
                if (value.includes('youtube.com')) {
                  setAttributes({
                    iframeUrl: value.replace('watch?v=', 'embed/'),
                  });
                }
                if (value.includes('helsinkikanava.fi')) {
                  setAttributes({
                    iframeUrl: value.replace('player/vod', 'player/embed/vod'),
                  });
                }
              } else {
                setUrlError(true);
              }
            }}
            placeholder={__('youtube.com', 'hds-wp')}
            className="is-required" // or your own class name
            required
          />
          {urlError && (
            <div className="inspector-errornotice">
              {__('Please enter a valid video URL', 'hds-wp')}
            </div>
          )}
          <div style={{color: 'grey', marginBottom: '1rem'}}>
            <small>
              {__('Add video url from:', 'hds-wp')}
              <br />
              <a href="https://youtube.com" target="_blank">
                youtube.com
              </a>
              <br />
              <a href="https://helsinkikanava.fi" target="_blank">
                helsinkikanava.fi
              </a>
            </small>
          </div>
          <TextControl
            label={__('Assistive title', 'hds-wp')}
            value={attributes.assistive_title}
            onChange={(value) => {
              setAssistiveTitleError(value ? false : true);
              setAttributes({assistive_title: value});
            }}
          />
        </div>
      </InspectorControls>
    </Fragment>
  );
}
