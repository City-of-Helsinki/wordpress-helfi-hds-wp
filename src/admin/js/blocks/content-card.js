(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { Button, TextControl, SelectControl } = wp.components;

  const PostTypeSelect = hdsWithPostTypeSelectControl();
  const PostSearch = hdsSearchPostsTextControl();

	function panelControls(props) {
		return hdsInspectorControls(
			{ title: __( 'Settings', 'hds-wp' ), initialOpen: false },
      hdsPanelRow( {}, createElement(PostTypeSelect, props) ),
      hdsPanelRow( {}, createElement(PostSearch, props) )
		);
	}

  function placeholder(props) {
    return createElement(
      'div', useBlockProps(),
      createElement(
        'div', {className: 'card'},
        props.attributes.postTitle ? props.attributes.postTitle : __( 'Helsinki - Content Card', 'hds-wp' )
      )
    );
  }

	function edit() {
		return function(props) {
			return createElement(
				Fragment, {},
				panelControls(props),
        placeholder(props)
			);
		}
	}

	registerBlockType('hds-wp/content-card', {
		apiVersion: 2,
		title: __( 'Helsinki - Content Card', 'hds-wp' ),
		category: 'hds-wp',
		icon: 'cover-image',
		supports: {},
		parent: [ 'hds-wp/content-cards' ],
		attributes: {
			postId: {
				type: 'number',
				default: 0
			},
			postTitle: {
				type: 'string',
				default: ''
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
