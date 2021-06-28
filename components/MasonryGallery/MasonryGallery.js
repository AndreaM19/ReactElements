import React from 'react';
import { useState } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import './MasonryGallery.scss';

const MasonryGallery = props => {
  const [index, setIndex] = useState(-99);

  const imgHandler = idx => {
    setIndex(idx);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement(Lightbox, {
    index: index,
    setIndex: setIndex,
    gallery: props.gallery
  }), /*#__PURE__*/React.createElement("div", {
    className: "masonry"
  }, props.gallery?.map((item, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "mItem"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.url,
      onClick: () => imgHandler(index),
      alt: ""
    }));
  })));
};

export default MasonryGallery;