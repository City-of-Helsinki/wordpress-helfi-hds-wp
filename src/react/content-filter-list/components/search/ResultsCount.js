import { createElement } from 'react';

export default function ResultsCount({
  texts,
  count
}) {
  return createElement('h3', {}, (count > 1) ? `${count} ${texts.many}` : `${count} ${texts.one}`);
}
