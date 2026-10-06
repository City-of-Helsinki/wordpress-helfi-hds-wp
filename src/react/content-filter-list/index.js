import ContentSearchFilter from './components/ContentSearchFilter';

document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll('[data-content-filter-list]')
    .forEach(root => {
      let config = {};

      try {
        config = {
          ...JSON.parse(root.dataset.contentFilterList),
          i18n: {...HELSINKI_CONTENT_LIST_FILTER_I18N},
          rest: {...HELSINKI_CONTENT_LIST_FILTER},
        };
        root.removeAttribute('data-content-filter-list');
      } catch (error) {}

      ReactDOM.createRoot(root).render(
        React.createElement(ContentSearchFilter, config)
      );
    });
});
