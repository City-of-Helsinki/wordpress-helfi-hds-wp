"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hdsSingleImage(attributes) {
  var imageOrPlaceholder = attributes.src ? wp.element.createElement('img', attributes) : wp.element.createElement('div', {
    className: 'placeholder'
  });
  return wp.element.createElement('div', {
    className: 'image'
  }, imageOrPlaceholder);
}

function hdsMediaUpload(defaultValue, selectCallback, renderCallback) {
  return wp.element.createElement(wp.blockEditor.MediaUploadCheck, {}, wp.element.createElement(wp.blockEditor.MediaUpload, {
    onSelect: selectCallback,
    allowedTypes: ['image'],
    value: defaultValue,
    render: renderCallback
  }));
}

function hdsMediaRemoveButton(callback) {
  return wp.element.createElement(wp.blockEditor.MediaUploadCheck, {}, wp.element.createElement(wp.components.Button, {
    icon: 'no-alt',
    isDestructive: true,
    label: wp.i18n.__('Remove image', 'hds-wp'),
    onClick: callback
  }));
}

function hdsAlignLeftButton(callback) {
  return wp.element.createElement(wp.components.ToolbarButton, {
    icon: 'align-pull-left',
    label: wp.i18n.__('Align Left', 'hds-wp'),
    onClick: callback
  });
}

function hdsAlignRightButton(callback) {
  return wp.element.createElement(wp.components.ToolbarButton, {
    icon: 'align-pull-right',
    label: wp.i18n.__('Align Right', 'hds-wp'),
    onClick: callback
  });
}

function hdsTextColumn(withButton) {
  var allowed = ['core/heading', 'core/paragraph'],
      template = [['core/heading'], ['core/paragraph']];

  if (withButton) {
    allowed.push('core/button');
    template.push(['core/button']);
  }

  return wp.element.createElement('div', {
    className: 'content'
  }, wp.element.createElement(wp.blockEditor.InnerBlocks, {
    allowedBlocks: allowed,
    templateLock: "all",
    template: template
  }));
}

function hdsTextColumnContent() {
  return wp.element.createElement('div', {
    className: 'content'
  }, wp.element.createElement(wp.blockEditor.InnerBlocks.Content));
}

function hdsIsChildBlock(clientId) {
  var parents = wp.data.select('core/block-editor').getBlockParents(clientId);
  return parents.length > 0;
}

function hdsRootParent(clientId) {
  var parents = wp.data.select('core/block-editor').getBlockParents(clientId);
  return parents[0];
}

function hdsContent(props) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  return wp.element.createElement('div', {
    className: 'content'
  }, children);
}

function hdsInspectorControls(config) {
  for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    children[_key2 - 1] = arguments[_key2];
  }

  return wp.element.createElement(wp.element.Fragment, {}, wp.element.createElement(wp.blockEditor.InspectorControls, {}, wp.element.createElement(wp.components.PanelBody, config, children)));
}

function hdsPanelRow(config) {
  for (var _len3 = arguments.length, children = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    children[_key3 - 1] = arguments[_key3];
  }

  return wp.element.createElement(wp.components.PanelRow, {}, children);
}

function hdsContentTitleControl(props) {
  return hdsTextControl({
    label: wp.i18n.__('Title', 'hds-wp'),
    value: props.attributes.contentTitle,
    attribute: 'contentTitle'
  }, props);
}

function hdsContentTitle(props) {
  return props.attributes.contentTitle ? wp.element.createElement('h2', {
    className: 'content__heading'
  }, props.attributes.contentTitle) : '';
}

function hdsContentTitleRich(props, config) {
  return wp.element.createElement(wp.blockEditor.RichText, {
    tagName: 'h2',
    className: config.className ? config.className : 'content__heading',
    value: config.titleAttribute ? props.attributes[config.titleAttribute] : props.attributes.contentTitle,
    onChange: function onChange(value) {
      props.setAttributes(config.titleAttribute ? _defineProperty({}, config.titleAttribute, value) : {
        contentTitle: value
      });
    },
    allowedFormats: [],
    placeholder: config.placeholder ? config.placeholder : wp.i18n.__('Title', 'hds-wp')
  });
}

function hdsContentTextControl(props) {
  return hdsTextAreaControl({
    label: wp.i18n.__('Excerpt', 'hds-wp'),
    value: props.attributes.contentText,
    attribute: 'contentText'
  }, props);
}

function hdsContentText(props) {
  return props.attributes.contentText ? wp.element.createElement('p', {
    className: 'content__text'
  }, props.attributes.contentText) : '';
}

function hdsContentTextRich(props, config) {
  return wp.element.createElement(wp.blockEditor.RichText, {
    tagName: 'div',
    className: config.className ? config.className : 'content__text',
    value: config.textAttribute ? props.attributes[config.textAttribute] : props.attributes.contentText,
    onChange: function onChange(value) {
      props.setAttributes(config.textAttribute ? _defineProperty({}, config.textAttribute, value) : {
        contentText: value
      });
    },
    placeholder: config.placeholder ? config.placeholder : wp.i18n.__('Excerpt', 'hds-wp')
  });
}

function hdsButtonTextControl(props) {
  return hdsTextControl({
    label: wp.i18n.__('Button Text', 'hds-wp'),
    value: props.attributes.buttonText,
    attribute: 'buttonText'
  }, props);
}

function hdsButtonUrlControl(props) {
  return hdsTextControl({
    label: wp.i18n.__('Button URL', 'hds-wp'),
    type: 'url',
    value: props.attributes.buttonUrl,
    attribute: 'buttonUrl'
  }, props);
}

function hdsExternalUrlControl(props) {
  return hdsCheckboxControl({
    label: wp.i18n.__('Is external URL', 'hds-wp'),
    checked: props.attributes.isExternalUrl,
    attribute: 'isExternalUrl'
  }, props);
}

function hdsTargetBlankControl(props, config) {
  return hdsCheckboxControl({
    label: wp.i18n.__('Open in new window', 'hds-wp'),
    checked: props.attributes.targetBlank,
    attribute: 'targetBlank',
    help: config.help ? config.help : wp.element.createElement('p', {}, wp.i18n.__('The link\'s description must clearly state it opens in a new tab, and it must fulfill accessibility requirements. ', 'hds-wp'), wp.element.createElement('a', {
      href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html',
      target: '_blank'
    }, wp.i18n.__('Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).', 'hds-wp'))),
    helpVisibility: 'toggled'
  }, props);
}

function hdsContentButton(props, config, icon) {
  return props.attributes.buttonText && props.attributes.buttonUrl ? wp.element.createElement('a', config, wp.element.createElement(wp.element.Fragment, {}, props.attributes.buttonText, icon ? icon : null)) : '';
}

function hdsTextControl(config, props) {
  var attributeKey = config['attribute'];
  return wp.element.createElement(wp.components.PanelRow, {}, wp.element.createElement(wp.components.TextControl, {
    label: config.label,
    type: config.type ? config.type : 'text',
    value: config.value,
    onChange: function onChange(text) {
      var newAttributes = {};
      newAttributes[config.attribute] = text;
      props.setAttributes(newAttributes);
    }
  }));
}

function hdsTextAreaControl(config, props) {
  var attributeKey = config['attribute'];
  return wp.element.createElement(wp.components.PanelRow, {}, wp.element.createElement(wp.components.TextareaControl, {
    label: config.label,
    type: config.type ? config.type : 'text',
    value: config.value,
    onChange: function onChange(text) {
      var newAttributes = {};
      newAttributes[config.attribute] = text;
      props.setAttributes(newAttributes);
    }
  }));
}

function hdsRadioControl(config, props) {
  return wp.element.createElement(wp.components.PanelRow, {}, wp.element.createElement(wp.components.RadioControl, {
    label: config.label,
    selected: config.selected,
    options: config.options,
    onChange: function onChange(value) {
      var newAttributes = {};
      newAttributes[config.attribute] = value;
      props.setAttributes(newAttributes);
    }
  }));
}

function hdsCheckboxControl(config, props) {
  return wp.element.createElement(wp.components.PanelRow, {}, wp.element.createElement(wp.components.CheckboxControl, {
    label: config.label,
    checked: config.checked,
    help: config.helpVisibility == 'always' || config.helpVisibility == 'toggled' && config.checked ? config.help : '',
    onChange: function onChange(value) {
      var newAttributes = {};
      newAttributes[config.attribute] = value;
      props.setAttributes(newAttributes);
    }
  }));
}

function hdsIconControl(props) {
  var iconsJson = hdsIcons(),
      options = [];

  for (var iconName in iconsJson) {
    options.push({
      label: iconName,
      value: iconName
    });
  }

  return hdsSelectControl({
    label: wp.i18n.__('Icon', 'hds-wp'),
    value: props.attributes.contentIcon,
    attribute: 'contentIcon',
    options: options
  }, props);
}

function hdsSelectControl(config, props) {
  return wp.element.createElement(wp.components.PanelRow, {
    className: config.attribute
  }, wp.element.createElement(wp.components.SelectControl, {
    label: config.label,
    value: config.value,
    onChange: function onChange(value) {
      var newAttributes = {};
      newAttributes[config.attribute] = value;
      props.setAttributes(newAttributes);
    },
    options: config.options
  }));
} //deprecated icon functions are used to identify block migrations


function hdsDeprecatedContentIcon(props) {
  return props.attributes.contentIcon ? wp.element.createElement('svg', {
    className: 'icon icon--' + props.attributes.contentIcon,
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  }, wp.element.createElement('path', {
    d: hdsIcons(props.attributes.contentIcon)
  })) : '';
}

function hdsContentIcon(props) {
  return props.attributes.contentIcon ? wp.element.createElement('svg', {
    className: 'icon mask-icon icon--' + props.attributes.contentIcon + ' hds-icon--' + props.attributes.contentIcon,
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  }) : '';
}

function hdsAngleIcon() {
  return wp.element.createElement('svg', {
    className: 'icon mask-icon icon--angle-up hds-icon--angle-up',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  });
}

function hdsDeprecatedAngleIcon() {
  return wp.element.createElement('svg', {
    className: 'icon icon--angle-up',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  }, wp.element.createElement('path', {
    d: 'M12 11.5l5 5 1.5-1.5L12 8.5 5.5 15 7 16.5z'
  }));
}

function hdsDeprecatedExternalLinkIcon() {
  return wp.element.createElement('svg', {
    className: 'icon icon--link-external',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  }, wp.element.createElement('path', {
    d: 'M18 6v12h-2V9.418l-8.586 8.587L6 16.591 14.589 8H6V6z'
  }));
}

function hdsExternalLinkIcon() {
  return wp.element.createElement('svg', {
    className: 'icon mask-icon icon--link-external hds-icon--link-external',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  });
}

function hdsArrowIcon() {
  return wp.element.createElement('svg', {
    className: 'icon mask-icon icon--arrow-right hds-icon--arrow-right',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  });
}

function hdsDeprecatedArrowIcon() {
  return wp.element.createElement('svg', {
    className: 'icon icon--arrow-right',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    tabindex: '-1'
  }, wp.element.createElement('path', {
    d: 'M10.5 5.5 12 7 8 11 20.5 11 20.5 13 8 13 12 17 10.5 18.5 4 12'
  }));
}

function hdsWithPostTypeSelectControl() {
  return wp.compose.compose(wp.data.withSelect(function (select, props) {
    return {
      postTypes: select('core').getPostTypes()
    };
  }))(function (props) {
    var options = [];

    if (props.postTypes) {
      options = props.postTypes.filter(function (postType) {
        return postType.slug === 'page' || postType.slug === 'post';
      }).map(function (postType) {
        return {
          label: postType.labels.singular_name,
          value: postType.slug
        };
      });
    } else {
      options = [{
        label: '--',
        value: ''
      }];
    }

    return wp.element.createElement(wp.components.SelectControl, {
      label: wp.i18n.__('Post type', 'hds-wp'),
      value: props.attributes.postType,
      options: options,
      onChange: function onChange(selected) {
        props.setAttributes({
          postType: selected
        });
      }
    });
  });
}

function hdsWithPostCategorySelectControl() {
  return wp.compose.compose(wp.data.withSelect(function (select, props) {
    return {
      categories: select('core').getEntityRecords('taxonomy', 'category')
    };
  }))(function (props) {
    var options = [];

    if (props.categories) {
      options = props.categories.map(function (category) {
        return {
          label: category.name,
          value: category.id
        };
      });
      options.unshift({
        label: wp.i18n.__('All categories', 'hds-wp'),
        value: 0
      });
    } else {
      options = [{
        label: '--',
        value: ''
      }];
    }

    return wp.element.createElement(wp.components.SelectControl, {
      label: wp.i18n.__('Category', 'hds-wp'),
      value: props.attributes.category,
      options: options,
      onChange: function onChange(selected) {
        props.setAttributes({
          category: selected
        });
      }
    });
  });
}

function hdsWithSearchPosts(control) {
  return wp.compose.compose(wp.data.withSelect(function (select, props) {
    return {
      searchPosts: function searchPosts(searchInput) {
        var params = ['status=publish', 'per_page=100', 'search=' + searchInput, 'orderby=relevance', 'search_columns=post_title'];
        return wp.apiFetch({
          path: '/wp/v2/posts?' + params.join('&')
        }).then(function (posts) {
          return wp.apiFetch({
            path: '/wp/v2/pages?' + params.join('&')
          }).then(function (pages) {
            return posts.concat(pages);
          });
        });
      }
    };
  }))(control);
}

function hdsSearchPostsTextControl() {
  function populateFoundPosts(posts, props) {
    var foundPostsList = document.getElementById('found-posts');
    clearFoundPosts(foundPostsList);

    for (var i = 0; i < posts.length; i++) {
      foundPostsList.appendChild(foundPostListItem(posts[i], function (post) {
        highlightSelectedPost(event.target);
        props.setAttributes({
          postId: post.id,
          postTitle: post.title.rendered,
          postExcerpt: post.excerpt.rendered
        });
      }));
    }
  }

  function highlightSelectedPost(target) {
    var links = target.closest('#found-posts').querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('selected');
    }

    target.classList.add('selected');
  }

  function clearFoundPosts(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function foundPostListItem(post, onClick) {
    var li = document.createElement('li'),
        link = document.createElement('a');
    link.addEventListener('click', function (event) {
      event.preventDefault();
      onClick(post);
    });
    link.innerHTML = post.title.rendered;
    li.appendChild(link);
    return li;
  } // TODO: how to make this more React style?


  var FoundPosts = wp.element.createElement('ul', {
    id: 'found-posts'
  });
  return hdsWithSearchPosts(function (props) {
    return wp.element.createElement(wp.element.Fragment, {}, wp.element.createElement('div', {
      className: 'helsinki-post-search'
    }, wp.element.createElement(wp.components.TextControl, {
      label: wp.i18n.__('Search posts', 'hds-wp'),
      value: props.attributes.search,
      attribute: 'postTitle',
      onChange: function onChange(text) {
        props.setAttributes({
          search: text
        });

        if (text.length >= 3) {
          props.searchPosts(text).then(function (posts) {
            populateFoundPosts(posts, props);
          });
        }
      }
    }), FoundPosts));
  });
}

function hdsRemovePostControl(config, props) {
  return wp.element.createElement(wp.components.PanelRow, {
    className: 'detach-post-group'
  }, wp.element.createElement('p', {}, props.attributes.postTitle), wp.element.createElement(wp.components.Button, {
    text: config.text,
    variant: 'primary',
    isDestructive: true,
    onClick: function onClick() {
      props.setAttributes({
        postId: 0,
        postTitle: ''
      });
    }
  }));
} //deprecated icons paths; kept for possible block migrations


