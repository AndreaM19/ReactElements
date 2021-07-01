import React from 'react';
import './Chat.scss';

const Chat = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "chat"
  }, props.messages?.map((message, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: message.senderType?.toUpperCase() === "S" ? "speechbubble right" : "speechbubble left"
    }, /*#__PURE__*/React.createElement("span", {
      className: "time"
    }, message.time), /*#__PURE__*/React.createElement("p", null, message.text), /*#__PURE__*/React.createElement("span", {
      className: "username"
    }, message.sender));
  }));
};

export default Chat;