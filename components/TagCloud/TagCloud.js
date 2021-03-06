import React from 'react';
import Tag from './Tag';
import './TagCloud.scss';

const TagCloud = props => {
  const defaultSettings = {
    color: "#000",
    background: "#aeaeae"
  };

  const buildSize = name => {
    if (name.length > 10) return "xl";
    if (name.length > 7) return "l";
    if (name.length > 5) return "m";
    return "s";
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "tagCloud"
  }, props.items?.map((item, index) => {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, props.uniformColor && /*#__PURE__*/React.createElement(Tag, {
      name: item.name,
      background: props.background,
      color: props.color,
      size: () => buildSize(item.name),
      height: props.height
    }), !props.uniformColor && /*#__PURE__*/React.createElement(Tag, {
      name: item.name,
      background: item.background != null ? item.background : defaultSettings.background,
      color: item.color != null ? item.color : defaultSettings.color,
      size: () => buildSize(item.name),
      height: props.height
    }));
  }));
};

export default TagCloud;