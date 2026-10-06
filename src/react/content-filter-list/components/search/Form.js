import { createElement, useEffect } from 'react';
import Filters from './Filters';
import SubmitButton from './SubmitButton';

export default function Form({
  handleSubmit,
  filters,
  setFilter,
  setPaged,
  i18n,
  taxonomies,
  searching
}) {
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return createElement('form', {className: 'filters', onSubmit},
    createElement(Filters, {
      locale: i18n.locale,
      placeholder: i18n.filter.all,
      taxonomies,
      filters,
      setFilter,
      setPaged,
      searching
    }),
    createElement(SubmitButton, {
      label: i18n.search.submit,
      searching
    })
  );
}
