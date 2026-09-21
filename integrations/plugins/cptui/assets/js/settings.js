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
    Flex,
    FlexItem,
    Draggable,
    Dashicon
  } = wp.components;

  const apiFetch = wp.apiFetch;

  const App = () => {
    const [postTypes, setPostTypes] = useState();
    const [taxonomies, setTaxonomies] = useState();
    const [settings, setSettings] = useState();

    const updatePostTypeTaxonomyOrder = (postType, taxonomies) => {
      setSettings({
        ...settings,
        postType: taxonomies
      });
    };

    useEffect(() => {
      apiFetch({path: routes.GET})
        .then(({postTypes, settings, taxonomies}) => {
          setPostTypes(postTypes);
          setTaxonomies(taxonomies);
          setSettings(settings);
        });
    }, []);

    const isLoading = () => (
      undefined === postTypes
      || undefined === taxonomies
      || undefined === settings
    );

    if (isLoading()) {
      return createElement('p', {}, translations.ui.loading);
    }

    return createElement('div', {}, postTypes.map(
      postType => createElement(PostTypeTaxonomies, {
        postType,
        taxonomies,
        taxonomyOrder: settings[postType.slug] || [],
        updatePostTypeTaxonomyOrder: () => {},
      })
    ));
  };

  const PostTypeTaxonomies = ({postType, taxonomies, taxonomyOrder, updatePostTypeTaxonomyOrder}) => {
    const supported = [];

    taxonomies.forEach(taxonomy => {
      if (taxonomy.object_types.includes(postType.slug)) {
        supported.push(taxonomy);
      }
    });

    if (! taxonomyOrder || taxonomyOrder.length === 0) {
      taxonomyOrder = supported.map(taxonomy => taxonomy.slug);
    }

    return createElement('section', {},
      createElement('h2', {}, postType.label),
      createElement(TaxonomyList, {
        postType: postType.slug,
        supported,
        taxonomyOrder,
        updatePostTypeTaxonomyOrder
      })
    );
  };

  const TaxonomyList = ({postType, supported, taxonomyOrder, updatePostTypeTaxonomyOrder}) => {
    const [ordered, setOrdered] = useState(taxonomyOrder);

    supported.sort((a, b) => ordered.indexOf(a.slug) - ordered.indexOf(b.slug));

    const itemRefs = useRef([]);
    const sourceIndex = useRef(null);
    const insertionIndex = useRef(null);

    return createElement('ul', {}, supported.map(
      (taxonomy, index) => createElement(TaxonomyItem, {
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

          setOrdered((current) => {
            const next = [...current];
            const [moved] = next.splice(from, 1);

            next.splice(to, 0, moved);

            return next;
          });
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
    ));
  };

  const TaxonomyItem = ({itemRef, postType, taxonomy, handleDragStart, handleDragEnd, handleDragOver}) => {
    return createElement(Draggable, {
      elementId: `${postType}-${taxonomy.slug}`,
      transferData: { taxonomy: taxonomy.slug },
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDragEnd: handleDragEnd,
    },
      ({onDraggableStart, onDraggableEnd}) => {
        return createElement('li', {
          ref: (element) => itemRef(element),
          id: `${postType}-${taxonomy.slug}`,
          draggable: true,
          onDragStart: onDraggableStart,
          onDragEnd: onDraggableEnd,
        }, createElement(TaxonomyLabel, taxonomy));
      }
    );
  };

  const TaxonomyLabel = ({label}) => {
    return createElement(Flex, {justify: 'flex-start'},
      createElement(FlexItem, {},
        createElement(Dashicon, {icon: 'menu'})
      ),
      createElement(FlexItem, {}, label),
    );
  };

  createRoot(document.getElementById(appRoot))
    .render(createElement(App, {}));

})(HELSINKI_TAXONOMY_ORDER, HELSINKI_TAXONOMY_ORDER_I18N);
