import { createElement } from 'react';

export default function SubmitButton({
  label,
  searching,
  setSearching
}) {
  return createElement('div', {className: 'wp-block-button'},
    createElement('button', {
      className: 'wp-element-button',
      type: 'submit',
      disabled: searching,
      style: { cursor: searching ? 'wait' : '' }
    }, label)
  );
}
