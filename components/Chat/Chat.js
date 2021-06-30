import React from 'react';
import './Chat.scss'; //import bg from '../../assets/geometric_bg.jpg';

const Chat = props => {
  // const defaultSettings = {
  //     text: "CUT OUT TEXT",
  //     height: "300px",
  //     color: "#fff",
  //     background: "https://picsum.photos/id/802/1920/1080",
  // }
  // const config = {
  //     text: props.text!=null ? props.text : defaultSettings.text,
  //     height: props.height != null ? props.height + "px" : defaultSettings.height,
  //     color: props.color != null ? props.color : defaultSettings.color,
  //     background: props.background != null ? "url(" + props.background + ")" : "url(" + defaultSettings.background + ")"
  // };
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