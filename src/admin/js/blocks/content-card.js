(function(wp){

	const __ = wp.i18n.__;
	const { registerBlockType } = wp.blocks;
	const { Fragment, createElement } = wp.element;
	const { useBlockProps, BlockControls, InnerBlocks } = wp.blockEditor;
	const { InspectorControls } = wp.editor;
	const { Button, TextControl, SelectControl } = wp.components;
	const { withSelect, select, dispatch } = wp.data;

	const PostTypeSelect = hdsWithPostTypeSelectControl();
	const PostSearch = hdsSearchPostsTextControl();

	function removePostButton(props) {
		return hdsRemovePostControl({
			text: wp.i18n.__( 'Detach post', 'hds-wp' )
		}, props);
	}

	function panelControls(props) {
		var controls = [];
		controls.push(PostSearch);
		if (props.attributes.postId != 0) {
			controls.push(removePostButton);
		}

		return hdsInspectorControls(
			{ title: __( 'Settings', 'hds-wp' ), initialOpen: false },
			controls.map(function(control){
				return hdsPanelRow({}, createElement(control, props));
			  })
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
			const {
				clientId
			} = props;

			var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId( clientId ))[0];
			dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
				cards: select('core/block-editor')
				.getBlocks(parent.clientId)
				.map(function(block){
				  return block.attributes.postId;
				})
			});

			return createElement(
				Fragment, {},
				panelControls(props),
        placeholder(props)
			);
		}
	}

	registerBlockType('hds-wp/content-card', {
		title: __( 'Helsinki - Content Card', 'hds-wp' ),
		edit: edit(),
	});

})(window.wp);
