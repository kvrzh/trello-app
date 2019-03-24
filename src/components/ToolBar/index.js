import React from 'react';
import styled from 'styled-components'

import Button from '@/components/UI/Button';

const toolbar = (props) => {
    const ToolBar = styled.header`
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: fixed;
        padding: 0 20px;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: #fff;
        box-shadow: 0px 10px 30px 0px rgba(82,63,105,0.08);
    `;
    return (
        <ToolBar>
            <h4>
                Trello Observer v.0.0.1
            </h4>
            <Button
                buttonName={props.isAuth ? 'logout' : 'login'}
                buttonAction={props.rightButtonAction}
            />
        </ToolBar>
    )
};

export default toolbar;