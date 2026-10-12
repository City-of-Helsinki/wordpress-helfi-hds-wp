import { createElement, useEffect, useState } from 'react';
import Filters from './Filters';
import SubmitButton from './SubmitButton';

export default function Form({
  handleSubmit,
  handleChange,
  filters,
  i18n,
  taxonomies,
  searching
}) {
  return createElement('form', {
      className: 'filters',
      onSubmit: (event) => {
        event.preventDefault();
        handleSubmit();
      },
    },
    createElement(Filters, {
      locale: i18n.locale,
      placeholder: i18n.filter.all,
      taxonomies,
      filters,
      searching,
      handleChange
    }),
    createElement(SubmitButton, {
      label: i18n.search.submit,
      searching
    })
  );
}
