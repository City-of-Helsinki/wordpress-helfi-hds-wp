import { createElement } from 'react';
import { Tag, TagSize } from 'hds-react';

export default function SelectedFilters({
  i18n,
  tags,
  handleRemoveTag,
  handleClearTags,
  searching
}) {
  const elements = [];

  for (const taxonomy in tags) {
    tags[taxonomy].forEach(tag => {
      elements.push(
        createElement(Tag, {
          size: TagSize.Large,
          onDelete: () => handleRemoveTag(taxonomy, tag.value),
          'aria-label': `${i18n.filter.delete}: ${tag.label}`,
          className: 'selected-filter',
        }, tag.label)
      )
    });
  }

  if (elements.length < 1) {
    return;
  }

  elements.push(
    createElement('div', {className: 'wp-block-button is-style-supplementary'},
      createElement('button', {
          className: 'wp-element-button',
          type: 'button',
          disabled: searching,
          style: { cursor: searching ? 'wait' : '' },
          onClick: handleClearTags,
        },
        createElement('span', {className: 'icon mask-icon icon--cross hds-icon--cross'}),
        i18n.filter.clear,
      )
    )
  );

  return createElement('div', {className: 'selected-filters'}, elements);
}
