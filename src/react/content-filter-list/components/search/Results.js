import { createElement } from 'react';
import ResultsCount from './ResultsCount';
import List from '../entry/List';

export default function Results({
  posts,
  i18n,
  elements,
  taxonomies
}) {
  return createElement('div', {className: 'results', 'aria-live-region': 'polite'},
    createElement(ResultsCount, {
      texts: i18n.results,
      count: posts.length,
    }),
    createElement(List, {elements, posts, taxonomies}),
  );
}
