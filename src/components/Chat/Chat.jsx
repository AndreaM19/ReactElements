import React from 'react';
import './Chat.scss';

const Chat = (props) => {

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