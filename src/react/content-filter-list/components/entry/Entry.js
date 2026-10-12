import { createElement } from 'react';
import Title from './Title';
import Image from './Image';
import Taxonomies from './Taxonomies';
import Excerpt from './Excerpt';

export default function Entry({
  index,
  post,
  showThumbnail,
  showExcerpt,
  showLink,
  showTaxonomy,
  taxonomyLabel,
  isPlaceholder,
  titleRef
}) {
  const {id, title, slug, excerpt, url, thumbnail, terms} = post || {};

  const hasThumbnail = () => (showThumbnail() && (thumbnail || isPlaceholder));
  const hasExcerpt = () => (showExcerpt() || isPlaceholder);

  const classNames = ['entry', 'flex-container'];
  if (hasThumbnail()) {
    classNames.push('has-thumbnail');
  }

  if (hasExcerpt()) {
    classNames.push('has-excerpt');
  }

  if (showLink() && url) {
    classNames.push('has-link');
  }

  if (isPlaceholder) {
    classNames.push('is-placeholder');
  }

  return createElement('div', {className: classNames.join(' ')},
    hasThumbnail() && createElement(Image, {thumbnail, isPlaceholder}),
    createElement('div', {className: 'entry__content'},
      createElement(Title, {
        index,
        title,
        url,
        showLink: showLink(),
        isPlaceholder,
        titleRef
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
