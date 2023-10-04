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

    const PostSearch = hdsSearchPostsTextControl();

    function removePostButton(props) {
      return hdsRemovePostControl({
        text: wp.i18n.__( 'Detach post', 'hds-wp' )
      }, props);
    }  
  
    registerBlockType('hds-wp/link-list-card-link', {
      apiVersion: 2,
      title: __('Helsinki - Link List Card Link', 'hds-wp'),
      icon: 'location-alt',
      category: 'hds-wp',
      style: 'hds-map',
      parent: ['hds-wp/link-list-card'],
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
        linkUrl: {
          type: 'string',
          default: ''
        },
        linkDir: {
          type: 'string',
          default: 'internal'
        },
        targetBlank: {
          type: 'boolean',
          default: false
        },
        search: {
          type: 'string',
              default: ''
        },
  
      },
      edit: edit,
      example: {
        attributes: {
          title: __('This is the link\'s title', 'hds-wp'),
        },
      },
    });
  
    function linkDirectionControl(props) {
      return hdsRadioControl({
        label: wp.i18n.__( 'Link type', 'hds-wp' ),
        selected: props.attributes.linkDir,
        attribute: 'linkDir',
        options:  [
          {label: __('Post', 'hds-wp'), value: 'internal'},
          {label: __('Link', 'hds-wp'), value: 'external'},
        ]
      }, props);
    }    

    function titleText(props) {
      return hdsTextControl({
        label: wp.i18n.__( 'Link text', 'hds-wp' ),
        value: props.attributes.linkTitle,
        attribute: 'linkTitle',
      }, props);
    }
    
    function urlText(props) {
      return hdsTextControl({
        label: wp.i18n.__( 'Link URL', 'hds-wp' ),
        value: props.attributes.linkUrl,
        attribute: 'linkUrl',
      }, props);
    }
  

    function panelControls(props) {
      var controls = [];
      controls.push(linkDirectionControl);
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
  
      return hdsInspectorControls(
        { title: __( 'Settings', 'hds-wp' ), initialOpen: false },
        controls.map(function(control){
          return hdsPanelRow({}, createElement(control, props));
        })
      );
    }
  
    function placeholder(props) {
      var title = props.attributes.linkTitle ? props.attributes.linkTitle : __( 'Helsinki - Link', 'hds-wp' );
  
      if (props.attributes.linkDir == 'internal' && props.attributes.postId != 0) {
        title = props.attributes.postTitle ? props.attributes.postTitle : __( 'Helsinki - Link', 'hds-wp' );
      }
      return (<a { ...useBlockProps({className: 'link'}) }>{title}</a>);
    }
  
    function updateParentAttributes(clientId) {

      //update parent "links" and grandparent "cards" attributes
      var parentClientId = select('core/block-editor').getBlockParentsByBlockName(clientId, 'hds-wp/link-list-card')[0];
      var grandParentClientId = select('core/block-editor').getBlockParentsByBlockName(parentClientId, 'hds-wp/link-list-cards')[0];

      dispatch('core/block-editor').updateBlockAttributes(parentClientId, {
				links: select('core/block-editor')
				.getBlocks(parentClientId)
				.map(function(block){
				  return block.attributes;
				})
			});
      
      dispatch('core/block-editor').updateBlockAttributes(grandParentClientId, {
        cards: select('core/block-editor')
        .getBlocks(grandParentClientId)
        .map(function(block){
          return block.attributes;
        }
      )});

    }


    function edit(props) {
      const blockProps = useBlockProps({});
      const {createErrorNotice, removeNotice} = useDispatch(store);

      //limit linkTitle to 128 characters by updating the attribute
      useEffect(() => {
        if (props.attributes.linkTitle.length > 128) {
          props.setAttributes({linkTitle: props.attributes.linkTitle.substring(0, 128)});
        }
      }, [props.attributes.linkTitle]);

      updateParentAttributes(props.clientId);
        
      return (
        <Fragment>
            {placeholder(props)}
          {panelControls(props)}  
        </Fragment>
      );
    }
  })(window.wp);
  