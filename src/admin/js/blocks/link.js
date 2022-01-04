(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { withSelect } = wp.data;
	const compose = wp.compose.compose;
	const apiFetch = wp.apiFetch;
	const { Button, TextControl, SelectControl } = wp.components;

  function titleText(props) {
    return hdsTextControl({
  		label: wp.i18n.__( 'Title', 'hds-wp' ),
  		value: props.attributes.linkTitle,
  		attribute: 'linkTitle',
  	}, props);
  }

  function excerptText(props) {
    return hdsTextControl({
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
        controls.push(hdsWithPostTypeSelectControl());
        controls.push(hdsSearchPostsTextControl());
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
    if ( props.attributes.postTitle ) {
      title = props.attributes.postTitle;
    }

    if ( 'image-title' === linkType && ! props.attributes.postId ) {
      title = __( 'Please select a post or page', 'hds-wp' );
    }

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

	function edit() {
		return function(props) {
      var parent = getParentBlock(props.clientId);
			return createElement(
				Fragment, {},
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
			postType: {
				type: 'string',
				default: 'post'
			},
      search: {
        type: 'string',
				default: ''
      },
		},
		edit: edit(),
	});

})(window.wp);
