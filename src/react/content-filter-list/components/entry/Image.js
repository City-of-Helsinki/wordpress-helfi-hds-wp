import { createElement } from 'react';
import Placeholder from './Placeholder';

function ImageWrap({image}) {
  return createElement('div', {className: 'image-wrap image-wrap--fixed-size'}, image);
}

function Thumbnail({src}) {
  return createElement('img', {src: src});
}

function Element({image}) {
  return image
    && createElement('div', {className: 'entry__thumbnail'},
      createElement(ImageWrap, {image})
    );
}

export default function Image({
  thumbnail,
  isPlaceholder
}) {
  return createElement(Element, {
    image: isPlaceholder
      ? createElement(Placeholder, {})
      : createElement(Thumbnail, {src: thumbnail})
  });
};
