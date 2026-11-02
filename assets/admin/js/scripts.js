"use strict";

var _excluded = ["children"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  var value = config.titleAttribute ? props.attributes[config.titleAttribute] : props.attributes.contentTitle;
  if (!value && config.defaultValue) {
    value = config.defaultValue;
  }
  return wp.element.createElement(wp.blockEditor.RichText, {
    tagName: 'h2',
    className: config.className ? config.className : 'content__heading',
    value: value,
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
function hdsContentButton(_ref3, config, icon) {
  var buttonText = _ref3.buttonText,
    buttonUrl = _ref3.buttonUrl;
  return buttonText && buttonUrl ? wp.element.createElement('a', config, wp.element.createElement(wp.element.Fragment, {}, buttonText, icon ? icon : null)) : '';
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
  return wp.element.createElement(hdsIconPicker, {
    label: wp.i18n.__('Icon', 'hds-wp'),
    value: props.attributes.contentIcon,
    onChange: function onChange(value) {
      props.setAttributes({
        contentIcon: value
      });
    }
  });
}
var hdsSelectableIconsRequest = null;
function hdsFetchSelectableIcons() {
  if (!hdsSelectableIconsRequest) {
    hdsSelectableIconsRequest = wp.apiFetch({
      path: '/helsinki/icons/v1/icons'
    }).then(function (icons) {
      return Array.isArray(icons) ? icons : [];
    }).catch(function (error) {
      // Allow retrying on next open
      hdsSelectableIconsRequest = null;
      throw error;
    });
  }
  return hdsSelectableIconsRequest;
}
function hdsIconPreview(name) {
  return wp.element.createElement('svg', {
    className: 'hds-icon-picker__preview icon mask-icon hds-icon--' + name,
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    focusable: 'false'
  });
}
function hdsIconPicker(config) {
  var createElement = wp.element.createElement,
    useState = wp.element.useState,
    useEffect = wp.element.useEffect,
    components = wp.components,
    __ = wp.i18n.__;
  var openState = useState(false),
    isOpen = openState[0],
    setOpen = openState[1];
  var searchState = useState(''),
    search = searchState[0],
    setSearch = searchState[1];
  var iconsState = useState(null),
    icons = iconsState[0],
    setIcons = iconsState[1];
  var errorState = useState(false),
    hasError = errorState[0],
    setError = errorState[1];
  var value = config.value && config.value !== '(empty)' ? config.value : '';
  useEffect(function () {
    if (!isOpen || icons) {
      return;
    }
    var isActive = true;
    setError(false);
    hdsFetchSelectableIcons().then(function (result) {
      if (isActive) {
        setIcons(result);
      }
    }).catch(function () {
      if (isActive) {
        setError(true);
      }
    });
    return function () {
      isActive = false;
    };
  }, [isOpen, icons]);
  function close() {
    setOpen(false);
    setSearch('');
  }
  function select(name) {
    config.onChange(name);
    close();
  }
  function iconOptions() {
    if (hasError) {
      return createElement('p', {}, __('Icons could not be loaded.', 'hds-wp'));
    }
    if (!icons) {
      return createElement(components.Spinner, {});
    }
    var query = search.trim().toLowerCase(),
      visible = icons.filter(function (name) {
        return !query || name.indexOf(query) !== -1;
      });
    if (!visible.length) {
      return createElement('p', {}, __('No icons found.', 'hds-wp'));
    }
    return createElement('div', {
      className: 'hds-icon-picker__grid'
    }, visible.map(function (name) {
      return createElement(components.Button, {
        key: name,
        className: 'hds-icon-picker__option' + (name === value ? ' is-selected' : ''),
        'aria-pressed': name === value,
        onClick: function onClick() {
          select(name);
        }
      }, hdsIconPreview(name), createElement('span', {
        className: 'hds-icon-picker__name'
      }, name));
    }));
  }
  return createElement(components.PanelRow, {
    className: 'contentIcon hds-icon-picker-control'
  }, createElement(components.BaseControl, {
    label: config.label,
    id: 'hds-icon-picker-control',
    __nextHasNoMarginBottom: true
  }, createElement(components.Button, {
    variant: 'secondary',
    className: 'hds-icon-picker-control__button',
    onClick: function onClick() {
      setOpen(true);
    }
  }, value ? hdsIconPreview(value) : null, createElement('span', {}, value ? value : __('Select icon', 'hds-wp')))), isOpen ? createElement(components.Modal, {
    title: __('Select icon', 'hds-wp'),
    className: 'hds-icon-picker',
    size: 'medium',
    onRequestClose: close
  }, createElement(components.SearchControl, {
    label: __('Search icons', 'hds-wp'),
    value: search,
    onChange: setSearch,
    __nextHasNoMarginBottom: true
  }), iconOptions(), createElement('div', {
    className: 'hds-icon-picker__footer'
  }, createElement(components.Button, {
    variant: 'secondary',
    isDestructive: true,
    disabled: !value,
    onClick: function onClick() {
      select('');
    }
  }, __('Remove icon', 'hds-wp')))) : null);
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

//deprecated icon functions are used to identify block migrations
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
  var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    useEffect = _wp$element.useEffect,
    useState = _wp$element.useState;
  var useSelect = wp.data.useSelect;
  var SelectControl = wp.components.SelectControl;
  var __ = wp.i18n.__;
  var apiFetch = wp.apiFetch;
  var addQueryArgs = wp.url.addQueryArgs;
  var termsPerPage = 100;
  var categoryOptions = [];
  var fetchCategories = function fetchCategories(pageCount) {
    return Promise.all(_toConsumableArray(Array(pageCount).keys()).map(function (i) {
      var params = {
        page: i + 1,
        per_page: termsPerPage
      };
      return apiFetch({
        path: addQueryArgs('/wp/v2/categories', params)
      });
    }));
  };
  var fetchedCategoriesToOptions = function fetchedCategoriesToOptions(pagedTerms) {
    var options = [{
      label: __('All categories', 'hds-wp'),
      value: 0
    }];
    pagedTerms.forEach(function (terms) {
      return terms.map(function (_ref4) {
        var id = _ref4.id,
          name = _ref4.name;
        return options.push({
          label: name,
          value: id
        });
      });
    });
    categoryOptions = options;
  };
  return function (_ref5) {
    var attributes = _ref5.attributes,
      setAttributes = _ref5.setAttributes;
    var _useState = useState(categoryOptions),
      _useState2 = _slicedToArray(_useState, 2),
      selectOptions = _useState2[0],
      setSelectOptions = _useState2[1];
    var totalPages = useSelect(function (select) {
      return select('core').getEntityRecordsTotalPages('taxonomy', 'category', {
        per_page: termsPerPage
      });
    }, []);
    useEffect(function () {
      if (!categoryOptions.length && Number.isInteger(totalPages)) {
        fetchCategories(totalPages).then(fetchedCategoriesToOptions).then(function () {
          return setSelectOptions(categoryOptions);
        });
      }
    }, [totalPages]);
    return createElement(SelectControl, {
      label: __('Category', 'hds-wp'),
      value: attributes.category,
      options: selectOptions,
      onChange: function onChange(selected) {
        return setAttributes({
          category: selected
        });
      }
    });
  };
}
function hdsWithSearchPosts(control) {
  return wp.compose.compose(wp.data.withSelect(function (select, props) {
    return {
      searchPosts: function searchPosts(searchInput) {
        var params = new URLSearchParams();
        params.append('status', ['publish', 'private', 'draft']);
        params.append('per_page', 100);
        params.append('search', searchInput);
        params.append('orderby', 'relevance');
        params.append('search_columns', 'post_title');
        return wp.apiFetch({
          path: '/wp/v2/posts?' + params.toString()
        }).then(function (posts) {
          return wp.apiFetch({
            path: '/wp/v2/pages?' + params.toString()
          }).then(function (pages) {
            return posts.concat(pages);
          });
        });
      }
    };
  }))(control);
}
function hdsSearchPostsTextControl() {
  var _wp$element2 = wp.element,
    createElement = _wp$element2.createElement,
    Fragment = _wp$element2.Fragment,
    useState = _wp$element2.useState,
    useEffect = _wp$element2.useEffect;
  var _wp$components = wp.components,
    Button = _wp$components.Button,
    RadioControl = _wp$components.RadioControl,
    TextControl = _wp$components.TextControl,
    Flex = _wp$components.Flex,
    FlexBlock = _wp$components.FlexBlock,
    FlexItem = _wp$components.FlexItem;
  var __ = wp.i18n.__;
  var postStatuses = {
    publish: __('Public'),
    private: __('Private'),
    draft: __('Draft')
  };
  var postTypes = {
    post: __('post'),
    page: __('page')
  };
  var FoundPost = function FoundPost(_ref6) {
    var post = _ref6.post,
      onClick = _ref6.onClick,
      selectedPostId = _ref6.selectedPostId;
    var _ref7 = post || {},
      id = _ref7.id,
      title = _ref7.title;
    var _ref8 = title || {},
      rendered = _ref8.rendered;
    return createElement('li', {}, createElement(TextControl, {
      type: 'radio',
      value: id,
      label: rendered,
      selected: id === selectedPostId,
      onChange: function onChange() {
        return onClick(post);
      }
    }));
  };
  var PostsList = function PostsList(_ref9) {
    var posts = _ref9.posts,
      onClick = _ref9.onClick,
      selectedPostId = _ref9.selectedPostId;
    return Object.keys(posts).map(function (status) {
      return createElement(RadioControl, {
        label: postStatuses[status] ? postStatuses[status] : status,
        selected: selectedPostId,
        options: posts[status].map(function (_ref0) {
          var id = _ref0.id,
            title = _ref0.title;
          return {
            value: id,
            label: title.rendered
          };
        }),
        onChange: function onChange(id) {
          return onClick(posts[status].find(function (post) {
            return post.id == id;
          }));
        }
      });
    });
  };
  var FoundPosts = function FoundPosts(_ref1) {
    var posts = _ref1.posts,
      onClick = _ref1.onClick,
      selectedPostId = _ref1.selectedPostId;
    var _useState3 = useState(Object.keys(posts)[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      currentType = _useState4[0],
      setCurrentType = _useState4[1];
    var typeTabs = [];
    var postLists = [];
    var TabButton = function TabButton(_ref10) {
      var type = _ref10.type;
      return createElement(Button, {
        text: postTypes[type] ? postTypes[type] : type,
        isPressed: type === currentType,
        onClick: function onClick() {
          return setCurrentType(type);
        },
        variant: 'secondary',
        size: 'small'
      });
    };
    Object.keys(posts).forEach(function (type) {
      typeTabs.push(createElement(FlexItem, {}, createElement(TabButton, {
        type: type
      })));
      postLists.push(createElement('div', {
        hidden: type !== currentType
      }, createElement(PostsList, {
        posts: posts[type],
        onClick: onClick,
        selectedPostId: selectedPostId
      })));
    });
    if (postLists.length) {
      return createElement.apply(void 0, [Fragment, {}, createElement(Flex, {
        justify: 'flex-start',
        expanded: true
      }, typeTabs), createElement('hr', {})].concat(postLists));
    }
  };
  var SearchingNotice = function SearchingNotice() {
    return createElement('p', {}, __('Searching...', 'hds-wp'));
  };
  return hdsWithSearchPosts(function (_ref11) {
    var attributes = _ref11.attributes,
      setAttributes = _ref11.setAttributes,
      searchPosts = _ref11.searchPosts;
    var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSearching = _useState6[0],
      setIsSearching = _useState6[1];
    var _useState7 = useState(attributes.postId),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedPostId = _useState8[0],
      setSelectedPostId = _useState8[1];
    var _useState9 = useState(''),
      _useState0 = _slicedToArray(_useState9, 2),
      searchTerm = _useState0[0],
      setSearchTerm = _useState0[1];
    var _useState1 = useState([]),
      _useState10 = _slicedToArray(_useState1, 2),
      posts = _useState10[0],
      setPosts = _useState10[1];
    var onClick = function onClick(post) {
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
    useEffect(function () {
      setSelectedPostId(attributes.postId);
    }, [attributes.postId]);
    useEffect(function () {
      if (searchTerm.length >= 3 && !isSearching) {
        var timer = setTimeout(function () {
          setIsSearching(true);
          searchPosts(searchTerm).then(function (posts) {
            setPosts(posts.reduce(function (filtered, post) {
              if (!filtered[post.type]) {
                filtered[post.type] = {};
              }
              if (!filtered[post.type][post.status]) {
                filtered[post.type][post.status] = [];
              }
              filtered[post.type][post.status].push(post);
              return filtered;
            }, {}));
            setIsSearching(false);
          });
        }, 300);
        return function () {
          return clearTimeout(timer);
        };
      } else if (!searchTerm.length) {
        setPosts([]);
      }
    }, [searchTerm]);
    return createElement(Flex, {
      direction: 'column',
      expanded: true,
      style: {
        width: '100%'
      }
    }, createElement(FlexBlock, {}, createElement(TextControl, {
      label: __('Search posts', 'hds-wp'),
      value: searchTerm,
      onChange: setSearchTerm
    })), isSearching && createElement(FlexBlock, {}, createElement(SearchingNotice)), !isSearching && createElement(FlexBlock, {}, createElement(FoundPosts, {
      posts: posts,
      onClick: onClick,
      selectedPostId: selectedPostId
    })));
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
}
(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    getBlockContent = _wp$blocks.getBlockContent;
  var _wp$element3 = wp.element,
    Fragment = _wp$element3.Fragment,
    createElement = _wp$element3.createElement;
  var _wp$blockEditor = wp.blockEditor,
    useBlockProps = _wp$blockEditor.useBlockProps,
    BlockControls = _wp$blockEditor.BlockControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
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
    },
    //createElement(Fragment, {}, props.attributes.panelTitle),
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
    }, createElement(innerBlocks, {})), panelClose(props));
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
    title: __('Helsinki - Accordion Panel', 'hds-wp'),
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
  var _wp$element4 = wp.element,
    Fragment = _wp$element4.Fragment,
    createElement = _wp$element4.createElement;
  var _wp$blockEditor2 = wp.blockEditor,
    useBlockProps = _wp$blockEditor2.useBlockProps,
    BlockControls = _wp$blockEditor2.BlockControls,
    InnerBlocks = _wp$blockEditor2.InnerBlocks;
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
    title: __('Helsinki - Accordion', 'hds-wp'),
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
(function (wp, allowedVariations) {
  wp.domReady(function () {
    var _wp$blocks3 = wp.blocks,
      unregisterBlockVariation = _wp$blocks3.unregisterBlockVariation,
      getBlockVariations = _wp$blocks3.getBlockVariations;
    var _loop = function _loop(block) {
      getBlockVariations(block).forEach(function (variation) {
        if (-1 === HelsinkiAllowedVariations[block].indexOf(variation.name)) {
          unregisterBlockVariation(block, variation.name);
        }
      });
    };
    for (var block in HelsinkiAllowedVariations) {
      _loop(block);
    }
  });
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks4 = wp.blocks,
    registerBlockType = _wp$blocks4.registerBlockType,
    registerBlockStyle = _wp$blocks4.registerBlockStyle,
    unregisterBlockStyle = _wp$blocks4.unregisterBlockStyle;
  var _wp$element5 = wp.element,
    Fragment = _wp$element5.Fragment,
    createElement = _wp$element5.createElement;
  var _wp$blockEditor3 = wp.blockEditor,
    useBlockProps = _wp$blockEditor3.useBlockProps,
    BlockControls = _wp$blockEditor3.BlockControls,
    InnerBlocks = _wp$blockEditor3.InnerBlocks,
    RichText = _wp$blockEditor3.RichText;
  var _wp$components4 = wp.components,
    ToolbarGroup = _wp$components4.ToolbarGroup,
    ToolbarButton = _wp$components4.ToolbarButton,
    Button = _wp$components4.Button;
  function contentButton(props) {
    return hdsContentButton({
      buttonText: props.attributes.buttonText,
      buttonUrl: props.attributes.buttonUrl
    }, {
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
      var _props$attributes$cla;
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
      var wrapperClasses = [];
      if ((_props$attributes$cla = props.attributes.className) !== null && _props$attributes$cla !== void 0 && _props$attributes$cla.match('(is-style-.*-secondary-color)')) {
        wrapperClasses.push('has-secondary-background-color', 'has-secondary-content-color');
      } else {
        wrapperClasses.push('has-primary-background-color', 'has-primary-content-color');
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
        className: wrapperClasses.join(' ')
      }), content));
    };
  }
  registerBlockType('hds-wp/banner', {
    title: __('Helsinki - Banner', 'hds-wp'),
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
  var _wp$element6 = wp.element,
    Fragment = _wp$element6.Fragment,
    createElement = _wp$element6.createElement;
  var _wp$blockEditor4 = wp.blockEditor,
    useBlockProps = _wp$blockEditor4.useBlockProps,
    BlockControls = _wp$blockEditor4.BlockControls,
    InnerBlocks = _wp$blockEditor4.InnerBlocks;
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
    title: __('Helsinki - Content Card', 'hds-wp'),
    edit: edit()
  });
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks5 = wp.blocks,
    registerBlockType = _wp$blocks5.registerBlockType,
    getBlockContent = _wp$blocks5.getBlockContent;
  var _wp$element7 = wp.element,
    Fragment = _wp$element7.Fragment,
    createElement = _wp$element7.createElement,
    useState = _wp$element7.useState;
  var _wp$blockEditor5 = wp.blockEditor,
    useBlockProps = _wp$blockEditor5.useBlockProps,
    BlockControls = _wp$blockEditor5.BlockControls,
    InnerBlocks = _wp$blockEditor5.InnerBlocks;
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
    }, hdsSelectControl({
      label: __('Style', 'hds-wp'),
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
        content = createElement('div', {
          className: 'content-card ' + props.attributes.hasBackground ? 'has-background' : ''
        }, hdsContent(props, hdsContentTitleRich(props, {
          placeholder: __('This is the title', 'hds-wp'),
          titleAttribute: 'title'
        }), hdsContentTextRich(props, {
          placeholder: __('This is the excerpt.', 'hds-wp'),
          textAttribute: 'description'
        }), createElement(InnerBlocks, {
          template: [['hds-wp/content-card', {}], ['hds-wp/content-card', {}], ['hds-wp/content-card', {}]]
        })));
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
  var v1 = {
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
    edit: function edit(props) {
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
        content = createElement(Fragment, {}, title(), createElement(InnerBlocks, {
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
    },
    save: save()
  };
  registerBlockType('hds-wp/content-cards', {
    title: __('Helsinki - Content Cards', 'hds-wp'),
    edit: edit(),
    save: save(),
    deprecated: [v1],
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/content-cards.png'
      }
    }
  });
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element8 = wp.element,
    Fragment = _wp$element8.Fragment,
    useState = _wp$element8.useState,
    useEffect = _wp$element8.useEffect,
    createElement = _wp$element8.createElement;
  var _wp$blockEditor6 = wp.blockEditor,
    useBlockProps = _wp$blockEditor6.useBlockProps,
    RichText = _wp$blockEditor6.RichText;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data5 = wp.data,
    useDispatch = _wp$data5.useDispatch,
    dispatch = _wp$data5.dispatch;
  var _wp$components7 = wp.components,
    TextControl = _wp$components7.TextControl,
    Panel = _wp$components7.Panel,
    PanelBody = _wp$components7.PanelBody;
  var store = wp.notices.store;
  registerBlockType('hds-wp/diagram', {
    title: __('Helsinki - Diagram', 'hds-wp'),
    edit: edit,
    example: {
      attributes: {
        title: __('Diagram title', 'hds-wp'),
        description: __('Diagram description', 'hds-wp'),
        diagramTitle: __('Example diagram', 'hds-wp'),
        diagramDescription: __('This is a diagram.', 'hds-wp'),
        url: 'https://app.powerbi.com/view?r=eyJrIjoiMjI5OWMyYTYtMGYyZi00ZjhhLWJjODMtMDNhYTczMmI2YmM3IiwidCI6IjNmZWI2YmMxLWQ3MjItNDcyNi05NjZjLTViNThiNjRkZjc1MiIsImMiOjh9',
        assistiveTitle: __('Diagram title', 'hds-wp')
      }
    }
  });
  function createControlsPanel(_ref12, children) {
    var title = _ref12.title,
      initialOpen = _ref12.initialOpen;
    return createElement(Panel, {}, createElement(PanelBody, {
      title: title,
      initialOpen: initialOpen
    }, children));
  }
  function inspectorControls(_ref13) {
    var attributes = _ref13.attributes,
      setAttributes = _ref13.setAttributes,
      urlError = _ref13.urlError,
      setUrlError = _ref13.setUrlError,
      assistiveTitleError = _ref13.assistiveTitleError,
      setAssistiveTitleError = _ref13.setAssistiveTitleError;
    var assistiveTitle = attributes.assistiveTitle,
      url = attributes.url;
    var diagramUrlHelp = function diagramUrlHelp() {
      return createElement('div', {
        style: {
          color: 'grey',
          marginBottom: '1rem'
        }
      }, createElement('small', {}, __('Add diagram url from:', 'hds-wp'), createElement('br', {}), createElement('a', {
        href: 'https://app.powerbi.com/',
        target: '_blank'
      }, 'app.powerbi.com')));
    };
    var isPowerBI = function isPowerBI(value) {
      return value === null || value === void 0 ? void 0 : value.includes('app.powerbi.com');
    };
    var saveDiagramUrl = function saveDiagramUrl(value) {
      if (isPowerBI(value)) {
        setAttributes({
          url: value
        });
        setUrlError(false);
      } else {
        setUrlError(true);
      }
    };
    var saveAssistiveTitle = function saveAssistiveTitle(value) {
      setAttributes({
        assistiveTitle: value
      });
      setAssistiveTitleError(value ? false : true);
    };
    var inspectorErrorNotice = function inspectorErrorNotice(enabled, text) {
      if (enabled) {
        return createElement('div', {
          className: 'inspector-errornotice'
        }, text);
      }
    };
    return createElement(InspectorControls, {}, createControlsPanel({
      title: __('Accessibility', 'hds-wp'),
      initialOpen: true
    }, [createElement(TextControl, {
      className: 'is-required',
      label: __('Assistive title', 'hds-wp'),
      value: assistiveTitle,
      onChange: saveAssistiveTitle,
      required: true
    }), inspectorErrorNotice(assistiveTitleError, __('Please enter assistive technology title', 'hds-wp'))]), createControlsPanel({
      title: __('Source', 'hds-wp'),
      initialOpen: true
    }, [createElement(TextControl, {
      className: 'is-required',
      label: __('Diagram URL', 'hds-wp'),
      value: url,
      onChange: saveDiagramUrl,
      required: true
    }), inspectorErrorNotice(urlError, __('Please enter a valid diagram URL', 'hds-wp')), diagramUrlHelp()]));
  }
  function createRequiredError(handler, title, name, clientId) {
    handler([__('Helsinki - Diagram', 'hds-wp'), title].join(': '), {
      type: 'default',
      id: [name, clientId].join('-'),
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
  }
  function editBlockTitle(_ref14) {
    var attributes = _ref14.attributes,
      setAttributes = _ref14.setAttributes;
    return createElement(RichText, {
      tagName: 'h2',
      value: attributes.title,
      placeholder: __('Title', 'hds-wp'),
      allowedFormats: [],
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        });
      }
    });
  }
  function editBlockDescription(_ref15) {
    var attributes = _ref15.attributes,
      setAttributes = _ref15.setAttributes;
    return createElement(RichText, {
      tagName: 'p',
      value: attributes.description,
      placeholder: __('Description', 'hds-wp'),
      allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/paragraph'],
      onChange: function onChange(value) {
        return setAttributes({
          description: value
        });
      }
    });
  }
  function editEmbedTitle(_ref16) {
    var attributes = _ref16.attributes,
      setAttributes = _ref16.setAttributes;
    return createElement(RichText, {
      tagName: 'h3',
      value: attributes.diagramTitle,
      placeholder: __('Diagram title', 'hds-wp'),
      allowedFormats: [],
      onChange: function onChange(value) {
        return setAttributes({
          diagramTitle: value
        });
      }
    });
  }
  function embedFigure(props) {
    if (props.attributes.url) {
      return createElement('figure', {
        className: 'wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9'
      }, embedPreview(props), editEmbedCaption(props));
    }
  }
  function embedPreview(_ref17) {
    var attributes = _ref17.attributes;
    return createElement('div', {
      className: 'wp-block-embed__wrapper'
    }, createElement('iframe', {
      src: attributes.url,
      title: attributes.assistiveTitle || attributes.title,
      scrolling: 'no'
    }));
  }
  function editEmbedCaption(props) {
    return createElement('figcaption', {}, editEmbedDescription(props));
  }
  function editEmbedDescription(_ref18) {
    var attributes = _ref18.attributes,
      setAttributes = _ref18.setAttributes;
    return createElement(RichText, {
      tagName: 'span',
      value: attributes.diagramDescription,
      placeholder: __('Diagram description', 'hds-wp'),
      allowedFormats: [],
      onChange: function onChange(value) {
        return setAttributes({
          diagramDescription: value
        });
      }
    });
  }
  function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
    var assistiveTitle = attributes.assistiveTitle,
      url = attributes.url;
    var blockProps = useBlockProps({});
    var _useState11 = useState(url ? false : true),
      _useState12 = _slicedToArray(_useState11, 2),
      urlError = _useState12[0],
      setUrlError = _useState12[1];
    var _useState13 = useState(assistiveTitle ? false : true),
      _useState14 = _slicedToArray(_useState13, 2),
      assistiveTitleError = _useState14[0],
      setAssistiveTitleError = _useState14[1];
    var _useDispatch = useDispatch(store),
      createErrorNotice = _useDispatch.createErrorNotice,
      removeNotice = _useDispatch.removeNotice;
    useEffect(function () {
      if (clientId) {
        setAttributes({
          blockId: clientId
        });
      }
    }, []);
    useEffect(function () {
      if (url) {
        dispatch('core/notices').removeNotice('urlError-' + clientId);
      } else {
        createRequiredError(createErrorNotice, __('Please enter a valid diagram URL', 'hds-wp'), 'urlError', clientId);
      }
    }, [urlError]);
    useEffect(function () {
      if (assistiveTitle) {
        dispatch('core/notices').removeNotice('assistiveTitleError-' + clientId);
      } else {
        createRequiredError(createErrorNotice, __('Please enter assistive technology title', 'hds-wp'), 'assistiveTitleError', clientId);
      }
    }, [assistiveTitleError]);
    return createElement(Fragment, {}, inspectorControls({
      attributes: attributes,
      setAttributes: setAttributes,
      urlError: urlError,
      setUrlError: setUrlError,
      assistiveTitleError: assistiveTitleError,
      setAssistiveTitleError: setAssistiveTitleError
    }), createElement('div', useBlockProps(), createElement('div', {
      className: 'hds-diagram'
    }, createElement('div', {
      className: 'hds-container'
    }, editBlockTitle(props), editBlockDescription(props), editEmbedTitle(props), embedFigure(props)))));
  }
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element9 = wp.element,
    Fragment = _wp$element9.Fragment,
    createElement = _wp$element9.createElement;
  var _wp$blockEditor7 = wp.blockEditor,
    useBlockProps = _wp$blockEditor7.useBlockProps,
    BlockControls = _wp$blockEditor7.BlockControls,
    InnerBlocks = _wp$blockEditor7.InnerBlocks;
  var _wp$components8 = wp.components,
    ToolbarGroup = _wp$components8.ToolbarGroup,
    ToolbarButton = _wp$components8.ToolbarButton,
    Button = _wp$components8.Button;
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
    return hdsContentButton({
      buttonText: props.attributes.buttonText,
      buttonUrl: props.attributes.buttonUrl
    }, {
      className: 'content__link hds-button hds-button--primary',
      href: props.attributes.buttonUrl
    });
  }
  function deprecatedContentButton(props) {
    return hdsContentButton({
      buttonText: props.attributes.buttonText,
      buttonUrl: props.attributes.buttonUrl
    }, {
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
    title: __('Helsinki - Image Banner', 'hds-wp'),
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
  var _wp$element0 = wp.element,
    Fragment = _wp$element0.Fragment,
    createElement = _wp$element0.createElement;
  var _wp$blockEditor8 = wp.blockEditor,
    useBlockProps = _wp$blockEditor8.useBlockProps,
    BlockControls = _wp$blockEditor8.BlockControls,
    InnerBlocks = _wp$blockEditor8.InnerBlocks;
  var _wp$components9 = wp.components,
    ToolbarGroup = _wp$components9.ToolbarGroup,
    ToolbarButton = _wp$components9.ToolbarButton,
    Button = _wp$components9.Button;
  function toolbar(props) {
    return createElement(BlockControls, {
      key: 'controls'
    }, createElement(ToolbarGroup, {}, hdsMediaUpload(props.attributes.mediaId, function (media) {
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
    return hdsContentButton({
      buttonText: props.attributes.buttonText,
      buttonUrl: props.attributes.buttonUrl
    }, {
      className: 'content__link hds-button',
      href: props.attributes.buttonUrl
    });
  }
  function contentProps(_ref19) {
    var _attributes$className;
    var attributes = _ref19.attributes;
    var names = ['content'];
    var style = attributes !== null && attributes !== void 0 && (_attributes$className = attributes.className) !== null && _attributes$className !== void 0 && _attributes$className.includes('is-style-primary-color') ? 'primary' : 'secondary';
    names.push("has-".concat(style, "-background-color"), "has-".concat(style, "-content-color"));
    return {
      className: names.join(' ')
    };
  }
  function edit() {
    return function (props) {
      if (props.attributes.preview) {
        return createElement('img', {
          src: props.attributes.preview
        });
      }
      var content = null;
      if (props.isSelected) {
        content = createElement(Fragment, {}, toolbar(props), hdsInspectorControls({
          title: __('Content', 'hds-wp'),
          initialOpen: false
        }, hdsButtonTextControl(props), hdsButtonUrlControl(props), hdsTargetBlankControl(props, {
          help: createElement('p', {}, __('I have made sure that the description of this link clearly states that it opens in a new tab. ', 'hds-wp'), createElement('a', {
            href: 'https://www.w3.org/WAI/WCAG21/Techniques/general/G200.html',
            target: '_blank'
          }, __('Check WCGA 3.2.5 accessibility requirements (the link opens in a new tab).', 'hds-wp')))
        })), createElement('div', {
          className: 'image-text--wrapper'
        }, hdsSingleImage(imageConfig(props)), createElement('div', contentProps(props), hdsContentTitleRich(props, {
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
      }), hdsSingleImage(imageConfig(props)), createElement('div', contentProps(props), hdsContentTitle(props), hdsContentText(props), hdsContentButton({
        buttonText: props.attributes.buttonText,
        buttonUrl: props.attributes.buttonUrl
      }, {
        className: 'content__link hds-button',
        href: props.attributes.buttonUrl
      }, props.attributes.isExternalUrl ? hdsDeprecatedExternalLinkIcon() : hdsDeprecatedArrowIcon())));
    }
  };
  registerBlockType('hds-wp/image-text', {
    title: __('Helsinki - Image & Text', 'hds-wp'),
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
  var _wp$element1 = wp.element,
    Fragment = _wp$element1.Fragment,
    createElement = _wp$element1.createElement,
    useState = _wp$element1.useState,
    useEffect = _wp$element1.useEffect;
  var _wp$blockEditor9 = wp.blockEditor,
    useBlockProps = _wp$blockEditor9.useBlockProps,
    BlockControls = _wp$blockEditor9.BlockControls,
    InnerBlocks = _wp$blockEditor9.InnerBlocks,
    RichText = _wp$blockEditor9.RichText,
    InspectorControls = _wp$blockEditor9.InspectorControls;
  var _wp$data6 = wp.data,
    select = _wp$data6.select,
    useSelect = _wp$data6.useSelect,
    useDispatch = _wp$data6.useDispatch,
    dispatch = _wp$data6.dispatch,
    subscribe = _wp$data6.subscribe;
  var _wp$components0 = wp.components,
    ToolbarGroup = _wp$components0.ToolbarGroup,
    ToolbarButton = _wp$components0.ToolbarButton,
    Button = _wp$components0.Button,
    ToggleControl = _wp$components0.ToggleControl,
    TextControl = _wp$components0.TextControl,
    Notice = _wp$components0.Notice;
  var store = wp.notices.store;
  var PostSearch = hdsSearchPostsTextControl();
  function removePostButton(props) {
    return hdsRemovePostControl({
      text: wp.i18n.__('Detach post', 'hds-wp')
    }, props);
  }
  registerBlockType('hds-wp/link-list-card-link', {
    title: __('Helsinki - Link List Card Link', 'hds-wp'),
    edit: edit,
    example: {
      attributes: {
        title: __('This is the link\'s title', 'hds-wp')
      }
    }
  });
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
  function titleText(props) {
    return hdsTextControl({
      label: wp.i18n.__('Link text', 'hds-wp'),
      value: props.attributes.linkTitle,
      attribute: 'linkTitle'
    }, props);
  }
  function urlText(props) {
    return hdsTextControl({
      label: wp.i18n.__('Link URL', 'hds-wp'),
      value: props.attributes.linkUrl,
      attribute: 'linkUrl'
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
    } else {
      controls.push(titleText);
      controls.push(urlText);
      controls.push(hdsTargetBlankControl);
    }
    return hdsInspectorControls({
      title: __('Settings', 'hds-wp'),
      initialOpen: true
    }, controls.map(function (control) {
      return hdsPanelRow({}, createElement(control, props));
    }));
  }
  function placeholder(props) {
    var title = props.attributes.linkTitle ? props.attributes.linkTitle : __('Helsinki - Link', 'hds-wp');
    if (props.attributes.linkDir == 'internal' && props.attributes.postId != 0) {
      title = props.attributes.postTitle ? props.attributes.postTitle : __('Helsinki - Link', 'hds-wp');
    }
    return /*#__PURE__*/React.createElement("li", {
      class: "hds-links-list-card__list-item"
    }, /*#__PURE__*/React.createElement("a", useBlockProps({
      className: 'link'
    }), title));
  }
  function updateParentAttributes(clientId) {
    //update parent "links" and grandparent "cards" attributes
    var parentClientId = select('core/block-editor').getBlockParentsByBlockName(clientId, 'hds-wp/link-list-card')[0];
    var grandParentClientId = select('core/block-editor').getBlockParentsByBlockName(parentClientId, 'hds-wp/link-list-cards')[0];
    dispatch('core/block-editor').updateBlockAttributes(parentClientId, {
      links: select('core/block-editor').getBlocks(parentClientId).map(function (block) {
        return block.attributes;
      })
    });
    dispatch('core/block-editor').updateBlockAttributes(grandParentClientId, {
      cards: select('core/block-editor').getBlocks(grandParentClientId).map(function (block) {
        return block.attributes;
      })
    });
  }
  function edit(props) {
    var blockProps = useBlockProps({});
    var _useDispatch2 = useDispatch(store),
      createErrorNotice = _useDispatch2.createErrorNotice,
      removeNotice = _useDispatch2.removeNotice;

    //limit linkTitle to 128 characters by updating the attribute
    useEffect(function () {
      if (props.attributes.linkTitle.length > 128) {
        props.setAttributes({
          linkTitle: props.attributes.linkTitle.substring(0, 128)
        });
      }
    }, [props.attributes.linkTitle]);
    updateParentAttributes(props.clientId);
    return /*#__PURE__*/React.createElement(Fragment, null, placeholder(props), panelControls(props));
  }
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element10 = wp.element,
    Fragment = _wp$element10.Fragment,
    createElement = _wp$element10.createElement,
    useState = _wp$element10.useState,
    useEffect = _wp$element10.useEffect;
  var _wp$blockEditor0 = wp.blockEditor,
    useBlockProps = _wp$blockEditor0.useBlockProps,
    useInnerBlocksProps = _wp$blockEditor0.useInnerBlocksProps,
    BlockControls = _wp$blockEditor0.BlockControls,
    InnerBlocks = _wp$blockEditor0.InnerBlocks,
    RichText = _wp$blockEditor0.RichText,
    InspectorControls = _wp$blockEditor0.InspectorControls;
  var _wp$data7 = wp.data,
    select = _wp$data7.select,
    useSelect = _wp$data7.useSelect,
    useDispatch = _wp$data7.useDispatch,
    dispatch = _wp$data7.dispatch,
    subscribe = _wp$data7.subscribe;
  var _wp$components1 = wp.components,
    ToolbarGroup = _wp$components1.ToolbarGroup,
    ToolbarButton = _wp$components1.ToolbarButton,
    Button = _wp$components1.Button,
    ToggleControl = _wp$components1.ToggleControl,
    TextControl = _wp$components1.TextControl,
    Notice = _wp$components1.Notice;
  var store = wp.notices.store;
  registerBlockType('hds-wp/link-list-card', {
    title: __('Helsinki - Link List Card', 'hds-wp'),
    edit: edit,
    save: save,
    example: {
      attributes: {
        title: __('This is the card\'s title', 'hds-wp')
      }
    }
  });
  function updateParentAttributes(clientId) {
    var parent = select('core/block-editor').getBlocksByClientId(select('core/block-editor').getBlockHierarchyRootClientId(clientId))[0];
    dispatch('core/block-editor').updateBlockAttributes(parent.clientId, {
      cards: select('core/block-editor').getBlocks(parent.clientId).map(function (block) {
        return block.attributes;
      })
    });
  }
  function edit(_ref20) {
    var attributes = _ref20.attributes,
      setAttributes = _ref20.setAttributes,
      clientId = _ref20.clientId,
      isSelected = _ref20.isSelected;
    var blockProps = useBlockProps({});
    var _useInnerBlocksProps = useInnerBlocksProps(_objectSpread(_objectSpread({}, blockProps), {}, {
        className: 'hds-links-list-card__list',
        template: [['hds-wp/link-list-card-link'], ['hds-wp/link-list-card-link'], ['hds-wp/link-list-card-link']],
        templateLock: false
      })),
      children = _useInnerBlocksProps.children,
      innerBlocksProps = _objectWithoutProperties(_useInnerBlocksProps, _excluded);
    var _useState15 = useState(attributes.title ? false : true),
      _useState16 = _slicedToArray(_useState15, 2),
      titleError = _useState16[0],
      setTitleError = _useState16[1];
    var _useState17 = useState(attributes.title.length < 65 ? false : true),
      _useState18 = _slicedToArray(_useState17, 2),
      titleLengthError = _useState18[0],
      setTitleLengthError = _useState18[1];
    var _useState19 = useState(
      //there must be at least one link and three links maximum
      attributes.links.length > 0 && attributes.links.length < 4 ? false : true),
      _useState20 = _slicedToArray(_useState19, 2),
      linksError = _useState20[0],
      setLinksError = _useState20[1];
    var isParentOfSelectedBlock = useSelect(function (selectFrom) {
      return select('core/block-editor').hasSelectedInnerBlock(clientId, true);
    });
    var _useDispatch3 = useDispatch(store),
      createErrorNotice = _useDispatch3.createErrorNotice,
      removeNotice = _useDispatch3.removeNotice;
    updateParentAttributes(clientId);

    // Check if title is set, if not, show error notice
    useEffect(function () {
      var title = attributes.title;
      if (!title) {
        createErrorNotice(__('Helsinki - Link List Card', 'hds-wp') + ': ' + __('Please enter a title', 'hds-wp'), {
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
    }, [titleError]);

    // Check if title is too long, if so, show error notice
    useEffect(function () {
      var title = attributes.title;
      if (title.length > 64) {
        createErrorNotice(__('Helsinki - Link List Card', 'hds-wp') + ': ' + __('Please limit the title to 64 characters', 'hds-wp'), {
          type: 'default',
          id: 'titleLengthError-' + clientId,
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
        dispatch('core/notices').removeNotice('titleLengthError-' + clientId);
      }
    }, [titleLengthError]);

    // Check if the amount of links is in the allowed range
    useEffect(function () {
      var links = attributes.links;
      if (links.length < 1 || links.length > 3) {
        createErrorNotice(__('Helsinki - Link List Card', 'hds-wp') + ': ' + __('Please add between 1 and 3 links', 'hds-wp'), {
          type: 'default',
          id: 'linksError-' + clientId,
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
        dispatch('core/notices').removeNotice('linksError-' + clientId);
      }
    }, [linksError]);

    //if block or it's innerblock is not selected, map innerblocks attributes to links
    useEffect(function () {
      var innerBlocks = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
      var links = innerBlocks.map(function (block) {
        return block.attributes;
      });
      setAttributes({
        links: links
      });
    }, [isSelected, isParentOfSelectedBlock]);

    //if links are updated, check if the amount of links is in the allowed range
    useEffect(function () {
      setLinksError(attributes.links.length > 0 && attributes.links.length < 4 ? false : true);
    }, [attributes]);
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(RichText, {
      tagName: "h3",
      className: "hds-links-list-card__title",
      value: attributes.title,
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        }), setTitleError(value ? false : true), setTitleLengthError(value.length < 65 ? false : true);
      },
      placeholder: __('This is the title', 'hds-wp') + '*',
      allowedFormats: []
    }), /*#__PURE__*/React.createElement("div", {
      className: "hds-links-list-card__links"
    }, /*#__PURE__*/React.createElement("ul", innerBlocksProps, children))));
  }
  function save() {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InnerBlocks.Content, null));
  }
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element11 = wp.element,
    Fragment = _wp$element11.Fragment,
    createElement = _wp$element11.createElement,
    useState = _wp$element11.useState,
    useEffect = _wp$element11.useEffect;
  var _wp$blockEditor1 = wp.blockEditor,
    useBlockProps = _wp$blockEditor1.useBlockProps,
    useInnerBlocksProps = _wp$blockEditor1.useInnerBlocksProps,
    BlockControls = _wp$blockEditor1.BlockControls,
    InnerBlocks = _wp$blockEditor1.InnerBlocks,
    RichText = _wp$blockEditor1.RichText,
    InspectorControls = _wp$blockEditor1.InspectorControls;
  var _wp$data8 = wp.data,
    select = _wp$data8.select,
    useSelect = _wp$data8.useSelect,
    useDispatch = _wp$data8.useDispatch,
    dispatch = _wp$data8.dispatch,
    subscribe = _wp$data8.subscribe;
  var _wp$components10 = wp.components,
    ToolbarGroup = _wp$components10.ToolbarGroup,
    ToolbarButton = _wp$components10.ToolbarButton,
    Button = _wp$components10.Button,
    ToggleControl = _wp$components10.ToggleControl,
    TextControl = _wp$components10.TextControl,
    Notice = _wp$components10.Notice;
  var store = wp.notices.store;
  registerBlockType('hds-wp/link-list-cards', {
    title: __('Helsinki - Link List Cards', 'hds-wp'),
    edit: edit,
    save: save,
    example: {
      attributes: {
        preview: hds_wp.blocksUrl + '/previews/link-list-cards.png'
      }
    }
  });
  function edit(_ref21) {
    var attributes = _ref21.attributes,
      setAttributes = _ref21.setAttributes,
      clientId = _ref21.clientId,
      isSelected = _ref21.isSelected;
    var blockProps = useBlockProps({});
    var innerBlocksProps = useInnerBlocksProps(_objectSpread(_objectSpread({}, blockProps), {}, {
      className: 'hds-links-list-cards__cards',
      template: [['hds-wp/link-list-card']],
      templateLock: false
    }));
    var _useState21 = useState(attributes.title ? false : true),
      _useState22 = _slicedToArray(_useState21, 2),
      titleError = _useState22[0],
      setTitleError = _useState22[1];
    var _useState23 = useState(
      //there must be at least one card and four cards maximum
      attributes.cards.length > 0 && attributes.cards.length < 5 ? false : true),
      _useState24 = _slicedToArray(_useState23, 2),
      cardsError = _useState24[0],
      setCardsError = _useState24[1];
    var isParentOfSelectedBlock = useSelect(function (selectFrom) {
      return select('core/block-editor').hasSelectedInnerBlock(clientId, true);
    });
    var _useDispatch4 = useDispatch(store),
      createErrorNotice = _useDispatch4.createErrorNotice,
      removeNotice = _useDispatch4.removeNotice;
    if (attributes.preview) {
      return /*#__PURE__*/React.createElement("img", {
        src: attributes.preview
      });
    }

    // Check if title is set, if not, show error notice
    useEffect(function () {
      var title = attributes.title;
      if (!title) {
        createErrorNotice(__('Helsinki - Link List Cards', 'hds-wp') + ': ' + __('Please enter a title', 'hds-wp'), {
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
    }, [titleError]);

    // Check if the amount of cards is in the allowed range
    useEffect(function () {
      var cards = attributes.cards;
      if (cards.length < 1 || cards.length > 4) {
        createErrorNotice(__('Helsinki - Link List Cards', 'hds-wp') + ': ' + __('Please add between 1 and 4 cards', 'hds-wp'), {
          type: 'default',
          id: 'cardsError-' + clientId,
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
        dispatch('core/notices').removeNotice('cardsError-' + clientId);
      }
    }, [cardsError]);

    //if block or it's innerblock is not selected, map innerblocks attributes to cards
    useEffect(function () {
      var innerBlocks = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
      var cards = innerBlocks.map(function (block) {
        return block.attributes;
      });
      setAttributes({
        cards: cards
      });
    }, [isSelected, isParentOfSelectedBlock]);
    useEffect(function () {
      setCardsError(attributes.cards.length > 0 && attributes.cards.length < 5 ? false : true);
    }, [attributes]);
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(RichText, {
      tagName: "h2",
      className: "hds-links-list-cards__title",
      value: attributes.title,
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        }), setTitleError(value ? false : true);
      },
      placeholder: __('This is the title', 'hds-wp') + '*',
      allowedFormats: []
    }), /*#__PURE__*/React.createElement("div", innerBlocksProps)));
  }
  function save() {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InnerBlocks.Content, null));
  }
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element12 = wp.element,
    Fragment = _wp$element12.Fragment,
    createElement = _wp$element12.createElement;
  var _wp$blockEditor10 = wp.blockEditor,
    useBlockProps = _wp$blockEditor10.useBlockProps,
    BlockControls = _wp$blockEditor10.BlockControls;
  var _wp$data9 = wp.data,
    select = _wp$data9.select,
    dispatch = _wp$data9.dispatch;
  var _wp$components11 = wp.components,
    Button = _wp$components11.Button,
    ToolbarGroup = _wp$components11.ToolbarGroup;
  var PostSearch = hdsSearchPostsTextControl();
  function removePostButton(props) {
    return hdsRemovePostControl({
      text: __('Detach post', 'hds-wp')
    }, props);
  }
  function titleText(props) {
    return hdsTextControl({
      label: __('Link text', 'hds-wp'),
      value: props.attributes.linkTitle,
      attribute: 'linkTitle'
    }, props);
  }
  function excerptText(props) {
    return hdsTextAreaControl({
      label: __('Excerpt', 'hds-wp'),
      value: props.attributes.linkExcerpt,
      attribute: 'linkExcerpt'
    }, props);
  }
  function urlText(props) {
    return hdsTextControl({
      label: __('Link URL', 'hds-wp'),
      value: props.attributes.linkUrl,
      attribute: 'linkUrl'
    }, props);
  }
  function linkDirectionControl(props) {
    return hdsRadioControl({
      label: __('Link type', 'hds-wp'),
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
    var isInternalLink = 'internal' === props.attributes.linkDir;
    var hasPostId = 0 !== props.attributes.postId;
    controls.push(linkDirectionControl);
    switch (linkType) {
      case 'title':
        if (isInternalLink) {
          controls.push(PostSearch);
          if (hasPostId) {
            controls.push(removePostButton);
          }
        } else {
          controls.push(titleText);
          controls.push(urlText);
          controls.push(hdsTargetBlankControl);
        }
        break;
      case 'title-excerpt':
        if (isInternalLink) {
          controls.push(PostSearch);
          if (hasPostId) {
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
        if (isInternalLink) {
          controls.push(PostSearch);
          if (hasPostId) {
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
    var isInternalLink = 'internal' === props.attributes.linkDir,
      hasPostId = 0 !== props.attributes.postId;
    var title = props.attributes.linkTitle ? props.attributes.linkTitle : __('Helsinki - Link', 'hds-wp');
    if (isInternalLink && hasPostId) {
      title = props.attributes.postTitle ? props.attributes.postTitle : __('Helsinki - Link', 'hds-wp');
    }
    var parts = [createElement('h3', {
      className: 'link___title'
    }, title)];
    if (linkType === 'title-excerpt' && isInternalLink && hasPostId && props.attributes.postExcerpt) {
      var excerptWrapper = document.createElement("div");
      excerptWrapper.innerHTML = props.attributes.postExcerpt; //used to remove extra <p>-tags from excerpt source
      parts.push(createElement('p', {
        className: 'link___excerpt'
      }, excerptWrapper.innerText));
    } else if (linkType === 'title-excerpt' && (!isInternalLink || !hasPostId) && props.attributes.linkExcerpt) {
      parts.push(createElement('p', {
        className: 'link___excerpt'
      }, props.attributes.linkExcerpt));
    }
    return createElement('div', useBlockProps({
      className: 'link'
    }), parts);
  }
  function toolbar(props, linkType) {
    if (linkType === 'image-title') {
      return createElement(BlockControls, {
        key: 'controls'
      }, createElement(ToolbarGroup, {}, props.attributes.linkDir === 'external' ? hdsMediaUpload(props.attributes.mediaId, function (media) {
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
  function ensureValidAttributesExist(props) {
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
    return props;
  }
  function refreshParentLinksAttribute(linkClientId) {
    var parents = select('core/block-editor').getBlockParents(linkClientId);
    var directParentId = parents[parents.length - 1];
    dispatch('core/block-editor').updateBlockAttributes(directParentId, {
      links: select('core/block-editor').getBlocks(directParentId).map(function (block) {
        return block.attributes;
      })
    });
  }
  function edit() {
    return function (props) {
      var _props = props,
        context = _props.context;
      refreshParentLinksAttribute(props.clientId);
      props = ensureValidAttributesExist(props);
      return createElement(Fragment, {}, toolbar(props, context["hds-wp/linkType"]), panelControls(context["hds-wp/linkType"], props), placeholder(context["hds-wp/linkType"], props));
    };
  }
  registerBlockType('hds-wp/link', {
    title: __('Helsinki - Link', 'hds-wp'),
    edit: edit()
  });
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks7 = wp.blocks,
    registerBlockType = _wp$blocks7.registerBlockType,
    getBlockContent = _wp$blocks7.getBlockContent;
  var _wp$element13 = wp.element,
    Fragment = _wp$element13.Fragment,
    createElement = _wp$element13.createElement,
    useState = _wp$element13.useState;
  var _wp$blockEditor11 = wp.blockEditor,
    useBlockProps = _wp$blockEditor11.useBlockProps,
    BlockControls = _wp$blockEditor11.BlockControls,
    InnerBlocks = _wp$blockEditor11.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data0 = wp.data,
    select = _wp$data0.select,
    useSelect = _wp$data0.useSelect;
  var _wp$components12 = wp.components,
    ToolbarGroup = _wp$components12.ToolbarGroup,
    ToolbarButton = _wp$components12.ToolbarButton,
    Button = _wp$components12.Button,
    ToggleControl = _wp$components12.ToggleControl;
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
    var classNames = ['links', 'type-' + props.attributes.linkType, props.attributes.hasBackground ? 'has-background has-light-gray-background-color' : ''];
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
    title: __('Helsinki - Links', 'hds-wp'),
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
  var _wp$element14 = wp.element,
    Fragment = _wp$element14.Fragment,
    createElement = _wp$element14.createElement,
    useState = _wp$element14.useState,
    useEffect = _wp$element14.useEffect;
  var _wp$blockEditor12 = wp.blockEditor,
    useBlockProps = _wp$blockEditor12.useBlockProps,
    BlockControls = _wp$blockEditor12.BlockControls,
    InnerBlocks = _wp$blockEditor12.InnerBlocks,
    RichText = _wp$blockEditor12.RichText,
    InspectorControls = _wp$blockEditor12.InspectorControls;
  var _wp$data1 = wp.data,
    select = _wp$data1.select,
    useSelect = _wp$data1.useSelect,
    useDispatch = _wp$data1.useDispatch,
    dispatch = _wp$data1.dispatch,
    subscribe = _wp$data1.subscribe;
  var _wp$components13 = wp.components,
    ToolbarGroup = _wp$components13.ToolbarGroup,
    ToolbarButton = _wp$components13.ToolbarButton,
    Button = _wp$components13.Button,
    ToggleControl = _wp$components13.ToggleControl,
    TextControl = _wp$components13.TextControl,
    Notice = _wp$components13.Notice;
  var store = wp.notices.store;
  registerBlockType('hds-wp/map', {
    title: __('Helsinki - Map embed', 'hds-wp'),
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
  function edit(_ref22) {
    var attributes = _ref22.attributes,
      setAttributes = _ref22.setAttributes,
      clientId = _ref22.clientId;
    var blockProps = useBlockProps({});
    var _useState25 = useState(attributes.title ? false : true),
      _useState26 = _slicedToArray(_useState25, 2),
      titleError = _useState26[0],
      setTitleError = _useState26[1];
    var _useState27 = useState(attributes.description ? false : true),
      _useState28 = _slicedToArray(_useState27, 2),
      descriptionError = _useState28[0],
      setDescriptionError = _useState28[1];
    var _useState29 = useState(attributes.url ? false : true),
      _useState30 = _slicedToArray(_useState29, 2),
      urlError = _useState30[0],
      setUrlError = _useState30[1];
    var _useState31 = useState(attributes.assistive_title ? false : true),
      _useState32 = _slicedToArray(_useState31, 2),
      assistiveTitleError = _useState32[0],
      setAssistiveTitleError = _useState32[1];
    var _useDispatch5 = useDispatch(store),
      createErrorNotice = _useDispatch5.createErrorNotice,
      removeNotice = _useDispatch5.removeNotice;

    // Set unique block id, needed for skip link
    useEffect(function () {
      if (clientId) {
        setAttributes({
          blockId: clientId
        });
      }
    }, []);

    // Check if title is set, if not, show error notice
    useEffect(function () {
      var title = attributes.title;
      if (!title) {
        createErrorNotice(__('Helsinki - Map embed', 'hds-wp') + ': ' + __('Please enter a title', 'hds-wp'), {
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
    }, [titleError]);

    // Check if description is set, if not, show error notice
    useEffect(function () {
      var description = attributes.description;
      if (!description) {
        createErrorNotice(__('Helsinki - Map embed', 'hds-wp') + ': ' + __('Please enter a description', 'hds-wp'), {
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
    }, [descriptionError]);

    // Check if url is valid, if not, show error notice
    useEffect(function () {
      var url = attributes.url;
      if (!url) {
        createErrorNotice(__('Helsinki - Map embed', 'hds-wp') + ': ' + __('Please enter a valid map embed URL', 'hds-wp'), {
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
    }, [urlError]);

    // Check if assistive title is set, if not, show error notice
    useEffect(function () {
      var assistiveTitle = attributes.assistive_title;
      if (!assistiveTitle) {
        createErrorNotice(__('Helsinki - Map embed', 'hds-wp') + ': ' + __('Please enter assistive technology title', 'hds-wp'), {
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
      className: "hds-map has-background has-light-gray-background-color"
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
      placeholder: __('Map title', 'hds-wp') + '*',
      allowedFormats: []
    }), /*#__PURE__*/React.createElement(RichText, {
      tagName: "p",
      value: attributes.description,
      onChange: function onChange(value) {
        return setAttributes({
          description: value
        }), setDescriptionError(value ? false : true);
      },
      placeholder: __('Map description', 'hds-wp') + '*',
      allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/paragraph']
    }), attributes.url && /*#__PURE__*/React.createElement("div", {
      class: "hds-map__container"
    }, /*#__PURE__*/React.createElement("iframe", {
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
  var _wp$element15 = wp.element,
    Fragment = _wp$element15.Fragment,
    createElement = _wp$element15.createElement;
  var _wp$blockEditor13 = wp.blockEditor,
    useBlockProps = _wp$blockEditor13.useBlockProps,
    BlockControls = _wp$blockEditor13.BlockControls,
    InnerBlocks = _wp$blockEditor13.InnerBlocks;
  var _wp$components14 = wp.components,
    ToolbarGroup = _wp$components14.ToolbarGroup,
    ToolbarButton = _wp$components14.ToolbarButton,
    Button = _wp$components14.Button;
  var _wp$data10 = wp.data,
    select = _wp$data10.select,
    useSelect = _wp$data10.useSelect;
  function edit(props) {
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
        template: [['core/paragraph']]
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
  }
  function save(props) {
    return createElement(InnerBlocks.Content, useBlockProps.save());
  }
  registerBlockType('hds-wp/timeline-card', {
    title: __('Helsinki - Phasing Card', 'hds-wp'),
    edit: edit,
    save: save
  });
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var _wp$blocks9 = wp.blocks,
    registerBlockType = _wp$blocks9.registerBlockType,
    getBlockContent = _wp$blocks9.getBlockContent;
  var _wp$element16 = wp.element,
    Fragment = _wp$element16.Fragment,
    createElement = _wp$element16.createElement;
  var _wp$blockEditor14 = wp.blockEditor,
    useBlockProps = _wp$blockEditor14.useBlockProps,
    BlockControls = _wp$blockEditor14.BlockControls,
    InnerBlocks = _wp$blockEditor14.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$components15 = wp.components,
    ToolbarGroup = _wp$components15.ToolbarGroup,
    ToolbarButton = _wp$components15.ToolbarButton,
    Button = _wp$components15.Button,
    ToggleControl = _wp$components15.ToggleControl;
  var _wp$data11 = wp.data,
    select = _wp$data11.select,
    dispatch = _wp$data11.dispatch,
    useSelect = _wp$data11.useSelect;
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
    title: __('Helsinki - Phasing', 'hds-wp'),
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
  var _wp$blocks0 = wp.blocks,
    registerBlockType = _wp$blocks0.registerBlockType,
    registerBlockStyle = _wp$blocks0.registerBlockStyle,
    unregisterBlockStyle = _wp$blocks0.unregisterBlockStyle,
    getBlockContent = _wp$blocks0.getBlockContent;
  var _wp$element17 = wp.element,
    Fragment = _wp$element17.Fragment,
    createElement = _wp$element17.createElement,
    useState = _wp$element17.useState;
  var _wp$blockEditor15 = wp.blockEditor,
    useBlockProps = _wp$blockEditor15.useBlockProps,
    BlockControls = _wp$blockEditor15.BlockControls,
    InnerBlocks = _wp$blockEditor15.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data12 = wp.data,
    select = _wp$data12.select,
    useSelect = _wp$data12.useSelect;
  var _wp$components16 = wp.components,
    ToolbarGroup = _wp$components16.ToolbarGroup,
    ToolbarButton = _wp$components16.ToolbarButton,
    Button = _wp$components16.Button,
    ToggleControl = _wp$components16.ToggleControl;
  var PostCategorySelect = hdsWithPostCategorySelectControl();
  function articleCountOptions() {
    return [{
      label: 4,
      value: 4
    }, {
      label: 8,
      value: 8
    }, {
      label: 12,
      value: 12
    }, {
      label: 16,
      value: 16
    }, {
      label: 20,
      value: 20
    }, {
      label: 24,
      value: 24
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
          className: 'container__heading',
          defaultValue: __('Latest News', 'hds-wp')
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
    title: __('Helsinki - Posts', 'hds-wp'),
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
  var _wp$blocks1 = wp.blocks,
    registerBlockType = _wp$blocks1.registerBlockType,
    getBlockContent = _wp$blocks1.getBlockContent;
  var _wp$element18 = wp.element,
    Fragment = _wp$element18.Fragment,
    createElement = _wp$element18.createElement,
    useState = _wp$element18.useState;
  var _wp$blockEditor16 = wp.blockEditor,
    useBlockProps = _wp$blockEditor16.useBlockProps,
    BlockControls = _wp$blockEditor16.BlockControls,
    InnerBlocks = _wp$blockEditor16.InnerBlocks;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data13 = wp.data,
    select = _wp$data13.select,
    useSelect = _wp$data13.useSelect;
  var _wp$components17 = wp.components,
    ToolbarGroup = _wp$components17.ToolbarGroup,
    ToolbarButton = _wp$components17.ToolbarButton,
    Button = _wp$components17.Button,
    ToggleControl = _wp$components17.ToggleControl;
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
    title: __('Helsinki - RSS-feed', 'hds-wp'),
    edit: edit(),
    example: {
      viewportWidth: 1200
    }
  });
})(window.wp);
(function (wp) {
  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element19 = wp.element,
    Fragment = _wp$element19.Fragment,
    useState = _wp$element19.useState,
    useEffect = _wp$element19.useEffect,
    createElement = _wp$element19.createElement;
  var _wp$blockEditor17 = wp.blockEditor,
    useBlockProps = _wp$blockEditor17.useBlockProps,
    RichText = _wp$blockEditor17.RichText;
  var InspectorControls = wp.editor.InspectorControls;
  var _wp$data14 = wp.data,
    useDispatch = _wp$data14.useDispatch,
    dispatch = _wp$data14.dispatch;
  var _wp$components18 = wp.components,
    TextControl = _wp$components18.TextControl,
    Panel = _wp$components18.Panel,
    PanelBody = _wp$components18.PanelBody;
  var store = wp.notices.store;
  registerBlockType('hds-wp/video', {
    title: __('Helsinki - Video embed', 'hds-wp'),
    edit: edit,
    example: {
      attributes: {
        title: __('Video title', 'hds-wp'),
        description: __('Video description', 'hds-wp'),
        iframeUrl: 'https://players.icareus.com/helsinkikanava/embed/vod/154345162',
        url: 'https://players.icareus.com/helsinkikanava/embed/vod/154345162',
        assistive_title: __('Video title', 'hds-wp')
      }
    }
  });
  function createControlsPanel(_ref23, children) {
    var title = _ref23.title,
      initialOpen = _ref23.initialOpen;
    return createElement(Panel, {}, createElement(PanelBody, {
      title: title,
      initialOpen: initialOpen
    }, children));
  }
  function inspectorControls(_ref24) {
    var attributes = _ref24.attributes,
      setAttributes = _ref24.setAttributes,
      urlError = _ref24.urlError,
      setUrlError = _ref24.setUrlError,
      assistiveTitleError = _ref24.assistiveTitleError,
      setAssistiveTitleError = _ref24.setAssistiveTitleError;
    var assistive_title = attributes.assistive_title,
      url = attributes.url;
    var videoUrlHelp = function videoUrlHelp() {
      return createElement('div', {
        style: {
          color: 'grey',
          marginBottom: '1rem'
        }
      }, createElement('small', {}, __('Add video url from:', 'hds-wp'), createElement('br', {}), createElement('a', {
        href: 'https://youtube.com',
        target: '_blank'
      }, 'youtube.com'), createElement('br', {}), createElement('a', {
        href: 'https://helsinkikanava.fi',
        target: '_blank'
      }, 'helsinkikanava.fi')));
    };
    var isYouTube = function isYouTube(value) {
      return value.includes('youtube.com') || isShortYouTube(value);
    };
    var isShortYouTube = function isShortYouTube(value) {
      return value.includes('youtu.be');
    };
    var isHelsinkiKanava = function isHelsinkiKanava(value) {
      return value.includes('helsinkikanava.fi') || value.includes('players.icareus.com') && value.includes('/helsinkikanava/');
    };
    var formatIframeUrl = function formatIframeUrl(value) {
      if (isYouTube(value)) {
        return isShortYouTube(value) ? value.replace('https://youtu.be/', 'https://www.youtube.com/embed/') : value.replace('watch?v=', 'embed/');
      }
      if (isHelsinkiKanava(value)) {
        return value.replace('player/vod', 'player/embed/vod');
      }
      return '';
    };
    var saveVideoUrl = function saveVideoUrl(value) {
      setAttributes({
        url: value,
        iframeUrl: formatIframeUrl(value)
      });
      setUrlError(!isYouTube(value) && !isHelsinkiKanava(value));
    };
    var saveAssistiveTitle = function saveAssistiveTitle(value) {
      setAttributes({
        assistive_title: value
      });
      setAssistiveTitleError(value ? false : true);
    };
    var inspectorErrorNotice = function inspectorErrorNotice(enabled, text) {
      if (enabled) {
        return createElement('div', {
          className: 'inspector-errornotice'
        }, text);
      }
    };
    return createElement(InspectorControls, {}, createControlsPanel({
      title: __('Accessibility', 'hds-wp'),
      initialOpen: true
    }, [createElement(TextControl, {
      className: 'is-required',
      label: __('Assistive title', 'hds-wp'),
      value: assistive_title,
      onChange: saveAssistiveTitle,
      required: true
    }), inspectorErrorNotice(assistiveTitleError, __('Please enter assistive technology title', 'hds-wp'))]), createControlsPanel({
      title: __('Source', 'hds-wp'),
      initialOpen: true
    }, [createElement(TextControl, {
      className: 'is-required',
      label: __('Video URL', 'hds-wp'),
      value: url,
      onChange: saveVideoUrl,
      required: true
    }), inspectorErrorNotice(urlError, __('Please enter a valid video URL', 'hds-wp')), videoUrlHelp()]));
  }
  function createRequiredError(handler, title, name, clientId) {
    handler([__('Helsinki - Video embed', 'hds-wp'), title].join(': '), {
      type: 'default',
      id: [name, clientId].join('-'),
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
  }
  function editBlockTitle(_ref25) {
    var attributes = _ref25.attributes,
      setAttributes = _ref25.setAttributes;
    return createElement(RichText, {
      tagName: 'h2',
      value: attributes.title,
      placeholder: __('Title', 'hds-wp'),
      allowedFormats: [],
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        });
      }
    });
  }
  function editBlockDescription(_ref26) {
    var attributes = _ref26.attributes,
      setAttributes = _ref26.setAttributes;
    return createElement(RichText, {
      tagName: 'p',
      value: attributes.description,
      placeholder: __('Description', 'hds-wp'),
      allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/paragraph'],
      onChange: function onChange(value) {
        return setAttributes({
          description: value
        });
      }
    });
  }
  function editVideoTitle(_ref27) {
    var attributes = _ref27.attributes,
      setAttributes = _ref27.setAttributes;
    return createElement(RichText, {
      tagName: 'h3',
      value: attributes.videoTitle,
      placeholder: __('Video title', 'hds-wp'),
      allowedFormats: [],
      onChange: function onChange(value) {
        return setAttributes({
          videoTitle: value
        });
      }
    });
  }
  function videoFigure(props) {
    if (props.attributes.iframeUrl) {
      return createElement('figure', {
        className: 'wp-block-embed wp-has-aspect-ratio wp-embed-aspect-16-9'
      }, videoEmbedPreview(props), editVideoCaption(props));
    }
  }
  function videoEmbedPreview(_ref28) {
    var attributes = _ref28.attributes;
    return createElement('div', {
      className: 'wp-block-embed__wrapper'
    }, createElement('iframe', {
      src: attributes.iframeUrl,
      title: attributes.assistive_title || attributes.title,
      scrolling: 'no'
    }));
  }
  function editVideoCaption(props) {
    return createElement('figcaption', {}, editVideoDescription(props));
  }
  function editVideoDescription(_ref29) {
    var attributes = _ref29.attributes,
      setAttributes = _ref29.setAttributes;
    return createElement(RichText, {
      tagName: 'span',
      value: attributes.videoDescription,
      placeholder: __('Video description and credits', 'hds-wp'),
      allowedFormats: [],
      onChange: function onChange(value) {
        return setAttributes({
          videoDescription: value
        });
      }
    });
  }
  function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
    var assistive_title = attributes.assistive_title,
      url = attributes.url;
    var blockProps = useBlockProps({});
    var _useState33 = useState(url ? false : true),
      _useState34 = _slicedToArray(_useState33, 2),
      urlError = _useState34[0],
      setUrlError = _useState34[1];
    var _useState35 = useState(assistive_title ? false : true),
      _useState36 = _slicedToArray(_useState35, 2),
      assistiveTitleError = _useState36[0],
      setAssistiveTitleError = _useState36[1];
    var _useDispatch6 = useDispatch(store),
      createErrorNotice = _useDispatch6.createErrorNotice,
      removeNotice = _useDispatch6.removeNotice;

    // Set unique block id, needed for skip link
    useEffect(function () {
      if (clientId) {
        setAttributes({
          blockId: clientId
        });
      }
    }, []);

    // Check if url is valid, if not, show error notice
    useEffect(function () {
      if (url) {
        dispatch('core/notices').removeNotice('urlError-' + clientId);
      } else {
        createRequiredError(createErrorNotice, __('Please enter a valid video URL', 'hds-wp'), 'urlError', clientId);
      }
    }, [urlError]);

    // Check if assistive title is set, if not, show error notice
    useEffect(function () {
      if (assistive_title) {
        dispatch('core/notices').removeNotice('assistiveTitleError-' + clientId);
      } else {
        createRequiredError(createErrorNotice, __('Please enter assistive technology title', 'hds-wp'), 'assistiveTitleError', clientId);
      }
    }, [assistiveTitleError]);
    return createElement(Fragment, {}, inspectorControls({
      attributes: attributes,
      setAttributes: setAttributes,
      urlError: urlError,
      setUrlError: setUrlError,
      assistiveTitleError: assistiveTitleError,
      setAssistiveTitleError: setAssistiveTitleError
    }), createElement('div', useBlockProps(), createElement('div', {
      className: 'hds-video has-background'
    }, createElement('div', {
      className: 'hds-container'
    }, editBlockTitle(props), editBlockDescription(props), editVideoTitle(props), videoFigure(props)))));
  }
})(window.wp);
(function (wp) {
  /*
   * Limit child blocks in column and group blocks
   *
   * Unregister and re-register blocks after all blocks have been registered
   * to make the allowedBlocks configuration properly dynamic
   *
   */
  wp.domReady(function () {
    var limitedBlocks = {
      'core/column': ['core/columns', 'core/column', 'core/gallery', 'core/group'],
      'core/group': []
    };
    var allowedBlocks = wp.blocks.getBlockTypes().map(function (block) {
      return block.name;
    }).filter(function (blockName) {
      return !blockName.startsWith('hds-wp/') && !blockName.startsWith('helsinki-');
    });
    var _loop2 = function _loop2(blockName) {
      var block = wp.blocks.getBlockType(blockName);
      wp.blocks.unregisterBlockType(blockName);
      wp.blocks.registerBlockType(blockName, _objectSpread(_objectSpread({}, block), {}, {
        variations: 'core/group' ? block.variations.filter(function (variation) {
          return variation.name === 'group';
        }) : [],
        allowedBlocks: allowedBlocks.filter(function (name) {
          return !limitedBlocks[blockName].includes(name);
        })
      }));
    };
    for (var blockName in limitedBlocks) {
      _loop2(blockName);
    }
  });
})(window.wp);
(function (wp) {
  var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
  var addFilter = wp.hooks.addFilter;
  var select = wp.data.select;
  var _wp$element20 = wp.element,
    createElement = _wp$element20.createElement,
    useEffect = _wp$element20.useEffect;
  var isHelsinkiBlockWithBlockId = function isHelsinkiBlockWithBlockId(_ref30) {
    var name = _ref30.name,
      attributes = _ref30.attributes;
    return (name.startsWith('hds-wp/') || name.startsWith('helsinki-')) && (attributes === null || attributes === void 0 ? void 0 : attributes.blockId) !== undefined;
  };
  var isBlockIdReserved = function isBlockIdReserved(blockId, clientId) {
    var blocksClientIds = select('core/block-editor').getClientIdsWithDescendants();
    return blocksClientIds.some(function (_clientId) {
      var _select$getBlockAttri = select('core/block-editor').getBlockAttributes(_clientId),
        _blockId = _select$getBlockAttri.blockId;
      return clientId !== _clientId && blockId === _blockId;
    });
  };
  var generateBlockId = function generateBlockId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 12).padStart(12, 0);
  };
  var withDuplicationDetection = createHigherOrderComponent(function (BlockEdit) {
    return function (props) {
      if (isHelsinkiBlockWithBlockId(props)) {
        var clientId = props.clientId,
          attributes = props.attributes,
          setAttributes = props.setAttributes;
        var blockId = attributes.blockId;
        var setBlockId = function setBlockId() {
          return setAttributes({
            blockId: generateBlockId()
          });
        };
        useEffect(function () {
          if (!blockId) {
            setBlockId();
          } else if (isBlockIdReserved(blockId, clientId)) {
            console.info("Block with id '".concat(blockId, "' already exists. Regenerating..."));
            setBlockId();
          }
        }, [blockId]);
      }
      return createElement(BlockEdit, props);
    };
  }, 'withDuplicationDetection');
  addFilter('editor.BlockEdit', 'hds-wp/with-duplication-detection', withDuplicationDetection);
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
      var _wp$element21 = wp.element,
        Fragment = _wp$element21.Fragment,
        createElement = _wp$element21.createElement;
      var _wp$components19 = wp.components,
        ToggleControl = _wp$components19.ToggleControl,
        Panel = _wp$components19.Panel,
        PanelBody = _wp$components19.PanelBody,
        TextControl = _wp$components19.TextControl;
      var _wp$blockEditor18 = wp.blockEditor,
        InspectorControls = _wp$blockEditor18.InspectorControls,
        BlockControls = _wp$blockEditor18.BlockControls,
        useBlockProps = _wp$blockEditor18.useBlockProps;
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
(function (_wp) {
  if ((_wp = wp) !== null && _wp !== void 0 && _wp.hooks) {
    wp.hooks.addFilter('blocks.registerBlockType', 'hds-wp/block-typography-settings', function (settings, name) {
      var _settings$supports;
      if (settings !== null && settings !== void 0 && (_settings$supports = settings.supports) !== null && _settings$supports !== void 0 && _settings$supports.typography) {
        return Object.assign({}, settings, {
          supports: Object.assign(settings.supports, {
            typography: Object.assign(settings.supports.typography, {
              __experimentalFontFamily: false
            })
          })
        });
      }
      return settings;
    }, 0);
  }
})();
wp.domReady(function () {
  /* Disable default formats */
  wp.richText.unregisterFormatType('core/text-color');
  wp.richText.unregisterFormatType('core/keyboard');
  wp.richText.unregisterFormatType('core/code');
});
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
    }

    // Otherwise, add an event that will be executed when YoastSEO will be available.
    jQuery(window).on("YoastSEO:ready", function () {
      new YoastReplaceVarPlugin(); // eslint-disable-line no-new
    });
  }
  initializeReplacevarPlugin();
})(window.wp);

//remove error notices when block is removed

(function () {
  var _wp$data15 = wp.data,
    select = _wp$data15.select,
    subscribe = _wp$data15.subscribe,
    dispatch = _wp$data15.dispatch;
  var store = wp.notices.store;
  var getBlocks = function getBlocks() {
    var blocks = [];
    var rootBlocks = select('core/block-editor').getBlocks();
    function getChildren(block) {
      var children = [];
      if (block.innerBlocks) {
        block.innerBlocks.forEach(function (innerBlock) {
          children.push(innerBlock);
        });
      }
      if (children.length > 0) {
        children.forEach(function (child) {
          blocks.push(child);
          getChildren(child);
        });
      }
    }
    rootBlocks.forEach(function (block) {
      blocks.push(block);
      getChildren(block);
    });
    return blocks;
  };
  Array.prototype.diff = function (a) {
    return this.filter(function (i) {
      return !a.some(function (item) {
        return item.clientId === i.clientId;
      });
    });
  };
  var blocksState = getBlocks();
  subscribe(_.debounce(function () {
    var notices = select(store).getNotices();
    var newBlocksState = getBlocks();

    // Lock saving if notices contain error notices
    var errorNotices = notices.filter(function (notice) {
      return notice.status === 'error';
    });
    if (errorNotices.length > 0) {
      dispatch('core/editor').lockPostSaving('requiredValueLock');
    } else {
      if (select('core/editor').isPostSavingLocked()) {
        dispatch('core/editor').unlockPostSaving('requiredValueLock');
      }
    }

    // When very last block is removed, it's replaced with a new paragraph block.
    // This is a workaround to remove the error notice.
    if (blocksState.length > newBlocksState.length || newBlocksState.length === 1 && newBlocksState[0].name === 'core/paragraph') {
      // remove newBlocksState from blocksState
      var removedBlock = blocksState.diff(newBlocksState);
      if (removedBlock.length > 0 || removedBlock[0] && removedBlock[0].name === 'core/paragraph') {
        var _getChildren = function getChildren(block) {
          var children = [];
          if (block.innerBlocks) {
            block.innerBlocks.forEach(function (innerBlock) {
              children.push(innerBlock);
            });
          }
          if (children.length > 0) {
            children.forEach(function (child) {
              clientIds.push(child.clientId);
              _getChildren(child.clientId);
            });
          }
        };
        var clientIds = [];
        removedBlock.forEach(function (block) {
          clientIds.push(block.clientId);
          _getChildren(block);
        });
        var noticesToRemove = notices.filter(function (notice) {
          return clientIds.some(function (clientId) {
            return notice.id.includes(clientId);
          });
        });
        noticesToRemove.forEach(function (notice) {
          dispatch('core/notices').removeNotice(notice.id);
        });
      }
    }
    blocksState = newBlocksState;
  }, 300));
})(window.wp);