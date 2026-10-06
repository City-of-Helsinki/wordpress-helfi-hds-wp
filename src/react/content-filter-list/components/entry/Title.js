import { createElement } from 'react';
import Placeholder from './Placeholder';

function Element({tag, content}) {
  return createElement(tag, {className: 'entry__title'}, content);
}

function LinkOrText({
  title,
  url,
  showLink,
}) {
  return (showLink && url) ? createElement('a', {href: url}, title) : title;
}

export default function Title({
  title,
  url,
  showLink,
  isPlaceholder
}) {
  return isPlaceholder
    ? createElement(Element, {
      tag: 'div',
      content: createElement(Placeholder, {}),
    })
    : createElement(Element, {
      tag: 'h4',
      content: createElement(LinkOrText, {title, url, showLink}),
    });
};
