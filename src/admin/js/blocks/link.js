(function(wp){
	const {__} = wp.i18n;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls } = wp.blockEditor;
	const { select, dispatch } = wp.data;
	const { Button, ToolbarGroup } = wp.components;

	const PostSearch = hdsSearchPostsTextControl();

  function removePostButton(props) {
	  return hdsRemovePostControl({
		  text: __( 'Detach post', 'hds-wp' )
	  }, props);
  }

  function titleText(props) {
    return hdsTextControl({
  		label: __( 'Link text', 'hds-wp' ),
  		value: props.attributes.linkTitle,
  		attribute: 'linkTitle',
  	}, props);
  }

  function excerptText(props) {
    return hdsTextAreaControl({
  		label: __( 'Excerpt', 'hds-wp' ),
  		value: props.attributes.linkExcerpt,
  		attribute: 'linkExcerpt',
  	}, props);
  }

  function urlText(props) {
    return hdsTextControl({
  		label: __( 'Link URL', 'hds-wp' ),
  		value: props.attributes.linkUrl,
  		attribute: 'linkUrl',
  	}, props);
  }

  function linkDirectionControl(props) {
  	return hdsRadioControl({
  		label: __( 'Link type', 'hds-wp' ),
  		selected: props.attributes.linkDir,
  		attribute: 'linkDir',
  		options:  [
  			{label: __('Post', 'hds-wp'), value: 'internal'},
  			{label: __('Link', 'hds-wp'), value: 'external'},
  		]
  	}, props);
  }

	function panelControls(linkType, props) {
    const controls = [];

    const isInternalLink = ('internal' === props.attributes.linkDir);
    const hasPostId = (0 !== props.attributes.postId);

    controls.push(linkDirectionControl);

    switch (linkType) {
      case 'title':
        if (isInternalLink) {
          controls.push(PostSearch);

          if (hasPostId) {
            controls.push(removePostButton);
          }
        } else {
            controls.push(titleText);
            controls.push(urlText);
            controls.push(hdsTargetBlankControl);
        }
      break;

      case 'title-excerpt':
        if (isInternalLink) {
          controls.push(PostSearch);

          if (hasPostId) {
            controls.push(removePostButton);
          }
        } else {
          controls.push(titleText);
          controls.push(excerptText);
          controls.push(urlText);
          controls.push(hdsTargetBlankControl);
        }
      break;

      case 'image-title':
        if (isInternalLink) {
          controls.push(PostSearch);

          if (hasPostId) {
            controls.push(removePostButton);
          }
        } else {
          controls.push(titleText);
          controls.push(urlText);
          controls.push(hdsTargetBlankControl);
        }
      break;
    }

    return hdsInspectorControls(
      { title: __( 'Settings', 'hds-wp' ), initialOpen: false },
      controls.map(function(control){
        return hdsPanelRow({}, createElement(control, props));
      })
    );
	}

  function placeholder(linkType, props) {
    const isInternalLink = ('internal' === props.attributes.linkDir),
          hasPostId = (0 !== props.attributes.postId);

    var title = props.attributes.linkTitle ? props.attributes.linkTitle : __( 'Helsinki - Link', 'hds-wp' );

    if (isInternalLink && hasPostId) {
      title = props.attributes.postTitle ? props.attributes.postTitle : __( 'Helsinki - Link', 'hds-wp' );
    }

    let parts = [
      createElement( 'h3', {className: 'link___title'}, title )
    ];

    if ( linkType === 'title-excerpt' && isInternalLink && hasPostId && props.attributes.postExcerpt ) {
	    var excerptWrapper = document.createElement("div");
	    excerptWrapper.innerHTML = props.attributes.postExcerpt; //used to remove extra <p>-tags from excerpt source
	    parts.push(createElement( 'p', {className: 'link___excerpt'}, excerptWrapper.innerText ));
    } else if ( linkType === 'title-excerpt' && (! isInternalLink || ! hasPostId) && props.attributes.linkExcerpt ) {
	    parts.push(createElement( 'p', {className: 'link___excerpt'}, props.attributes.linkExcerpt ));
    }

    return createElement( 'div', useBlockProps({className: 'link'}), parts);
  }

	function toolbar( props, linkType ) {
		if (linkType === 'image-title') {
			return createElement(BlockControls, {key: 'controls'},
				createElement(ToolbarGroup, {},
					props.attributes.linkDir === 'external' ? hdsMediaUpload(
						props.attributes.mediaId,
						function( media ) {
							props.setAttributes({
								mediaId: media.id,
								mediaUrl: media.sizes.full.url,
								mediaWidth: media.sizes.full.width,
								mediaHeight: media.sizes.full.height,
								mediaAlt: media.alt,
								mediaSrcset: media.sizes.full.srcset,
							});
						},
						function( mediaUpload ) {
							return createElement(Button,{
								icon: 'format-image',
								label: __( 'Select image', 'hds-wp' ),
								onClick: mediaUpload.open
							});
						}
					) : '',
				)
			);
		}
		return null;
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

  function ensureValidAttributesExist(props) {
    if (props.attributes.hasOwnProperty('isExternalUrl') && props.attributes.isExternalUrl != null) {
      if (props.attributes.isExternalUrl) {
        props.attributes.linkDir = 'external';
      }
      else {
        props.attributes.linkDir = 'internal';
      }
      props.attributes.isExternalUrl = null;
    } else if (!props.attributes.hasOwnProperty('linkDir')) {
      props.attributes.linkDir = 'internal';
    }

    return props;
  }

  function refreshParentLinksAttribute(linkClientId) {
    let parents = select('core/block-editor').getBlockParents(linkClientId);
    let directParentId = parents[parents.length - 1];

    dispatch('core/block-editor').updateBlockAttributes(directParentId, {
      links: select('core/block-editor').getBlocks(directParentId).map(block => block.attributes)
    });
  }

	function edit() {
		return function(props) {
			const {context} = props;

      refreshParentLinksAttribute(props.clientId);

			props = ensureValidAttributesExist(props);

			return createElement(
				Fragment, {},
				toolbar( props, context["hds-wp/linkType"] ),
				panelControls(context["hds-wp/linkType"], props),
        placeholder(context["hds-wp/linkType"], props)
			);
		}
	}

	registerBlockType('hds-wp/link', {
		title: __( 'Helsinki - Link', 'hds-wp' ),
		edit: edit(),
	});

})(window.wp);
