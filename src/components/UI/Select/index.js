import React from 'react';

const select = (props) => {
    const options = props.options.map((option) => <option key={option.id} value={option.id}>{option.value}</option>);
    return (
        <select name="props.name" id="props.id" onChange={props.onChangeAction}>
            <option value="">Choose board...</option>
            {options}
        </select>
)};

export default select;