import React from 'react';
import './CutOutText.scss'; //import bg from '../../assets/geometric_bg.jpg';

const CutOutText = props => {
  const defaultSettings = {
    text: "CUT OUT TEXT",
    height: "300px",
    color: "#fff",
    background: "https://picsum.photos/id/802/1920/1080"
  };
  const config = {
    text: props.text != null ? props.text : defaultSettings.text,
    height: props.height != null ? props.height + "px" : defaultSettings.height,
    color: props.color != null ? props.color : defaultSettings.color,
    background: props.background != null ? "url(" + props.background + ")" : "url(" + defaultSettings.background + ")"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "image-container",
    style: {
      height: config.height,
      backgroundImage: config.background
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text",
    style: {
      backgroundColor: config.color
    }
  }, config.text));
};

export default CutOutText;