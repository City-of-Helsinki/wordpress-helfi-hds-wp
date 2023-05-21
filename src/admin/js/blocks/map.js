const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {Fragment, createElement, useState, useEffect} = wp.element;
const {useBlockProps, BlockControls, InnerBlocks, RichText, InspectorControls} =
  wp.blockEditor;
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

registerBlockType('hds-wp/map', {
  apiVersion: 2,
  title: __('Helsinki - Map', 'hds-wp'),
  icon: 'location-alt',
  category: 'hds-wp',
  style: 'hds-map',
  attributes: {
    blockId: {
      type: 'string',
    },
    title: {
      type: 'string',
      default: 'Kartan otsikko',
    },
    desricption: {
      type: 'string',
      default: 'Kartan kuvaus',
    },
    url: {
      type: 'string',
      default:
        'https://palvelukartta.hel.fi/fi/embed/unit/1915?city=helsinki,espoo,vantaa,kauniainen,kirkkonummi&bbox=60.22464068641878,24.932012557983402,60.23254640738538,24.962611198425297',
    },
    assistive_title: {
      type: 'string',
    },
  },
  edit: edit,
  save: save,
});

function edit({attributes, setAttributes, clientId}) {
  const blockProps = useBlockProps({});
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

  // Check if url is valid, if not, show error notice
  useEffect(() => {
    const url = attributes.url;
    if (!url) {
      createErrorNotice(
        __('Helsinki - Map', 'hds-wp') +
          ': ' +
          __('Please enter a valid map embed URL', 'hds-wp'),
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
        __('Helsinki - Map', 'hds-wp') +
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
        <div className="hds-map has-background">
          <div className="hds-container">
            <RichText
              tagName="h2"
              value={attributes.title}
              onChange={(value) => setAttributes({title: value})}
              placeholder={__('Map title', 'hds-wp')}
              allowedFormats={[]}
            />
            <RichText
              tagName="p"
              value={attributes.desricption}
              onChange={(value) => setAttributes({desricption: value})}
              placeholder={__('Map description', 'hds-wp')}
              allowedFormats={[
                'core/bold',
                'core/italic',
                'core/link',
                'core/paragraph',
              ]}
            />
            {attributes.url && (
              <>
                <iframe
                  src={attributes.url}
                  title={attributes.assistive_title || attributes.title}
                  scrolling="no"
                ></iframe>
                <a
                  href={attributes.url}
                  target="_blank"
                  className="hds-map__link"
                  rel="noopener"
                >
                  {__('Open map in new window', 'hds-wp')}{' '}
                  {hdsExternalLinkIcon()}
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <InspectorControls>
        <div style={{padding: '1rem'}}>
          <TextControl
            label={__('Map URL', 'hds-wp')}
            value={attributes.url}
            onChange={(value) => {
              if (
                value.includes('palvelukartta.hel.fi') ||
                value.includes('kartta.hel.fi')
              ) {
                setUrlError(false);
              } else {
                setUrlError(true);
              }
              setAttributes({url: value});
            }}
            placeholder={__('https://palvelukartta.hel.fi/fi/', 'hds-wp')}
          />
          {urlError && (
            <div className="inspector-errornotice">
              {__('Please enter a valid map embed URL', 'hds-wp')}
            </div>
          )}
          <div style={{color: 'grey', marginBottom: '1rem'}}>
            <small>
              {__('Add map url from:', 'hds-wp')}
              <br />
              <a href="https://palvelukartta.hel.fi/fi/" target="_blank">
                https://palvelukartta.hel.fi/fi/
              </a>
              <br />
              <a href="https://kartta.hel.fi/" target="_blank">
                https://kartta.hel.fi/
              </a>
            </small>
          </div>
          <TextControl
            label={__('Assistive technology title', 'hds-wp')}
            value={attributes.assistive_title}
            onChange={(value) => {
              setAttributes({assistive_title: value});
              if (value) {
                setAssistiveTitleError(false);
              } else {
                setAssistiveTitleError(true);
              }
            }}
            placeholder={__('Assistive technology title', 'hds-wp')}
          />
          {!attributes.assistive_title && (
            <div className="inspector-errornotice">
              {__('Please enter assistive technology title', 'hds-wp')}
            </div>
          )}
        </div>
      </InspectorControls>
    </Fragment>
  );
}

function save({attributes}) {
  const blockProps = useBlockProps.save({
    className: 'hds-map has-background',
  });
  const blockid = 'hds-map-' + attributes.blockId;
  return (
    <div {...blockProps}>
      <div className="hds-container">
        <h2>{attributes.title}</h2>
        <p>
          <RichText.Content value={attributes.desricption} />
        </p>
        <div className="hds-map__container">
          {attributes.url && (
            <>
              <a
                href={'#' + blockid + '-after'}
                id={blockid + '-before'}
                class="focusable skip-link skip-link--map--before"
              >
                {__('Move below the map', 'hds-wp')}
              </a>
              <iframe
                src={attributes.url}
                title={attributes.assistive_title || attributes.title}
              ></iframe>
              <a
                href={'#' + blockid + '-before'}
                id={blockid + '-after'}
                class="focusable skip-link skip-link--map--after"
              >
                {__('Move above the map', 'hds-wp')}
              </a>
              <a
                href={attributes.url}
                target="_blank"
                className="hds-map__link"
                rel="noopener"
              >
                {__('Open map in new window', 'hds-wp')} {hdsExternalLinkIcon()}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
