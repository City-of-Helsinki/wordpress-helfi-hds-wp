(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { withSelect, select, dispatch } = wp.data;
	const compose = wp.compose.compose;
	const apiFetch = wp.apiFetch;
	const { Button, TextControl, SelectControl, ToolbarGroup, ToolbarButton } = wp.components;

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

	function panelControls(linkType, props) {
    var controls = [];
    switch (linkType) {
      case 'title':
        controls.push(titleText);
        controls.push(urlText);
        controls.push(hdsExternalUrlControl);
        controls.push(hdsTargetBlankControl);
        break;

      case 'title-excerpt':
        controls.push(titleText);
        controls.push(excerptText);
        controls.push(urlText);
        controls.push(hdsExternalUrlControl);
        controls.push(hdsTargetBlankControl);
        break;

      case 'image-title':
        controls.push(titleText);
        controls.push(urlText);
        controls.push(hdsExternalUrlControl);
        controls.push(hdsTargetBlankControl);
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

    let parts = [
      createElement( 'h3', {className: 'link___title'}, title )
    ];

    if ( linkType === 'title-excerpt' && props.attributes.linkExcerpt ) {
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
					hdsMediaUpload(
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
					),
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
			const {
				clientId
			} = props;
		
			var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId( clientId ))[0];
			dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
				links: select('core/block-editor')
				.getBlocks(parent.clientId)
				.map(function(block){
				  return block.attributes;
				})
			});
	
      var parent = getParentBlock(props.clientId);
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
			linkUrl: {
				type: 'string',
				default: ''
			},
			targetBlank: {
				type: 'boolean',
				default: false
			},
			isExternalUrl: {
				type: 'boolean',
				default: false
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
