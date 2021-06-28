import React from 'react';
import { useState } from 'react';
import './Spinner.scss';

const Spinner = props => {
  const defaultSettings = {
    width: "100px",
    height: "100px",
    color: "#aeaeae",
    thickness: "2px"
  };
  const [config, setConfig] = useState({
    width: props.size != null ? props.size + "px" : defaultSettings.width,
    height: props.size != null ? props.size + "px" : defaultSettings.height,
    color: props.color != null ? props.color : defaultSettings.color,
    thickness: props.thickness != null ? props.thickness + "px" : defaultSettings.thickness
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "spinner",
    style: {
      width: config.width,
      height: config.height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "spinner1",
    style: {
      borderLeftColor: config.color,
      borderRightColor: config.color,
      borderWidth: config.thickness
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "spinner2",
    style: {
      borderLeftColor: config.color,
      borderRightColor: config.color,
      borderWidth: config.thickness
    }
  }));
};

export default Spinner;