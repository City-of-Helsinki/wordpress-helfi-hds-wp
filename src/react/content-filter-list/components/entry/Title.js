import { createElement } from 'react';
import Placeholder from './Placeholder';

function Element({tag, content, tabindex, titleRef}) {
  return createElement(tag, {
    className: 'entry__title',
    ref: titleRef,
    tabindex
  }, content);
}

function LinkOrText({
  title,
  url,
  hasLink,
  titleRef
}) {
  return hasLink ? createElement('a', {href: url, ref: titleRef}, title) : title;
}

export default function Title({
  index,
  title,
  url,
  showLink,
  isPlaceholder,
  titleRef
}) {
  const hasLink = (showLink && url);

  return isPlaceholder
    ? createElement(Element, {
      tag: 'div',
      content: createElement(Placeholder, {}),
    })
    : createElement(Element, {
      tag: 'h4',
      content: createElement(LinkOrText, {
        title,
        url,
        hasLink,
        titleRef: hasLink ? titleRef : null,
      }),
      tabindex: ! hasLink ? '-1' : null,
      titleRef: ! hasLink ? titleRef : null,
    });
};
