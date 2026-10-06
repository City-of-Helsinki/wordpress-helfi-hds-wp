import { createElement } from 'react';
import Entry from './Entry';
import useEntryElements from '../../hooks/useEntryElements';
import useEntryTaxonomies from '../../hooks/useEntryTaxonomies';

function Element({children}) {
  return createElement('div', {className: 'entries entries--list'}, children);
}

export default function List({
  elements,
  posts,
  taxonomies,
  isPlaceholder,
  placeholderCount
}) {
  const {
    showThumbnail,
    showExcerpt,
    showLink,
    showAllTaxonomies
  } = useEntryElements(elements);

  const {showTaxonomy} = useEntryTaxonomies(taxonomies, showAllTaxonomies());

  let toEntries = isPlaceholder
    ? [...Array(placeholderCount).keys()]
    : posts;

  return createElement(Element, {},
    toEntries.map(post => createElement(Entry, {
      post,
      showThumbnail,
      showExcerpt,
      showLink,
      showTaxonomy,
      isPlaceholder
    }))
  );
}
