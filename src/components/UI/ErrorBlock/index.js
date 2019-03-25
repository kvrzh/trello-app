import React from 'react';
import styled from 'styled-components'

const errorBlock = (props) => {
    const ErrorBlock = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const ErrorHeaderBlock = styled.div`
        padding: 0 25px;
        border-bottom: 1px solid #ebedf2;
        width: 100%;
    `;
    const ErrorFooterBlock = styled.div`
        padding: 25px;    
    `;
    return (
        <ErrorBlock>
            <ErrorHeaderBlock>
            <h3>{props.text}</h3>
            </ErrorHeaderBlock>
            <ErrorFooterBlock>
            {props.children}
            </ErrorFooterBlock>
        </ErrorBlock>
    );
};

export default errorBlock;