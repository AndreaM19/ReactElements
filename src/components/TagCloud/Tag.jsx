import React from 'react';
import { useState, useEffect } from 'react';
import './Tag.scss'

const Tag = (props) => {
    const[size, setSize] = useState("");
    const[height, setHeight] = useState("");

    useEffect(()=>{
        setSize(props.size != null ? props.size : "")
        setHeight(props.height != null ? "tag-" + props.height : "")
    },[props.size, props.height])

    return (        
        <div className={"tag "+ height + " " + size} style={{backgroundColor:props.background}}>
            <span className="name" style={{color:props.color}}>{props.name}</span>
        </div>
    )
}

export default Tag