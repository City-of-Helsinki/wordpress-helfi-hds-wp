"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function hdsAccordion() {
  'use strict';

  function SessionHandler() {
    var _panelsKey = 'helsinkiAccordionOpenPanels';
    var _exitPanelKey = 'helsinkiAccordionExitPanel';
    function _thisSave(key, data) {
      try {
        if (typeof data === 'string') {
          sessionStorage.setItem(key, data);
        } else {
          sessionStorage.setItem(key, JSON.stringify(data));
        }
        return true;
      } catch (error) {
        return false;
      }
    }
    function _thisLoad(key) {
      var data = sessionStorage.getItem(key);
      try {
        return data ? JSON.parse(data) : null;
      } catch (error) {
        return data;
      }
    }
    function _openPanels(data) {
      return data ? _thisSave(_panelsKey, data) : _thisLoad(_panelsKey);
    }
    function _exitPanel(id) {
      return id ? _thisSave(_exitPanelKey, id) : _thisLoad(_exitPanelKey);
    }
    return {
      openPanels: _openPanels,
      exitPanel: _exitPanel
    };
  }
  function Accordion(element, session) {
    var _panels = [];
    element.querySelectorAll('.accordion__section').forEach(function (section) {
      var panel = AccordionPanel(section, session);
      if (panel) {
        _panels.push(panel);
      }
    });
    function _thisFind(id) {
      id = _formatId(id);
      return id ? _panels.find(function (panel) {
        return panel.id() === id;
      }) : false;
    }
    function _thisOpen(id) {
      var _panel = _thisFind(id);
      if (_panel) {
        _panel.open();
      }
    }
    function _thisClose(id) {
      var _panel = _thisFind(id);
      if (_panel) {
        _panel.close();
      }
    }
    function _thisFocus(id) {
      var _panel = _thisFind(id);
      if (_panel) {
        _panel.open();
        _panel.toView();
        _panel.focus();
      }
    }
    function _formatId(id) {
      return typeof id === 'string' && id.startsWith('#') ? id.substring(1) : id;
    }
    return {
      panels: function panels() {
        return _panels;
      },
      open: _thisOpen,
      close: _thisClose,
      focus: _thisFocus
    };
  }
  function AccordionPanel(section, session) {
    var _panelTitle = section.querySelector('.accordion__title');
    var _panelToggle = section.querySelector('.accordion__toggle');
    var _panelContent = section.querySelector('.accordion__panel');
    var _panelClose = section.querySelector('.accordion__close');
    if (!_panelToggle || !_panelContent) {
      return;
    }
    var _id = _determineId();
    var _isOpen = _determineOpenStatus();
    _panelToggle.addEventListener('click', function (event) {
      return _isOpen ? _thisClose() : _thisOpen();
    });
    _panelContent.addEventListener('click', _sessionLinkExitPanel);
    if (_panelClose) {
      _panelClose.addEventListener('click', function (event) {
        return _thisClose() && _thisFocus();
      });
    }
    function _determineId() {
      return [_panelTitle.id, section.id, _panelToggle.id].find(function (candidateId) {
        return candidateId && candidateId !== '';
      });
    }
    function _determineOpenStatus() {
      return 'true' === _panelToggle.getAttribute('aria-expanded');
    }
    function _thisId() {
      return _id;
    }
    function _thisIsOpen() {
      return _isOpen;
    }
    function _sessionLinkExitPanel(event) {
      if (event.target.tagName.toLowerCase() === 'a') {
        session.exitPanel(_thisId());
      }
    }
    function _appendToSession() {
      if (_thisId()) {
        var openPanels = session.openPanels();
        if (Array.isArray(openPanels)) {
          session.openPanels(Array.from(new Set([].concat(_toConsumableArray(openPanels), [_thisId()]))));
        } else {
          session.openPanels([_thisId()]);
        }
      }
    }
    function _removeFromSession() {
      if (_thisId()) {
        var openPanels = session.openPanels();
        if (Array.isArray(openPanels)) {
          session.openPanels(openPanels.filter(function (panelId) {
            return panelId !== _thisId();
          }));
        }
      }
    }
    function _thisOpen() {
      _panelToggle.setAttribute('aria-expanded', 'true');
      _panelContent.removeAttribute('hidden');
      _isOpen = true;
      _appendToSession();
    }
    function _thisClose() {
      _panelToggle.setAttribute('aria-expanded', 'false');
      _panelContent.setAttribute('hidden', 'true');
      _isOpen = false;
      _removeFromSession();
    }
    function _thisFocus() {
      _panelToggle.focus();
    }
    function _thisToView() {
      _panelTitle.scrollIntoView();
    }
    return {
      id: _thisId,
      isOpen: _thisIsOpen,
      open: _thisOpen,
      close: _thisClose,
      focus: _thisFocus,
      toView: _thisToView
    };
  }
  var session = SessionHandler();
  function _init(element) {
    var accordion = Accordion(element, session);
    var openPanels = session.openPanels();
    if (Array.isArray(openPanels)) {
      openPanels.forEach(function (panelId) {
        return accordion.open(panelId);
      });
    }
    if (window.location.hash) {
      accordion.focus(window.location.hash);
    }
    var exitPanel = session.exitPanel();
    if (exitPanel) {
      accordion.focus(exitPanel);
    }
  }
  return {
    init: function init(accordions) {
      return accordions.forEach(function (element) {
        return _init(element);
      });
    }
  };
}

