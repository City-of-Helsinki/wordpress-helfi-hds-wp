import { createElement } from 'react';
import ResultsCount from './ResultsCount';
import List from '../entry/List';

export default function Results({
  searching,
  posts,
  i18n,
  elements,
  taxonomies,
  totalResults
}) {
  return createElement('div', {className: 'results', 'aria-live': 'polite'},
    createElement(ResultsCount, {
      searching,
      i18n,
      count: totalResults,
    }),
    createElement(List, {
      elements,
      posts,
      taxonomies,
      isPlaceholder: searching,
      placeholderCount: 5,
    }),
  );
}
