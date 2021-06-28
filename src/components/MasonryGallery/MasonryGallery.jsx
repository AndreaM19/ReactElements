import React from 'react';
import { useState } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import './MasonryGallery.scss';

const MasonryGallery = (props) => {    

    const [index, setIndex] = useState(-99);

    const imgHandler = (idx) => {
        setIndex(idx)
    }

    return (
        <div className="">

            <Lightbox index={index} setIndex={setIndex} gallery={props.gallery} />

            <div className="masonry">
                {props.gallery?.map((item, index) => {
                    return (
                        <div key={index} className="mItem">
                            <img src={item.url} onClick={() => imgHandler(index)} alt=""/>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default MasonryGallery;