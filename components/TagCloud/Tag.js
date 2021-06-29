import React from 'react';
import { useState, useEffect } from 'react';
import './Tag.scss';

const Tag = props => {
  const [size, setSize] = useState("");
  const [height, setHeight] = useState("");
  useEffect(() => {
    setSize(props.size != null ? props.size : "");
    setHeight(props.height != null ? "tag-" + props.height : "");
  }, [props.size, props.height]);
  return /*#__PURE__*/React.createElement("div", {
    className: "tag " + height + " " + size,
    style: {
      backgroundColor: props.background
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "name",
    style: {
      color: props.color
    }
  }, props.name));
};

export default Tag;