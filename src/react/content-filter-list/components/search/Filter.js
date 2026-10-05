import { createElement } from 'react';
import { Select } from 'hds-react';

export default function Filter({
  label,
  terms,
  taxonomy,
  locale,
  placeholder,
  filterThreshold,
  selected,
  searching,
  onClose
}) {
  const options = terms.map(term => ({
    label: term.label,
    value: term.id,
    selected: selected.includes(term.id),
  }));

  const matchSearch = (source, compare) => {
    return source.toLowerCase().includes(compare.toLowerCase());
  };

  const optionsFilter = (options.length >= filterThreshold)
    ? (option, filterValue) => matchSearch(option.label, filterValue)
    : null;

  return createElement('div', {className: 'filter-wrap'},
    createElement(Select, {
      texts: {
        label,
        placeholder,
        language: locale,
      },
      multiSelect: true,
      disabled: searching,
      filter: optionsFilter,
      options,
      onClose
    })
  );
}
