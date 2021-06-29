import React from 'react';
import { useState } from 'react';
import CustomProperties from '../customProperties/CustomProperties';

const Display = (props) => {
const [viewDetail, setViewDetail] = useState(false)

const viewDetailHandler = (setting) => {
    setViewDetail(setting)
  }

    return (
        <div className={"col-md-" + props.size + " mb-4"}>
            <div className="h-100 p-4 bg-light border rounded-3">
                <h4 className="mb-3">{props.title}</h4>
                {props.children}
                <CustomProperties viewHandler={() => viewDetailHandler(!viewDetail)} show={viewDetail} listItems={props.listItems}></CustomProperties>
            </div>
        </div>
    );
};

export default Display;