function hdsIcons(name) {
  var icons = {
    "(empty)": "",
    "alert-circle": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 12v2h-2v-2h2zm0-10v8h-2V6h2z",
    "check": "M21 7 10 18 4.5 12.5 6 11 10 15 19.5 5.5",
    "check-circle": "M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M16.5,8 L18,9.5 L10.5,17 L6,12.5 L7.5,11 L10.5,14 L16.5,8 Z",
    "check-circle-fill": "M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M16.5,8 L18,9.5 L10.5,17 L6,12.5 L7.5,11 L10.5,14 L16.5,8 Z",
    "info-circle": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 6v6.5h2V18H9v-1.5h2v-5H9V10h4zm-1.187-4a1.312 1.312 0 110 2.625 1.312 1.312 0 010-2.625z",
    "info-circle-fill": "M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M13,10 L13,16.5 L15,16.5 L15,18 L9,18 L9,16.5 L11,16.5 L11,11.5 L9,11.5 L9,10 L13,10 Z M11.8125239,6 C12.5373649,6 13.125,6.58759799 13.125,7.3125 C13.125,8.03735415 12.5373649,8.625 11.8125239,8.625 C11.0876351,8.625 10.5,8.03735415 10.5,7.3125 C10.5,6.58759799 11.0876351,6 11.8125239,6 Z",
    "error": "M11.128 2.51a1 1 0 011.7-.07l.044.07 9.562 17a1 1 0 01-.796 1.487l-.076.003H2.438a1 1 0 01-.906-1.423l.035-.067 9.562-17zM12 5.04L4.147 19h15.705L12 5.04zM13 16v2h-2v-2h2zm0-6.5v5h-2v-5h2z",
    "face-neutral": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm4 10v2H8v-2h8zM8.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
    "face-sad": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm.005 9a5.46 5.46 0 014.78 2.822l.11.21-1.79.893-.062-.12A3.461 3.461 0 0012.005 15a3.461 3.461 0 00-3.011 1.759l-.097.183-1.794-.884.07-.138A5.462 5.462 0 0112.005 13zM8.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
    "face-smile": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-3.103 9.558a3.463 3.463 0 003.108 1.942c1.28 0 2.434-.703 3.038-1.805l.062-.12 1.79.893a5.463 5.463 0 01-4.89 3.032 5.462 5.462 0 01-4.832-2.92l-.07-.138 1.794-.884zM8.5 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
    "heart": "M19.732 11.542c-1.185 1.206-2.282 2.191-3.344 3.144C14.9 16.02 13.492 17.284 12 19c-1.492-1.715-2.9-2.979-4.389-4.315-1.061-.952-2.159-1.937-3.343-3.143A4.43 4.43 0 013 8.418a4.43 4.43 0 011.268-3.124A4.273 4.273 0 017.34 4c3.073 0 4.099 2.71 4.662 3.725C12.566 6.71 13.591 4 16.664 4c1.159 0 2.248.46 3.068 1.294A4.43 4.43 0 0121 8.418a4.43 4.43 0 01-1.268 3.124M16.842 2c-2.91 0-4.376 1.806-4.84 2.518C11.536 3.806 10.071 2 7.16 2h-.004a6.057 6.057 0 00-4.356 1.842A6.317 6.317 0 001 8.29c0 1.682.64 3.261 1.801 4.448 1.266 1.292 2.426 2.336 3.548 3.345 1.581 1.423 3.075 2.767 4.64 4.612.18.211.858 1.103.865 1.112L12 22l.146-.193c.007-.01.684-.9.864-1.112 1.566-1.845 3.06-3.189 4.641-4.612 1.122-1.01 2.282-2.053 3.547-3.345A6.314 6.314 0 0023 8.29c0-1.682-.64-3.261-1.802-4.448A6.054 6.054 0 0016.842 2z",
    "heart-fill": "M16.842 2c-2.91 0-4.376 1.806-4.84 2.518C11.536 3.806 10.071 2 7.16 2h-.004a6.057 6.057 0 00-4.356 1.842A6.317 6.317 0 001 8.29c0 1.682.64 3.261 1.801 4.448 1.266 1.292 2.426 2.336 3.548 3.345 1.581 1.423 3.075 2.767 4.64 4.612.18.211.858 1.103.865 1.112L12 22l.146-.193c.007-.01.684-.9.864-1.112 1.566-1.845 3.06-3.189 4.641-4.612 1.122-1.01 2.282-2.053 3.547-3.345A6.314 6.314 0 0023 8.29c0-1.682-.64-3.261-1.802-4.448A6.054 6.054 0 0016.842 2z",
    "question-circle": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 12v2h-2v-2h2zm-.956-10.25c1.99 0 3.673 1.545 3.673 3.674 0 1.357-.47 2.065-1.556 2.882l-.242.178c-.744.545-.963.852-.98 1.658l-.002.108h-2c0-1.575.522-2.412 1.677-3.288l.248-.182c.706-.517.855-.726.855-1.356 0-.985-.75-1.674-1.673-1.674-.853 0-1.565.59-1.662 1.458l-.009.098-1.996-.114c.115-2.019 1.757-3.442 3.667-3.442z",
    "question-circle-fill": "M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M13,16 L13,18 L11,18 L11,16 L13,16 Z M12.0436666,5.75 C14.0342698,5.75 15.7172813,7.29463804 15.7172813,9.4236147 C15.7172813,10.7805773 15.2461461,11.4889681 14.160958,12.3060246 L13.9186951,12.4844002 C13.1752868,13.0294825 12.9556121,13.3359034 12.9385965,14.1419671 L12.9375,14.25 L10.9375,14.25 C10.9375,12.6745767 11.4591297,11.8377931 12.6143192,10.9622473 L12.8617612,10.7796271 C13.5684825,10.2628161 13.7172813,10.053863 13.7172813,9.4236147 C13.7172813,8.43933936 12.9661887,7.75 12.0436666,7.75 C11.1906565,7.75 10.4785101,8.34077372 10.3815862,9.20834909 L10.3733727,9.3058695 L8.37662729,9.19181821 C8.49191238,7.1734721 10.1344277,5.75 12.0436666,5.75 Z",
    "star": "M5.202 22.231l.217-1.728.737-5.847-3.973-4.278L1 9.115l1.69-.331 5.712-1.079 2.777-5.173L12 1l.821 1.532 2.777 5.173 5.712 1.079 1.69.33-1.183 1.264-3.985 4.29.737 5.835.229 1.728-1.558-.748L12 18.971l-5.24 2.512-1.558.748zm2.294-3.211l4.106-1.974.398-.184.398.184 4.094 1.974-.58-4.56-.06-.454.314-.319 3.103-3.346-4.444-.846-.446-.086-.206-.404L12 4.959 9.827 9.005l-.218.404-.434.086-4.444.846 3.103 3.346.302.319-.048.454-.592 4.56z",
    "star-fill": "M5.202 22.231l.217-1.728.737-5.847-3.973-4.278L1 9.115l1.69-.331 5.712-1.079 2.777-5.173L12 1l.821 1.532 2.777 5.173 5.712 1.079 1.69.33-1.183 1.264-3.985 4.29.737 5.835.229 1.728-1.558-.748L12 18.971l-5.24 2.512-1.558.748z",
    "home": "M1 13L12 2l11 11-1.5 1.5L20 13v8H4v-8l-1.5 1.5L1 13zm11-8l-6 6v8l2.999-.001L9 12h6l-.001 6.999L18 19v-8l-6-6zm1 9h-2l-.001 4.999h2L13 14z",
    "search": "M15 1a8 8 0 11-4.798 14.402l-6.401 6.4-1.591-1.59 6.398-6.4A8 8 0 0115 1zm0 2a6 6 0 100 12 6 6 0 000-12z",
    "user": "M16.267 13a4.733 4.733 0 014.728 4.517l.005.216V22H3v-4.267a4.733 4.733 0 014.517-4.728L7.733 13h8.534zm-8.534 2a2.733 2.733 0 00-2.728 2.567L5 17.733V20h14v-2.267c0-1.416-1.107-2.636-2.46-2.726l-.163-.005L7.733 15zM12 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z",
    "bell": "M18 17l-.002-.244c-.015-.842-.11-1.334-.333-1.756H6.335c-.223.422-.318.914-.333 1.756L6 17h12zm-5 2h-2a1 1 0 001.993.117L13 19zM12 4a4 4 0 00-3.995 3.8L8 8v3c0 .848-.096 1.464-.314 2.001h8.628c-.194-.478-.291-1.017-.31-1.727L16 11V8a4 4 0 00-4-4zm-6.893 9.26l.235-.279c.486-.564.638-.885.656-1.78L6 11V8a6 6 0 0111.996-.225L18 8l.002 3.2c.017.827.147 1.164.55 1.655l.341.405c.732.906 1.067 1.805 1.104 3.427L20 17v2h-5a3 3 0 01-5.995.176L9 19H4v-2c0-1.822.33-2.778 1.107-3.74z",
    "cogwheel": "M11.727 2c.964 0 1.783.502 2.146 1.335l.06.15.372 1.003c.041.167.163.29.329.331a.829.829 0 00.505-.013l.1-.042.826-.295c.831-.419 1.762-.381 2.408.14.864.62 1.184 1.676.856 2.678l-.057.157-.428.923a.567.567 0 000 .54c.07.14.162.232.32.324l.103.057 1.093.366c.826.277 1.47.965 1.602 1.756.19 1.02-.337 2-1.28 2.446l-.137.06-1.233.434a.446.446 0 00-.33.332.844.844 0 00.007.495l.038.09.425.855c.39.785.381 1.657-.048 2.3l-.091.124c-.637.899-1.706 1.243-2.66.872l-.142-.061-.993-.376a.557.557 0 00-.536 0c-.17.086-.288.197-.347.333l-.03.085-.308 1.056c-.312.815-1.001 1.397-1.865 1.52l-.164.019-.177.006a2.329 2.329 0 01-2.084-1.341l-.061-.145-.372-1.002a.446.446 0 00-.33-.331.826.826 0 00-.498.01l-.933.401c-.83.419-1.762.381-2.408-.14-.864-.62-1.183-1.676-.858-2.674l.057-.157.43-.988a.567.567 0 000-.54.735.735 0 00-.32-.324l-.102-.057-.911-.305a2.528 2.528 0 01-1.663-1.819c-.187-1.07.331-2.056 1.274-2.504l.138-.06.995-.374a.446.446 0 00.33-.332.844.844 0 00-.013-.509l-.042-.1-.29-.824c-.419-.774-.382-1.716.135-2.431.638-.899 1.707-1.243 2.67-.868l1.125.494a.557.557 0 00.537 0c.17-.086.287-.197.347-.333l.029-.085.307-1.05a2.372 2.372 0 011.959-1.594L11.727 2zm.002 1.75c-.23 0-.444.13-.546.361l-.032.092-.304 1.038a2.382 2.382 0 01-1.28 1.41 2.878 2.878 0 01-1.643.05l-.206-.061-.936-.474c-.304-.102-.583-.01-.68.099l-.025.036-.063.076c-.162.123-.228.349-.153.605l.035.098.486.98c.28.635.315 1.296.06 1.873-.238.54-.64.973-1.16 1.248l-.16.078-.924.371c-.273.079-.448.363-.448.643 0 .198.104.42.35.542l.1.04 1.03.306a2.37 2.37 0 011.393 1.27c.241.547.263 1.15.063 1.715l-.067.167-.477.96a.656.656 0 00.136.734c.175.177.374.253.63.13l.087-.049.98-.493a2.693 2.693 0 011.043-.197c.225 0 .396.032.79.132.526.177.97.61 1.262 1.183l.076.16.364.978c.06.184.162.29.3.347.1.041.193.052.34.052.23 0 .444-.13.546-.361l.033-.092.303-1.038a2.376 2.376 0 011.26-1.403 2.253 2.253 0 011.695-.067l.165.066.973.43c.196.099.367.072.563-.046l.155-.103.043-.062c.134-.21.17-.408.083-.622l-.532-1.072c-.255-.578-.306-1.177-.128-1.7l.06-.154c.176-.53.606-.978 1.175-1.272l.159-.076 1.134-.42c.298-.129.413-.32.413-.592a.525.525 0 00-.307-.494l-1.234-.394a2.37 2.37 0 01-1.392-1.27 2.301 2.301 0 01-.066-1.707l.065-.165.421-.97a.656.656 0 00-.135-.734c-.176-.176-.374-.252-.63-.13l-.088.05-.972.489c-.573.256-1.168.308-1.688.129l-.153-.061c-.525-.176-.97-.61-1.26-1.18l-.075-.158-.355-.894a.748.748 0 00-.652-.427zM12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 1.75A2.257 2.257 0 009.75 12 2.257 2.257 0 0012 14.25 2.257 2.257 0 0014.25 12 2.257 2.257 0 0012 9.75z",
    "eye": "M12 4.5c4.05 0 7.717 2.5 11 7.5-3.283 5-6.95 7.5-11 7.5S4.283 17 1 12c3.283-5 6.95-7.5 11-7.5zm0 2c-2.951 0-5.75 1.704-8.425 5.302L3.43 12l.145.198c2.624 3.53 5.368 5.237 8.258 5.3L12 17.5c2.951 0 5.75-1.704 8.425-5.302L20.57 12l-.145-.198c-2.624-3.53-5.368-5.237-8.258-5.3L12 6.5zM12 8a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z",
    "share": "M18.5 2.25a3.5 3.5 0 11-2.615 5.827L8.97 11.534a3.532 3.532 0 010 .932l6.916 3.457a3.5 3.5 0 11-.862 1.923l-6.95-3.474a3.5 3.5 0 110-4.743l6.95-3.475A3.5 3.5 0 0118.5 2.25zm0 14.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-13-6.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13-6.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    "calendar": "M17 2a1 1 0 011 1v1h4v17H2V4h4V3a1 1 0 112 0v1h8V3a1 1 0 011-1zm3 9H4v8h16v-8zm0-5H4v3h16V6z",
    "clock": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 2v5.584l3.243 3.244-1.415 1.415-3.535-3.536.002-.001-.294-.292L11 6h2z",
    "envelope": "M22 4v16H2V4h20zm-7.862 9.436L12 15.338l-2.14-1.902L4.536 18h14.927l-5.325-4.564zM20 8.226l-4.353 3.869L20 15.826v-7.6zM4 8.227v7.598l4.352-3.73L4 8.227zM19.493 6H4.505L12 12.661 19.493 6z",
    "globe": "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM7.345 17.04c-.666.07-1.33.157-1.991.258a8.509 8.509 0 003.898 2.748 12.433 12.433 0 01-1.907-3.005zm9.311.009a12.437 12.437 0 01-1.9 2.995 8.519 8.519 0 003.883-2.735l-.697-.103a43.226 43.226 0 00-1.286-.157zm-3.906-.245v3.18c.961-.902 1.74-1.942 2.317-3.076-.77-.056-1.543-.09-2.317-.104zm-1.5-.001c-.737.012-1.474.042-2.209.091l-.105.008a11.137 11.137 0 002.314 3.077v-3.176zm9.217-4.053h-2.759c-.058.98-.23 1.935-.51 2.853.783.091 1.562.203 2.336.335a8.437 8.437 0 00.933-3.188zM4.46 15.926l.05-.008a44.627 44.627 0 012.296-.324 12.278 12.278 0 01-.508-2.844H3.533c.1 1.138.423 2.212.926 3.176zm8.291-3.176v2.556c.977.017 1.954.065 2.927.146.29-.866.47-1.771.534-2.702H12.75zm-1.5 0H7.795c.063.928.243 1.832.532 2.696.972-.08 1.947-.126 2.923-.142V12.75zm8.284-4.689l-.316.054c-.67.11-1.344.204-2.02.283.28.917.452 1.872.51 2.852h2.76a8.446 8.446 0 00-.934-3.189zM4.46 8.074l-.017.033a8.446 8.446 0 00-.91 3.143h2.765c.059-.977.23-1.93.508-2.845-.786-.089-1.568-.2-2.346-.33zm11.218.474l-.47.037c-.817.058-1.637.095-2.457.11v2.554h3.461a10.803 10.803 0 00-.534-2.7zm-7.35.007l-.039.116a10.808 10.808 0 00-.493 2.579h3.455V8.695a45.328 45.328 0 01-2.923-.141zm2.923-4.533a11.137 11.137 0 00-2.315 3.077c.77.053 1.543.086 2.315.099V4.022zm1.5-.005v3.18a43.965 43.965 0 002.317-.103 11.127 11.127 0 00-2.316-3.077zm-3.497-.064l-.027.01a8.517 8.517 0 00-3.873 2.74c.661.101 1.326.187 1.993.257a12.43 12.43 0 011.907-3.007zm5.504.004l.142.169a12.424 12.424 0 011.758 2.825c.663-.07 1.324-.157 1.982-.259a8.51 8.51 0 00-3.882-2.735z",
    "group": "M14.5 16a3.5 3.5 0 013.498 3.38l.002.12V22h-2v-2.5a1.5 1.5 0 00-1.412-1.497L14.5 18h-5a1.5 1.5 0 00-1.497 1.412L8 19.5V22H6v-2.5a3.5 3.5 0 013.38-3.498L9.5 16h5zm2.4-6.001l3.6.001.12.002a3.5 3.5 0 013.375 3.31L24 13.5V16h-2v-2.5l-.003-.088a1.5 1.5 0 00-1.358-1.406L20.5 12l-3.6.001a5.023 5.023 0 000-2.002zm-9.8 0A5.023 5.023 0 007.1 12L3.5 12a1.5 1.5 0 00-1.497 1.412L2 13.5V16H0v-2.5a3.5 3.5 0 013.38-3.498L3.5 10l3.6-.001zM12 7a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zM5.5 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm13 0a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm-13 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    "layers": "M19,14.5 L21,15.5 L12,20 L3,15.5 L5,14.5 L12.0005205,18 L19,14.5 Z M19,11 L21,12 L12,16.5 L3,12 L5,11 L12.0005205,14.5 L19,11 Z M12,4 L21,8.5 L12,13 L3,8.5 L12,4 Z M12.0005205,6 L7,8.50052056 L12.0005205,11 L17,8.50052056 L12.0005205,6 Z",
    "link": "M11.489 6.42l2.074-2.055A4.575 4.575 0 0116.698 3a4.142 4.142 0 013.072 1.21 4.157 4.157 0 011.229 3.071 4.565 4.565 0 01-1.255 3.023l-.109.112-3.432 3.432a4.575 4.575 0 01-3.135 1.364 4.142 4.142 0 01-3.071-1.21l.2-.195c.353-.348.997-.993 1.235-1.24.84.86 2.36.848 3.3-.002l.087-.082 3.394-3.45c.95-.95.988-2.483.084-3.387-.84-.86-2.36-.848-3.3.002l-.087.082-2.055 2.055-1.366-1.365zm-7.201 7.202L7.6 10.327c1.685-1.704 4.422-1.72 6.106-.035l-.567.576c-.343.343-.71.708-.818.81-.88-.88-2.324-.899-3.247-.062l-.085.08-3.314 3.314c-.917.917-.926 2.425-.019 3.332.88.88 2.324.898 3.248.062l.085-.08 1.984-2.004 1.37 1.389-1.985 1.984a4.38 4.38 0 01-3.06 1.283 4.282 4.282 0 01-3.046-1.248c-1.652-1.634-1.669-4.298-.062-6.007l.097-.1z",
    "link-external": "M18 6v12h-2V9.418l-8.586 8.587L6 16.591 14.589 8H6V6z",
    "locate": "M13 2l.001 2.062A8.004 8.004 0 0119.938 11H22v2l-2.062.001a8.004 8.004 0 01-6.937 6.937L13 22h-2v-2.062a8.004 8.004 0 01-6.938-6.937L2 13v-2h2.062A8.004 8.004 0 0111 4.062V2h2zm-1 4a6 6 0 100 12 6 6 0 000-12zm0 2.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    "location": "M11.967 1.5c2.06 0 4.12.778 5.69 2.334 3.143 3.111 2.93 7.96 0 11.268l-.622.709c-2.612 2.991-4.066 4.96-5.068 6.937-1.073-2.13-2.682-4.249-5.689-7.646-2.93-3.308-3.143-8.157 0-11.268A8.06 8.06 0 0111.967 1.5zm.032 2a6.072 6.072 0 00-4.3 1.762A5.606 5.606 0 006.002 9.41c.02 1.573.648 3.134 1.766 4.398l.66.752c1.59 1.823 2.717 3.239 3.573 4.503.975-1.437 2.292-3.063 4.233-5.255 1.118-1.264 1.746-2.825 1.766-4.398a5.616 5.616 0 00-1.698-4.15A6.077 6.077 0 0011.999 3.5zM12 6a3.5 3.5 0 110 6.999A3.5 3.5 0 0112 6zm0 2c-.827 0-1.5.673-1.5 1.5S11.173 11 12 11s1.5-.673 1.5-1.5S12.827 8 12 8z",
    "map": "M22 4.113V17.72l-7 2.333-6-2-7 2.333V6.78l7-2.333 6 2 7-2.333zM8 6.887L4 8.22v9.392l4-1.333V6.887zm2 0v9.392l4 1.333V8.22l-4-1.334zm10 0l-4 1.334v9.39l4-1.332V6.887z",
    "person-female": "M11 18v4h2v-4h2v6H9v-6h2zm2.048-11c1.923 0 3.125 1.175 3.588 3.005l1.833 7.25-1.938.49-1.834-7.25c-.247-.977-.71-1.457-1.547-1.493L13.048 9h-2.096c-.902 0-1.392.478-1.65 1.495l-1.833 7.25-1.938-.49 1.833-7.25c.451-1.785 1.605-2.946 3.445-3.003L10.952 7h2.096zM12 0a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z",
    "person-male": "M11 16v6h2v-6h2v8H9v-8h2zm3.5-9a3.5 3.5 0 013.498 3.38l.002.12V16h-2v-5.5a1.5 1.5 0 00-1.412-1.497L14.5 9h-5a1.5 1.5 0 00-1.497 1.412L8 10.5V16H6v-5.5a3.5 3.5 0 013.38-3.498L9.5 7h5zM12 0a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z",
    "person-wheelchair": "M8 9.498v2.26a4.5 4.5 0 105.587 7.017l.095-.093 1.414 1.414A6.5 6.5 0 118 9.498zM11 1a3 3 0 011 5.83L11.999 9H16v2h-4.001l.001.791c0 .528.205 1.032.586 1.413.541.541.93.688 1.88.752l.289.017c1.617.077 2.46.324 3.488 1.352.93.931 1.222 1.71 1.325 3.053l.027.435c.053 1.116.166 1.539.694 2.092l.075.077-1.414 1.414c-.99-.99-1.256-1.807-1.343-3.311l-.01-.177c-.055-1.166-.176-1.576-.769-2.169-.567-.567-.966-.702-2.02-.761l-.148-.008c-1.618-.077-2.46-.325-3.488-1.352a3.989 3.989 0 01-1.17-2.675L10 6.829A3.001 3.001 0 0111 1zm0 2a1 1 0 100 2 1 1 0 000-2z",
    "phone": "M4.885 2.506L3.043 4.348l-.034.035C.572 7.07 2.784 12.452 7.191 16.818c4.445 4.404 9.751 6.6 12.426 4.173l1.877-1.876c.678-.678.655-1.563.058-2.272l-.058-.063-4.144-4.144c-.678-.678-1.564-.656-2.273-.058l-.063.058-1.046 1.046-.037-.008c-.585-.144-1.241-.602-2.123-1.484l-.123-.124c-.8-.819-1.222-1.44-1.359-1.997l-.008-.038 1.046-1.045.058-.063c.598-.71.62-1.595-.058-2.273L7.22 2.506l-.063-.058c-.709-.597-1.594-.62-2.272.058zm1.167 1.66l3.652 3.652-1.428 1.428v.414c0 1.355.687 2.513 2.118 3.945 1.432 1.431 2.591 2.12 3.946 2.12h.414l1.428-1.428 3.651 3.65-1.595 1.596c-1.525 1.382-5.878-.42-9.64-4.146l-.152-.152c-3.57-3.607-5.315-7.847-4.012-9.452l.047-.056 1.571-1.57z",
    "speechbubble": "M19 4H5a4 4 0 00-4 4v8a4 4 0 004 4h6c1.064 0 1.977.392 2.793 1.207l.707.707.707-.707C16.023 20.392 16.937 20 18 20h1a4 4 0 004-4V8a4 4 0 00-4-4zM5 6h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-.184.003a5.675 5.675 0 00-3.316 1.172A5.68 5.68 0 0011 18H5a2 2 0 01-2-2V8a2 2 0 012-2z",
    "display": "M6,18 C3.85780461,18 2.10892112,16.3160315 2.00489531,14.1996403 L2,14 L2,7 C2,4.85780461 3.68396847,3.10892112 5.80035966,3.00489531 L6,3 L18,3 C20.1421954,3 21.8910789,4.68396847 21.9951047,6.80035966 L22,7 L22,14 C22,16.1421954 20.3160315,17.8910789 18.1996403,17.9951047 L18,18 L13,18 C13,19.1045695 13.8954305,20 15,20 L18,20 L18,22 L6,22 L6,20 L9,20 C10.1045695,20 11,19.1045695 11,18 L6,18 Z M18,5 L6,5 C4.9456382,5 4.08183488,5.81587779 4.00548574,6.85073766 L4,7 L4,14 C4,15.0543618 4.81587779,15.9181651 5.85073766,15.9945143 L6,16 L18,16 C19.0543618,16 19.9181651,15.1841222 19.9945143,14.1492623 L20,14 L20,7 C20,5.9456382 19.1841222,5.08183488 18.1492623,5.00548574 L18,5 Z",
    "mobile": "M15 2a4 4 0 013.995 3.8L19 6v12a4 4 0 01-3.8 3.995L15 22H9a4 4 0 01-3.995-3.8L5 18V6a4 4 0 013.8-3.995L9 2h6zm0 2H9a2 2 0 00-1.995 1.85L7 6v12a2 2 0 001.85 1.995L9 20h6a2 2 0 001.995-1.85L17 18V6a2 2 0 00-1.85-1.995L15 4zm-3 11.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
    "ticket": "M14.5 2l3.125 3.125L17 5.75a.884.884 0 001.173 1.319L18.25 7l.625-.625L22 9.5 9.5 22l-3.125-3.125L7 18.25a.884.884 0 00-1.173-1.319L5.75 17l-.625.625L2 14.5 14.5 2zm0 2.5l-3 3a1 1 0 11-.991 1.127L10.5 8.5l-6 6 .731.731.169-.073.173-.06a2.656 2.656 0 012.26.312l.166.118.138.115.113.107.138.149c.613.714.785 1.676.515 2.53l-.065.18-.07.16.732.731 6.002-6a1 1 0 11.99-1.126l.008.128 3-3.002-.732-.732-.168.074-.173.06a2.656 2.656 0 01-2.26-.312L16 8.472l-.138-.115-.113-.107-.138-.149a2.652 2.652 0 01-.515-2.53l.065-.18.07-.16L14.5 4.5zm-1.707 5.293a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414z",
    "glyph-euro": "M12.6201117,20 C15.5698324,20 17.2234637,17.877095 17.7821229,15.7318436 L15.4357542,14.2569832 C15.3240223,16.0670391 14.6759777,17.877095 12.6201117,17.877095 C10.6759777,17.877095 9.78212291,16.5139665 9.42458101,14.6592179 L12.5083799,14.6592179 L13.1564246,12.8268156 L9.24581006,12.8268156 C9.23091248,12.6480447 9.22594662,12.459342 9.22429133,12.2673288 L9.22346369,11.396648 L13.5810056,11.396648 L14.2067039,9.54189944 L9.44692737,9.54189944 C9.82681564,7.62011173 10.7877095,6.1452514 12.6201117,6.1452514 C14.6536313,6.1452514 15.3240223,7.75418994 15.4357542,9.58659218 L17.7821229,8.11173184 C17.2234637,5.96648045 15.5251397,4 12.6201117,4 C9.84916201,4 7.63687151,5.94413408 6.94413408,9.54189944 L5,9.54189944 L5,11.396648 L6.74301676,11.396648 L6.74301676,11.9776536 C6.74301676,12.2681564 6.74301676,12.5586592 6.76536313,12.8268156 L5,12.8268156 L5,14.6592179 L6.96648045,14.6592179 C7.61452514,18.1899441 9.67039106,20 12.6201117,20 Z",
    "glyph-at": "M11.8769231,20 C14.8307692,20 17.0666667,18.8307692 18.2153846,17.6205128 L16.3692308,16.5333333 C15.5487179,17.7435897 13.8871795,18.3589744 11.8769231,18.3589744 C8.38974359,18.3589744 5.86666667,15.7948718 5.86666667,11.9794872 C5.86666667,8.24615385 8.36923077,5.68205128 11.9589744,5.68205128 C15.3230769,5.68205128 17.7025641,8 17.7025641,11.3435897 C17.7025641,12.9641026 16.9846154,14.174359 15.9589744,14.174359 C15.3025641,14.174359 14.974359,13.8051282 14.974359,13.025641 L14.974359,10.625641 C14.974359,8.71794872 13.7230769,7.83589744 12.0410256,7.83589744 C10.2564103,7.83589744 9.08717949,8.82051282 8.49230769,9.92820513 L10.1538462,10.8512821 C10.3384615,10.0923077 10.9333333,9.37435897 11.9794872,9.37435897 C12.5948718,9.37435897 13.1487179,9.7025641 13.1487179,10.2564103 C13.1487179,10.7897436 12.4102564,10.9538462 11.3846154,11.1589744 C10.0717949,11.425641 8.67692308,11.9384615 8.67692308,13.4974359 C8.67692308,14.7692308 9.80512821,15.6923077 11.1384615,15.6923077 C12.3282051,15.6923077 13.1487179,15.0153846 13.4769231,14.5846154 L13.5179487,14.5846154 C13.9487179,15.3846154 14.8923077,15.6923077 15.8974359,15.6923077 C17.6410256,15.6923077 19.5692308,14.3794872 19.5692308,11.3435897 C19.5692308,7.03589744 16.2666667,4 11.9589744,4 C7.40512821,4 4,7.28205128 4,11.9794872 C4,16.8410256 7.42564103,20 11.8769231,20 Z M11.5692308,14.174359 C10.974359,14.174359 10.5025641,13.8871795 10.5025641,13.374359 C10.5025641,12.8 11.0679487,12.586859 11.6215545,12.4326122 L11.8564103,12.3692308 L11.8564103,12.3692308 C12.5128205,12.2051282 13.025641,12.0615385 13.2102564,11.7948718 L13.2102564,12.5948718 C13.2102564,13.6615385 12.3692308,14.174359 11.5692308,14.174359 Z",
    "cake": "M18,2.18036665 L18.6170955,3.07374524 C19.7056028,4.64959381 20.25,5.73838824 20.25,6.5 C20.25,7.47956939 19.6240154,8.31293223 18.7502535,8.6218811 L18.750584,10.007947 C20.6239926,10.1275594 22,11.5844616 22,13.5000171 L22,22.0000171 L2,22.0000171 L2,13.5000171 C2,11.5841197 3.37649862,10.1270394 5.25041913,10.0078831 L5.25076538,8.62224108 C4.37647132,8.31357999 3.75,7.4799501 3.75,6.5 C3.75,5.78318893 4.23223421,4.77655515 5.19646322,3.34681278 L5.38290448,3.07374524 L6,2.18036665 L6.61709552,3.07374524 C7.70560278,4.64959381 8.25,5.73838824 8.25,6.5 C8.25,7.47956939 7.62401536,8.31293223 6.7502535,8.6218811 L6.75,9.99936665 L11.25,9.99936665 L11.2507654,8.62224108 C10.4226656,8.32988842 9.81689238,7.566576 9.75519081,6.65404881 L9.75,6.5 C9.75,5.78318893 10.2322342,4.77655515 11.1964632,3.34681278 L11.3829045,3.07374524 L12,2.18036665 L12.6170955,3.07374524 C13.7056028,4.64959381 14.25,5.73838824 14.25,6.5 C14.25,7.47956939 13.6240154,8.31293223 12.7502535,8.6218811 L12.75,9.99936665 L17.25,9.99936665 L17.2507654,8.62224108 C16.4226656,8.32988842 15.8168924,7.566576 15.7551908,6.65404881 L15.75,6.5 C15.75,5.78318893 16.2322342,4.77655515 17.1964632,3.34681278 L17.3829045,3.07374524 L18,2.18036665 Z M15.2524986,17.1749293 L15,17.025 L14.9911282,17.0311542 C14.1889167,17.533117 13.2875201,17.8080212 12.2991185,17.8538553 L12,17.8607314 C10.9943191,17.8607314 10.0744254,17.6314602 9.25249863,17.1749293 L9,17.025 L8.99112819,17.0311542 C8.18891668,17.533117 7.28752013,17.8080212 6.29911847,17.8538553 L6,17.8607314 C5.28908765,17.8607314 4.62104336,17.746164 4.00016954,17.5177396 L4,20 L20,20 L20.00084,17.5173681 C19.3796808,17.7460397 18.7112977,17.8607314 18,17.8607314 C16.9943191,17.8607314 16.0744254,17.6314602 15.2524986,17.1749293 Z M18.5,12.0000171 L5.5,12.0000171 C4.5,12.0000171 3.99984155,12.5000171 3.99984155,13.5000171 L3.99984155,15.8740735 C4.59297228,16.1991606 5.25576505,16.3607314 6,16.3607314 C6.88939013,16.3607314 7.66247112,16.129989 8.33934762,15.665184 L8.53954454,15.5187173 L9,15.1605852 L9.46045546,15.5187173 C10.1840758,16.0815331 11.0216709,16.3607314 12,16.3607314 C12.8893901,16.3607314 13.6624711,16.129989 14.3393476,15.665184 L14.5395445,15.5187173 L15,15.1605852 L15.4604555,15.5187173 C16.1840758,16.0815331 17.0216709,16.3607314 18,16.3607314 C18.7446545,16.3607314 19.4077749,16.1989784 20.0011614,15.8735236 L20,13.5000171 C20,12.5000171 19.5,12.0000171 18.5,12.0000171 Z M12.1776599,5.16381918 L12,4.868 L11.7714885,5.25185018 L11.7714885,5.25185018 L11.5527141,5.65496405 C11.3508947,6.0513759 11.25,6.33860812 11.25,6.5 C11.25,6.91421356 11.5857864,7.25 12,7.25 C12.4142136,7.25 12.75,6.91421356 12.75,6.5 C12.75,6.35878211 12.6727525,6.1212177 12.5182374,5.79846816 L12.4472859,5.65496405 L12.2769975,5.33744432 L12.1776599,5.16381918 L12.1776599,5.16381918 Z M18.1776599,5.16381918 L18,4.868 L17.7714885,5.25185018 L17.7714885,5.25185018 L17.5527141,5.65496405 C17.3508947,6.0513759 17.25,6.33860812 17.25,6.5 C17.25,6.91421356 17.5857864,7.25 18,7.25 C18.4142136,7.25 18.75,6.91421356 18.75,6.5 C18.75,6.35878211 18.6727525,6.1212177 18.5182374,5.79846816 L18.4472859,5.65496405 L18.2769975,5.33744432 L18.1776599,5.16381918 L18.1776599,5.16381918 Z M6.17765988,5.16381918 L6,4.868 L5.7714885,5.25185018 L5.7714885,5.25185018 L5.55271413,5.65496405 C5.35089473,6.0513759 5.25,6.33860812 5.25,6.5 C5.25,6.91421356 5.58578644,7.25 6,7.25 C6.41421356,7.25 6.75,6.91421356 6.75,6.5 C6.75,6.35878211 6.67275247,6.1212177 6.51823736,5.79846816 L6.44728587,5.65496405 L6.27699748,5.33744432 L6.17765988,5.16381918 L6.17765988,5.16381918 Z"
  };
  return name ? icons[name] : icons;
}

