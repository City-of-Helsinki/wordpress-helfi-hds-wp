function hdsSingleImage( attributes ) {
	var imageOrPlaceholder = attributes.src ?
		wp.element.createElement('img', attributes) :
		wp.element.createElement('div', {
			className: 'placeholder',
		});
	return wp.element.createElement('div', {className: 'image'},
		imageOrPlaceholder
	);
}

function hdsMediaUpload(defaultValue, selectCallback, renderCallback) {
	return wp.element.createElement(wp.blockEditor.MediaUploadCheck, {},
		wp.element.createElement(wp.blockEditor.MediaUpload, {
			onSelect: selectCallback,
			allowedTypes: ['image'],
			value: defaultValue,
			render: renderCallback,
		})
	);
}

function hdsMediaRemoveButton(callback) {
	return wp.element.createElement(wp.blockEditor.MediaUploadCheck, {},
		wp.element.createElement( wp.components.Button, {
			icon: 'no-alt',
			isDestructive: true,
			label: wp.i18n.__( 'Remove image', 'hds-wp' ),
			onClick: callback,
		})
	);
}

function hdsAlignLeftButton(callback) {
	return wp.element.createElement( wp.components.ToolbarButton, {
		icon: 'align-pull-left',
		label: wp.i18n.__( 'Align Left', 'hds-wp'),
		onClick: callback,
	});
}

function hdsAlignRightButton(callback) {
	return wp.element.createElement( wp.components.ToolbarButton, {
		icon: 'align-pull-right',
		label: wp.i18n.__( 'Align Right', 'hds-wp' ),
		onClick: callback,
	});
}

function hdsTextColumn( withButton ) {
	var allowed = ['core/heading', 'core/paragraph'],
			template = [['core/heading'], ['core/paragraph']];

	if ( withButton ) {
		allowed.push('core/button');
		template.push(['core/button']);
	}

	return wp.element.createElement('div',
		{className: 'content'},
		wp.element.createElement(wp.blockEditor.InnerBlocks, {
			allowedBlocks: allowed,
			templateLock: "all",
			template: template
		})
	);
}

function hdsTextColumnContent() {
	return wp.element.createElement('div',
		{className: 'content'},
		wp.element.createElement(
			wp.blockEditor.InnerBlocks.Content
		)
	);
}

function hdsIsChildBlock(clientId) {
	var parents = wp.data.select('core/block-editor').getBlockParents(clientId);
	return parents.length > 0;
}

function hdsRootParent(clientId) {
	var parents = wp.data.select('core/block-editor').getBlockParents(clientId);
	return parents[0];
}

function hdsContent(props, ...children) {
	return wp.element.createElement('div',
		{className: 'content'},
		children
	);
}

function hdsInspectorControls(config, ...children) {
	return wp.element.createElement(
		wp.element.Fragment, {},
		wp.element.createElement(
			wp.blockEditor.InspectorControls, {},
			wp.element.createElement(
				wp.components.PanelBody, config,
				children
			)
		)
	);
}

function hdsPanelRow(config, ...children) {
	return wp.element.createElement(
		wp.components.PanelRow, {},
		children
	);
}

function hdsContentTitleControl(props) {
	return hdsTextControl({
		label: wp.i18n.__( 'Title', 'hds-wp' ),
		value: props.attributes.contentTitle,
		attribute: 'contentTitle',
	}, props);
}

function hdsContentTitle(props) {
	return props.attributes.contentTitle ? wp.element.createElement(
		'h2',
		{className: 'content__heading'},
		props.attributes.contentTitle
	) : '';
}

function hdsContentTitleRich(props, config) {
  let value = config.titleAttribute ? props.attributes[config.titleAttribute] : props.attributes.contentTitle;

  if (! value && config.defaultValue) {
    value = config.defaultValue;
  }

	return wp.element.createElement(
		wp.blockEditor.RichText, {
			tagName: 'h2',
			className: config.className ? config.className : 'content__heading',
			value: value,
			onChange: function (value) {
				props.setAttributes(config.titleAttribute ? {[config.titleAttribute]: value} : {contentTitle: value});
			},
			allowedFormats: [],
			placeholder: config.placeholder ? config.placeholder : wp.i18n.__( 'Title', 'hds-wp' ),
		},
	);
}


function hdsContentTextControl(props) {
	return hdsTextAreaControl({
		label: wp.i18n.__( 'Excerpt', 'hds-wp' ),
		value: props.attributes.contentText,
		attribute: 'contentText',
	}, props);
}

function hdsContentText(props) {
	return props.attributes.contentText ? wp.element.createElement(
		'p',
		{className: 'content__text'},
		props.attributes.contentText
	) : '';
}