//saved block markup may differ so try to account for the different possibilities...
function parseAccordionElements() {
  var accordions = [];
  var elements = document.querySelectorAll('.wp-block-hds-wp-accordion');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].querySelector('.accordion')) {
      accordions.push(elements[i].querySelector('.accordion'));
    } else {
      accordions.push(elements[i]);
    }
  }
  return accordions;
}
var hdsAccordions = hdsAccordion();
hdsAccordions.init(parseAccordionElements());
(function ($) {
  $(function () {
    $('.wpcf7-form select').each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children('option').length;
      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());
      $this.click(function (e) {
        e.stopPropagation();
        if (!$this.hasClass('active')) {
          $this.toggleClass('active');
        } else {
          $this.removeClass('active');
        }
      });
      $this.find('option').click(function (e) {
        e.stopPropagation();
        if ($this.hasClass('active')) {
          $this.removeClass('active');
        }
      });
      $(document).click(function () {
        $this.removeClass('active');
      });
    });
    $('.wpcf7-form input[type=file]').each(function () {
      var $this = $(this);
      var fileInputId = $this.attr('id');
      var label = $this.siblings('label')[0];
      $this.parent().append('<ul class="file-input-list"></ul>');
      var fileList = $this.siblings('.file-input-list')[0];
      if (!fileInputId) {
        fileInputId = makeid(8);
        $this.attr('id', fileInputId);
      }
      label.setAttribute('for', fileInputId);
      label.addEventListener('focus', function (event) {
        event.preventDefault(); //for accessibility reasons
      });
      // activate using spacebar
      label.addEventListener('keydown', function (event) {
        if (event.keyCode == 32) {
          event.preventDefault();
        }
      });
      label.addEventListener('keyup', function (event) {
        if (event.keyCode == 32) {
          $this.click();
        }
      });
      $this.change(function () {
        clearFileList();
        addFileListItem(this.files[0]);
      });
      function addFileListItem(file) {
        var item = document.createElement('li');
        var attachmentIcon = document.createElement('div');
        attachmentIcon.innerHTML = hds_wp['paperclip'];
        item.appendChild(attachmentIcon.firstChild);
        var title = document.createElement('div');
        title.classList.add('file-item-title');
        var titleSpan = document.createElement('span');
        titleSpan.appendChild(document.createTextNode(file.name));
        title.appendChild(titleSpan);
        item.appendChild(title);
        var button = document.createElement('button');
        button.classList.add('hds-button', 'hds-button--supplementary');
        button.addEventListener('click', function () {
          event.preventDefault();
          $this.val('');
          clearFileList();
        });
        var crossIcon = document.createElement('div');
        crossIcon.innerHTML = hds_wp['cross'];
        button.appendChild(crossIcon.firstChild);
        var buttonSpan = document.createElement('span');
        buttonSpan.appendChild(document.createTextNode(hds_wp['remove']));
        button.appendChild(buttonSpan);
        item.appendChild(button);
        fileList.appendChild(item);
      }
      function clearFileList() {
        fileList.innerHTML = '';
      }
    });
    $('.wpcf7-form .wpcf7-response-output').each(function () {
      $(this).remove();
    });
    $('.wpcf7-form').each(function () {
      var $this = $(this);
      $this.prepend(prependNotification());
      function prependNotification() {
        var notification = document.createElement('div');
        notification.classList.add('wpcf7-response-output');
        notification.setAttribute('aria-hidden', true);
        var notificationIcons = document.createElement('div');
        notificationIcons.classList.add('wpcf7-response-label');
        notificationIcons.innerHTML = hds_wp['alert-circle'] + hds_wp['info-circle'] + hds_wp['error'] + hds_wp['check-circle'];
        var notificationWrapper = document.createElement('div');
        notificationWrapper.classList.add('wpcf7-response-hds-wrapper');
        notificationWrapper.appendChild(notificationIcons);
        notificationWrapper.appendChild(notification);
        return notificationWrapper;
      }
    });
    $('.wpcf7').each(function () {
      this.addEventListener('wpcf7submit', function (event) {
        var response = this.querySelector('.wpcf7-response-hds-wrapper');
        response.scrollIntoView({
          block: 'center'
        });
        response.focus();
      });
      this.setAttribute('lang', document.documentElement.lang);
    });
    function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  });
})(jQuery);
(function ($) {
  $(function () {
    $("select[name='cat']").each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children('option').length;
      if (!$this.hasClass('hds-text-input__input')) {
        $this.addClass('hds-text-input__input');
      }
      $this.click(function (e) {
        e.stopPropagation();
        if (!$this.hasClass('active')) {
          $this.toggleClass('active');
        } else {
          $this.removeClass('active');
        }
      });
      $this.find('option').click(function (e) {
        e.stopPropagation();
        if ($this.hasClass('active')) {
          $this.removeClass('active');
        }
      });
      $this.change(function (e) {
        e.stopPropagation();
        $this.parents('form').submit();
      });
      $(document).click(function () {
        $this.removeClass('active');
      });
    });
  });
})(jQuery);
(function ($) {
  $(function () {
    //Custom Facebook Feed
    $('.cff').each(function () {
      var $this = $(this);
      hideFeedFromScreenReaders($this);
      hideLinksFromScreenReaders($this);
      var href = $this.find('.cff-author-text a').attr('href');

      //if href not empty
      if (href) {
        $this.append('<a href="' + href + '" target="_blank" class="cff-follow-link hds-button hds-button--secondary">' + hds_wp["follow_on_facebook"] + hds_wp["external_link_icon"] + '</a>');
      }
      var ro = new ResizeObserver(function (entries) {
        hideLinksFromScreenReaders($this);
      });
      ro.observe($this[0]);
    });

    //Social wall

    $('.sb-wall').each(function () {
      var $this = $(this);
      hideLinksFromScreenReaders($this);
      var ro = new ResizeObserver(function (entries) {
        hideLinksFromScreenReaders($this);
      });
      ro.observe($this[0]);
    });

    //General Functions

    function hideLinksFromScreenReaders(element) {
      element.find('a:not(.cff-follow-link)').each(function () {
        $(this).attr('aria-hidden', 'true');
        $(this).attr('tabindex', '-1');
      });
    }
    function hideFeedFromScreenReaders(element) {
      element.find('.cff-posts-wrap, .cff-screenreader').each(function () {
        $(this).attr('aria-hidden', 'true');
      });
    }
  });
})(jQuery);