wp.domReady(function () {
  /**
    * Buttons
    */
  wp.blocks.unregisterBlockStyle('core/button', 'default');
  wp.blocks.unregisterBlockStyle('core/button', 'outline');
  wp.blocks.unregisterBlockStyle('core/button', 'fill');
  wp.blocks.registerBlockStyle('core/button', [{
    name: 'default',
    label: wp.i18n.__('Primary', 'hds-wp'),
    isDefault: true
  }, {
    name: 'secondary',
    label: wp.i18n.__('Secondary', 'hds-wp')
  }, {
    name: 'supplementary',
    label: wp.i18n.__('Supplementary', 'hds-wp')
  }]);
  /**
    * Text
    */

  var withBackgroundStyle = ['core/group', 'core/paragraph'];

  for (var i = 0; i < withBackgroundStyle.length; i++) {
    wp.blocks.registerBlockStyle(withBackgroundStyle[i], [{
      name: 'light-gray-background',
      label: wp.i18n.__('Light Gray Background', 'hds-wp')
    }]);
  }
  /**
   * Image
   */


  wp.blocks.unregisterBlockStyle('core/image', 'rounded');
  /**
   * Quote
   */

  wp.blocks.unregisterBlockStyle('core/quote', 'plain');
});

(function (wp) {
  function addColumnAttributes(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
      if (name == 'core/column') {
        settings.attributes = Object.assign(settings.attributes, {
          allowedBlocks: {
            type: 'array',
            default: ['core/heading', 'core/paragraph', 'core/quote', 'core/table', 'core/list', 'core/freeform', 'core/image', 'core/video', 'core/audio', 'core/file', 'core/buttons', 'core/embed']
          }
        });
      } else if (name == 'core/columns') {
        settings.transforms.from[0].isMatch = function (attr, block) {
          if (block[0].name.startsWith('hds-wp') || block[0].name.startsWith('helsinki')) {
            return false;
          }

          return true;
        };
      }
    }

    return settings;
  }

  wp.hooks.addFilter('blocks.registerBlockType', 'column/custom-attributes', addColumnAttributes);
})(window.wp);

(function (wp) {
  function addGroupAttributes(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
      if (name == 'core/group') {
        settings.transforms.from[0].isMatch = function (attr, block) {
          if (block[0].name.startsWith('hds-wp') || block[0].name.startsWith('helsinki')) {
            return false;
          }

          return true;
        };
      }
    }

    return settings;
  }

  wp.hooks.addFilter('blocks.registerBlockType', 'group/custom-attributes', addGroupAttributes);
})(window.wp);

