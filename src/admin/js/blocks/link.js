(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { withSelect } = wp.data;
	const compose = wp.compose.compose;
	const apiFetch = wp.apiFetch;
	const { Button, TextControl, SelectControl, ToolbarGroup, ToolbarButton } = wp.components;

	const PostTypeSelect = hdsWithPostTypeSelectControl();
	const PostSearch = hdsSearchPostsTextControl();

  function removePostButton(props) {
	  return hdsRemovePostControl({
		  text: wp.i18n.__( 'Detach post', 'hds-wp' )
	  }, props);
  }

  function titleText(props) {
    return hdsTextControl({
  		label: wp.i18n.__( 'Title', 'hds-wp' ),
  		value: props.attributes.linkTitle,
  		attribute: 'linkTitle',
  	}, props);
  }

  function excerptText(props) {
    return hdsTextAreaControl({
  		label: wp.i18n.__( 'Excerpt', 'hds-wp' ),
  		value: props.attributes.linkExcerpt,
  		attribute: 'linkExcerpt',
  	}, props);
  }

  function urlText(props) {
    return hdsTextControl({
  		label: wp.i18n.__( 'URL', 'hds-wp' ),
  		value: props.attributes.linkUrl,
  		attribute: 'linkUrl',
  	}, props);
  }

  function linkDirectionControl(props) {
	return hdsRadioControl({
		label: wp.i18n.__( 'Link type', 'hds-wp' ),
		selected: props.attributes.linkDir,
		attribute: 'linkDir',
		options:  [
			{label: __('Internal link', 'hds-wp'), value: 'internal'},
			{label: __('External link', 'hds-wp'), value: 'external'},
		]
	}, props);
  }

	function panelControls(linkType, props) {
    var controls = [];
	controls.push(linkDirectionControl);
    switch (linkType) {
      case 'title':
		if (props.attributes.linkDir == 'internal') {
			controls.push(PostSearch);
			if (props.attributes.postId != 0) {
				controls.push(removePostButton);
			}
		}
		else {
			controls.push(titleText);
			controls.push(urlText);
			controls.push(hdsTargetBlankControl);
		}
        break;

      case 'title-excerpt':
		if (props.attributes.linkDir == 'internal') {
			controls.push(PostSearch);
			if (props.attributes.postId != 0) {
				controls.push(removePostButton);
			}
		}
		else {
			controls.push(titleText);
			controls.push(excerptText);
			controls.push(urlText);
			controls.push(hdsTargetBlankControl);
		}
        break;

      case 'image-title':
		if (props.attributes.linkDir == 'internal') {
			controls.push(PostSearch);
			if (props.attributes.postId != 0) {
				controls.push(removePostButton);
			}
		}
		else {
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
    var title = props.attributes.linkTitle ? props.attributes.linkTitle : __( 'Helsinki - Link', 'hds-wp' );

	if (props.attributes.linkDir == 'internal' && props.attributes.postId != 0) {
		title = props.attributes.postTitle ? props.attributes.postTitle : __( 'Helsinki - Link', 'hds-wp' );
	}

    let parts = [
      createElement( 'h3', {className: 'link___title'}, title )
    ];

    if ( linkType === 'title-excerpt' && props.attributes.linkDir == 'internal' && props.attributes.postId != 0 && props.attributes.postExcerpt ) {
		var excerptWrapper = document.createElement("div");
		excerptWrapper.innerHTML = props.attributes.postExcerpt; //used to remove extra <p>-tags from excerpt source
		parts.push(createElement( 'p', {className: 'link___excerpt'}, excerptWrapper.innerText ));
    }
    else if ( linkType === 'title-excerpt' && (props.attributes.linkDir != 'internal' || props.attributes.postId == 0) && props.attributes.linkExcerpt ) {
		parts.push(createElement( 'p', {className: 'link___excerpt'}, props.attributes.linkExcerpt ));
    }

    return createElement( 'div', useBlockProps({className: 'link'}), parts);
  }

  function getParentBlock( clientId ) {
    let parent = wp.data.select('core/block-editor').getBlocksByClientId(
      wp.data.select( 'core/editor' ).getBlockHierarchyRootClientId( clientId )
    );
    return parent[0];
  }

	function toolbar( props, linkType ) {
		if (linkType === 'image-title') {
			return createElement(BlockControls, {key: 'controls'},
				createElement(ToolbarGroup, {},
					props.attributes.linkDir == 'external' ? hdsMediaUpload(
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


	function edit() {
		return function(props) {
			var parent = getParentBlock(props.clientId);
			if (props.attributes.hasOwnProperty('isExternalUrl') && props.attributes.isExternalUrl != null) {
				if (props.attributes.isExternalUrl) {
					props.attributes.linkDir = 'external';
				}
				else {
					props.attributes.linkDir = 'internal';
				}
				props.attributes.isExternalUrl = null;
			}
			else if (!props.attributes.hasOwnProperty('linkDir')) {
				props.attributes.linkDir = 'internal';
			}

			return createElement(
				Fragment, {},
				toolbar( props, parent.attributes.linkType ),
				panelControls(parent.attributes.linkType, props),
        placeholder(parent.attributes.linkType, props)
			);
		}
	}

	registerBlockType('hds-wp/link', {
		apiVersion: 2,
		title: __( 'Helsinki - Link', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'links',
		supports: {},
		parent: [ 'hds-wp/links' ],
		attributes: {
			postId: {
				type: 'number',
				default: 0
			},
			linkTitle: {
				type: 'string',
				default: ''
			},
			postTitle: {
				type: 'string',
				default: ''
			},
			linkExcerpt: {
				type: 'string',
				default: ''
			},
			postExcerpt: {
				type: 'string',
				default: ''
			},
			linkUrl: {
				type: 'string',
				default: ''
			},
			linkDir: {
				type: 'string',
			},
			targetBlank: {
				type: 'boolean',
				default: false
			},
			isExternalUrl: {
				type: 'boolean',
			},
			mediaId: {
				type: 'number',
				default: 0
			},
			mediaUrl: {
				type: 'string',
				default: '',
			},
			mediaWidth: {
				type: 'number',
				default: 0
			},
			mediaHeight: {
				type: 'number',
				default: 0
			},
			mediaAlt: {
				type: 'string',
				default: '',
			},
			mediaSrcset: {
				type: 'string',
				default: '',
			},
			search: {
				type: 'string',
						default: ''
			},
		},
		edit: edit(),
	});

})(window.wp);
