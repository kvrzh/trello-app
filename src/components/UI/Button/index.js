import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const button = (props) => {
    const Elem = styled(props.link ? Link : styled.button``)``;
    const Button = styled(Elem)`
            padding: .5rem 3rem;
            border: none;
            background-color: #f2f3f7;
            font-weight: 500;
            color: #6c7293;
            font-size: 14px;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 5px;
            transition: .2s;
            text-align: center;
            text-decoration: none;
            &:hover{
                color: #5d78ff;
            }
            &:focus{
                outline: 0;
            }
    `;

    const SuccessButton = styled(Button)`
            color: #fff;
            background-color: #0abb87;
            border-color: #0abb87;
            text-transform: none;
            &:hover{
                color: #fff;
                background-color: #08976d;
                border-color: #078b64;
            }
    `;
    const PrimaryButton = styled(Button)`
            color: #fff;
            background-color: transparent;
            border-radius: 25px;
            color: #384ad7;
            font-weight: 300;
            font-size: 1.25rem;
            border: 2px solid transparent;
            text-transform: none;
            &:hover{
                        color: #384ad7;
                    border-color: #5867dd;
            }
    `;
    const SecondaryButton = styled(Button)`
            background-color: transparent;
            border-color: #b7b7d9;
            border-radius: 25px;
            color: #212529;
            font-weight: 300;
            font-size: 1.25rem;
            border: 2px solid transparent;
            text-transform: none;
            &:hover{
                    color: #6c7293;
                    border-color: #ebedf2 !important;
            }
    `;
    let RenderButton = Button;
    switch (props.type) {
        case 'success':
            RenderButton = SuccessButton;
            break;
        case 'primary':
            RenderButton = PrimaryButton;
            break;
        case 'secondary':
            RenderButton = SecondaryButton;
            break;
        default:
            break;
    }
    const Disabled = styled(RenderButton)`
        cursor: auto;
        opacity: .65;
        pointer-events: none;
    `;
    RenderButton = props.disabled ? Disabled : RenderButton;
    return (
        <RenderButton
            to={props.link ? props.to : ''}
            onClick={props.link ? () => {} :props.buttonAction}>
            {props.buttonName}
        </RenderButton>
    )
};

export default button;