(function (wp) {
  function addTableAttributes(settings, name) {
    if (typeof settings.attributes !== 'undefined') {
      if (name == 'core/table') {
        settings.attributes = Object.assign(settings.attributes, {
          verticalHeader: {
            type: 'boolean'
          },
          title: {
            type: 'string'
          }
        });
      }
    }

    return settings;
  }

  wp.hooks.addFilter('blocks.registerBlockType', 'table/custom-attributes', addTableAttributes);
  var tableAdvancedControls = wp.compose.createHigherOrderComponent(function (BlockEdit) {
    return function (props) {
      var __ = wp.i18n.__;
      var _wp$element = wp.element,
          Fragment = _wp$element.Fragment,
          createElement = _wp$element.createElement;
      var _wp$components = wp.components,
          ToggleControl = _wp$components.ToggleControl,
          Panel = _wp$components.Panel,
          PanelBody = _wp$components.PanelBody,
          TextControl = _wp$components.TextControl;
      var _wp$blockEditor = wp.blockEditor,
          InspectorControls = _wp$blockEditor.InspectorControls,
          BlockControls = _wp$blockEditor.BlockControls,
          useBlockProps = _wp$blockEditor.useBlockProps;
      var attributes = props.attributes,
          setAttributes = props.setAttributes,
          isSelected = props.isSelected;
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), isSelected && props.name == 'core/table' && /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: __('Advanced table settings', 'hds-wp')
      }, /*#__PURE__*/React.createElement(TextControl, {
        label: __('Title', 'hds-wp'),
        value: attributes.title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        }
      }), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Vertical header', 'hds-wp'),
        checked: attributes.verticalHeader,
        onChange: function onChange(value) {
          return setAttributes({
            verticalHeader: value
          });
        }
      }))));
    };
  }, 'tableAdvancedControls');
  wp.hooks.addFilter('editor.BlockEdit', 'table/custom-control', tableAdvancedControls);

  function tableApplyExtraClass(extraProps, blockType, attributes) {
    var verticalHeader = attributes.verticalHeader;

    if (typeof verticalHeader !== 'undefined' && verticalHeader) {
      extraProps.className = extraProps.className + ' has-vertical-header';
    }

    return extraProps;
  }

  wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'table/custom-apply-class', tableApplyExtraClass);
  var tableEditorWrapperExtraClass = wp.compose.createHigherOrderComponent(function (BlockListBlock) {
    return function (props) {
      var name = props.name,
          attributes = props.attributes;

      if (name != 'core/table') {
        return /*#__PURE__*/React.createElement(BlockListBlock, props);
      }

      var verticalHeader = attributes.verticalHeader;
      var customClass = verticalHeader ? 'has-vertical-header' : '';
      return /*#__PURE__*/React.createElement(BlockListBlock, _extends({}, props, {
        className: customClass
      }));
    };
  }, 'tableEditorWrapperExtraClass');
  wp.hooks.addFilter('editor.BlockListBlock', 'table/custom-editor-wrapper-class', tableEditorWrapperExtraClass);
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks = wp.blocks,
      registerBlockType = _wp$blocks.registerBlockType,
      getBlockContent = _wp$blocks.getBlockContent;
  var _wp$element2 = wp.element,
      Fragment = _wp$element2.Fragment,
      createElement = _wp$element2.createElement;
  var _wp$blockEditor2 = wp.blockEditor,
      useBlockProps = _wp$blockEditor2.useBlockProps,
      BlockControls = _wp$blockEditor2.BlockControls,
      InnerBlocks = _wp$blockEditor2.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$components2 = wp.components,
      ToolbarGroup = _wp$components2.ToolbarGroup,
      ToolbarButton = _wp$components2.ToolbarButton,
      Button = _wp$components2.Button,
      ToggleControl = _wp$components2.ToggleControl;
  var _wp$data = wp.data,
      select = _wp$data.select,
      dispatch = _wp$data.dispatch;

  function closePanel(toggle, panel) {
    toggle.setAttribute('aria-expanded', 'false');
    panel.setAttribute('hidden', 'true');
  }

  function openPanel(toggle, panel) {
    toggle.setAttribute('aria-expanded', 'true');
    panel.removeAttribute('hidden');
  }

  function isOpen(toggle) {
    return 'true' === toggle.getAttribute('aria-expanded');
  }

  function currentOpen(element) {
    return element.closest('.accordion__section').querySelector('.accordion__toggle[aria-expanded="true"]');
  }

  function togglePanel(toggle) {
    return toggle.parentElement.nextElementSibling;
  }

  function closeCurrent(element) {
    var currentToggle = currentOpen(element);
    var currentPanel = currentToggle ? togglePanel(currentToggle) : null;

    if (currentToggle && currentPanel) {
      closePanel(currentToggle, currentPanel);
    }
  }

  function panelControls(props) {
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: false
    }, hdsTextControl({
      label: __('Panel Title', 'hds-wp'),
      value: props.attributes.panelTitle,
      attribute: 'panelTitle'
    }, props));
  }

  function panelTitle(props) {
    return createElement(props.attributes.headingLevel, {
      className: 'accordion__title'
    }, panelToggle(props));
  }

  function panelToggle(props) {
    return createElement('button', {
      id: 'panel-toggle-' + props.attributes.blockId,
      className: 'accordion__toggle',
      type: 'button',
      'aria-controls': 'panel-' + props.attributes.blockId,
      'aria-expanded': 'false',
      onClick: function onClick(event) {
        //closeCurrent(event.currentTarget);
        var panel = togglePanel(event.currentTarget);

        if (isOpen(event.currentTarget)) {
          closePanel(event.currentTarget, panel);
        } else {
          openPanel(event.currentTarget, panel);
        }
      }
    }, //createElement(Fragment, {}, props.attributes.panelTitle),
    hdsContentTextRich(props, {
      placeholder: __('Accordion heading', 'hds-wp'),
      textAttribute: 'panelTitle'
    }), panelIcon(props));
  }

  function panelTitleV1(props) {
    return createElement(props.attributes.headingLevel, {
      className: 'accordion__title'
    }, panelToggleV1(props));
  }

  function panelToggleV1(props) {
    return createElement('button', {
      id: 'panel-toggle-' + props.attributes.blockId,
      className: 'accordion__toggle',
      type: 'button',
      'aria-controls': 'panel-' + props.attributes.blockId,
      'aria-expanded': 'false',
      onClick: function onClick(event) {
        //closeCurrent(event.currentTarget);
        var panel = togglePanel(event.currentTarget);

        if (isOpen(event.currentTarget)) {
          closePanel(event.currentTarget, panel);
        } else {
          openPanel(event.currentTarget, panel);
        }
      }
    }, createElement(Fragment, {}, props.attributes.panelTitle), panelIcon(props));
  }

  function panelIcon(props) {
    return createElement('span', {
      className: 'accordion__icon'
    }, hdsAngleIcon());
  }

  function panelContent(props, innerBlocks) {
    return createElement('div', {
      id: 'panel-' + props.attributes.blockId,
      className: 'accordion__panel',
      'aria-labelledby': 'panel-toggle-' + props.attributes.blockId,
      role: 'region',
      hidden: 'hidden'
    }, createElement('div', {
      className: 'accordion__content'
    }, createElement(innerBlocks, {
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/list', 'core/table', 'core/freeform', 'core/quote', 'core/buttons', 'core/button', 'core/image', 'core/embed', 'core/file']
    })), panelClose(props));
  }

  function panelClose(props) {
    return createElement('button', {
      className: 'accordion__close hds-button hds-button--supplementary',
      type: 'button',
      onClick: function onClick(event) {
        event.preventDefault();
        closeCurrent(event.currentTarget);
      }
    }, createElement('span', {}, __('Close', 'hds-wp')), hdsAngleIcon());
  }

  function edit() {
    return function (props) {
      if (!props.attributes.blockId) {
        props.setAttributes({
          blockId: props.clientId
        });
      }

      var innerContent = getBlockContent(select('core/block-editor').getBlock(props.clientId));
      props.attributes.innerContent = innerContent;
      var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId(props.clientId))[0];
      dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
        panels: select('core/block-editor').getBlocks(parent.clientId).map(function (block) {
          return block.attributes;
        })
      });
      return createElement(Fragment, {}, createElement('div', useBlockProps({
        className: 'accordion__section'
      }), panelTitle(props), panelContent(props, InnerBlocks)));
    };
  }

  function save() {
    return function (props) {
      var parentClientId = select('core/block-editor').getBlockHierarchyRootClientId(props.attributes.blockId);
      var parentAttributes = select('core/block-editor').getBlockAttributes(parentClientId);
      return createElement(InnerBlocks.Content, useBlockProps.save());
    };
  }

  registerBlockType('hds-wp/accordion-panel', {
    apiVersion: 2,
    title: __('Helsinki - Accordion Panel', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    supports: {
      anchor: true
    },
    parent: ['hds-wp/accordion'],
    attributes: {
      panelTitle: {
        type: 'string',
        default: __('Panel', 'hds-wp')
      },
      blockId: {
        type: 'string'
      },
      headingLevel: {
        type: 'string',
        default: 'h2'
      },
      innerContent: {
        type: 'string',
        default: ''
      },
      anchor: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save(),
    deprecated: [{
      save: function save(props) {
        var parentClientId = select('core/block-editor').getBlockHierarchyRootClientId(props.attributes.blockId);
        var parentAttributes = select('core/block-editor').getBlockAttributes(parentClientId);
        return createElement(Fragment, {}, createElement('div', useBlockProps.save({
          className: 'accordion__section'
        }), panelTitleV1(props), panelContent(props, InnerBlocks.Content)));
      }
    }]
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks2 = wp.blocks,
      registerBlockType = _wp$blocks2.registerBlockType,
      getBlockContent = _wp$blocks2.getBlockContent,
      hasChildBlocks = _wp$blocks2.hasChildBlocks;
  var _wp$element3 = wp.element,
      Fragment = _wp$element3.Fragment,
      createElement = _wp$element3.createElement;
  var _wp$blockEditor3 = wp.blockEditor,
      useBlockProps = _wp$blockEditor3.useBlockProps,
      BlockControls = _wp$blockEditor3.BlockControls,
      InnerBlocks = _wp$blockEditor3.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$components3 = wp.components,
      ToolbarGroup = _wp$components3.ToolbarGroup,
      ToolbarButton = _wp$components3.ToolbarButton,
      Button = _wp$components3.Button,
      ToggleControl = _wp$components3.ToggleControl;
  var _wp$data2 = wp.data,
      select = _wp$data2.select,
      dispatch = _wp$data2.dispatch,
      useSelect = _wp$data2.useSelect;

  function accordionTitle(props) {
    return hdsContentTitleRich(props, {
      placeholder: __('This is the title', 'hds-wp'),
      titleAttribute: 'title',
      className: 'accordion__heading'
    });
  }

  function accordionDescription(props) {
    return hdsContentTextRich(props, {
      placeholder: __('This is the excerpt.', 'hds-wp'),
      textAttribute: 'description',
      className: 'accordion-description'
    });
  }

  function accordionTitleV1(props) {
    if (props.attributes.title != null && props.attributes.title != '') {
      return createElement('h2', {
        className: 'accordion__heading'
      }, createElement(Fragment, {}, props.attributes.title ? props.attributes.title : ''));
    }

    return '';
  }

  function accordionDescriptionV1(props) {
    if (props.attributes.description != null && props.attributes.description != '') {
      return createElement('p', {
        className: 'accordion-description'
      }, createElement(Fragment, {}, props.attributes.description ? props.attributes.description : ''));
    }

    return '';
  }

  function accordionControls(props) {
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: false
    }, hdsTextControl({
      label: __('Title', 'hds-wp'),
      value: props.attributes.title,
      attribute: 'title'
    }, props), hdsTextAreaControl({
      label: __('Description', 'hds-wp'),
      value: props.attributes.description,
      attribute: 'description'
    }, props));
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return /*#__PURE__*/React.createElement("img", {
          src: props.attributes.preview
        });
      }

      props.attributes.blockVersion = 2;
      var content = null;
      var clientId = props.clientId;
      var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
      children.forEach(function (child) {
        if (props.attributes.title != null && props.attributes.title != '') {
          dispatch('core/block-editor').updateBlockAttributes(child.clientId, {
            headingLevel: 'h3'
          });
        } else {
          dispatch('core/block-editor').updateBlockAttributes(child.clientId, {
            headingLevel: 'h2'
          });
        }
      });
      var isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
      });
      props.attributes.panels = select('core/block-editor').getBlocks(props.clientId).map(function (block) {
        var innerContent = '';

        if (block.innerBlocks.length > 0) {
          innerContent = getBlockContent(select('core/block-editor').getBlock(block.clientId));
        }

        block.attributes.innerContent = innerContent;
        return block.attributes;
      });

      if (props.isSelected || isParentOfSelectedBlock) {
        content = createElement(Fragment, {}, createElement('div', {
          className: 'accordion-wrapper'
        }, accordionTitle(props), accordionDescription(props), createElement('div', {
          className: 'accordion'
        }, createElement(InnerBlocks, {
          allowedBlocks: ['hds-wp/accordion-panel'],
          template: [['hds-wp/accordion-panel', {}], ['hds-wp/accordion-panel', {}], ['hds-wp/accordion-panel', {}]]
        }))));
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/accordion',
          attributes: props.attributes,
          httpMethod: 'POST'
        });
      }

      return createElement(Fragment, {}, createElement('div', useBlockProps(), content));
    };
  }

  function save() {
    return function (props) {
      return createElement(InnerBlocks.Content, useBlockProps.save());
    };
  }

  registerBlockType('hds-wp/accordion', {
    apiVersion: 2,
    title: __('Helsinki - Accordion', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    supports: {
      anchor: true
    },
    attributes: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      panels: {
        type: 'array',
        default: []
      },
      blockVersion: {
        type: 'number'
      },
      anchor: {
        type: 'string',
        default: ''
      },
      preview: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save(),
    deprecated: [{
      save: function save(props) {
        return createElement(Fragment, {}, createElement('div', useBlockProps.save({
          className: 'accordion-wrapper'
        }), accordionTitleV1(props), accordionDescriptionV1(props), createElement('div', {
          className: 'accordion'
        }, createElement(InnerBlocks.Content))));
      }
    }],
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/accordion.png'
      }
    }
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks3 = wp.blocks,
      registerBlockType = _wp$blocks3.registerBlockType,
      registerBlockStyle = _wp$blocks3.registerBlockStyle,
      unregisterBlockStyle = _wp$blocks3.unregisterBlockStyle;
  var _wp$element4 = wp.element,
      Fragment = _wp$element4.Fragment,
      createElement = _wp$element4.createElement;
  var _wp$blockEditor4 = wp.blockEditor,
      useBlockProps = _wp$blockEditor4.useBlockProps,
      BlockControls = _wp$blockEditor4.BlockControls,
      InnerBlocks = _wp$blockEditor4.InnerBlocks,
      RichText = _wp$blockEditor4.RichText;
  var _wp$components4 = wp.components,
      ToolbarGroup = _wp$components4.ToolbarGroup,
      ToolbarButton = _wp$components4.ToolbarButton,
      Button = _wp$components4.Button;

  function contentButton(props) {
    return hdsContentButton(props, {
      className: 'content__link hds-button',
      href: props.attributes.buttonUrl,
      target: '_blank',
      rel: 'noopener'
    });
  }

  function hasIcon(props) {
    var checkAttribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (props.attributes.className) {
      if (props.attributes.className.includes('align-center')) {
        return false;
      }
    }

    if (checkAttribute) {
      if (!props.attributes.contentIcon || props.attributes.contentIcon === '(empty)') {
        return false;
      }
    }

    return true;
  }

  function hasButton(props) {
    return props.attributes.buttonText && props.attributes.buttonUrl ? true : false;
  }

  function edit() {
    return function (props) {
      var content = null;

      if (props.isSelected) {
        content = createElement('div', {
          className: 'content'
        }, hasIcon(props) ? createElement('div', {
          className: 'content__inner content__inner--icon'
        }, hdsContentIcon(props)) : '', createElement('div', {
          className: 'content-wrapper'
        }, createElement('div', {
          className: 'content__inner content__inner--text'
        }, hdsContentTitleRich(props, {
          placeholder: __('This is the title', 'hds-wp')
        }), hdsContentTextRich(props, {
          placeholder: __('This is the excerpt.', 'hds-wp')
        })), createElement('div', {
          className: 'content__inner content__inner--button'
        }, contentButton(props))));
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/banner',
          attributes: props.attributes,
          httpMethod: 'POST'
        });
      }

      var wrapperClasses = '';

      if (!hasIcon(props)) {
        wrapperClasses += 'no-icon ';
      }

      if (!hasButton(props)) {
        wrapperClasses += 'no-button ';
      }

      return createElement(Fragment, {}, hdsInspectorControls({
        title: __('Content', 'hds-wp'),
        initialOpen: false
      }, hdsButtonTextControl(props), hdsButtonUrlControl(props), hdsTargetBlankControl(props, {
        help: wp.element.createElement('p', {}, wp.i18n.__('I have made sure that the description of this link clearly states that it opens in a new tab. ', 'hds-wp'), wp.element.createElement('a', {
          href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html',
          target: '_blank'
        }, wp.i18n.__('Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).', 'hds-wp')))
      }), hasIcon(props, false) ? hdsIconControl(props) : ''), createElement('div', useBlockProps({
        className: wrapperClasses
      }), content));
    };
  }

  function save() {
    return function (props) {
      return createElement('div', useBlockProps.save(), hdsContent(props, createElement('div', {
        className: 'content__inner content__inner--icon'
      }, hdsContentIcon(props)), createElement('div', {
        className: 'content__inner content__inner--text'
      }, hdsContentTitle(props), hdsContentText(props)), createElement('div', {
        className: 'content__inner content__inner--button'
      }, contentButton(props))));
    };
  }

  registerBlockType('hds-wp/banner', {
    apiVersion: 2,
    title: __('Helsinki - Banner', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    supports: {
      anchor: true
    },
    attributes: {
      contentTitle: {
        type: 'string',
        default: ''
      },
      contentText: {
        type: 'string',
        default: ''
      },
      contentIcon: {
        type: 'string',
        default: ''
      },
      buttonText: {
        type: 'string',
        default: __('Button Text', 'hds-wp')
      },
      buttonUrl: {
        type: 'string',
        default: ''
      },
      targetBlank: {
        type: 'boolean',
        default: false
      },
      isExternalUrl: {
        type: 'boolean',
        default: true
      },
      anchor: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    example: {
      attributes: {
        contentTitle: 'Banneri',
        contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ullamcorper velit. Sed fringilla ultricies pharetra. Duis vestibulum faucibus justo, eu bibendum mi eleifend vel.',
        buttonText: 'Painikkeen teksti',
        buttonUrl: 'https://www.hel.fi',
        targetBlank: true,
        isExternalUrl: true,
        contentIcon: 'info-circle'
      },
      viewportWidth: 1200
    }
  });
  unregisterBlockStyle('hds-wp/banner', 'default');
  registerBlockStyle('hds-wp/banner', {
    name: 'default',
    label: __('Align to left, primary color', 'hds-wp'),
    isDefault: true
  });
  registerBlockStyle('hds-wp/banner', {
    name: 'align-center',
    label: __('Align to center, primary color', 'hds-wp')
  });
  registerBlockStyle('hds-wp/banner', {
    name: 'align-left-secondary-color',
    label: __('Align to left, secondary color', 'hds-wp')
  });
  registerBlockStyle('hds-wp/banner', {
    name: 'align-center-secondary-color',
    label: __('Align to center, secondary color', 'hds-wp')
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element5 = wp.element,
      Fragment = _wp$element5.Fragment,
      createElement = _wp$element5.createElement;
  var _wp$blockEditor5 = wp.blockEditor,
      useBlockProps = _wp$blockEditor5.useBlockProps,
      BlockControls = _wp$blockEditor5.BlockControls,
      InnerBlocks = _wp$blockEditor5.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$components5 = wp.components,
      Button = _wp$components5.Button,
      TextControl = _wp$components5.TextControl,
      SelectControl = _wp$components5.SelectControl;
  var _wp$data3 = wp.data,
      withSelect = _wp$data3.withSelect,
      select = _wp$data3.select,
      dispatch = _wp$data3.dispatch;
  var PostTypeSelect = hdsWithPostTypeSelectControl();
  var PostSearch = hdsSearchPostsTextControl();

  function removePostButton(props) {
    return hdsRemovePostControl({
      text: wp.i18n.__('Detach post', 'hds-wp')
    }, props);
  }

  function panelControls(props) {
    var controls = [];
    controls.push(PostSearch);

    if (props.attributes.postId != 0) {
      controls.push(removePostButton);
    }

    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: false
    }, controls.map(function (control) {
      return hdsPanelRow({}, createElement(control, props));
    }));
  }

  function placeholder(props) {
    return createElement('div', useBlockProps(), createElement('div', {
      className: 'card'
    }, props.attributes.postTitle ? props.attributes.postTitle : __('Helsinki - Content Card', 'hds-wp')));
  }

  function edit() {
    return function (props) {
      var clientId = props.clientId;
      var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId(clientId))[0];
      dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
        cards: select('core/block-editor').getBlocks(parent.clientId).map(function (block) {
          return block.attributes.postId;
        })
      });
      return createElement(Fragment, {}, panelControls(props), placeholder(props));
    };
  }

  registerBlockType('hds-wp/content-card', {
    apiVersion: 2,
    title: __('Helsinki - Content Card', 'hds-wp'),
    category: 'hds-wp',
    icon: 'cover-image',
    supports: {},
    parent: ['hds-wp/content-cards'],
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
      }
    },
    edit: edit()
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks4 = wp.blocks,
      registerBlockType = _wp$blocks4.registerBlockType,
      getBlockContent = _wp$blocks4.getBlockContent;
  var _wp$element6 = wp.element,
      Fragment = _wp$element6.Fragment,
      createElement = _wp$element6.createElement,
      useState = _wp$element6.useState;
  var _wp$blockEditor6 = wp.blockEditor,
      useBlockProps = _wp$blockEditor6.useBlockProps,
      BlockControls = _wp$blockEditor6.BlockControls,
      InnerBlocks = _wp$blockEditor6.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data4 = wp.data,
      select = _wp$data4.select,
      useSelect = _wp$data4.useSelect;
  var _wp$components6 = wp.components,
      ToolbarGroup = _wp$components6.ToolbarGroup,
      ToolbarButton = _wp$components6.ToolbarButton,
      Button = _wp$components6.Button,
      ToggleControl = _wp$components6.ToggleControl;

  function linkTypeOptions() {
    return [{
      label: __('Image & Title', 'hds-wp'),
      value: 'image-title'
    }, {
      label: __('Image, Title & Excerpt', 'hds-wp'),
      value: 'image-title-excerpt'
    }];
  }

  function columnCountOptions() {
    return [{
      label: 2 + ' ' + __('Columns', 'hds-wp'),
      value: 2
    }, {
      label: 3 + ' ' + __('Columns', 'hds-wp'),
      value: 3
    }, {
      label: 4 + ' ' + __('Columns', 'hds-wp'),
      value: 4
    }];
  }

  function inspectorControls(props) {
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: false
    }, hdsTextControl({
      label: __('Title', 'hds-wp'),
      value: props.attributes.title,
      attribute: 'title'
    }, props), hdsSelectControl({
      label: __('Link type', 'hds-wp'),
      value: props.attributes.linkType,
      attribute: 'linkType',
      options: linkTypeOptions()
    }, props), hdsSelectControl({
      label: __('Column count', 'hds-wp'),
      value: props.attributes.columns,
      attribute: 'columns',
      options: columnCountOptions()
    }, props), hdsCheckboxControl({
      label: __('Has background', 'hds-wp'),
      checked: props.attributes.hasBackground,
      attribute: 'hasBackground'
    }, props));
  }

  function title(props) {
    if (!props.attributes.title) {
      return;
    }

    return createElement('h2', {
      className: 'content-cards__title'
    }, props.attributes.title);
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return /*#__PURE__*/React.createElement("img", {
          src: props.attributes.preview
        });
      }

      props.attributes.columns = parseInt(props.attributes.columns);
      var content = null;
      var isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
      });

      if (props.isSelected || isParentOfSelectedBlock) {
        content = createElement(Fragment, {}, title(props), createElement(InnerBlocks, {
          allowedBlocks: ['hds-wp/content-card'],
          template: [['hds-wp/content-card', {}], ['hds-wp/content-card', {}], ['hds-wp/content-card', {}]]
        }));
      } else {
        var blockAttributes = props.attributes;
        blockAttributes.cards = select('core/block-editor').getBlocks(props.clientId).map(function (block) {
          return block.attributes.postId;
        });
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/content-cards',
          attributes: blockAttributes,
          httpMethod: 'POST'
        });
      }

      return createElement(Fragment, {}, inspectorControls(props), createElement('div', useBlockProps(), content));
    };
  }

  function save() {
    return function (props) {
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  registerBlockType('hds-wp/content-cards', {
    apiVersion: 2,
    title: __('Helsinki - Content Cards', 'hds-wp'),
    category: 'hds-wp',
    icon: 'images-alt',
    supports: {
      anchor: true
    },
    attributes: {
      columns: {
        type: 'number',
        default: 3
      },
      hasBackground: {
        type: 'boolean',
        default: false
      },
      title: {
        type: 'string',
        default: ''
      },
      linkType: {
        type: 'string',
        default: 'image-title'
      },
      cards: {
        type: 'array',
        default: []
      },
      anchor: {
        type: 'string',
        default: ''
      },
      preview: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save(),
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/content-cards.png'
      }
    }
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks5 = wp.blocks,
      unregisterBlockType = _wp$blocks5.unregisterBlockType,
      unregisterBlockVariation = _wp$blocks5.unregisterBlockVariation,
      getBlockType = _wp$blocks5.getBlockType,
      getBlockVariations = _wp$blocks5.getBlockVariations;
  var allowedEmbedBlocks = [];
  wp.domReady(function () {
    if (getBlockType('core/pullquote')) {
      unregisterBlockType('core/pullquote');
    }

    if (getBlockType('core/verse')) {
      unregisterBlockType('core/verse');
    }

    if (getBlockType('core/cover')) {
      unregisterBlockType('core/cover');
    }

    if (getBlockType('core/preformatted')) {
      unregisterBlockType('core/preformatted');
    }

    if (getBlockType('core/embed')) {
      wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
        if (-1 === allowedEmbedBlocks.indexOf(blockVariation.name)) {
          wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
        }
      });
      unregisterBlockType('core/embed');
    }

    if (getBlockType('core/html')) {
      unregisterBlockType('core/html');
    }

    if (getBlockType('core/latest-posts')) {
      unregisterBlockType('core/latest-posts');
    }

    if (getBlockType('core/nextpage')) {
      unregisterBlockType('core/nextpage');
    }

    if (getBlockType('core/media-text')) {
      unregisterBlockType('core/media-text');
    }

    if (getBlockType('core/rss')) {
      unregisterBlockType('core/rss');
    }

    if (getBlockType('core/search')) {
      unregisterBlockType('core/search');
    }

    if (getBlockType('core/freeform')) {
      unregisterBlockType('core/freeform');
    }

    if (getBlockType('core/details')) {
      unregisterBlockType('core/details');
    }

    if (getBlockType('core/footnotes')) {
      unregisterBlockType('core/footnotes');
    } //Disable theme blocks


    if (getBlockType('core/avatar')) {
      unregisterBlockType('core/avatar');
    }

    if (getBlockType('core/comment-author-name')) {
      unregisterBlockType('core/comment-author-name');
    }

    if (getBlockType('core/comment-content')) {
      unregisterBlockType('core/comment-content');
    }

    if (getBlockType('core/comment-date')) {
      unregisterBlockType('core/comment-date');
    }

    if (getBlockType('core/comment-edit-link')) {
      unregisterBlockType('core/comment-edit-link');
    }

    if (getBlockType('core/comment-reply-link')) {
      unregisterBlockType('core/comment-reply-link');
    }

    if (getBlockType('core/comments')) {
      unregisterBlockType('core/comments');
    }

    if (getBlockType('core/comments-query-loop')) {
      unregisterBlockType('core/comments-query-loop');
    }

    if (getBlockType('core/comments-pagination')) {
      unregisterBlockType('core/comments-pagination');
    }

    if (getBlockType('core/comments-pagination-numbers')) {
      unregisterBlockType('core/comments-pagination-numbers');
    }

    if (getBlockType('core/comments-pagination-previous')) {
      unregisterBlockType('core/comments-pagination-previous');
    }

    if (getBlockType('core/comments-title')) {
      unregisterBlockType('core/comments-title');
    }

    if (getBlockType('core/loginout')) {
      unregisterBlockType('core/loginout');
    }

    if (getBlockType('core/navigation')) {
      unregisterBlockType('core/navigation');
    }

    if (getBlockType('core/post-author')) {
      unregisterBlockType('core/post-author');
    }

    if (getBlockType('core/post-author-biography')) {
      unregisterBlockType('core/post-author-biography');
    }

    if (getBlockType('core/post-author-name')) {
      unregisterBlockType('core/post-author-name');
    }

    if (getBlockType('core/post-comments-form')) {
      unregisterBlockType('core/post-comments-form');
    }

    if (getBlockType('core/post-date')) {
      unregisterBlockType('core/post-date');
    }

    if (getBlockType('core/post-excerpt')) {
      unregisterBlockType('core/post-excerpt');
    }

    if (getBlockType('core/post-featured-image')) {
      unregisterBlockType('core/post-featured-image');
    }

    if (getBlockType('core/post-navigation-link')) {
      unregisterBlockType('core/post-navigation-link');
    }

    if (getBlockType('core/post-terms')) {
      unregisterBlockType('core/post-terms');
    }

    if (getBlockType('core/post-title')) {
      unregisterBlockType('core/post-title');
    }

    if (getBlockType('core/read-more')) {
      unregisterBlockType('core/read-more');
    }

    if (getBlockType('core/more')) {
      unregisterBlockType('core/more');
    }

    if (getBlockType('core/site-logo')) {
      unregisterBlockType('core/site-logo');
    }

    if (getBlockType('core/site-tagline')) {
      unregisterBlockType('core/site-tagline');
    }

    if (getBlockType('core/site-title')) {
      unregisterBlockType('core/site-title');
    }

    if (getBlockType('core/term-description')) {
      unregisterBlockType('core/term-description');
    }

    if (getBlockType('core/query')) {
      unregisterBlockType('core/query');
    }

    if (getBlockType('core/query-no-results')) {
      unregisterBlockType('core/query-no-results');
    }

    if (getBlockType('core/query-pagination')) {
      unregisterBlockType('core/query-pagination');
    }

    if (getBlockType('core/query-pagination-next')) {
      unregisterBlockType('core/query-pagination-next');
    }

    if (getBlockType('core/query-pagination-numbers')) {
      unregisterBlockType('core/query-pagination-numbers');
    }

    if (getBlockType('core/query-pagination-previous')) {
      unregisterBlockType('core/query-pagination-previous');
    }

    if (getBlockType('core/query-title')) {
      unregisterBlockType('core/query-title');
    }

    if (getBlockType('core/post-content')) {
      unregisterBlockType('core/post-content');
    } //Disable Yoast blocks


    if (getBlockType('yoast-seo/breadcrumbs')) {
      unregisterBlockType('yoast-seo/breadcrumbs');
    }

    if (getBlockType('yoast/faq-block')) {
      unregisterBlockType('yoast/faq-block');
    }

    if (getBlockType('yoast/how-to-block')) {
      unregisterBlockType('yoast/how-to-block');
    } //Disable Complianz blocks


    if (getBlockType('complianz/consent-area')) {
      unregisterBlockType('complianz/consent-area');
    } //Disable blocks for posts


    if (document.querySelector('body').classList.contains('post-type-post')) {
      if (getBlockType('hds-wp/accordion')) {
        unregisterBlockType('hds-wp/accordion');
      }

      if (getBlockType('hds-wp/accordion-panel')) {
        unregisterBlockType('hds-wp/accordion-panel');
      }

      if (getBlockType('hds-wp/banner')) {
        unregisterBlockType('hds-wp/banner');
      }

      if (getBlockType('hds-wp/content-card')) {
        unregisterBlockType('hds-wp/content-card');
      }

      if (getBlockType('hds-wp/content-cards')) {
        unregisterBlockType('hds-wp/content-cards');
      }

      if (getBlockType('hds-wp/image-banner')) {
        unregisterBlockType('hds-wp/image-banner');
      }

      if (getBlockType('hds-wp/image-text')) {
        unregisterBlockType('hds-wp/image-text');
      }

      if (getBlockType('hds-wp/link')) {
        unregisterBlockType('hds-wp/link');
      }

      if (getBlockType('hds-wp/links')) {
        unregisterBlockType('hds-wp/links');
      }

      if (getBlockType('hds-wp/recent-posts')) {
        unregisterBlockType('hds-wp/recent-posts');
      }

      if (getBlockType('hds-wp/rss-feed')) {
        unregisterBlockType('hds-wp/rss-feed');
      }

      if (getBlockType('hds-wp/timeline-card')) {
        unregisterBlockType('hds-wp/timeline-card');
      }

      if (getBlockType('hds-wp/timeline')) {
        unregisterBlockType('hds-wp/timeline');
      }

      if (getBlockType('core/columns')) {
        unregisterBlockType('core/columns');
      }

      if (getBlockType('core/nextpage')) {
        unregisterBlockType('core/nextpage');
      }

      if (getBlockType('core/separator')) {
        unregisterBlockType('core/separator');
      }

      if (getBlockType('core/spacer')) {
        unregisterBlockType('core/spacer');
      }

      if (getBlockType('core/group')) {
        unregisterBlockType('core/group');
      }
    }
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element7 = wp.element,
      Fragment = _wp$element7.Fragment,
      createElement = _wp$element7.createElement;
  var _wp$blockEditor7 = wp.blockEditor,
      useBlockProps = _wp$blockEditor7.useBlockProps,
      BlockControls = _wp$blockEditor7.BlockControls,
      InnerBlocks = _wp$blockEditor7.InnerBlocks;
  var _wp$components7 = wp.components,
      ToolbarGroup = _wp$components7.ToolbarGroup,
      ToolbarButton = _wp$components7.ToolbarButton,
      Button = _wp$components7.Button;

  function toolbar(props) {
    return createElement(BlockControls, {
      key: 'controls'
    }, createElement(ToolbarGroup, {}, hdsMediaUpload(props.attributes.mediaId, function (media) {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.sizes.full.url,
        mediaWidth: media.sizes.full.width,
        mediaHeight: media.sizes.full.height,
        mediaAlt: media.alt,
        mediaSrcset: media.sizes.full && media.sizes.full.srcset ? media.sizes.full.srcset : ''
      });
    }, function (mediaUpload) {
      return createElement(Button, {
        icon: 'format-image',
        label: __('Select image', 'hds-wp'),
        onClick: mediaUpload.open
      });
    }), hdsAlignLeftButton(function (value) {
      props.setAttributes({
        alignment: 'left'
      });
    }), hdsAlignRightButton(function (value) {
      props.setAttributes({
        alignment: 'right'
      });
    })));
  }

  function imageConfig(props) {
    return {
      id: props.attributes.mediaId,
      alt: props.attributes.mediaAlt,
      src: props.attributes.mediaUrl,
      srcset: props.attributes.mediaSrcset,
      width: props.attributes.mediaWidth,
      height: props.attributes.mediaHeight
    };
  }

  function classNamesString(props) {
    var classNames = ['align-' + props.attributes.alignment, props.attributes.mediaId ? 'has-image' : 'has-placeholder'];
    return classNames.join(' ');
  }

  function contentButton(props) {
    return hdsContentButton(props, {
      className: 'content__link hds-button hds-button--primary',
      href: props.attributes.buttonUrl
    });
  }

  function deprecatedContentButton(props) {
    return hdsContentButton(props, {
      className: 'content__link hds-button',
      href: props.attributes.buttonUrl
    }, props.attributes.isExternalUrl ? hdsDeprecatedExternalLinkIcon() : hdsDeprecatedArrowIcon());
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return /*#__PURE__*/React.createElement("img", {
          src: props.attributes.preview
        });
      }

      var content = null;
      content = createElement(Fragment, {}, toolbar(props), hdsInspectorControls({
        title: __('Content', 'hds-wp'),
        initialOpen: false
      }, hdsButtonTextControl(props), hdsButtonUrlControl(props), hdsTargetBlankControl(props, {
        help: wp.element.createElement('p', {}, wp.i18n.__('I have made sure that the description of this link clearly states that it opens in a new tab. ', 'hds-wp'), wp.element.createElement('a', {
          href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html',
          target: '_blank'
        }, wp.i18n.__('Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).', 'hds-wp')))
      })), createElement('div', {
        className: 'image-banner--wrapper'
      }, hdsSingleImage(imageConfig(props)), hdsContent(props, createElement('div', {
        className: 'content__inner'
      }, hdsContentTitleRich(props, {
        placeholder: __('This is the title', 'hds-wp')
      }), hdsContentTextRich(props, {
        placeholder: __('This is the excerpt.', 'hds-wp')
      }), contentButton(props)))));
      var SSRContent = createElement(wp.serverSideRender, {
        block: 'hds-wp/image-banner',
        attributes: props.attributes,
        httpMethod: 'POST'
      });

      if (props.isSelected) {
        return createElement('div', useBlockProps({
          className: classNamesString(props)
        }), content);
      } else {
        return createElement('div', useBlockProps({
          className: classNamesString(props)
        }), SSRContent);
      }
    };
  }

  function save() {
    return function (props) {
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  function classNamesStringV1(props) {
    var classNames = ['align-' + props.attributes.alignment, props.attributes.mediaId ? 'has-image' : 'has-placeholder'];
    return classNames.join(' ');
  }

  var v1 = {
    attributes: {
      alignment: {
        type: 'string',
        default: 'right'
      },
      mediaId: {
        type: 'number',
        default: 0
      },
      mediaUrl: {
        type: 'string',
        default: ''
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
        default: ''
      },
      mediaSrcset: {
        type: 'string',
        default: ''
      },
      contentTitle: {
        type: 'string',
        default: ''
      },
      contentText: {
        type: 'string',
        default: ''
      },
      buttonText: {
        type: 'string',
        default: ''
      },
      buttonUrl: {
        type: 'string',
        default: ''
      },
      isExternalUrl: {
        type: 'boolean',
        default: false
      }
    },
    supports: {
      color: true,
      anchor: true
    },
    save: function save(props) {
      return function (props) {
        return createElement('div', useBlockProps.save({
          className: classNamesStringV1(props)
        }), hdsSingleImage(imageConfig(props)), hdsContent(props, createElement('div', {
          className: 'content__inner'
        }, hdsContentTitle(props), hdsContentText(props), deprecatedContentButton(props))));
      };
    }
  };
  registerBlockType('hds-wp/image-banner', {
    apiVersion: 2,
    title: __('Helsinki - Image Banner', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    keywords: ['Helsinki - Kuvabanneri'],
    supports: {
      anchor: true
    },
    attributes: {
      alignment: {
        type: 'string',
        default: 'right'
      },
      mediaId: {
        type: 'number',
        default: 0
      },
      mediaUrl: {
        type: 'string',
        default: ''
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
        default: ''
      },
      mediaSrcset: {
        type: 'string',
        default: ''
      },
      contentTitle: {
        type: 'string',
        default: ''
      },
      contentText: {
        type: 'string',
        default: ''
      },
      buttonText: {
        type: 'string',
        default: __('Button Text', 'hds-wp')
      },
      buttonUrl: {
        type: 'string',
        default: ''
      },
      targetBlank: {
        type: 'boolean',
        default: false
      },
      preview: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save(),
    deprecated: [v1],
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/image-banner.png'
      }
    }
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks6 = wp.blocks,
      registerBlockType = _wp$blocks6.registerBlockType,
      registerBlockStyle = _wp$blocks6.registerBlockStyle,
      unregisterBlockStyle = _wp$blocks6.unregisterBlockStyle;
  var _wp$element8 = wp.element,
      Fragment = _wp$element8.Fragment,
      createElement = _wp$element8.createElement;
  var _wp$blockEditor8 = wp.blockEditor,
      useBlockProps = _wp$blockEditor8.useBlockProps,
      BlockControls = _wp$blockEditor8.BlockControls,
      InnerBlocks = _wp$blockEditor8.InnerBlocks;
  var _wp$components8 = wp.components,
      ToolbarGroup = _wp$components8.ToolbarGroup,
      ToolbarButton = _wp$components8.ToolbarButton,
      Button = _wp$components8.Button;

  function toolbar(props) {
    return createElement(BlockControls, {
      key: 'controls'
    }, createElement(ToolbarGroup, {}, hdsMediaUpload(props.attributes.mediaId, function (media) {
      console.log(media);
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.sizes.large ? media.sizes.large.url : media.sizes.full.url,
        mediaWidth: media.sizes.large ? media.sizes.large.width : media.sizes.full.width,
        mediaHeight: media.sizes.large ? media.sizes.large.height : media.sizes.full.height,
        mediaAlt: media.alt,
        mediaSrcset: media.sizes.large && media.sizes.large.srcset ? media.sizes.large.srcset : media.sizes.full && media.sizes.full.srcset ? media.sizes.full.srcset : ''
      });
    }, function (mediaUpload) {
      return createElement(Button, {
        icon: 'format-image',
        label: __('Select image', 'hds-wp'),
        onClick: mediaUpload.open
      });
    }), hdsAlignLeftButton(function (value) {
      props.setAttributes({
        alignment: 'left'
      });
    }), hdsAlignRightButton(function (value) {
      props.setAttributes({
        alignment: 'right'
      });
    })));
  }

  function imageConfig(props) {
    return {
      id: props.attributes.mediaId,
      alt: props.attributes.mediaAlt,
      src: props.attributes.mediaUrl,
      srcset: props.attributes.mediaSrcset,
      width: props.attributes.mediaWidth,
      height: props.attributes.mediaHeight
    };
  }

  function classNamesString(props) {
    var classNames = ['align-' + props.attributes.alignment, props.attributes.mediaId ? 'has-image' : 'has-placeholder', hds_wp['hasInvertedColor'] ? 'has-invert-color' : ''];
    return classNames.join(' ');
  }

  function contentButton(props) {
    return hdsContentButton(props, {
      className: 'content__link hds-button hds-button--primary',
      href: props.attributes.buttonUrl
    });
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return /*#__PURE__*/React.createElement("img", {
          src: props.attributes.preview
        });
      }

      var content = null;

      if (props.isSelected) {
        content = createElement(Fragment, {}, toolbar(props), hdsInspectorControls({
          title: __('Content', 'hds-wp'),
          initialOpen: false
        }, hdsButtonTextControl(props), hdsButtonUrlControl(props), hdsTargetBlankControl(props, {
          help: wp.element.createElement('p', {}, wp.i18n.__('I have made sure that the description of this link clearly states that it opens in a new tab. ', 'hds-wp'), wp.element.createElement('a', {
            href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html',
            target: '_blank'
          }, wp.i18n.__('Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).', 'hds-wp')))
        })), createElement('div', {
          className: 'image-text--wrapper'
        }, hdsSingleImage(imageConfig(props)), hdsContent(props, hdsContentTitleRich(props, {
          placeholder: __('This is the title', 'hds-wp')
        }), hdsContentTextRich(props, {
          placeholder: __('This is the excerpt.', 'hds-wp')
        }), contentButton(props))));
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/image-text',
          attributes: props.attributes,
          httpMethod: 'POST'
        });
      }

      return createElement('div', useBlockProps({
        className: classNamesString(props)
      }), content);
    };
  }

  function save() {
    return function (props) {
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  function classNamesStringV1(props) {
    var classNames = ['align-' + props.attributes.alignment, props.attributes.mediaId ? 'has-image' : 'has-placeholder'];
    return classNames.join(' ');
  }

  var v1 = {
    attributes: {
      alignment: {
        type: 'string',
        default: 'right'
      },
      mediaId: {
        type: 'number',
        default: 0
      },
      mediaUrl: {
        type: 'string',
        default: ''
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
        default: ''
      },
      mediaSrcset: {
        type: 'string',
        default: ''
      },
      contentTitle: {
        type: 'string',
        default: ''
      },
      contentText: {
        type: 'string',
        default: ''
      },
      buttonText: {
        type: 'string',
        default: ''
      },
      buttonUrl: {
        type: 'string',
        default: ''
      },
      isExternalUrl: {
        type: 'boolean',
        default: false
      }
    },
    supports: {
      color: true,
      anchor: true
    },
    save: function save(props) {
      return createElement('div', useBlockProps.save({
        className: classNamesStringV1(props)
      }), hdsSingleImage(imageConfig(props)), hdsContent(props, hdsContentTitle(props), hdsContentText(props), hdsContentButton(props, {
        className: 'content__link hds-button hds-button--secondary',
        href: props.attributes.buttonUrl
      }, props.attributes.isExternalUrl ? hdsDeprecatedExternalLinkIcon() : hdsDeprecatedArrowIcon())));
    }
  };
  registerBlockType('hds-wp/image-text', {
    apiVersion: 2,
    title: __('Helsinki - Image & Text', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    keywords: ['Helsinki - Kuva & teksti'],
    supports: {
      color: true,
      anchor: true
    },
    attributes: {
      alignment: {
        type: 'string',
        default: 'right'
      },
      mediaId: {
        type: 'number',
        default: 0
      },
      mediaUrl: {
        type: 'string',
        default: ''
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
        default: ''
      },
      mediaSrcset: {
        type: 'string',
        default: ''
      },
      contentTitle: {
        type: 'string',
        default: ''
      },
      contentText: {
        type: 'string',
        default: ''
      },
      buttonText: {
        type: 'string',
        default: __('Button Text', 'hds-wp')
      },
      buttonUrl: {
        type: 'string',
        default: ''
      },
      targetBlank: {
        type: 'boolean',
        default: false
      },
      anchor: {
        type: 'string',
        default: ''
      },
      preview: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save(),
    deprecated: [v1],
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/image-text.png'
      }
    }
  });
  unregisterBlockStyle('hds-wp/image-text', 'default');
  registerBlockStyle('hds-wp/image-text', {
    name: 'default',
    label: __('Secondary color', 'hds-wp'),
    isDefault: true
  });
  registerBlockStyle('hds-wp/image-text', {
    name: 'primary-color',
    label: __('Primary color', 'hds-wp')
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element9 = wp.element,
      Fragment = _wp$element9.Fragment,
      createElement = _wp$element9.createElement;
  var _wp$blockEditor9 = wp.blockEditor,
      useBlockProps = _wp$blockEditor9.useBlockProps,
      BlockControls = _wp$blockEditor9.BlockControls,
      InnerBlocks = _wp$blockEditor9.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data5 = wp.data,
      withSelect = _wp$data5.withSelect,
      select = _wp$data5.select,
      dispatch = _wp$data5.dispatch;
  var compose = wp.compose.compose;
  var apiFetch = wp.apiFetch;
  var _wp$components9 = wp.components,
      Button = _wp$components9.Button,
      TextControl = _wp$components9.TextControl,
      SelectControl = _wp$components9.SelectControl,
      ToolbarGroup = _wp$components9.ToolbarGroup,
      ToolbarButton = _wp$components9.ToolbarButton;
  var PostTypeSelect = hdsWithPostTypeSelectControl();
  var PostSearch = hdsSearchPostsTextControl();

  function removePostButton(props) {
    return hdsRemovePostControl({
      text: wp.i18n.__('Detach post', 'hds-wp')
    }, props);
  }

  function titleText(props) {
    return hdsTextControl({
      label: wp.i18n.__('Link text', 'hds-wp'),
      value: props.attributes.linkTitle,
      attribute: 'linkTitle'
    }, props);
  }

  function excerptText(props) {
    return hdsTextAreaControl({
      label: wp.i18n.__('Excerpt', 'hds-wp'),
      value: props.attributes.linkExcerpt,
      attribute: 'linkExcerpt'
    }, props);
  }

  function urlText(props) {
    return hdsTextControl({
      label: wp.i18n.__('Link URL', 'hds-wp'),
      value: props.attributes.linkUrl,
      attribute: 'linkUrl'
    }, props);
  }

  function linkDirectionControl(props) {
    return hdsRadioControl({
      label: wp.i18n.__('Link type', 'hds-wp'),
      selected: props.attributes.linkDir,
      attribute: 'linkDir',
      options: [{
        label: __('Post', 'hds-wp'),
        value: 'internal'
      }, {
        label: __('Link', 'hds-wp'),
        value: 'external'
      }]
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
        } else {
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
        } else {
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
        } else {
          controls.push(titleText);
          controls.push(urlText);
          controls.push(hdsTargetBlankControl);
        }

        break;
    }

    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: false
    }, controls.map(function (control) {
      return hdsPanelRow({}, createElement(control, props));
    }));
  }

  function placeholder(linkType, props) {
    var title = props.attributes.linkTitle ? props.attributes.linkTitle : __('Helsinki - Link', 'hds-wp');

    if (props.attributes.linkDir == 'internal' && props.attributes.postId != 0) {
      title = props.attributes.postTitle ? props.attributes.postTitle : __('Helsinki - Link', 'hds-wp');
    }

    var parts = [createElement('h3', {
      className: 'link___title'
    }, title)];

    if (linkType === 'title-excerpt' && props.attributes.linkDir == 'internal' && props.attributes.postId != 0 && props.attributes.postExcerpt) {
      var excerptWrapper = document.createElement("div");
      excerptWrapper.innerHTML = props.attributes.postExcerpt; //used to remove extra <p>-tags from excerpt source

      parts.push(createElement('p', {
        className: 'link___excerpt'
      }, excerptWrapper.innerText));
    } else if (linkType === 'title-excerpt' && (props.attributes.linkDir != 'internal' || props.attributes.postId == 0) && props.attributes.linkExcerpt) {
      parts.push(createElement('p', {
        className: 'link___excerpt'
      }, props.attributes.linkExcerpt));
    }

    return createElement('div', useBlockProps({
      className: 'link'
    }), parts);
  }

  function getParentBlock(clientId) {
    var parent = wp.data.select('core/block-editor').getBlocksByClientId(wp.data.select('core/editor').getBlockHierarchyRootClientId(clientId));
    return parent[0];
  }

  function toolbar(props, linkType) {
    if (linkType === 'image-title') {
      return createElement(BlockControls, {
        key: 'controls'
      }, createElement(ToolbarGroup, {}, props.attributes.linkDir == 'external' ? hdsMediaUpload(props.attributes.mediaId, function (media) {
        props.setAttributes({
          mediaId: media.id,
          mediaUrl: media.sizes.full.url,
          mediaWidth: media.sizes.full.width,
          mediaHeight: media.sizes.full.height,
          mediaAlt: media.alt,
          mediaSrcset: media.sizes.full.srcset
        });
      }, function (mediaUpload) {
        return createElement(Button, {
          icon: 'format-image',
          label: __('Select image', 'hds-wp'),
          onClick: mediaUpload.open
        });
      }) : ''));
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
      height: props.attributes.mediaHeight
    };
  }

  function edit() {
    return function (props) {
      var clientId = props.clientId;
      var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId(clientId))[0];
      dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
        links: select('core/block-editor').getBlocks(parent.clientId).map(function (block) {
          return block.attributes;
        })
      });
      parent = getParentBlock(props.clientId);

      if (props.attributes.hasOwnProperty('isExternalUrl') && props.attributes.isExternalUrl != null) {
        if (props.attributes.isExternalUrl) {
          props.attributes.linkDir = 'external';
        } else {
          props.attributes.linkDir = 'internal';
        }

        props.attributes.isExternalUrl = null;
      } else if (!props.attributes.hasOwnProperty('linkDir')) {
        props.attributes.linkDir = 'internal';
      }

      return createElement(Fragment, {}, toolbar(props, parent.attributes.linkType), panelControls(parent.attributes.linkType, props), placeholder(parent.attributes.linkType, props));
    };
  }

  registerBlockType('hds-wp/link', {
    apiVersion: 2,
    title: __('Helsinki - Link', 'hds-wp'),
    category: 'hds-wp',
    icon: 'links',
    supports: {},
    parent: ['hds-wp/links'],
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
        type: 'string'
      },
      targetBlank: {
        type: 'boolean',
        default: false
      },
      isExternalUrl: {
        type: 'boolean'
      },
      mediaId: {
        type: 'number',
        default: 0
      },
      mediaUrl: {
        type: 'string',
        default: ''
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
        default: ''
      },
      mediaSrcset: {
        type: 'string',
        default: ''
      },
      search: {
        type: 'string',
        default: ''
      }
    },
    edit: edit()
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks7 = wp.blocks,
      registerBlockType = _wp$blocks7.registerBlockType,
      getBlockContent = _wp$blocks7.getBlockContent;
  var _wp$element10 = wp.element,
      Fragment = _wp$element10.Fragment,
      createElement = _wp$element10.createElement,
      useState = _wp$element10.useState;
  var _wp$blockEditor10 = wp.blockEditor,
      useBlockProps = _wp$blockEditor10.useBlockProps,
      BlockControls = _wp$blockEditor10.BlockControls,
      InnerBlocks = _wp$blockEditor10.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data6 = wp.data,
      select = _wp$data6.select,
      useSelect = _wp$data6.useSelect;
  var _wp$components10 = wp.components,
      ToolbarGroup = _wp$components10.ToolbarGroup,
      ToolbarButton = _wp$components10.ToolbarButton,
      Button = _wp$components10.Button,
      ToggleControl = _wp$components10.ToggleControl;

  function linkTypeOptions() {
    return [{
      label: __('Without image', 'hds-wp'),
      value: 'title'
    }, {
      label: __('Title & excerpt', 'hds-wp'),
      value: 'title-excerpt'
    }, {
      label: __('With image', 'hds-wp'),
      value: 'image-title'
    }];
  }

  function columnCountOptions() {
    return [{
      label: 2 + ' ' + __('Columns', 'hds-wp'),
      value: 2
    }, {
      label: 3 + ' ' + __('Columns', 'hds-wp'),
      value: 3
    }, {
      label: 4 + ' ' + __('Columns', 'hds-wp'),
      value: 4
    }];
  }

  function inspectorControls(props) {
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: false
    }, hdsSelectControl({
      label: __('Link type', 'hds-wp'),
      value: props.attributes.linkType,
      attribute: 'linkType',
      options: linkTypeOptions()
    }, props), hdsSelectControl({
      label: __('Column count', 'hds-wp'),
      value: props.attributes.columns,
      attribute: 'columns',
      options: columnCountOptions()
    }, props), hdsCheckboxControl({
      label: __('Background', 'hds-wp'),
      checked: props.attributes.hasBackground,
      attribute: 'hasBackground'
    }, props));
  }

  function classNamesString(props) {
    var classNames = ['links', 'type-' + props.attributes.linkType, props.attributes.hasBackground ? 'has-background' : ''];
    return classNames.join(' ');
  }

  function title(props) {
    if (!props.attributes.title) {
      return;
    }

    return createElement('h2', {
      className: 'links__title'
    }, props.attributes.title);
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return /*#__PURE__*/React.createElement("img", {
          src: props.attributes.preview
        });
      }

      props.attributes.columns = parseInt(props.attributes.columns);
      var content = null;
      var isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
      });

      if (props.isSelected || isParentOfSelectedBlock) {
        content = createElement(Fragment, {}, hdsContentTitleRich(props, {
          placeholder: __('This is the title', 'hds-wp'),
          titleAttribute: 'title',
          className: 'links__title'
        }), hdsContentTextRich(props, {
          placeholder: __('This is the excerpt.', 'hds-wp')
        }), createElement(InnerBlocks, {
          allowedBlocks: ['hds-wp/link'],
          template: [['hds-wp/link', {}], ['hds-wp/link', {}], ['hds-wp/link', {}]]
        }));
      } else {
        var blockAttributes = props.attributes;
        blockAttributes.links = select('core/block-editor').getBlocks(props.clientId).map(function (block) {
          return block.attributes;
        });
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/links',
          attributes: blockAttributes,
          httpMethod: 'POST'
        });
      }

      return createElement(Fragment, {}, inspectorControls(props), createElement('div', useBlockProps(), content));
    };
  }

  function save() {
    return function (props) {
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  registerBlockType('hds-wp/links', {
    apiVersion: 2,
    title: __('Helsinki - Links', 'hds-wp'),
    category: 'hds-wp',
    icon: 'screenoptions',
    keywords: ['Helsinki - Linkit'],
    supports: {
      anchor: true
    },
    attributes: {
      columns: {
        type: 'number',
        default: 3
      },
      hasBackground: {
        type: 'boolean',
        default: false
      },
      linkType: {
        type: 'string',
        default: 'title'
      },
      title: {
        type: 'string',
        default: ''
      },
      contentText: {
        type: 'string',
        default: ''
      },
      links: {
        type: 'array',
        default: []
      },
      anchor: {
        type: 'string',
        default: ''
      },
      preview: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save(),
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/links.png'
      }
    }
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element11 = wp.element,
      Fragment = _wp$element11.Fragment,
      createElement = _wp$element11.createElement,
      useState = _wp$element11.useState,
      useEffect = _wp$element11.useEffect;
  var _wp$blockEditor11 = wp.blockEditor,
      useBlockProps = _wp$blockEditor11.useBlockProps,
      BlockControls = _wp$blockEditor11.BlockControls,
      InnerBlocks = _wp$blockEditor11.InnerBlocks,
      RichText = _wp$blockEditor11.RichText,
      InspectorControls = _wp$blockEditor11.InspectorControls;
  var _wp$data7 = wp.data,
      select = _wp$data7.select,
      useSelect = _wp$data7.useSelect,
      useDispatch = _wp$data7.useDispatch,
      dispatch = _wp$data7.dispatch,
      subscribe = _wp$data7.subscribe;
  var _wp$components11 = wp.components,
      ToolbarGroup = _wp$components11.ToolbarGroup,
      ToolbarButton = _wp$components11.ToolbarButton,
      Button = _wp$components11.Button,
      ToggleControl = _wp$components11.ToggleControl,
      TextControl = _wp$components11.TextControl,
      Notice = _wp$components11.Notice;
  var store = wp.notices.store;
  registerBlockType('hds-wp/map', {
    apiVersion: 2,
    title: __('Helsinki - Map', 'hds-wp'),
    icon: 'location-alt',
    category: 'hds-wp',
    style: 'hds-map',
    attributes: {
      blockId: {
        type: 'string'
      },
      title: {
        type: 'string',
        default: ''
      },
      description: {
        type: 'string',
        default: ''
      },
      url: {
        type: 'string',
        default: ''
      },
      assistive_title: {
        type: 'string'
      }
    },
    edit: edit,
    example: {
      attributes: {
        title: __('Map title', 'hds-wp'),
        description: __('Map description', 'hds-wp'),
        url: 'https://palvelukartta.hel.fi/fi/embed/unit/1915?city=helsinki,espoo,vantaa,kauniainen,kirkkonummi&bbox=60.22464068641878,24.932012557983402,60.23254640738538,24.962611198425297',
        assistive_title: __('Map title', 'hds-wp')
      }
    }
  });

  function edit(_ref3) {
    var attributes = _ref3.attributes,
        setAttributes = _ref3.setAttributes,
        clientId = _ref3.clientId;
    var blockProps = useBlockProps({});

    var _useState = useState(attributes.title ? false : true),
        _useState2 = _slicedToArray(_useState, 2),
        titleError = _useState2[0],
        setTitleError = _useState2[1];

    var _useState3 = useState(attributes.description ? false : true),
        _useState4 = _slicedToArray(_useState3, 2),
        descriptionError = _useState4[0],
        setDescriptionError = _useState4[1];

    var _useState5 = useState(attributes.url ? false : true),
        _useState6 = _slicedToArray(_useState5, 2),
        urlError = _useState6[0],
        setUrlError = _useState6[1];

    var _useState7 = useState(attributes.assistive_title ? false : true),
        _useState8 = _slicedToArray(_useState7, 2),
        assistiveTitleError = _useState8[0],
        setAssistiveTitleError = _useState8[1];

    var _useDispatch = useDispatch(store),
        createErrorNotice = _useDispatch.createErrorNotice,
        removeNotice = _useDispatch.removeNotice; // Set unique block id, needed for skip link


    useEffect(function () {
      if (clientId) {
        setAttributes({
          blockId: clientId
        });
      }
    }, []); // Check if title is set, if not, show error notice

    useEffect(function () {
      var title = attributes.title;

      if (!title) {
        createErrorNotice(__('Helsinki - Map', 'hds-wp') + ': ' + __('Please enter a title', 'hds-wp'), {
          type: 'default',
          id: 'titleError-' + clientId,
          isDismissible: false,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('titleError-' + clientId);
      }
    }, [titleError]); // Check if description is set, if not, show error notice

    useEffect(function () {
      var description = attributes.description;

      if (!description) {
        createErrorNotice(__('Helsinki - Map', 'hds-wp') + ': ' + __('Please enter a description', 'hds-wp'), {
          type: 'default',
          id: 'descriptionError-' + clientId,
          isDismissible: false,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('descriptionError-' + clientId);
      }
    }, [descriptionError]); // Check if url is valid, if not, show error notice

    useEffect(function () {
      var url = attributes.url;

      if (!url) {
        createErrorNotice(__('Helsinki - Map', 'hds-wp') + ': ' + __('Please enter a valid map embed URL', 'hds-wp'), {
          type: 'default',
          id: 'urlError-' + clientId,
          isDismissible: false,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('urlError-' + clientId);
      }
    }, [urlError]); // Check if assistive title is set, if not, show error notice

    useEffect(function () {
      var assistiveTitle = attributes.assistive_title;

      if (!assistiveTitle) {
        createErrorNotice(__('Helsinki - Map', 'hds-wp') + ': ' + __('Please enter assistive technology title', 'hds-wp'), {
          type: 'default',
          isDismissible: false,
          id: 'assistiveTitleError-' + clientId,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('assistiveTitleError-' + clientId);
      }
    }, [assistiveTitleError]);
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
      className: "hds-map has-background"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hds-container"
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "h2",
      value: attributes.title,
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        }), setTitleError(value ? false : true);
      },
      placeholder: __('Map title*', 'hds-wp'),
      allowedFormats: []
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "p",
      value: attributes.description,
      onChange: function onChange(value) {
        return setAttributes({
          description: value
        }), setDescriptionError(value ? false : true);
      },
      placeholder: __('Map description*', 'hds-wp'),
      allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/paragraph']
    }), attributes.url && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
      src: attributes.url,
      title: attributes.assistive_title || attributes.title,
      scrolling: "no"
    }), /*#__PURE__*/React.createElement("a", {
      href: attributes.url,
      target: "_blank",
      className: "block-embed-external-link",
      rel: "noopener"
    }, __('Open map in new window', 'hds-wp'), ' ', hdsExternalLinkIcon()))))), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1rem'
      }
    }, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Map URL', 'hds-wp'),
      value: attributes.url,
      onChange: function onChange(value) {
        if (value.includes('palvelukartta.hel.fi') || value.includes('kartta.hel.fi')) {
          setUrlError(false);
        } else {
          setUrlError(true);
        }

        setAttributes({
          url: value
        });
      },
      className: "is-required",
      required: true
    }), urlError && /*#__PURE__*/React.createElement("div", {
      className: "inspector-errornotice"
    }, __('Please enter a valid map embed URL', 'hds-wp')), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'grey',
        marginBottom: '1rem'
      }
    }, /*#__PURE__*/React.createElement("small", null, __('Add map url from:', 'hds-wp'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "https://palvelukartta.hel.fi/fi/",
      target: "_blank"
    }, "palvelukartta.hel.fi"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "https://kartta.hel.fi/",
      target: "_blank"
    }, "kartta.hel.fi"))), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Assistive technology title', 'hds-wp'),
      value: attributes.assistive_title,
      onChange: function onChange(value) {
        setAttributes({
          assistive_title: value
        });

        if (value) {
          setAssistiveTitleError(false);
        } else {
          setAssistiveTitleError(true);
        }
      },
      placeholder: __('Assistive technology title', 'hds-wp'),
      className: "is-required" // or your own class name
      ,
      required: true
    }), !attributes.assistive_title && /*#__PURE__*/React.createElement("div", {
      className: "inspector-errornotice"
    }, __('Please enter assistive technology title', 'hds-wp')))));
  }
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks8 = wp.blocks,
      registerBlockType = _wp$blocks8.registerBlockType,
      getBlockContent = _wp$blocks8.getBlockContent;
  var _wp$element12 = wp.element,
      Fragment = _wp$element12.Fragment,
      createElement = _wp$element12.createElement;
  var _wp$blockEditor12 = wp.blockEditor,
      useBlockProps = _wp$blockEditor12.useBlockProps,
      BlockControls = _wp$blockEditor12.BlockControls,
      InnerBlocks = _wp$blockEditor12.InnerBlocks;
  var _wp$components12 = wp.components,
      ToolbarGroup = _wp$components12.ToolbarGroup,
      ToolbarButton = _wp$components12.ToolbarButton,
      Button = _wp$components12.Button;
  var _wp$data8 = wp.data,
      select = _wp$data8.select,
      useSelect = _wp$data8.useSelect;

  function edit() {
    return function (props) {
      var isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
      });
      var content = null;

      if (props.isSelected || isParentOfSelectedBlock) {
        var stepClasses = 'content__inner content__inner--step' + (props.attributes.style == 'numbered' ? ' numbered' : '');
        content = createElement('div', useBlockProps(), createElement('div', {
          className: 'content'
        }, createElement('div', {
          className: stepClasses
        }, props.attributes.style == 'numbered' ? props.attributes.order : ''), createElement('div', {
          className: 'content__inner content__inner--text'
        }, hdsContentTitleRich(props, {
          placeholder: __('This is the title', 'hds-wp')
        }), createElement(InnerBlocks, {
          allowedBlocks: ['core/paragraph', 'core/buttons']
        }))));
      } else {
        var innerContent = getBlockContent(select('core/block-editor').getBlock(props.clientId));
        var attributes = props.attributes;
        attributes.innerContent = innerContent;
        content = createElement('div', useBlockProps(), createElement(wp.serverSideRender, {
          block: 'hds-wp/timeline-card',
          attributes: attributes,
          httpMethod: 'POST'
        }));
      }

      return createElement(Fragment, {}, content);
    };
  }

  function save() {
    return function (props) {
      return createElement(InnerBlocks.Content, useBlockProps.save());
    };
  }

  registerBlockType('hds-wp/timeline-card', {
    apiVersion: 2,
    title: __('Helsinki - Phasing Card', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    supports: {
      anchor: true
    },
    parent: ['hds-wp/timeline'],
    attributes: {
      contentTitle: {
        type: 'string',
        default: ''
      },
      style: {
        type: 'string',
        default: 'numberless'
      },
      order: {
        type: 'number'
      },
      innerContent: {
        type: 'string',
        default: ''
      },
      anchor: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save()
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks9 = wp.blocks,
      registerBlockType = _wp$blocks9.registerBlockType,
      getBlockContent = _wp$blocks9.getBlockContent;
  var _wp$element13 = wp.element,
      Fragment = _wp$element13.Fragment,
      createElement = _wp$element13.createElement;
  var _wp$blockEditor13 = wp.blockEditor,
      useBlockProps = _wp$blockEditor13.useBlockProps,
      BlockControls = _wp$blockEditor13.BlockControls,
      InnerBlocks = _wp$blockEditor13.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$components13 = wp.components,
      ToolbarGroup = _wp$components13.ToolbarGroup,
      ToolbarButton = _wp$components13.ToolbarButton,
      Button = _wp$components13.Button,
      ToggleControl = _wp$components13.ToggleControl;
  var _wp$data9 = wp.data,
      select = _wp$data9.select,
      dispatch = _wp$data9.dispatch,
      useSelect = _wp$data9.useSelect;

  function timelineTitle(props) {
    if (props.attributes.title != null && props.attributes.title != '') {
      return createElement('h2', {
        className: 'timeline__heading'
      }, createElement(Fragment, {}, props.attributes.title ? props.attributes.title : ''));
    }

    return '';
  }

  function timelineDescription(props) {
    if (props.attributes.description != null && props.attributes.description != '') {
      return createElement('p', {
        className: 'excerpt'
      }, createElement(Fragment, {}, props.attributes.description ? props.attributes.description : ''));
    }

    return '';
  }

  function styleOptions() {
    return [{
      label: __('Numberless', 'hds-wp'),
      value: 'numberless'
    }, {
      label: __('Numbered', 'hds-wp'),
      value: 'numbered'
    }];
  }

  function timelineControls(props) {
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: false
    }, hdsSelectControl({
      label: __('Style', 'hds-wp'),
      value: props.attributes.style,
      attribute: 'style',
      options: styleOptions()
    }, props));
  }

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return /*#__PURE__*/React.createElement("img", {
          src: props.attributes.preview
        });
      }

      props.attributes.blockVersion = 2;
      var content = null;
      var clientId = props.clientId;
      var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;

      for (var i = 0; i < children.length; i++) {
        dispatch('core/block-editor').updateBlockAttributes(children[i].clientId, {
          style: props.attributes.style,
          order: i + 1
        });
      }

      var isParentOfSelectedBlock = useSelect(function (selectFrom) {
        return select('core/block-editor').hasSelectedInnerBlock(props.clientId, true);
      });
      props.attributes.cards = select('core/block-editor').getBlocks(props.clientId).map(function (block) {
        var innerContent = '';

        if (block.innerBlocks.length > 0) {
          innerContent = getBlockContent(select('core/block-editor').getBlock(block.clientId));
        }

        block.attributes.innerContent = innerContent;
        return block.attributes;
      });

      if (props.isSelected || isParentOfSelectedBlock) {
        content = createElement(Fragment, {}, timelineControls(props), createElement('div', {
          className: 'timeline-wrapper'
        }, hdsContentTitleRich(props, {
          placeholder: __('This is the title', 'hds-wp'),
          titleAttribute: 'title',
          className: 'timeline__heading'
        }), hdsContentTextRich(props, {
          placeholder: __('This is the excerpt.', 'hds-wp'),
          textAttribute: 'description',
          className: 'excerpt'
        }), createElement('div', {
          className: 'timeline'
        }, createElement('div', {
          className: 'timeline-line'
        }), createElement(InnerBlocks, {
          allowedBlocks: ['hds-wp/timeline-card'],
          template: [['hds-wp/timeline-card', {}], ['hds-wp/timeline-card', {}], ['hds-wp/timeline-card', {}]]
        }))));
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/timeline',
          attributes: props.attributes,
          httpMethod: 'POST'
        });
      }

      return createElement(Fragment, {}, createElement('div', useBlockProps(), content));
    };
  }

  function save() {
    return function (props) {
      return createElement(InnerBlocks.Content, useBlockProps.save());
    };
  }

  registerBlockType('hds-wp/timeline', {
    apiVersion: 2,
    title: __('Helsinki - Phasing', 'hds-wp'),
    category: 'hds-wp',
    icon: 'format-gallery',
    supports: {
      anchor: true
    },
    attributes: {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      style: {
        type: 'string',
        default: 'numberless'
      },
      cards: {
        type: 'array',
        default: []
      },
      blockVersion: {
        type: 'number'
      },
      anchor: {
        type: 'string',
        default: ''
      },
      preview: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    save: save(),
    deprecated: [{
      attributes: {
        title: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        style: {
          type: 'string',
          default: 'numberless'
        }
      },
      supports: {
        anchor: true
      },
      save: function save(props) {
        return createElement(Fragment, {}, createElement('div', useBlockProps.save({
          className: 'timeline-wrapper'
        }), timelineTitle(props), timelineDescription(props), createElement('div', {
          className: 'timeline'
        }, createElement('div', {
          className: 'timeline-line'
        }), createElement(InnerBlocks.Content))));
      }
    }],
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/phasing.png'
      }
    }
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks10 = wp.blocks,
      registerBlockType = _wp$blocks10.registerBlockType,
      registerBlockStyle = _wp$blocks10.registerBlockStyle,
      unregisterBlockStyle = _wp$blocks10.unregisterBlockStyle,
      getBlockContent = _wp$blocks10.getBlockContent;
  var _wp$element14 = wp.element,
      Fragment = _wp$element14.Fragment,
      createElement = _wp$element14.createElement,
      useState = _wp$element14.useState;
  var _wp$blockEditor14 = wp.blockEditor,
      useBlockProps = _wp$blockEditor14.useBlockProps,
      BlockControls = _wp$blockEditor14.BlockControls,
      InnerBlocks = _wp$blockEditor14.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data10 = wp.data,
      select = _wp$data10.select,
      useSelect = _wp$data10.useSelect;
  var _wp$components14 = wp.components,
      ToolbarGroup = _wp$components14.ToolbarGroup,
      ToolbarButton = _wp$components14.ToolbarButton,
      Button = _wp$components14.Button,
      ToggleControl = _wp$components14.ToggleControl;
  var PostCategorySelect = hdsWithPostCategorySelectControl();

  function articleCountOptions() {
    return [{
      label: 4,
      value: 4
    }, {
      label: 8,
      value: 8
    }];
  }

  function inspectorControls(props) {
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: true
    }, hdsSelectControl({
      label: __('Article count', 'hds-wp'),
      value: props.attributes.articles,
      attribute: 'articles',
      options: articleCountOptions()
    }, props), hdsPanelRow({}, createElement(PostCategorySelect, props)));
  }

  function title(props) {
    if (!props.attributes.title) {
      return;
    }

    return createElement('h2', {
      className: 'content-cards__title'
    }, props.attributes.title);
  }

  var cachedProps = null;
  var cachedArticles = null;

  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return /*#__PURE__*/React.createElement("img", {
          src: props.attributes.preview
        });
      }

      var content = null;
      props.attributes.articles = parseInt(props.attributes.articles);
      props.attributes.category = parseInt(props.attributes.category);
      var blockAttributes = props.attributes;

      if (props.isSelected) {
        //we must serverside render only the articles, so the title can be edited from the editor!
        //only re-render articles if relevant attributes have changed
        if (cachedProps == null || cachedProps.articles != props.attributes.articles || cachedProps.category != props.attributes.category || cachedProps.className != props.attributes.className) {
          cachedProps = props.attributes;
          cachedArticles = createElement(wp.serverSideRender, {
            block: 'hds-wp/recent-posts',
            attributes: _objectSpread(_objectSpread({}, blockAttributes), {}, {
              isEditRender: true
            }),
            httpMethod: 'POST'
          });
        }

        content = createElement('div', {
          className: 'recent-posts'
        }, createElement('div', {
          className: 'hds-container'
        }, hdsContentTitleRich(props, {
          placeholder: __('This is the title', 'hds-wp'),
          titleAttribute: 'title',
          className: 'container__heading'
        }), cachedArticles));
      } else {
        content = createElement(wp.serverSideRender, {
          block: 'hds-wp/recent-posts',
          attributes: blockAttributes,
          httpMethod: 'POST'
        });
      }

      return createElement(Fragment, {}, inspectorControls(props), createElement('div', useBlockProps(), content));
    };
  }

  function save() {
    return function (props) {
      props.isEditRender = false;
      return createElement(Fragment, {}, createElement(InnerBlocks.Content));
    };
  }

  registerBlockType('hds-wp/recent-posts', {
    apiVersion: 2,
    title: __('Helsinki - Posts', 'hds-wp'),
    category: 'hds-wp',
    icon: 'images-alt',
    keywords: [__('Helsinki - Recent Posts', 'hds-wp'), __('news', 'hds-wp'), __('blog', 'hds-wp')],
    supports: {
      anchor: true
    },
    attributes: {
      articles: {
        type: 'number',
        default: 4
      },
      title: {
        type: 'string',
        default: __('Latest news', 'hds-wp')
      },
      category: {
        type: 'number',
        default: 0
      },
      anchor: {
        type: 'string',
        default: ''
      },
      isEditRender: {
        type: 'boolean',
        default: false
      },
      preview: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/recent-posts.png'
      }
    }
  });
  unregisterBlockStyle('hds-wp/recent-posts', 'default');
  registerBlockStyle('hds-wp/recent-posts', {
    name: 'default',
    label: __('With image', 'hds-wp'),
    isDefault: true
  });
  registerBlockStyle('hds-wp/recent-posts', {
    name: 'without-image',
    label: __('Without image', 'hds-wp')
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks11 = wp.blocks,
      registerBlockType = _wp$blocks11.registerBlockType,
      getBlockContent = _wp$blocks11.getBlockContent;
  var _wp$element15 = wp.element,
      Fragment = _wp$element15.Fragment,
      createElement = _wp$element15.createElement,
      useState = _wp$element15.useState;
  var _wp$blockEditor15 = wp.blockEditor,
      useBlockProps = _wp$blockEditor15.useBlockProps,
      BlockControls = _wp$blockEditor15.BlockControls,
      InnerBlocks = _wp$blockEditor15.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data11 = wp.data,
      select = _wp$data11.select,
      useSelect = _wp$data11.useSelect;
  var _wp$components15 = wp.components,
      ToolbarGroup = _wp$components15.ToolbarGroup,
      ToolbarButton = _wp$components15.ToolbarButton,
      Button = _wp$components15.Button,
      ToggleControl = _wp$components15.ToggleControl;

  function articleCountOptions() {
    return [{
      label: 4 + ' ' + __('articles', 'hds-wp'),
      value: 4
    }, {
      label: 6 + ' ' + __('articles', 'hds-wp'),
      value: 6
    }, {
      label: 8 + ' ' + __('articles', 'hds-wp'),
      value: 8
    }];
  }

  function inspectorControls(props) {
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: true
    }, hdsTextControl({
      label: __('Title', 'hds-wp'),
      value: props.attributes.title,
      attribute: 'title'
    }, props), hdsTextControl({
      label: __('URL', 'hds-wp'),
      value: props.attributes.url,
      attribute: 'url'
    }, props), hdsSelectControl({
      label: __('Count', 'hds-wp'),
      value: props.attributes.amount,
      attribute: 'amount',
      options: articleCountOptions()
    }, props));
  }

  function edit() {
    return function (props) {
      var content = null;
      props.attributes.lifespan = parseInt(props.attributes.lifespan);
      props.attributes.amount = parseInt(props.attributes.amount);
      var blockAttributes = props.attributes;
      content = createElement(wp.serverSideRender, {
        block: 'hds-wp/rss-feed',
        attributes: blockAttributes,
        httpMethod: 'POST'
      });
      return createElement(Fragment, {}, inspectorControls(props), createElement('div', useBlockProps(), content));
    };
  }

  registerBlockType('hds-wp/rss-feed', {
    apiVersion: 2,
    title: __('Helsinki - RSS-feed', 'hds-wp'),
    category: 'hds-wp',
    icon: 'images-alt',
    keywords: [__('Helsinki - RSS', 'hds-wp'), __('news', 'hds-wp')],
    supports: {
      anchor: true
    },
    attributes: {
      title: {
        type: 'string',
        default: 'Helsingin kaupungin uutiset'
      },
      url: {
        type: 'string',
        default: 'https://www.hel.fi/fi/uutiset/rss'
      },
      lifespan: {
        type: 'number',
        default: 1
      },
      amount: {
        type: 'number',
        default: 6
      },
      anchor: {
        type: 'string',
        default: ''
      }
    },
    edit: edit(),
    example: {
      viewportWidth: 1200
    }
  });
})(window.wp);

