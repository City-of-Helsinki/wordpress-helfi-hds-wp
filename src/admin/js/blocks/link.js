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

  const FoundPosts = createElement(
    'div', {id: 'found-posts-wrap'},
    createElement( 'ul', {id: 'found-posts'} )
  );

  const PostTypeSelect = compose(withSelect( function(select, props){
    return {
      postTypes: select('core').getPostTypes()
    }
  }))(function(props){
    var options = [];
    if ( props.postTypes ) {
      options = props.postTypes
        .filter(function(postType){
          return postType.slug === 'page' || postType.slug === 'post';
        })
        .map(function(postType){
          return {label: postType.labels.singular_name, value: postType.slug};
        });
    } else {
      options = [{label: '--', value: ''}]
    }

    return createElement( SelectControl, {
      label: __( 'Post type', 'hds-wp' ),
			value: props.attributes.postType,
      options: options,
			onChange: function(selected) {
				props.setAttributes({postType: selected});
			}
    });
  });

  var isSearching = false,
      isRateLimited = false;

  function searchPosts( postType, searchInput ) {
    let url = '/wp/v2/' + postType + 's?',
        params = [
          'status=publish',
          'per_page=100',
          'search=' + searchInput,
        ];

    return apiFetch({
      path: url + params.join('&')
    });
  }

  const PostSearch = function(props) {
    return createElement( TextControl, {
      label: __( 'Search post by title', 'hds-wp' ),
      value: props.attributes.search,
      attribute: 'linkTitle',
      onChange: function(text) {
        props.setAttributes({search: text});

        if ( isSearching || isRateLimited || text.length < 3 ) {
          return;
        }

        isSearching = true;
        isRateLimited = true;

        searchPosts(props.attributes.postType, text).then(function(posts){
          isSearching = false;
          populateFoundPosts(posts, props);
          setTimeout(function() {
            isRateLimited = false;
          }, 2000);
        });
      }
    });
  };

  function populateFoundPosts(posts, props) {
    const foundPostsList = document.getElementById('found-posts');

    clearFoundPosts(foundPostsList);

    var eventCallback = function(post) {
      props.setAttributes({
        postId: post.id,
        linkTitle: post.title.rendered
      });
    };

    for (var i = 0; i < posts.length; i++) {
      foundPostsList.appendChild(
        foundPostListItem(posts[i], eventCallback)
      );
    }
  }

  function clearFoundPosts(element) {
    while( element.firstChild ) {
      element.removeChild(
        element.firstChild
      );
    }
  }

  function foundPostListItem(post, onClick) {
    var li = document.createElement('li'),
        button = document.createElement('button'),
        span = document.createElement('span');

    button.type = 'button';
    button.innerHTML = 'Select';

    button.addEventListener('click', function(event){
      event.preventDefault();
      onClick(post);
    });

    span.innerHTML = post.title.rendered;

    li.appendChild(span);
    li.appendChild(button);

    return li;
  }

	function panelControls(props) {
		return hdsInspectorControls(
			{ title: __( 'Settings', 'hds-wp' ), initialOpen: false },
      hdsPanelRow( {}, createElement( PostTypeSelect, props ) ),
      hdsPanelRow( {}, createElement( PostSearch, props ) ),
      hdsPanelRow( {}, FoundPosts )
		);
	}

  function placeholder(props) {
    return createElement(
      'div', useBlockProps(),
      createElement(
        'h3', {},
        props.attributes.linkTitle ? props.attributes.linkTitle : __( 'Helsinki - Link', 'hds-wp' )
      )
    );
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
      // parent.attributes.linkType -> conditional inspectorControls

			return createElement(
				Fragment, {},
				panelControls(props),
        placeholder(props)
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
      mediaId: {
				type: 'number',
				default: 0
			},
			linkTitle: {
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
			openBlank: {
				type: 'boolean',
				default: false
			},
			isExternal: {
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
