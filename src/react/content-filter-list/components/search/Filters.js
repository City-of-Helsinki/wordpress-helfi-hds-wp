import { createElement } from 'react';
import Filter from './Filter';

export default function Filters({
  locale,
  placeholder,
  taxonomies,
  filters,
  setFilter,
  setPaged,
  searching
}) {
  const formFilters = [];

  for (const taxonomy in taxonomies) {
    formFilters.push(
      createElement(Filter, {
        ...taxonomies[taxonomy],
        taxonomy,
        locale,
        placeholder,
        searching,
        filterThreshold: 15,
        selected: filters[taxonomy] || [],
        handleChange: (values) => {
          setFilter({ ...filters, [taxonomy]: values});
          setPaged(1);
        },
      })
    );
  }

  return createElement('div', {className: 'filters__grid'}, formFilters);
}
