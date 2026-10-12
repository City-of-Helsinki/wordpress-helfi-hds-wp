import { createElement } from 'react';
import Entry from './Entry';
import useEntryElements from '../../hooks/useEntryElements';
import useEntryTaxonomies from '../../hooks/useEntryTaxonomies';

function Element({children}) {
  return createElement('div', {className: 'entries entries--list entries--card'}, children);
}

export default function List({
  firstTitleRef,
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
    toEntries.map((post, index) => createElement(Entry, {
      index,
      post,
      showThumbnail,
      showExcerpt,
      showLink,
      showTaxonomy,
      isPlaceholder,
      titleRef: (0 === index) ? firstTitleRef : null,
    }))
  );
}
