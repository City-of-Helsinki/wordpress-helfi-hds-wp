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

    registerBlockType('hds-wp/link-list-card', {
      title: __('Helsinki - Link List Card', 'hds-wp'),
      edit: edit,
      save: save,
      example: {
        attributes: {
          title: __('This is the card\'s title', 'hds-wp'),
        },
      },
    });

    function updateParentAttributes(clientId) {

			var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId( clientId ))[0];
			dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
				cards: select('core/block-editor')
				.getBlocks(parent.clientId)
				.map(function(block){
				  return block.attributes;
				})
			});

    }

    function edit({attributes, setAttributes, clientId, isSelected}) {
      const blockProps = useBlockProps({});
      const [titleError, setTitleError] = useState(
        attributes.title ? false : true
      );
      const [titleLengthError, setTitleLengthError] = useState(
        attributes.title.length < 65 ? false : true
      );
      const [linksError, setLinksError] = useState(
        //there must be at least one link and three links maximum
        attributes.links.length > 0 && attributes.links.length < 4 ? false : true
      );
      const isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(
          clientId,
          true
        );
      });

      const {createErrorNotice, removeNotice} = useDispatch(store);

      updateParentAttributes(clientId);

      // Check if title is set, if not, show error notice
      useEffect(() => {
        const title = attributes.title;
        if (!title) {
          createErrorNotice(
            __('Helsinki - Link List Card', 'hds-wp') +
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

      // Check if title is too long, if so, show error notice
      useEffect(() => {
        const title = attributes.title;
        if (title.length > 64) {
          createErrorNotice(
            __('Helsinki - Link List Card', 'hds-wp') +
              ': ' +
              __('Please limit the title to 64 characters', 'hds-wp'),
            {
              type: 'default',
              id: 'titleLengthError-' + clientId,
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
          dispatch('core/notices').removeNotice('titleLengthError-' + clientId);
        }
      }, [titleLengthError]);


      // Check if the amount of links is in the allowed range
        useEffect(() => {
            const links = attributes.links;
            if (links.length < 1 || links.length > 3) {
                createErrorNotice(
                    __('Helsinki - Link List Card', 'hds-wp') +
                    ': ' +
                    __('Please add between 1 and 3 links', 'hds-wp'),
                    {
                        type: 'default',
                        id: 'linksError-' + clientId,
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
                dispatch('core/notices').removeNotice('linksError-' + clientId);
            }
        }, [linksError]);

      //if block or it's innerblock is not selected, map innerblocks attributes to links
        useEffect(() => {
          const innerBlocks = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
          const links = innerBlocks.map((block) => {
              return block.attributes;
          });
          setAttributes({links: links});
        }, [isSelected, isParentOfSelectedBlock]);

        //if links are updated, check if the amount of links is in the allowed range
        useEffect(() => {
          setLinksError(attributes.links.length > 0 && attributes.links.length < 4 ? false : true);
        }, [attributes]);


      return (
        <Fragment>
          <div {...blockProps}>
            <RichText
              tagName="h3"
              className="hds-links-list-card__title"
              value={attributes.title}
              onChange={(value) => (
                setAttributes({title: value}),
                setTitleError(value ? false : true),
                setTitleLengthError(value.length < 65 ? false : true)
              )}
              placeholder={__('This is the title*', 'hds-wp')}
              allowedFormats={[]}
            />
            <div className="hds-links-list-card__links">
              <InnerBlocks
                template={[
                  ['hds-wp/link-list-card-link'],
                  ['hds-wp/link-list-card-link'],
                  ['hds-wp/link-list-card-link'],
                ]}
                allowedBlocks={['hds-wp/link-list-card-link']}
                templateLock={false}
              />
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
