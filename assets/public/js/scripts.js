"use strict";

function hdsAccordion() {
  'use strict';

  function _open(toggle, panel) {
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true');
    }

    if (panel) {
      panel.removeAttribute('hidden');
    }
  }

  function _isOpen(toggle) {
    return 'true' === toggle.getAttribute('aria-expanded');
  }

  function _close(toggle, panel) {
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }

    if (panel) {
      panel.setAttribute('hidden', 'true');
    }
  }

  function _init(accordion) {
    var _triggers = accordion.querySelectorAll('.accordion__toggle'),
        _closeButtons = accordion.querySelectorAll('.accordion__close');

    for (var i = 0; i < _triggers.length; i++) {
      _triggers[i].addEventListener('click', function (event) {
        var _currentToggle = event.currentTarget;
        var _currentPanel = _currentToggle.parentElement.nextElementSibling;

        if (_isOpen(_currentToggle)) {
          _close(_currentToggle, _currentPanel);
        } else {
          _open(_currentToggle, _currentPanel);
        }
      });
    }

    for (var i = 0; i < _closeButtons.length; i++) {
      _closeButtons[i].addEventListener('click', function (event) {
        var _section = event.currentTarget.closest('.accordion__section'),
            _toggle = _section.querySelector('.accordion__toggle'),
            _panel = _toggle.parentElement.nextElementSibling;

        _close(_toggle, _panel);

        _toggle.focus();
      });
    }

    if (window.location.hash) {
      var _hash = window.location.hash;

      var _anchor = accordion.querySelector(_hash);

      if (_anchor) {
        var _section = _anchor.closest('.accordion__section'),
            _toggle = _section.querySelector('.accordion__toggle'),
            _panel = _toggle.parentElement.nextElementSibling;

        _open(_toggle, _panel);

        _anchor.scrollIntoView();

        _anchor.focus();
      }
    }
  }

  return {
    init: function init(accordions) {
      for (var i = 0; i < accordions.length; i++) {
        _init(accordions[i]);
      }
    }
  };
} //saved block markup may differ so try to account for the different possibilities...


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
      }); // activate using spacebar

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
    $('.cff').each(function () {
      var $this = $(this);
      hideFeedFromScreenReaders($this);
      hideLinksFromScreenReaders($this);
      var href = $this.find('.cff-author-text a').attr('href'); //if href not empty

      if (href) {
        $this.append('<a href="' + href + '" target="_blank" class="cff-follow-link hds-button hds-button--secondary">' + hds_wp["follow_on_facebook"] + hds_wp["external_link_icon"] + '</a>');
      }

      var ro = new ResizeObserver(function (entries) {
        hideLinksFromScreenReaders($this);
      });
      ro.observe($this[0]);
    });

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