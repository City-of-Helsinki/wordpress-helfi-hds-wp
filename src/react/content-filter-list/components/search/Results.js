import { createElement } from 'react';
import ResultsCount from './ResultsCount';
import List from '../entry/List';

export default function Results({
  searching,
  posts,
  i18n,
  elements,
  taxonomies
}) {
  return createElement('div', {className: 'results', 'aria-live-region': 'polite'},
    createElement(ResultsCount, {
      searching,
      i18n,
      count: posts.length,
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