(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element16 = wp.element,
      Fragment = _wp$element16.Fragment,
      useState = _wp$element16.useState,
      useEffect = _wp$element16.useEffect;
  var _wp$blockEditor16 = wp.blockEditor,
      useBlockProps = _wp$blockEditor16.useBlockProps,
      RichText = _wp$blockEditor16.RichText;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data12 = wp.data,
      useDispatch = _wp$data12.useDispatch,
      dispatch = _wp$data12.dispatch,
      subscribe = _wp$data12.subscribe;
  var TextControl = wp.components.TextControl;
  var store = wp.notices.store;
  registerBlockType('hds-wp/video', {
    apiVersion: 2,
    title: __('Helsinki - Video', 'hds-wp'),
    icon: 'video-alt3',
    category: 'hds-wp',
    style: 'hds-video',
    attributes: {
      blockId: {
        type: 'string'
      },
      title: {
        type: 'string',
        default: ''
      },
      description: {
        type: 'string',
        default: ''
      },
      iframeUrl: {
        type: 'string',
        default: ''
      },
      url: {
        type: 'string',
        default: ''
      },
      assistive_title: {
        type: 'string'
      }
    },
    edit: edit,
    example: {
      attributes: {
        title: __('Video title', 'hds-wp'),
        description: __('Video description', 'hds-wp'),
        iframeUrl: 'https://www.helsinkikanava.fi/fi_FI/web/helsinkikanava/player/embed/vod?assetId=107834317',
        url: 'https://www.helsinkikanava.fi/fi_FI/web/helsinkikanava/player/vod?assetId=107834317',
        assistive_title: __('Video title', 'hds-wp')
      }
    }
  });

  function edit(_ref4) {
    var attributes = _ref4.attributes,
        setAttributes = _ref4.setAttributes,
        clientId = _ref4.clientId;
    var blockProps = useBlockProps({});

    var _useState9 = useState(attributes.title ? false : true),
        _useState10 = _slicedToArray(_useState9, 2),
        titleError = _useState10[0],
        setTitleError = _useState10[1];

    var _useState11 = useState(attributes.description ? false : true),
        _useState12 = _slicedToArray(_useState11, 2),
        descriptionError = _useState12[0],
        setDescriptionError = _useState12[1];

    var _useState13 = useState(attributes.url ? false : true),
        _useState14 = _slicedToArray(_useState13, 2),
        urlError = _useState14[0],
        setUrlError = _useState14[1];

    var _useState15 = useState(attributes.assistive_title ? false : true),
        _useState16 = _slicedToArray(_useState15, 2),
        assistiveTitleError = _useState16[0],
        setAssistiveTitleError = _useState16[1];

    var _useDispatch2 = useDispatch(store),
        createErrorNotice = _useDispatch2.createErrorNotice,
        removeNotice = _useDispatch2.removeNotice; // Set unique block id, needed for skip link


    useEffect(function () {
      if (clientId) {
        setAttributes({
          blockId: clientId
        });
      }
    }, []); // Check if title is valid, if not, show error notice

    useEffect(function () {
      var title = attributes.title;

      if (!title) {
        createErrorNotice(__('Helsinki - Video', 'hds-wp') + ': ' + __('Please enter a title', 'hds-wp'), {
          type: 'default',
          id: 'titleError-' + clientId,
          isDismissible: false,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('titleError-' + clientId);
      }
    }, [titleError]); // Check if description is valid, if not, show error notice

    useEffect(function () {
      var title = attributes.description;

      if (!title) {
        createErrorNotice(__('Helsinki - Video', 'hds-wp') + ': ' + __('Please enter a description', 'hds-wp'), {
          type: 'default',
          id: 'descriptionError-' + clientId,
          isDismissible: false,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('descriptionError-' + clientId);
      }
    }, [descriptionError]); // Check if url is valid, if not, show error notice

    useEffect(function () {
      var url = attributes.url;

      if (!url) {
        createErrorNotice(__('Helsinki - Video', 'hds-wp') + ': ' + __('Please enter a valid video URL', 'hds-wp'), {
          type: 'default',
          id: 'urlError-' + clientId,
          isDismissible: false,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('urlError-' + clientId);
      }
    }, [urlError]); // Check if assistive title is set, if not, show error notice

    useEffect(function () {
      var assistiveTitle = attributes.assistive_title;

      if (!assistiveTitle) {
        createErrorNotice(__('Helsinki - Video', 'hds-wp') + ': ' + __('Please enter assistive technology title', 'hds-wp'), {
          type: 'default',
          isDismissible: false,
          id: 'assistiveTitleError-' + clientId,
          actions: [{
            label: __('Select', 'hds-wp'),
            onClick: function onClick() {
              document.getElementById("block-".concat(clientId)).scrollIntoView({
                behavior: 'smooth'
              });
              dispatch('core/block-editor').selectBlock(clientId);
            }
          }]
        });
      } else {
        dispatch('core/notices').removeNotice('assistiveTitleError-' + clientId);
      }
    }, [assistiveTitleError]);
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
      className: "hds-video has-background"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hds-container"
    }, /*#__PURE__*/React.createElement(RichText, {
      tagName: "h2",
      value: attributes.title,
      onChange: function onChange(value) {
        setTitleError(value ? false : true);
        setAttributes({
          title: value
        });
      },
      placeholder: __('Video title*', 'hds-wp'),
      allowedFormats: []
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "p",
      value: attributes.description,
      onChange: function onChange(value) {
        setDescriptionError(value ? false : true);
        setAttributes({
          description: value
        });
      },
      placeholder: __('Video description*', 'hds-wp'),
      allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/paragraph']
    }), attributes.iframeUrl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("figure", {
      class: "wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9"
    }, /*#__PURE__*/React.createElement("div", {
      class: "wp-block-embed__wrapper"
    }, /*#__PURE__*/React.createElement("iframe", {
      src: attributes.iframeUrl,
      title: attributes.assistive_title || attributes.title,
      scrolling: "no"
    }))), /*#__PURE__*/React.createElement("a", {
      href: attributes.url,
      target: "_blank",
      className: "block-embed-external-link",
      rel: "noopener"
    }, __('Open video in new window', 'hds-wp'), ' ', hdsExternalLinkIcon()))))), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1rem'
      }
    }, /*#__PURE__*/React.createElement(TextControl, {
      label: __('Video URL', 'hds-wp'),
      value: attributes.url,
      onChange: function onChange(value) {
        if (value.includes('youtube.com') || value.includes('helsinkikanava.fi')) {
          setUrlError(false);
          setAttributes({
            url: value
          });

          if (value.includes('youtube.com')) {
            setAttributes({
              iframeUrl: value.replace('watch?v=', 'embed/')
            });
          }

          if (value.includes('helsinkikanava.fi')) {
            setAttributes({
              iframeUrl: value.replace('player/vod', 'player/embed/vod')
            });
          }
        } else {
          setAttributes({
            url: value
          });
          setUrlError(true);
        }
      },
      className: "is-required",
      required: true
    }), urlError && /*#__PURE__*/React.createElement("div", {
      className: "inspector-errornotice"
    }, __('Please enter a valid video URL', 'hds-wp')), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'grey',
        marginBottom: '1rem'
      }
    }, /*#__PURE__*/React.createElement("small", null, __('Add video url from:', 'hds-wp'), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "https://youtube.com",
      target: "_blank"
    }, "youtube.com"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
      href: "https://helsinkikanava.fi",
      target: "_blank"
    }, "helsinkikanava.fi"))), /*#__PURE__*/React.createElement(TextControl, {
      label: __('Assistive title', 'hds-wp'),
      value: attributes.assistive_title,
      onChange: function onChange(value) {
        setAssistiveTitleError(value ? false : true);
        setAttributes({
          assistive_title: value
        });
      },
      className: "is-required",
      required: true
    }), assistiveTitleError && /*#__PURE__*/React.createElement("div", {
      className: "inspector-errornotice"
    }, __('Please enter assistive technology title', 'hds-wp')))));
  }
})(window.wp);

