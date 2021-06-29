import * as React from 'react';
import { useEffect, useState } from 'react';
import "./Lightbox.scss";
import "../../assets/icons/aemme-icons.scss";

const Lightbox = props => {
  const {
    gallery,
    index,
    setIndex
  } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const [img, setImg] = useState(null);
  useEffect(() => {
    if (gallery != null && gallery.length > 0) {
      if (index >= 0) setImg(gallery[index].url);else setImg(gallery[0].url);
      if (index !== -99) setShow(true);
    }
  }, [index, gallery]);

  const handleNext = () => {
    let i = index + 1;

    if (i >= gallery.length) {
      setImg(gallery[0].url);
      setIndex(0);
    } else {
      setImg(gallery[i].url);
      setIndex(i);
    }
  };

  const handlePrev = () => {
    let i = index - 1;

    if (i < 0) {
      setImg(gallery[gallery.length - 1].url);
      setIndex(gallery.length - 1);
    } else {
      setImg(gallery[i].url);
      setIndex(i);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, show && /*#__PURE__*/React.createElement("div", {
    className: "lightbox"
  }, index >= 0 && /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: ""
  }), gallery && gallery.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between navigation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "am-icon am-icon-chevron-left lightbox-navigation",
    onClick: () => handlePrev()
  }), /*#__PURE__*/React.createElement("span", {
    className: "am-icon am-icon-chevron-right lightbox-navigation",
    onClick: () => handleNext()
  })), /*#__PURE__*/React.createElement("span", {
    className: "am-icon am-icon-close close-lightbox",
    onClick: () => handleClose()
  })));
};

export default Lightbox;