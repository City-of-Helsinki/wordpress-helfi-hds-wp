import { createElement } from 'react';

function Title({title, url, showLink}) {
  return createElement(
    'h4',
    {className: 'entry__title'},
    (showLink && url) ? createElement('a', {href: url}, title) : title
  );
}

function Image({thumbnail}) {
  return thumbnail && createElement(
    'div',
    {className: 'entry__thumbnail'},
    createElement('div', {className: 'image-wrap image-wrap--fixed-size'},
      createElement('img', {src: thumbnail})
    )
  );
}

function Excerpt({excerpt}) {
  return excerpt && createElement(
    'p',
    {className: 'entry__excerpt excerpt size-l'},
    excerpt
  );
}

function Taxonomies({terms, showTaxonomy, taxonomyLabel}) {
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
  })

  return (termItems.length > 0)
    && createElement('dl', {className: 'list'}, termItems);
}

export default function Entry({
  post,
  showThumbnail,
  showExcerpt,
  showLink,
  showAllTaxonomies,
  showTaxonomy,
  taxonomyLabel,
}) {
  const {id, title, slug, excerpt, url, thumbnail, terms} = post || {};

  const classNames = ['entry--list', 'flex-container'];
  if (showThumbnail() && thumbnail) {
    classNames.push('has-thumbnail');
  }

  return createElement('div', {className: classNames.join(' ')},
    showThumbnail() && createElement(Image, {thumbnail}),
    createElement('div', {className: 'entry__content'},
      createElement(Title, {
        title,
        url,
        showLink: showLink(),
      }),
      showExcerpt() && createElement(Excerpt, {excerpt}),
      createElement(Taxonomies, {
        terms,
        showTaxonomy,
        taxonomyLabel
      }),
    )
  );
}
