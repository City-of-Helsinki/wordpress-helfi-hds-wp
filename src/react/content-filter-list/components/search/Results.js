import { createElement } from 'react';
import ResultsCount from './ResultsCount';
import List from '../entry/List';

export default function Results({
  resultsRef,
  resultsId,
  searching,
  firstTitleRef,
  posts,
  i18n,
  elements,
  taxonomies,
  totalResults
}) {
  return createElement('div', {
      id: resultsId,
      className: 'results',
      'aria-live': 'polite',
      ref: resultsRef,
    },
    createElement(ResultsCount, {
      searching,
      i18n,
      count: totalResults,
    }),
    createElement(List, {
      firstTitleRef,
      elements,
      posts,
      taxonomies,
      isPlaceholder: searching,
      placeholderCount: 5,
    }),
  );
}
