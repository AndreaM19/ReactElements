import * as React from 'react';
import './Tag.scss'

const Tag = (props) => {
    const[size, setSize] = React.useState("");

    React.useEffect(()=>{
        setSize(props.size != null ? props.size : "")
    },[])

    return (        
        <div className={"tag shadow " + size} style={{backgroundColor:props.background}}>
            <span className="name" style={{color:props.color}}>{props.name}</span>
        </div>
    )
}

export default Tag