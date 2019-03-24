import React from 'react';
import styled, {keyframes} from 'styled-components'

const loadingComponent = (props) => {
    const Ring = styled.div`
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    `;
    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }
        
        to {
         transform: rotate(360deg);
        }
        `;
    const RingDiv = styled.div`
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
         height: 51px;
        margin: 6px;
        border: 6px solid #fff;
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #3498db transparent transparent transparent;
        &:nth-child(1){
              animation-delay: -0.45s;
        }
        &:nth-child(2){
              animation-delay: -0.3s;
        }
        &:nth-child(3){
              animation-delay: -0.15s;
        }
    `;
    const Wrapper = styled.div`
            display:flex;
            align-items: center;
            justify-content: center;
            height: 200px;
    `;

    return (
        <Wrapper>
        <Ring>
            <RingDiv></RingDiv>
            <RingDiv></RingDiv>
            <RingDiv></RingDiv>
            <RingDiv></RingDiv>
        </Ring>
        </Wrapper>
    );
};

export default loadingComponent;