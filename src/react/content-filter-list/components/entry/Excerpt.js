import { createElement } from 'react';
import Placeholder from './Placeholder';

function Element({tag, content}) {
  return content
    && createElement(tag, {className: 'entry__excerpt excerpt size-l'}, content);
}

export default function Excerpt({
  excerpt,
  isPlaceholder
}) {
  return isPlaceholder
    ? createElement(Element, {
      tag: 'div',
      content: createElement(Placeholder, {}),
    })
    : createElement(Element, {
      tag: 'p',
      content: excerpt,
    });
};
