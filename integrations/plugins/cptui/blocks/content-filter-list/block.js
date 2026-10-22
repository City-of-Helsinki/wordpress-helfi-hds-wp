((wp) => {

  const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const {
    Fragment,
    createElement,
    useState,
    useEffect,
    useRef
  } = wp.element;
	const { useBlockProps, BlockControls, RichText } = wp.blockEditor;
	const {
    Button,
    TextControl,
    CheckboxControl,
    RadioControl,
    SelectControl,
    ToolbarGroup,
    ToolbarButton,
    Flex,
    FlexBlock,
    FlexItem,
    Panel,
    PanelBody,
    PanelRow,
    Spinner,
    Notice,
    Disabled
  } = wp.components;
	const { withSelect, select, dispatch } = wp.data;
  const apiFetch = wp.apiFetch;

  function toolbar({isEditing, setIsEditing}) {
    return createElement(BlockControls, {key: 'controls'},
      createElement(ToolbarGroup, {},
        createElement(ToolbarButton, {
          icon: 'edit',
          label: __( 'Edit content list filtering settings', 'hds-wp' ),
          isPressed: isEditing,
          onClick: () => setIsEditing(! isEditing),
        })
      )
    );
  }

  function flexSettings(flex, itemOrBlock, items) {
    return createElement(Flex, flex,
      items.map(item => createElement(itemOrBlock, {}, item))
    );
  }

  function introductionSection({attributes, setAttributes}) {
    const {title, description} = attributes || {};

    return {
      title: __( 'Introduction', 'hds-wp' ),
      initialOpen: true,
      content: flexSettings({direction: 'column', gap: 4}, FlexBlock, [
        createElement(RichText, {
          tagName: 'h2',
          value: title,
          placeholder: __('Title', 'hds-wp'),
          allowedFormats: [],
          onChange: value => setAttributes({title: value}),
        }),
        createElement(RichText, {
          tagName: 'p',
          value: description,
          placeholder: __('Description', 'hds-wp'),
          allowedFormats: [
            'core/bold',
            'core/italic',
            'core/link',
            'core/paragraph',
          ],
          onChange: value => setAttributes({description: value}),
        })
      ]),
    };
  }

  function postTypeSection({attributes, setAttributes, settings}) {
    const {postType} = attributes || {};
    const {postTypes} = settings || {};
    const options = [];

    if (Array.isArray(postTypes)) {
      postTypes.forEach(({label, slug}) => options.push({label, value: slug}));
    }

    return {
      title: __( 'Post type', 'hds-wp' ),
      initialOpen: true,
      content: createElement(RadioControl, {
        hideLabelFromVision: true,
        label: __( 'Select post type', 'hds-wp' ),
        help: __( 'Select the content type to display. You can select only one content type from the list.', 'hds-wp' ),
        onChange: (selected) => setAttributes({
          postType: selected,
          filterTaxonomies: [],
        }),
        options,
        selected: postType
      }),
    };
  }

  function filterTaxonomiesSection({
    attributes,
    setAttributes,
    settings,
    currentPostType,
    taxLabels
  }) {
    const {filterTaxonomies} = attributes || {};
    const {taxonomyOrder} = settings || {};

    const availableTaxonomies = [];

    if (Array.isArray(currentPostType?.taxonomies)) {
      currentPostType.taxonomies.forEach(slug => {
        if ('category' === slug) {
          availableTaxonomies.push({label: __('Categories'), value: 'category'});
        } else if ('post_tag' === slug) {
          availableTaxonomies.push({label: __('Tags'), value: 'post_tag'});
        }
      });
    }

    if (currentPostType?.slug && taxonomyOrder[currentPostType.slug]) {
      taxonomyOrder[currentPostType.slug].forEach(taxonomy => {
        if (taxLabels[taxonomy]) {
          availableTaxonomies.push({label: taxLabels[taxonomy], value: taxonomy});
        }
      });
    }

    const helpTexts = [
      __('Select the filters to display in the search.', 'hds-wp'),
      __('The filters are based on the content type\'s taxonomies. ', 'hds-wp'),
      __('The selected filters are displayed on the content cards in the list.', 'hds-wp'),
    ];

    return {
      title: __( 'Filter taxonomies', 'hds-wp' ),
      initialOpen: false,
      content: flexSettings({direction: 'column', gap: 4}, FlexBlock, [
        flexSettings({direction: 'column', gap: 4}, FlexBlock,
          availableTaxonomies.map(({label, value}) => {
            const isChecked = filterTaxonomies.includes(value);

            return createElement(CheckboxControl, {
              label,
              checked: isChecked,
              onChange: () => {
                if (isChecked) {
                  setAttributes({filterTaxonomies: filterTaxonomies.filter(tax => tax !== value)});
                } else {
                  setAttributes({filterTaxonomies: [...filterTaxonomies, value]});
                }
              },
            });
          })
        ),
        createElement('p', {className: 'help'}, helpTexts.join(' '))
      ]),
    };
  }

  function entryElementsSection({attributes, setAttributes}) {
    const {entryElements} = attributes || {};

    const options = [
      {label: __('Image', 'hds-wp' ), value: 'image'},
      {label: __('Excerpt', 'hds-wp' ), value: 'excerpt'},
      {label: __('Link to content type\'s page', 'hds-wp' ), value: 'link'},
      {label: __('All taxonomies', 'hds-wp' ), value: 'allTaxonomies'},
    ];

    return {
      title: __( 'Entry elements', 'hds-wp' ),
      initialOpen: false,
      content: flexSettings({direction: 'column', gap: 4}, FlexBlock, [
        flexSettings({direction: 'column', gap: 4}, FlexBlock,
          options.map(({label, value}) => {
            const isChecked = entryElements.includes(value);

            return createElement(CheckboxControl, {
              label,
              checked: isChecked,
              onChange: () => {
                if (isChecked) {
                  setAttributes({entryElements: entryElements.filter(tax => tax !== value)});
                } else {
                  setAttributes({entryElements: [...entryElements, value]});
                }
              },
            });
          })
        ),
        createElement('p', {className: 'help'}, __('Select the optional information to display on the content card.', 'hds-wp')),
      ]),
    };
  }

  function editingView({props, settings, currentPostType, taxLabels}) {
    const {attributes, setAttributes} = props;
    const sections = [
      introductionSection,
      postTypeSection,
      filterTaxonomiesSection,
      entryElementsSection,
    ];

    return createElement(
      Panel,
      {header: __( 'Helsinki - Custom Post Type Filter Listing', 'hds-wp' )},
      sections.map((section) => {
        const {title, initialOpen, content} = section({
          attributes,
          setAttributes,
          settings,
          currentPostType,
          taxLabels
        });

        return createElement(PanelBody, {title, initialOpen},
          createElement(PanelRow, {}, content)
        );
      })
    );
  }

  function Preview({html}) {
    const ref = useRef(null);

    useEffect(() => {
      // The app's bundle is loaded in the editor canvas, which may be an iframe.
      const view = ref.current.ownerDocument.defaultView;
      const root = ref.current.querySelector('[data-content-filter-list]');
      const unmount = root && view.helsinkiContentFilterList?.mount(root);

      // Defer, as a root can't be unmounted while the editor is rendering.
      return () => unmount && setTimeout(unmount);
    }, [html]);

    return createElement('div', {
      ref,
      className: 'content-filter-list__preview',
      dangerouslySetInnerHTML: {__html: html},
    });
  }

  function contentView(list) {
    if ( list.loading && ! list.html ) {
      return createElement( Spinner );
    }

    if ( list.html ) {
      return createElement( Disabled, {},
        createElement( Preview, { key: list.html, html: list.html } )
      );
    }

    return createElement( Notice, {
        status: 'info',
        isDismissible: false,
        className: 'content-filter-list__notice'
      },
      __( 'Select a post type to preview the list.', 'hds-wp' )
    );
  }

  function useContentFilterList( attributes ) {
    const [ state, setState ] = useState( { loading: true, html: '' } );

    useEffect( () => {
      let active = true;

      if ( ! attributes.postType ) {
        setState( { loading: false, html: '' } );
        return;
      }

      setState( ( current ) => ( { ...current, loading: true } ) );

      const timer = setTimeout( () => {
        apiFetch( {
          path: '/wp/v2/block-renderer/hds-wp/content-filter-list?context=edit',
          method: 'POST',
          data: { attributes },
        } )
        .then( ( { rendered } ) => {
          const doc = new window.DOMParser().parseFromString( rendered || '', 'text/html' );
          const container = doc.querySelector( '.hds-container' );

          if ( active ) {
            setState( { loading: false, html: container ? container.outerHTML : '' } );
          }
        } )
        .catch( () => active && setState( { loading: false, html: '' } ) );
      }, 300 );

      return () => {
        active = false;
        clearTimeout( timer );
      };
    }, [ attributes ] );

    return state;
  }

  function edit(props) {
    const {postType} = props?.attributes;

    const [isEditing, setIsEditing] = useState(false);
    const [settings, setSettings] = useState({});
    const [currentPostType, setCurrentPostType] = useState({});
    const [taxLabels, setTaxLabels] = useState({});

    useEffect(() => {
      apiFetch({path: HELSINKI_CONTENT_LIST_FILTER.settings})
        .then(settings => {
          setSettings(settings);

          if (Array.isArray(settings?.taxonomies)) {
            setTaxLabels(
              settings.taxonomies.reduce(
                (acc, {slug, label}) => ({...acc, [slug]: label}), {}
              )
            );
          }

          if (Array.isArray(settings?.postTypes)) {
            setCurrentPostType(settings.postTypes.find(type => type.slug === postType));
          }
        });
    }, []);

    useEffect(() => {
      if (Array.isArray(settings?.postTypes)) {
        setCurrentPostType(settings.postTypes.find(type => type.slug === postType));
      }
    }, [postType]);

    const list = useContentFilterList( props.attributes );

    return createElement(Fragment, {},
      toolbar({isEditing, setIsEditing}),
      createElement('div', useBlockProps(),
        isEditing ? editingView({props, settings, currentPostType, taxLabels}) : contentView(list)
      )
    );
  }

  registerBlockType('hds-wp/content-filter-list', {
		title: __( 'Helsinki - Custom Post Type Filter Listing', 'hds-wp' ),
		edit: edit,
	});

})(window.wp);