wp.domReady(function () {
  /* Disable default formats */
  wp.richText.unregisterFormatType('core/image');
  wp.richText.unregisterFormatType('core/text-color');
  wp.richText.unregisterFormatType('core/keyboard');
  wp.richText.unregisterFormatType('core/code');
}); //remove error notices when block is removed

(function () {
  var _wp$data13 = wp.data,
      select = _wp$data13.select,
      subscribe = _wp$data13.subscribe,
      dispatch = _wp$data13.dispatch;
  var store = wp.notices.store;

  var getBlocks = function getBlocks() {
    return select('core/block-editor').getBlocks();
  };

  Array.prototype.diff = function (a) {
    return this.filter(function (i) {
      return a.indexOf(i) < 0;
    });
  };

  var blocksState = getBlocks();
  subscribe(_.debounce(function () {
    var notices = select(store).getNotices();
    var newBlocksState = getBlocks(); // Lock saving if notices contain error notices

    var errorNotices = notices.filter(function (notice) {
      return notice.status === 'error';
    });

    if (errorNotices.length > 0) {
      dispatch('core/editor').lockPostSaving('requiredValueLock');
    } else {
      if (select('core/editor').isPostSavingLocked()) {
        dispatch('core/editor').unlockPostSaving('requiredValueLock');
      }
    } // When very last block is removed, it's replaced with a new paragraph block.
    // This is a workaround to remove the error notice.


    if (blocksState.length > newBlocksState.length || newBlocksState.length === 1 && newBlocksState[0].name === 'core/paragraph') {
      // remove newBlocksState from blocksState
      var removedBlock = blocksState.diff(newBlocksState);

      if (removedBlock.length === 1 || removedBlock.length > 0 && removedBlock[0].name === 'core/paragraph') {
        var noticesToRemove = notices.filter(function (notice) {
          return notice.id.includes(removedBlock[0].clientId);
        });
        noticesToRemove.forEach(function (notice) {
          dispatch('core/notices').removeNotice(notice.id);
        });
      }
    }

    return settings;
  }

  wp.hooks.addFilter('blocks.registerBlockType', 'table/custom-attributes', addTableAttributes);
  var tableAdvancedControls = wp.compose.createHigherOrderComponent(function (BlockEdit) {
    return function (props) {
      var __ = wp.i18n.__;
      var _wp$element16 = wp.element,
          Fragment = _wp$element16.Fragment,
          createElement = _wp$element16.createElement;
      var _wp$components15 = wp.components,
          ToggleControl = _wp$components15.ToggleControl,
          Panel = _wp$components15.Panel,
          PanelBody = _wp$components15.PanelBody,
          TextControl = _wp$components15.TextControl;
      var _wp$blockEditor16 = wp.blockEditor,
          InspectorControls = _wp$blockEditor16.InspectorControls,
          BlockControls = _wp$blockEditor16.BlockControls,
          useBlockProps = _wp$blockEditor16.useBlockProps;
      var attributes = props.attributes,
          setAttributes = props.setAttributes,
          isSelected = props.isSelected;
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BlockEdit, props), isSelected && props.name == 'core/table' && /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: __('Advanced table settings', 'hds-wp')
      }, /*#__PURE__*/React.createElement(TextControl, {
        label: __('Title', 'hds-wp'),
        value: attributes.title,
        onChange: function onChange(value) {
          return setAttributes({
            title: value
          });
        }
      }), /*#__PURE__*/React.createElement(ToggleControl, {
        label: __('Vertical header', 'hds-wp'),
        checked: attributes.verticalHeader,
        onChange: function onChange(value) {
          return setAttributes({
            verticalHeader: value
          });
        }
      }))));
    };
  }, 'tableAdvancedControls');
  wp.hooks.addFilter('editor.BlockEdit', 'table/custom-control', tableAdvancedControls);

  function tableApplyExtraClass(extraProps, blockType, attributes) {
    var verticalHeader = attributes.verticalHeader;

    if (typeof verticalHeader !== 'undefined' && verticalHeader) {
      extraProps.className = extraProps.className + ' has-vertical-header';
    }

    return extraProps;
  }

  wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'table/custom-apply-class', tableApplyExtraClass);
  var tableEditorWrapperExtraClass = wp.compose.createHigherOrderComponent(function (BlockListBlock) {
    return function (props) {
      var name = props.name,
          attributes = props.attributes;

      if (name != 'core/table') {
        return /*#__PURE__*/React.createElement(BlockListBlock, props);
      }

      var verticalHeader = attributes.verticalHeader;
      var customClass = verticalHeader ? 'has-vertical-header' : '';
      return /*#__PURE__*/React.createElement(BlockListBlock, _extends({}, props, {
        className: customClass
      }));
    };
  }, 'tableEditorWrapperExtraClass');
  wp.hooks.addFilter('editor.BlockListBlock', 'table/custom-editor-wrapper-class', tableEditorWrapperExtraClass);
})(window.wp); //remove error notices when block is removed


