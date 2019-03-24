import React from 'react';
import Aux from '@/hoc/Auxx';
import styled from 'styled-components'

const select = (props) => {
    const Label = styled.label`
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: .5rem;
        color: #646c9a;
        display:block;
    `;
    const Select = styled.select`
        display: block;
        width: 100%;
        height: calc(1.5em + 1.3rem + 2px);
        padding: .65rem 1rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ebedf2;
        border-radius: 4px;
        transition: .2s;
        &:focus{
            color: #495057;
            background-color: #fff;
            border-color: #9aabff;
            outline: 0;
        }
    `;
    const options = props.options.length > 0 ? props.options.map((option) => <option key={option.id} value={option.id}>{option.value}</option>) : null;
    return (
        <Aux>
        <Label htmlFor={props.name}>{props.label}</Label>
        <Select value={props.value} name={props.name} id={props.id} onChange={props.onChangeAction}>
            <option value="">Choose board...</option>
            {options}
        </Select>
        </Aux>
)};

export default select;