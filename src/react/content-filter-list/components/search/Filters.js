import { createElement } from 'react';
import Filter from './Filter';

export default function Filters({
  locale,
  placeholder,
  taxonomies,
  filters,
  setFilter,
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
        onClose: (selectedOptions) => {
          setFilter({
            ...filters,
            [taxonomy]: selectedOptions.map(({value}) => value),
          });
        },
      })
    );
  }

  return createElement('div', {className: 'filters__grid'}, formFilters);
}
