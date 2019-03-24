import React from 'react';

import Aux from '@/hoc/Auxx';
import ToolBar from '@/components/ToolBar';
import styled from 'styled-components'


const layout = (props) => {
    const Main = styled.main`
        padding-top: 110px;
        background-color: #ededf3;
        min-height: 100vh;     
    `;

    const Content = styled.div`
            padding: 20px;
            display: flex;
            justify-content: center;
            min-height: calc(100vh - 110px);
    `;

    return (
        <Aux>
            <ToolBar
                isAuth={props.isAuth}
                rightButtonAction={props.rightButtonAction}
            />
            <Main>
                <Content>
                {props.children}
                </Content>
            </Main>
        </Aux>
    )
};

export default layout;