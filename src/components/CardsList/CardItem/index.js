import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'

import cardListClasses from './CardItem.module.css';

import Button from '@/components/UI/Button';

const cardItem = (props) => {
    const CardItem = styled.div`
            display: flex;
            flex: 0 0 calc(25% - 2rem);
            max-width: calc(25% - 2rem);
            margin: 0 1rem 1rem 1rem;
            flex-direction: column;
            padding: 10px;
            align-items: center;
            justify-content: space-between;
            border: 2px solid rgba(93, 120, 255, 0.5);
            transition: .5s;
            box-shadow: 0px 10px 30px 0px rgba(82,63,105,0.04);
            border-radius: 3px;
            &:hover{
                 box-shadow: 0px 9px 16px 0px rgba(153,153,153,.5) !important;
            }
    `;
    return (
        <CardItem>
            <h5>{props.title}</h5>
            <Button
                type={'primary'}
                buttonName={'Show detail'}
                link={true}
                to={`/board/${props.boardId}/card/${props.id}`} />
        </CardItem>
    );
};

export default cardItem;