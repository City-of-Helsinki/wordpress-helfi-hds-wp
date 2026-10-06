import { createElement } from 'react';

function Element({content}) {
  return createElement('h3', {className: 'wp-block-heading results-count'}, content);
}

export default function ResultsCount({
  searching,
  i18n,
  count
}) {
  if (searching) {
    return createElement(Element, {content: `${i18n.search.searching}...`});
  }

  count = parseInt(count, 10);
  if (Number.isNaN(count)) {
    return null;
  }

  return createElement(Element, {
    content: (count > 1) ? `${count} ${i18n.results.many}` : `${count} ${i18n.results.one}`
  });
}
