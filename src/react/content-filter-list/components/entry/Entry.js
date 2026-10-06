import { createElement } from 'react';
import Title from './Title';
import Image from './Image';
import Taxonomies from './Taxonomies';
import Excerpt from './Excerpt';

export default function Entry({
  post,
  showThumbnail,
  showExcerpt,
  showLink,
  showTaxonomy,
  taxonomyLabel,
  isPlaceholder
}) {
  const {id, title, slug, excerpt, url, thumbnail, terms} = post || {};

  const hasThumbnail = () => (showThumbnail() && (thumbnail || isPlaceholder));
  const hasExcerpt = () => (showExcerpt() || isPlaceholder);

  const classNames = ['entry', 'entry--list', 'flex-container'];
  if (hasThumbnail()) {
    classNames.push('has-thumbnail');
  }

  return createElement('div', {className: classNames.join(' ')},
    hasThumbnail() && createElement(Image, {thumbnail, isPlaceholder}),
    createElement('div', {className: 'entry__content'},
      createElement(Title, {
        title,
        url,
        showLink: showLink(),
        isPlaceholder,
      }),
      hasExcerpt() && createElement(Excerpt, {excerpt, isPlaceholder}),
      createElement(Taxonomies, {
        terms,
        showTaxonomy,
        taxonomyLabel,
        isPlaceholder
      }),
    )
  );
}