(function () {
  var _wp$data13 = wp.data,
      select = _wp$data13.select,
      subscribe = _wp$data13.subscribe,
      dispatch = _wp$data13.dispatch;
  var store = wp.notices.store;

  var getBlocks = function getBlocks() {
    return select('core/block-editor').getBlocks();
  };

  Array.prototype.diff = function (a) {
    return this.filter(function (i) {
      return a.indexOf(i) < 0;
    });
  };

  var blocksState = getBlocks();
  subscribe(_.debounce(function () {
    var notices = select(store).getNotices();
    var newBlocksState = getBlocks(); // Lock saving if notices contain error notices

    var errorNotices = notices.filter(function (notice) {
      return notice.status === 'error';
    });

    if (errorNotices.length > 0) {
      dispatch('core/editor').lockPostSaving('requiredValueLock');
    } else {
      if (select('core/editor').isPostSavingLocked()) {
        dispatch('core/editor').unlockPostSaving('requiredValueLock');
      }
    } // When very last block is removed, it's replaced with a new paragraph block.
    // This is a workaround to remove the error notice.


    if (blocksState.length > newBlocksState.length || newBlocksState.length === 1 && newBlocksState[0].name === 'core/paragraph') {
      // remove newBlocksState from blocksState
      var removedBlock = blocksState.diff(newBlocksState);

      if (removedBlock.length === 1 || removedBlock.length > 0 && removedBlock[0].name === 'core/paragraph') {
        var noticesToRemove = notices.filter(function (notice) {
          return notice.id.includes(removedBlock[0].clientId);
        });
        noticesToRemove.forEach(function (notice) {
          dispatch('core/notices').removeNotice(notice.id);
        });
      }
    }

    blocksState = newBlocksState;
  }, 300));
})(window.wp);

