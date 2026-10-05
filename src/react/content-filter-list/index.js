import ContentSearchFilter from './components/ContentSearchFilter';

document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll('[data-content-filter-list]')
    .forEach(root => {
      let config = {};

      try {
        config = {
          ...JSON.parse(root.dataset.contentFilterList),
          rest: {...HELSINKI_CONTENT_LIST_FILTER},
        };
        root.removeAttribute('data-content-filter-list');
      } catch (error) {}

      ReactDOM.createRoot(root).render(
        React.createElement(ContentSearchFilter, config)
      );
    });
});
