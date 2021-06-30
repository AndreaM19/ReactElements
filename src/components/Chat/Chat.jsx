import React from 'react';
import './Chat.scss';
//import bg from '../../assets/geometric_bg.jpg';

const Chat = (props) => {
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

    return (
        <div className='chat'>

            {props.messages?.map((message, index) => {
                return (
                    <div key={index} className={message.senderType?.toUpperCase() === "S" ? "speechbubble right" : "speechbubble left"}>
                        <span className="time">{message.time}</span>
                        <p>{message.text}</p>
                        <span className="username">{message.sender}</span>
                    </div>
                )
            })}            
        </div>

    );
};

export default Chat;