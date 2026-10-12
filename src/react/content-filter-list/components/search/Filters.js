import { createElement } from 'react';
import Filter from './Filter';

export default function Filters({
  locale,
  placeholder,
  taxonomies,
  filters,
  searching,
  handleChange
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
        selected: filters[taxonomy] || [],
        handleChange: (selectedOptions) => handleChange(taxonomy, selectedOptions),
        filterThreshold: 15,
      })
    );
  }

  return createElement('div', {className: 'filters__grid'}, formFilters);
}
