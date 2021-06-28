import React from 'react';
import { useState } from 'react';
import './Avatar.scss';
import man from './man.png'

const Avatar = (props) => {

    const defaultSettings = {
        width: "100px",
        height: "100px",
        border: "solid 1px #455a64",        
        img: man
    }

    const [config, setConfig] = useState({
        width: props.size != null ? props.size + "px" : defaultSettings.width,
        height: props.size != null ? props.size + "px" : defaultSettings.height,
        border: props.img != null ? "none" : defaultSettings.border,
        imgUrl: props.img != null ? props.img : defaultSettings.img
    })

    const buildShadow = (width, hasImage) =>{

        if(!hasImage) return "";

        if(width <= 50) return "shadow-none";
        else if(width > 50 && width <= 100) return "shadow-small";
        else if(width > 100 && width <= 200) return "shadow-mid";
        else if(width > 200) return "shadow-big";        
    }

    return (
        <div className={"avatar " + buildShadow(props.size, props.img!=null)} style={{ width: config.width, height: config.height, border: config.border, backgroundImage: "url(" + config.imgUrl + ")" }}>
        </div>
    );
};

export default Avatar;