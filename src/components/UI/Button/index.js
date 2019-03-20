import React from 'react';
import buttonClasses from './Button.module.css';

const button = (props) => (
    <button
        className={buttonClasses.btn}
        onClick={props.buttonAction}>
        {props.buttonName}
    </button>
);

export default button;