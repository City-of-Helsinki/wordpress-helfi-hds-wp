document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll('[data-hds-react]').forEach(root => {
    let component = window[root.dataset.hdsReact] || null;

    if (component) {
      let config = {}

      try {
        config = JSON.parse(root.dataset.hdsComponent);
      } catch (error) {}

      ReactDOM.createRoot(root).render(React.createElement(component, config));

      root.removeAttribute('data-hds-react');
      root.removeAttribute('data-hds-component');
    }
  });
});
