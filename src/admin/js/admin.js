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
	return wp.compose.compose(
		wp.data.withSelect(function(select, props){
		  return {
			categories: select('core').getEntityRecords('taxonomy', 'category')
		  }
		})
	  )(function(props){
		var options = [];
		if ( props.categories ) {
		  options = props.categories
			.map(function(category){
			  return {label: category.name, value: category.id};
			});
		  options.unshift({label: wp.i18n.__( 'All categories', 'hds-wp' ), value: 0});
		} else {
		  options = [{label: '--', value: ''}]
		}

		return wp.element.createElement( wp.components.SelectControl, {
		  label: wp.i18n.__( 'Category', 'hds-wp' ),
				value: props.attributes.category,
		  options: options,
				onChange: function(selected) {
					props.setAttributes({category: selected});
				}
		});

	  });

}

function hdsWithSearchPosts(control) {
  return wp.compose.compose(
    wp.data.withSelect(function(select, props){
      return {
        searchPosts: function(searchInput) {
          let params = [
                'status=publish',
                'per_page=100',
                'search=' + searchInput,
				'orderby=relevance',
				'search_columns=post_title',
              ];

			  return wp.apiFetch({
				path: '/wp/v2/posts?' + params.join('&')
			  }).then(function (posts) {
			  	return wp.apiFetch({
					path: '/wp/v2/pages?' + params.join('&')
				}).then(function (pages) {
					return posts.concat(pages);
				});
			  });
        },
      }
    })
  )(control);
}

function hdsSearchPostsTextControl() {

  function populateFoundPosts(posts, props) {
    const foundPostsList = document.getElementById('found-posts');

    clearFoundPosts(foundPostsList);

    for (var i = 0; i < posts.length; i++) {
      foundPostsList.appendChild(
        foundPostListItem(posts[i], function(post) {
			highlightSelectedPost(event.target);
          props.setAttributes({
            postId: post.id,
            postTitle: post.title.rendered,
			postExcerpt: post.excerpt.rendered
          });
        })
      );
    }
  }

  function highlightSelectedPost(target) {
	var links = target.closest('#found-posts').querySelectorAll('a');
	for(var i = 0; i < links.length; i++) {
		links[i].classList.remove('selected');
	}
	target.classList.add('selected');
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
        link = document.createElement('a');

    link.addEventListener('click', function(event){
      event.preventDefault();
      onClick(post);
    });

    link.innerHTML = post.title.rendered;
    li.appendChild(link);

    return li;
  }

  // TODO: how to make this more React style?
  const FoundPosts = wp.element.createElement(
    'ul', {id: 'found-posts'}
  );

  return hdsWithSearchPosts(function(props) {
    return wp.element.createElement(
      wp.element.Fragment, {},
      wp.element.createElement(
        'div', {className: 'helsinki-post-search'},
        wp.element.createElement( wp.components.TextControl, {
          label: wp.i18n.__( 'Search posts', 'hds-wp' ),
          value: props.attributes.search,
          attribute: 'postTitle',
          onChange: function(text) {
            props.setAttributes({search: text});

            if ( text.length >= 3 ) {
              props.searchPosts(text).then(function(posts){
                populateFoundPosts(posts, props);
              });
            }
          }
        }),
        FoundPosts
      )
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