function hdsContentTextRich(props, config) {
	return wp.element.createElement(
		wp.blockEditor.RichText, {
			tagName: 'div',
			className: config.className ? config.className : 'content__text',
			value: config.textAttribute ? props.attributes[config.textAttribute] : props.attributes.contentText,
			onChange: function (value) {
				props.setAttributes(config.textAttribute ? {[config.textAttribute]: value} : {contentText: value});
			},
			placeholder: config.placeholder ? config.placeholder : wp.i18n.__( 'Excerpt', 'hds-wp' ),
		},
	);
}

function hdsButtonTextControl(props) {
	return hdsTextControl({
		label: wp.i18n.__( 'Button Text', 'hds-wp' ),
		value: props.attributes.buttonText,
		attribute: 'buttonText',
	}, props);
}

function hdsButtonUrlControl(props) {
	return hdsTextControl({
		label: wp.i18n.__( 'Button URL', 'hds-wp' ),
		type: 'url',
		value: props.attributes.buttonUrl,
		attribute: 'buttonUrl',
	}, props);
}

function hdsExternalUrlControl(props) {
	return hdsCheckboxControl({
		label: wp.i18n.__( 'Is external URL', 'hds-wp' ),
		checked: props.attributes.isExternalUrl,
		attribute: 'isExternalUrl',
	}, props);
}

function hdsTargetBlankControl(props, config) {
	return hdsCheckboxControl({
		label: wp.i18n.__( 'Open in new window', 'hds-wp' ),
		checked: props.attributes.targetBlank,
		attribute: 'targetBlank',
		help: config.help ? config.help : wp.element.createElement('p', {}, wp.i18n.__( 'The link\'s description must clearly state it opens in a new tab, and it must fulfill accessibility requirements. ', 'hds-wp' ), wp.element.createElement('a', {href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html', target: '_blank'}, wp.i18n.__( 'Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).', 'hds-wp' ))),
		helpVisibility: 'toggled',
	}, props);
}

function hdsContentButton({buttonText, buttonUrl}, config, icon) {
	return buttonText && buttonUrl ? wp.element.createElement(
		'a',
		config,
		wp.element.createElement(
			wp.element.Fragment, {},
			buttonText,
			icon ? icon : null
		)
	) : '';
}

function hdsTextControl(config, props) {
	var attributeKey = config['attribute'];
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.TextControl,
			{
				label: config.label,
				type: config.type ? config.type : 'text',
				value: config.value,
				onChange: function(text) {
					var newAttributes = {};
					newAttributes[config.attribute] = text;
					props.setAttributes(newAttributes);
				}
			}
		)
	);
}

function hdsTextAreaControl(config, props) {
	var attributeKey = config['attribute'];
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.TextareaControl,
			{
				label: config.label,
				type: config.type ? config.type : 'text',
				value: config.value,
				onChange: function(text) {
					var newAttributes = {};
					newAttributes[config.attribute] = text;
					props.setAttributes(newAttributes);
				}
			}
		)
	);
}


function hdsRadioControl(config, props) {
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.RadioControl,
			{
				label: config.label,
				selected: config.selected,
				options: config.options,
				onChange: function(value) {
					var newAttributes = {};
					newAttributes[config.attribute] = value;
					props.setAttributes(newAttributes);
				}
			}
		)
	);
}

function hdsCheckboxControl(config, props) {
	return wp.element.createElement(
		wp.components.PanelRow, {},
		wp.element.createElement(
			wp.components.CheckboxControl,
			{
				label: config.label,
				checked: config.checked,
				help: config.helpVisibility == 'always' || (config.helpVisibility == 'toggled' && config.checked) ? config.help : '',
				onChange: function(value) {
					var newAttributes = {};
					newAttributes[config.attribute] = value;
					props.setAttributes(newAttributes);
				}
			}
		)
	);
}

function hdsIconControl(props) {
	var iconsJson = hdsIcons(),
			options = [];

	for (var iconName in iconsJson) {
		options.push({
			label: iconName,
			value: iconName,
		});
	}

	return hdsSelectControl({
		label: wp.i18n.__( 'Icon', 'hds-wp' ),
		value: props.attributes.contentIcon,
		attribute: 'contentIcon',
		options: options
	}, props);
}

function hdsSelectControl(config, props) {
	return wp.element.createElement(
		wp.components.PanelRow, {
			className: config.attribute,
		},
		wp.element.createElement(
			wp.components.SelectControl,
			{
				label: config.label,
				value: config.value,
				onChange: function(value) {
					var newAttributes = {};
					newAttributes[config.attribute] = value;
					props.setAttributes(newAttributes);
				},
				options: config.options
			}
		)
	);
}

