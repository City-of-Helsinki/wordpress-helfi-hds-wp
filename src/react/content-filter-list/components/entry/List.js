import { createElement } from 'react';
import Entry from './Entry';
import useEntryElements from '../../hooks/useEntryElements';
import useEntryTaxonomies from '../../hooks/useEntryTaxonomies';

export default function List({elements, posts, taxonomies}) {
  const {
    showThumbnail,
    showExcerpt,
    showLink,
    showAllTaxonomies
  } = useEntryElements(elements);

  const {showTaxonomy} = useEntryTaxonomies(taxonomies, showAllTaxonomies());

  return createElement('div', {className: 'entries entries--list'},
    posts.map(post => createElement(Entry, {
      post,
      showThumbnail,
      showExcerpt,
      showLink,
      showAllTaxonomies,
      showTaxonomy
    }))
  );
}
