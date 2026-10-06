import { createElement } from 'react';

export default function ResultsCount({
  searching,
  i18n,
  count
}) {
  let content = searching
    ? `${i18n.search.searching}...`
    : (count > 1) ? `${count} ${i18n.results.many}` : `${count} ${i18n.results.one}`;

  return createElement('h3', {className: 'wp-block-heading results-count'}, content);
}
