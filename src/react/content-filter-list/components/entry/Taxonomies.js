import { createElement } from 'react';
import Placeholder from './Placeholder';

function Element({children}) {
  return children
    && createElement('div', {className: 'entry__taxonomies'}, children);
}

function TaxonomiesList({terms, showTaxonomy, taxonomyLabel}) {
  const termItems = [];

  terms.forEach(({slug, title, terms}) => {
    if (showTaxonomy(slug)) {
      termItems.push(
        createElement(
          'div',
          {className: `item item--${slug}`},
          createElement('dt', {className: 'label'}, title),
          createElement('dd', {className: 'text'}, terms.join(', '))
        )
      );
    }
  });

  return (termItems.length > 0)
    && createElement('dl', {className: 'list'}, termItems);
}

export default function Taxonomies({
  terms,
  showTaxonomy,
  taxonomyLabel,
  isPlaceholder
}) {
  return isPlaceholder
    ? createElement(Element, {},
      createElement(Placeholder, {})
    )
    : createElement(Element, {},
      createElement(TaxonomiesList, {terms, showTaxonomy, taxonomyLabel})
    );
};