//deprecated icon functions are used to identify block migrations
function hdsDeprecatedContentIcon(props) {
	return props.attributes.contentIcon ? wp.element.createElement(
		'svg',
		{
			className: 'icon icon--' + props.attributes.contentIcon,
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: hdsIcons(props.attributes.contentIcon),
		})
	) : '';
}

function hdsContentIcon(props) {
	return props.attributes.contentIcon ? wp.element.createElement(
		'svg',
		{
			className: 'icon mask-icon icon--' + props.attributes.contentIcon + ' hds-icon--' + props.attributes.contentIcon,
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
	) : '';
}


function hdsAngleIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon mask-icon icon--angle-up hds-icon--angle-up',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
	);
}

function hdsDeprecatedAngleIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon icon--angle-up',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: 'M12 11.5l5 5 1.5-1.5L12 8.5 5.5 15 7 16.5z',
		})
	);
}


function hdsDeprecatedExternalLinkIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon icon--link-external',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: 'M18 6v12h-2V9.418l-8.586 8.587L6 16.591 14.589 8H6V6z',
		})
	);
}

function hdsExternalLinkIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon mask-icon icon--link-external hds-icon--link-external',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
	);
}


function hdsArrowIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon mask-icon icon--arrow-right hds-icon--arrow-right',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
	);
}

function hdsDeprecatedArrowIcon() {
	return wp.element.createElement(
		'svg',
		{
			className: 'icon icon--arrow-right',
			viewBox: '0 0 24 24',
			'aria-hidden': 'true',
			tabindex: '-1',
		},
		wp.element.createElement('path', {
			d: 'M10.5 5.5 12 7 8 11 20.5 11 20.5 13 8 13 12 17 10.5 18.5 4 12',
		})
	);
}


function hdsWithPostTypeSelectControl() {
  return wp.compose.compose(
    wp.data.withSelect(function(select, props){
      return {
        postTypes: select('core').getPostTypes()
      }
    })
  )(function(props){
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

    return wp.element.createElement( wp.components.SelectControl, {
      label: wp.i18n.__( 'Post type', 'hds-wp' ),
			value: props.attributes.postType,
      options: options,
			onChange: function(selected) {
				props.setAttributes({postType: selected});
			}
    });
  });
}

function hdsWithPostCategorySelectControl() {
  const {createElement, useEffect, useState} = wp.element;
  const {useSelect} = wp.data;
  const {SelectControl} = wp.components;
  const {__} = wp.i18n;
  const apiFetch = wp.apiFetch;
  const {addQueryArgs} = wp.url;

  const termsPerPage = 100;
  var categoryOptions = [];

  const fetchCategories = (pageCount) => {
    return Promise.all([...Array(pageCount).keys()].map(i => {
      let params = {page: i + 1, per_page: termsPerPage};

      return apiFetch({path: addQueryArgs('/wp/v2/categories', params)});
    }));
  };

  const fetchedCategoriesToOptions = (pagedTerms) => {
    let options = [{label: __( 'All categories', 'hds-wp' ), value: 0}];

    pagedTerms.forEach(terms => terms.map(
      ({id, name}) => options.push({label: name, value: id}))
    );

    categoryOptions = options;
  };

  return ({attributes, setAttributes}) => {
    const [selectOptions, setSelectOptions] = useState(categoryOptions);

    const totalPages = useSelect(select => {
      return select('core').getEntityRecordsTotalPages('taxonomy', 'category', {per_page: termsPerPage});
    }, []);

    useEffect(() => {
      if (! categoryOptions.length && Number.isInteger(totalPages)) {
        fetchCategories(totalPages)
          .then(fetchedCategoriesToOptions)
          .then(() => setSelectOptions(categoryOptions));
      }
    }, [totalPages]);

    return createElement(SelectControl, {
      label: __( 'Category', 'hds-wp' ),
      value: attributes.category,
      options: selectOptions,
      onChange: selected => setAttributes({category: selected}),
    });
  };
}

function hdsWithSearchPosts(control) {
  return wp.compose.compose(
    wp.data.withSelect(function(select, props){
      return {
        searchPosts: function(searchInput) {
          const params = new URLSearchParams();

          params.append('status', ['publish', 'private', 'draft']);
          params.append('per_page', 100);
          params.append('search', searchInput);
          params.append('orderby', 'relevance');
          params.append('search_columns', 'post_title');

          return wp.apiFetch({
              path: '/wp/v2/posts?' + params.toString()
            })
            .then((posts) => wp.apiFetch({
                path: '/wp/v2/pages?' + params.toString()
              })
              .then((pages) => posts.concat(pages))
            );
        },
      }
    })
  )(control);
}

