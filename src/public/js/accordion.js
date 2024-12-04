function hdsAccordion() {
	'use strict';

  function SessionHandler() {
    const _panelsKey = 'helsinkiAccordionOpenPanels';
    const _exitPanelKey = 'helsinkiAccordionExitPanel';

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
      exitPanel: _exitPanel,
    };
  }

  function Accordion(element, session) {
    var _panels = [];

    element.querySelectorAll('.accordion__section')
      .forEach(section => {
        let panel = AccordionPanel(section, session);

        if (panel) {
          _panels.push(panel);
        }
      });

    function _thisFind(id) {
      id = _formatId(id);

      return id ? _panels.find(panel => panel.id() === id) : false;
    }

    function _thisOpen(id) {
      let _panel = _thisFind(id);

      if (_panel) {
        _panel.open();
      }
    }

    function _thisClose(id) {
      let _panel = _thisFind(id);

      if (_panel) {
        _panel.close();
      }
    }

    function _thisFocus(id) {
      let _panel = _thisFind(id);

      if (_panel) {
        _panel.open();
        _panel.toView();
        _panel.focus();
      }
    }

    function _formatId(id) {
      return (typeof id === 'string' && id.startsWith('#'))
        ? id.substring(1)
        : id;
    }

    return {
      panels: () => _panels,
      open: _thisOpen,
      close: _thisClose,
      focus: _thisFocus,
    }
  }

  function AccordionPanel(section, session) {
    const _panelTitle = section.querySelector('.accordion__title');
    const _panelToggle = section.querySelector('.accordion__toggle');
    const _panelContent = section.querySelector('.accordion__panel');
    const _panelClose = section.querySelector('.accordion__close');

    if (! _panelToggle || ! _panelContent) {
      return;
    }

    const _id = _determineId();
    var _isOpen = _determineOpenStatus();

    _panelToggle.addEventListener('click', event => _isOpen ? _thisClose() : _thisOpen());
    _panelContent.addEventListener('click', _sessionLinkExitPanel);

    if (_panelClose) {
      _panelClose.addEventListener('click', event => _thisClose() && _thisFocus());
    }

    function _determineId() {
      return [
        _panelTitle.id,
        section.id,
        _panelToggle.id
      ].find(candidateId => candidateId && candidateId !== '');
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
        let openPanels = session.openPanels();

        if (Array.isArray(openPanels)) {
          session.openPanels(Array.from(new Set([...openPanels, _thisId()])));
        } else {
          session.openPanels([_thisId()]);
        }
      }
    }

    function _removeFromSession() {
      if (_thisId()) {
        let openPanels = session.openPanels();

        if (Array.isArray(openPanels)) {
          session.openPanels(openPanels.filter(panelId => panelId !== _thisId()));
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
      toView: _thisToView,
    }
  }

  const session = SessionHandler();

	function _init(element) {
    const accordion = Accordion(element, session);

    var openPanels = session.openPanels();
    if (Array.isArray(openPanels)) {
      openPanels.forEach(panelId => accordion.open(panelId));
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
		init: accordions => accordions.forEach(element => _init(element)),
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
