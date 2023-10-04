(function (wp) {
    const {__} = wp.i18n;
    const {registerBlockType} = wp.blocks;
    const {Fragment, createElement, useState, useEffect} = wp.element;
    const {
      useBlockProps,
      BlockControls,
      InnerBlocks,
      RichText,
      InspectorControls,
    } = wp.blockEditor;
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
  
    registerBlockType('hds-wp/link-list-cards', {
      apiVersion: 2,
      title: __('Helsinki - Link List Cards', 'hds-wp'),
      icon: 'location-alt',
      category: 'hds-wp',
      style: 'hds-map',
      attributes: {
        title: {
          type: 'string',
          default: '',
        },
        cards: {
            type: 'array',
            default: [],
        },
        preview: {
          type: 'string',
          default: '',
        },
      },
      edit: edit,
      save: save,
      example: {
        attributes: {
          preview: hds_wp.blocksUrl + '/previews/link-list-cards.png',
        },
      },
    });
  
    function edit({attributes, setAttributes, clientId, isSelected}) {
      const blockProps = useBlockProps({});
      const [titleError, setTitleError] = useState(
        attributes.title ? false : true
      );
      const [cardsError, setCardsError] = useState(
        //there must be at least one card and four cards maximum
        attributes.cards.length > 0 && attributes.cards.length < 5 ? false : true
      );
      const isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(
          clientId,
          true
        );
      });

      const {createErrorNotice, removeNotice} = useDispatch(store);
    
      if (attributes.preview) {
        return (<img src={attributes.preview} />);
      }      

      // Check if title is set, if not, show error notice
      useEffect(() => {
        const title = attributes.title;
        if (!title) {
          createErrorNotice(
            __('Helsinki - Link List Cards', 'hds-wp') +
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
      
      // Check if the amount of cards is in the allowed range
      useEffect(() => {
        const cards = attributes.cards;
        if (cards.length < 1 || cards.length > 4) {
            createErrorNotice(
                __('Helsinki - Link List Cards', 'hds-wp') +
                ': ' +
                __('Please add between 1 and 4 cards', 'hds-wp'),
                {
                    type: 'default',
                    id: 'cardsError-' + clientId,
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
            dispatch('core/notices').removeNotice('cardsError-' + clientId);
        }
    }, [cardsError]);

    //if block or it's innerblock is not selected, map innerblocks attributes to cards
    useEffect(() => {  
        const innerBlocks = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
        const cards = innerBlocks.map((block) => {
            return block.attributes;
        });
        setAttributes({cards: cards});
    }, [isSelected, isParentOfSelectedBlock]);

    useEffect(() => {
      setCardsError(attributes.cards.length > 0 && attributes.cards.length < 5 ? false : true);
    }, [attributes]);


      return (
        <Fragment>
          <div {...blockProps}>
            <div className="hds-container">
              <RichText
                tagName="h2"
                className="hds-links-list-cards__title"
                value={attributes.title}
                onChange={(value) => (
                  setAttributes({title: value}),
                  setTitleError(value ? false : true)
                )}
                placeholder={__('This is the title*', 'hds-wp')}
                allowedFormats={[]}
              />
              <div className="hds-links-list-cards__cards">
                <InnerBlocks
                    template={[
                        ['hds-wp/link-list-card'],
                    ]}
                    templateLock={false}
                    allowedBlocks={['hds-wp/link-list-card']}
                />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }

    function save() {
      return (
          <Fragment>
            <InnerBlocks.Content />
          </Fragment>
      );
    }  

  })(window.wp);
  