function hdsSearchPostsTextControl() {
  const {
    createElement,
    Fragment,
    useState,
    useEffect
  } = wp.element;
  const {
    Button,
    RadioControl,
    TextControl,
    Flex,
    FlexBlock,
    FlexItem
  } = wp.components;
  const {__} = wp.i18n;

  const postStatuses = {
    publish: __('Public'),
    private: __('Private'),
    draft: __('Draft'),
  };

  const postTypes = {
    post: __('post'),
    page: __('page'),
  };

  const FoundPost = ({post, onClick, selectedPostId}) => {
    const {id, title} = post || {};
    const {rendered} = title || {};

    return createElement('li', {},
      createElement(TextControl, {
        type: 'radio',
        value: id,
        label: rendered,
        selected: id === selectedPostId,
        onChange: () => onClick(post),
      })
    );
  };

  const PostsList = ({posts, onClick, selectedPostId}) => {
    return Object.keys(posts)
      .map(status => createElement(RadioControl, {
        label: postStatuses[status] ? postStatuses[status] : status,
        selected: selectedPostId,
        options: posts[status].map(({id, title}) => ({value: id, label: title.rendered})),
        onChange: (id) => onClick(posts[status].find(post => post.id == id)),
      })
    );
  };

  const FoundPosts = ({posts, onClick, selectedPostId}) => {
    const [currentType, setCurrentType] = useState(Object.keys(posts)[0]);

    const typeTabs = [];
    const postLists = [];

    const TabButton = ({type}) => createElement(Button, {
      text: postTypes[type] ? postTypes[type] : type,
      isPressed: type === currentType,
      onClick: () => setCurrentType(type),
      variant: 'secondary',
      size: 'small',
    });

    Object.keys(posts).forEach(type => {
      typeTabs.push(createElement(FlexItem, {}, createElement(TabButton, {type})));

      postLists.push(
        createElement('div', {hidden: type !== currentType},
          createElement(PostsList, {
            posts: posts[type],
            onClick,
            selectedPostId
          })
        )
      );
    });

    if ( postLists.length ) {
      return createElement(
        Fragment, {},
        createElement(Flex, {justify: 'flex-start', expanded: true}, typeTabs),
        createElement('hr', {}),
        ...postLists,
      );
    }
  };

  const SearchingNotice = () => {
    return createElement('p', {}, __('Searching...', 'hds-wp'));
  };

  return hdsWithSearchPosts(({attributes, setAttributes, searchPosts}) => {
    const [isSearching, setIsSearching] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(attributes.postId);
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);

    const onClick = (post) => {
      if (post) {
        setSelectedPostId(post.id);
        setAttributes({
          postId: post.id,
          postTitle: post.title.rendered,
          postExcerpt: post.excerpt.rendered
        });
      } else {
        setSelectedPostId(null);
        setAttributes({
          postId: 0,
          postTitle: '',
          postExcerpt: ''
        });
      }
    };

    useEffect(() => {
      setSelectedPostId(attributes.postId);
    }, [attributes.postId]);

    useEffect(() => {
      if (searchTerm.length >= 3 && !isSearching) {
        const timer = setTimeout(() => {
          setIsSearching(true);

          searchPosts(searchTerm).then(posts => {
            setPosts(posts.reduce((filtered, post) => {
              if (! filtered[post.type]) {
                filtered[post.type] = {};
              }

              if (! filtered[post.type][post.status]) {
                filtered[post.type][post.status] = [];
              }

              filtered[post.type][post.status].push(post);

              return filtered;
            }, {}));
            setIsSearching(false);
          });
        }, 300);

        return () => clearTimeout(timer);
      } else if (! searchTerm.length) {
        setPosts([]);
      }
    }, [searchTerm]);

    return createElement(
      Flex, {direction: 'column', expanded: true, style: {width: '100%'}},
      createElement(FlexBlock, {},
        createElement( TextControl, {
          label: __( 'Search posts', 'hds-wp' ),
          value: searchTerm,
          onChange: setSearchTerm,
        })
      ),
      isSearching && createElement(FlexBlock, {}, createElement(SearchingNotice)),
      ! isSearching && createElement(FlexBlock, {}, createElement(FoundPosts, {posts, onClick, selectedPostId}))
    );
  });
}

function hdsRemovePostControl(config, props) {
	return wp.element.createElement(
		wp.components.PanelRow, { className: 'detach-post-group'},
		wp.element.createElement('p', {}, props.attributes.postTitle),
		wp.element.createElement(
			wp.components.Button,
			{
				text: config.text,
				variant: 'primary',
				isDestructive: true,
				onClick: function() {
					props.setAttributes({
						postId: 0,
						postTitle: ''
					  });
				}
			}
		)
	);

}