(function (wp) {
  /* inspired from https://github.com/Yoast/wpseo-woocommerce/blob/trunk/js/src/yoastseo-woo-replacevars.js */

  /* global jQuery, YoastSEO, app, globals YoastACFAnalysisConfig */
  var pluginName = "additionalVariablePlugin";
  var ReplaceVar = window.YoastReplaceVarPlugin && window.YoastReplaceVarPlugin.ReplaceVar;
  var placeholders = {};
  var modifiableFields = ["content", "title", "snippet_title", "snippet_meta", "primary_category", "data_page_title", "data_meta_desc"];

  var replaceVarPluginAvailable = function replaceVarPluginAvailable() {
    if (typeof ReplaceVar === "undefined") {
      if (config.debug) {
        console.log("Additional replace variables in the Snippet Window requires Yoast SEO >= 5.3.");
      }

      return false;
    }

    return true;
  };
  /**
   * Gets City of Helsinki text
   *
   * @returns {string}
   */


  var i = 0;

  function getHelsinki() {
    return wp.i18n.__('City of Helsinki', 'hds-wp');
  }
  /**
   * Variable replacement plugin for WordPress.
   *
   * @returns {void}
   */


  var YoastReplaceVarPlugin = function YoastReplaceVarPlugin() {
    if (!replaceVarPluginAvailable()) {
      return;
    }

    this._app = YoastSEO.app;

    this._app.registerPlugin(pluginName, {
      status: "ready"
    });

    this._store = YoastSEO.store;
    this.registerReplacements();
    this.registerModifications(this._app);
    this.registerEvents();
  };
  /**
   * Register the events that might have influence for the replace vars.
   *
   * @returns {void}
   */


  YoastReplaceVarPlugin.prototype.registerEvents = function () {
    jQuery(document).on("change", "#inspector-text-control-1", this.declareReloaded.bind(this));
  };
  /**
   * Registers all the placeholders and their replacements.
   *
   * @returns {void}
   */


  YoastReplaceVarPlugin.prototype.registerReplacements = function () {
    this.addReplacement(new ReplaceVar("%%helsinki%%", "helsinki"));
  };
  /**
   * Registers the modifications for the plugin on initial load.
   *
   * @param {app} app The app object.
   *
   * @returns {void}
   */


  YoastReplaceVarPlugin.prototype.registerModifications = function (app) {
    var callback = this.replaceVariables.bind(this);

    for (var i = 0; i < modifiableFields.length; i++) {
      app.registerModification(modifiableFields[i], callback, pluginName, 10);
    }
  };
  /**
   * Runs the different replacements on the data-string.
   *
   * @param {string} data The data that needs its placeholders replaced.
   *
   * @returns {string} The data with all its placeholders replaced by actual values.
   */


  YoastReplaceVarPlugin.prototype.replaceVariables = function (data) {
    if (typeof data !== "undefined") {
      data = data.replace(/%%helsinki%%/g, getHelsinki());
      data = this.replacePlaceholders(data);
    }

    return data;
  };
  /**
   * Adds a replacement object to be used when replacing placeholders.
   *
   * @param {ReplaceVar} replacement The replacement to add to the placeholders.
   *
   * @returns {void}
   */


  YoastReplaceVarPlugin.prototype.addReplacement = function (replacement) {
    placeholders[replacement.placeholder] = replacement;

    this._store.dispatch({
      type: "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
      name: replacement.placeholder.replace(/^%%|%%$/g, ""),
      value: replacement.placeholder
    });
  };
  /**
   * Reloads the app to apply possibly made changes in the content.
   *
   * @returns {void}
   */


  YoastReplaceVarPlugin.prototype.declareReloaded = function () {
    this._app.pluginReloaded(pluginName);

    this._store.dispatch({
      type: "SNIPPET_EDITOR_REFRESH"
    });
  };
  /**
   * Replaces placeholder variables with their replacement value.
   *
   * @param {string} text The text to have its placeholders replaced.
   *
   * @returns {string} The text in which the placeholders have been replaced.
   */


  YoastReplaceVarPlugin.prototype.replacePlaceholders = function (text) {
    for (var i = 0; i < placeholders.length; i++) {
      var replaceVar = placeholders[i];
      text = text.replace(new RegExp(replaceVar.getPlaceholder(true), "g"), replaceVar.replacement);
    }

    return text;
  };
  /**
   * Initializes the Additional ReplaceVars plugin.
   *
   * @returns {void}
   */


  function initializeReplacevarPlugin() {
    // When YoastSEO is available, just instantiate the plugin.
    if (typeof YoastSEO !== "undefined" && typeof YoastSEO.app !== "undefined") {
      new YoastReplaceVarPlugin(); // eslint-disable-line no-new

      return;
    } // Otherwise, add an event that will be executed when YoastSEO will be available.


    jQuery(window).on("YoastSEO:ready", function () {
      new YoastReplaceVarPlugin(); // eslint-disable-line no-new
    });
  }

  initializeReplacevarPlugin();
})(window.wp);