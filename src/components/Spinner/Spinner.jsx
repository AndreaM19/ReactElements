import React from 'react';
import './Spinner.scss';

const Spinner = (props) => {

    const defaultSettings = {
        width:"100px",
        height:"100px",
        color:"#aeaeae",
        thickness: "2px"
    }

    const config = {
        width: props.size != null ? props.size + "px" : defaultSettings.width,
        height: props.size != null ? props.size + "px" : defaultSettings.height,
        color: props.color != null ? props.color : defaultSettings.color,
        thickness: props.thickness != null ? props.thickness + "px" : defaultSettings.thickness,
    };

    return (
        <div className="spinner" style={{width:config.width, height:config.height}}>
            <div className="spinner1" style={{borderLeftColor:config.color, borderRightColor: config.color, borderWidth: config.thickness}}></div>
            <div className="spinner2" style={{borderLeftColor:config.color, borderRightColor: config.color, borderWidth: config.thickness}}></div>
        </div>
    );
};

export default Spinner;