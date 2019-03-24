import React from 'react';
import styled from 'styled-components'

const Modal = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 50%;
    border: 1px solid #ccc;
    left: 25%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
`;

const modal = (props) => (
    <Modal>
        {props.children}
    </Modal>
);

export default modal;