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
    var _activeToggle = accordion.querySelector('[aria-expanded="true"]'),
        _activePanel = _activeToggle ? _activeToggle.nextElementSibling : null,
        _triggers = accordion.querySelectorAll('.accordion__toggle'),
        _closeButtons = accordion.querySelectorAll('.accordion__close');

    for (var i = 0; i < _triggers.length; i++) {
      _triggers[i].addEventListener('click', function (event) {
        var _currentToggle = event.currentTarget;
        var _currentPanel = _currentToggle.parentElement.nextElementSibling;

        if (_isOpen(_currentToggle)) {
          _close(_currentToggle, _currentPanel);

          _activeToggle = null;
          _activePanel = null;
        } else {
          _close(_activeToggle, _activePanel);

          _open(_currentToggle, _currentPanel);

          _activeToggle = _currentToggle;
          _activePanel = _currentPanel;
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
  }

  return {
    init: function init(accordions) {
      for (var i = 0; i < accordions.length; i++) {
        _init(accordions[i]);
      }
    }
  };
}

var hdsAccordions = hdsAccordion();
hdsAccordions.init(document.querySelectorAll('.wp-block-hds-wp-accordion .accordion'));

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
      /*for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
          //if ($this.children('option').eq(i).is(':selected')){
          //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
          //}
      }
                  var $listItems = $list.children('li');
                  $styledSelect.click(function(e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
      });
                  $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          //console.log($this.val());
      });
                  $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });*/
    });
  });
})(jQuery);