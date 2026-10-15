import { createElement } from 'react';

function Element({content, titleRef}) {
  return createElement('h3', {
    className: 'wp-block-heading results-count',
    tabIndex: -1,
    ref: titleRef,
  }, content);
}

export default function ResultsCount({
  resultsTitleRef,
  searching,
  i18n,
  count
}) {
  if (searching) {
    return createElement(Element, {
      content: `${i18n.search.searching}...`,
      titleRef: null,
    });
  }

  count = parseInt(count, 10);
  if (Number.isNaN(count)) {
    return null;
  }

  return createElement(Element, {
    content: (count === 1) ? `${count} ${i18n.results.one}` : `${count} ${i18n.results.many}`,
    titleRef: resultsTitleRef,
  });
}
