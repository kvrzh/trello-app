import React from 'react';

const select = (props) => {
    const options = props.options.length > 0 ? props.options.map((option) => <option key={option.id} value={option.id}>{option.value}</option>) : null;
    return (
        <select value={props.value} name="props.name" id="props.id" onChange={props.onChangeAction}>
            <option value="">Choose board...</option>
            {options}
        </select>
)};

export default select;