import * as React from 'react';
import './Tag.scss';

const Tag = props => {
  const [size, setSize] = React.useState("");
  React.useEffect(() => {
    setSize(props.size != null ? props.size : "");
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "tag shadow " + size,
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