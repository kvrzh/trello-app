import React from 'react';

const errorBlock = (props) => {
    return (
        <div>
            <h5>{props.text}</h5>
            {props.children}
        </div>
    );
};

export default errorBlock;