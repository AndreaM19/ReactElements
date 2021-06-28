import React from 'react';
import List from '../list/List';

const CustomProperties = (props) => {

    const {
        viewHandler,
        show,
        listItems
    } = props;

    return (
        <React.Fragment>
            <button className="btn btn-sm btn-outline-secondary mt-3" type="button" onClick={() => viewHandler()}>Custom props</button>
            {show && (
                <div className="mt-3">
                  <h6>Proprietà custom disponibili</h6>
                  <List items={listItems}></List>                  
                </div>
              )}
        </React.Fragment>
    );
};

export default CustomProperties;