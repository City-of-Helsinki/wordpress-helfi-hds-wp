function hdsAccordion() {
	'use strict';

	function _open(toggle, panel) {
		if ( toggle ) {
			toggle.setAttribute('aria-expanded', 'true');
		}
		if ( panel ) {
			panel.removeAttribute('hidden');
		}
	}

	function _isOpen(toggle) {
		return 'true' === toggle.getAttribute('aria-expanded');
	}

	function _close(toggle, panel) {
		if ( toggle ) {
			toggle.setAttribute('aria-expanded', 'false');
		}
		if ( panel ) {
			panel.setAttribute('hidden', 'true');
		}
	}

	function _init(accordion) {
			var _triggers = accordion.querySelectorAll('.accordion__toggle'),
				_closeButtons = accordion.querySelectorAll('.accordion__close');

		for (var i = 0; i < _triggers.length; i++) {
			_triggers[i].addEventListener('click', function(event){
				var _currentToggle = event.currentTarget;
				var _currentPanel = _currentToggle.parentElement.nextElementSibling;

				if ( _isOpen(_currentToggle) ) {
					_close(_currentToggle, _currentPanel);
				} else {
					_open(_currentToggle, _currentPanel);
				}
			});
		}

		for (var i = 0; i < _closeButtons.length; i++) {
			_closeButtons[i].addEventListener('click', function(event){
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
		init: function(accordions) {
			for (var i = 0; i < accordions.length; i++) {
				_init( accordions[i] );
			}
		}
	};
}

//saved block markup may differ so try to account for the different possibilities...
function parseAccordionElements() {
	const accordions = [];
	var elements = document.querySelectorAll('.wp-block-hds-wp-accordion');
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].querySelector('.accordion')) {
			accordions.push(elements[i].querySelector('.accordion'));
		}
		else {
			accordions.push(elements[i]);
		}
	}
	return accordions;
}

const hdsAccordions = hdsAccordion();
hdsAccordions.init(
	parseAccordionElements()
);
