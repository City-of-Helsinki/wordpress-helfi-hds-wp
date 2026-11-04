(({
  menuPageSlug,
  settingName,
  appRoot,
  rest
}, translations) => {

  if (! document.getElementById(appRoot)) {
    return;
  }

  const {routes, nonce} = rest;

  const {
    createElement,
    createRoot,
    useRef,
    useEffect,
    useState
  } = wp.element;

  const {
    Button,
    Flex,
    FlexBlock,
    FlexItem,
    Draggable,
    Dashicon,
    Notice
  } = wp.components;

  const apiFetch = wp.apiFetch;

  const App = () => {
    const [postTypes, setPostTypes] = useState();
    const [message, setMessage] = useState();
    const [taxonomies, setTaxonomies] = useState();
    const [taxonomyOrder, setTaxonomyOrder] = useState({});
    const [taxonomyOrderChanged, setTaxonomyOrderChanged] = useState(false);

    const setPostTypeTaxonomyOrder = (postType, taxonomies) => {
      setTaxonomyOrderChanged(true);
      setTaxonomyOrder((current) => ({
        ...current,
        [postType]: taxonomies
      }));
    };

    useEffect(() => {
      apiFetch({path: '/' + routes.getSettings})
        .then(({postTypes, taxonomyOrder, taxonomies}) => {
          setPostTypes(postTypes);
          setTaxonomies(taxonomies);
          setTaxonomyOrder(taxonomyOrder);
        });
    }, []);

    const isLoading = () => (undefined === postTypes || undefined === taxonomies);

    if (isLoading()) {
      return createElement('p', {}, translations.ui.loading);
    }

    const showMessage = () => {
      const {status, text} = message || {};

      if (status && text) {
        return createElement(Notice, {
          status,
          isDismissible: true,
          onDismiss: () => setMessage(null),
        }, text);
      }
    };

    return createElement(Flex, {direction: 'column', gap: 4},
      postTypes.map(
        postType => createElement(FlexBlock, {},
          createElement(PostTypeTaxonomies, {
            postType,
            taxonomies,
            taxonomyOrder,
            setPostTypeTaxonomyOrder
          })
        )
      ),
      createElement(FlexBlock, {},
        createElement(SaveChanges, {
          taxonomyOrder,
          taxonomyOrderChanged,
          setTaxonomyOrderChanged,
          setMessage
        }),
      ),
      showMessage()
    );
  };

  const SaveChanges = ({taxonomyOrder, taxonomyOrderChanged, setTaxonomyOrderChanged, setMessage}) => {
    const [saving, setSaving] = useState(false);

    const handleResponse = ({code, message}) => {
      setMessage({
        status: code ? 'error' : 'success',
        text: message,
      });

      setTimeout(() => setMessage(null), 5000);

      setTaxonomyOrderChanged(false);
    };

    const handleClick = () => {
      setSaving(true);

      apiFetch({
          path: '/' + routes.updateSettings,
          method: 'POST',
          data: taxonomyOrder,
        })
        .then(handleResponse)
        .catch(handleResponse)
        .finally(() => setSaving(false));
    };

    return createElement('section', {},
      createElement(Button, {
        isBusy: saving,
        disabled: ! taxonomyOrderChanged || saving,
        variant: 'primary',
        onClick: handleClick,
      }, translations.ui.save)
    );
  };

  const PostTypeTaxonomies = ({postType, taxonomies, taxonomyOrder, setPostTypeTaxonomyOrder}) => {
    const order = taxonomyOrder[postType.slug] || [];

    const supported = taxonomies
      .filter(taxonomy => taxonomy.object_types.includes(postType.slug))
      .sort((a, b) => {
        const aIndex = order.indexOf(a.slug);
        const bIndex = order.indexOf(b.slug);

        // Taxonomies without a saved position go last.
        const aPosition = aIndex === -1 ? Infinity : aIndex;
        const bPosition = bIndex === -1 ? Infinity : bIndex;

        return aPosition === bPosition ? 0 : aPosition - bPosition;
      });

    const reorder = (from, to) => {
      const next = supported.map(taxonomy => taxonomy.slug);
      const [moved] = next.splice(from, 1);

      next.splice(to, 0, moved);
      setPostTypeTaxonomyOrder(postType.slug, next);
    };

    return createElement('section', {},
      createElement('h2', {}, postType.label),
      createElement(TaxonomyListTable, {
        postType: postType.slug,
        supported,
        reorder
      })
    );
  };

  const TaxonomyListTable = ({postType, supported, reorder}) => {
    const itemRefs = useRef([]);
    const sourceIndex = useRef(null);
    const insertionIndex = useRef(null);

    return createElement('table', {className: 'wp-list-table widefat striped'},
      createElement('thead', {},
        createElement('th', {style: {width: '50px'}}, ''),
        createElement('th', {}, translations.taxonomies.title),
      ),
      createElement('tbody', {},
        supported.map(
          (taxonomy, index) => createElement(TaxonomyRow, {
            itemRef: (element) => (itemRefs.current[index] = element),
            postType,
            taxonomy,
            handleDragStart: (event) => {
              sourceIndex.current = index;
              insertionIndex.current = null;
            },
            handleDragEnd: (event) => {
              const from = sourceIndex.current;
              const insertion = insertionIndex.current;

              sourceIndex.current = null;
              insertionIndex.current = null;

              if (from === null || insertion === null) {
                return;
              };

              const to = insertion > from ? insertion - 1 : insertion;
              if (from === to) {
                return;
              }

              reorder(from, to);
            },
            handleDragOver: (event) => {
              const elements = itemRefs.current;

              // Find the first item whose midpoint is below the pointer.
              const index = elements.findIndex((element) => {
                if (!element) return false;

                const { top, height } = element.getBoundingClientRect();
                return event.clientY < top + height / 2;
              });

              // An insertion slot: 0 = before first, length = after last.
              insertionIndex.current = index === -1 ? elements.length : index;
            },
          })
        )
      )
    );
  };

  const TaxonomyRow = ({itemRef, postType, taxonomy, handleDragStart, handleDragEnd, handleDragOver}) => {
    return createElement(Draggable, {
      elementId: `${postType}-${taxonomy.slug}`,
      transferData: { taxonomy: taxonomy.slug },
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDragEnd: handleDragEnd,
    },
      ({onDraggableStart, onDraggableEnd}) => {
        return createElement('tr', {
            ref: (element) => itemRef(element),
            id: `${postType}-${taxonomy.slug}`,
            draggable: true,
            onDragStart: onDraggableStart,
            onDragEnd: onDraggableEnd,
          },
          createElement('td', {}, createElement(Dashicon, {icon: 'menu'})),
          createElement('td', {}, taxonomy.label),
        );
      }
    );
  };

  createRoot(document.getElementById(appRoot))
    .render(createElement(App, {}));

})(HELSINKI_TAXONOMY_ORDER, HELSINKI_TAXONOMY_ORDER_I18N);
