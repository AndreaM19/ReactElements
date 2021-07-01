import React from 'react';
import './NotFound.scss'; // import PlugBlack from '../../assets/icons/plug2.png';
// import PlugWhite from '../../assets/icons/plug3.png';

import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const NotFound = props => {
  const defaultSettings = {
    theme: "dark",
    background: "#3a3a3a" //icon: PlugWhite

  };
  const config = {
    theme: props.theme != null ? props.theme : defaultSettings.theme,
    //icon: props.theme === "light" ? PlugBlack : PlugWhite,
    background: props.background != null ? props.background : defaultSettings.background
  };

  const _back = () => {
    window.history.back();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "notFound " + config.theme,
    style: {
      backgroundColor: config.background
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "message"
  }, /*#__PURE__*/React.createElement("h1", null, "404"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h3", null, "Uh oh!!"), /*#__PURE__*/React.createElement("h4", null, props.message), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    variant: "info",
    onClick: _back
  }, props.buttonText)));
};

export default NotFound;