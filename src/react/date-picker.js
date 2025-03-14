import createDatePicker from './DatePicker.js';

document.addEventListener('DOMContentLoaded', event => {
  const components = {
    DatePicker: createDatePicker(),
  };

  document.querySelectorAll('[data-hds-react]').forEach(setupComponent);

  function setupComponent(root) {
    let component = createComponent(root);

    if (component) {
      renderComponent(root, component);
      cleanupRoot(root);
    }
  }

  function createComponent(root) {
    return components[root.dataset.hdsReact]
       && React.createElement(
        components[root.dataset.hdsReact],
        createComponentConfig(root)
      );
  }

  function createComponentConfig(root) {
    let config = {element: root};

    try {
      config = {...config, ...JSON.parse(root.dataset.hdsComponent)};
    } catch (error) {}

    return config;
  }

  function renderComponent(root, component) {
    ReactDOM.createRoot(root).render(component);
  }

  function cleanupRoot(root) {
    root.removeAttribute('data-hds-react');
    root.removeAttribute('data-hds-component');
  }
});
