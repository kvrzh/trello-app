import React from 'react';
import styled from 'styled-components'

import CardItem from './CardItem';

const cardsList = (props) => {
    const CardsList = styled.div`
                display: flex;
                    flex-wrap: wrap;
            }
        `;
    let cards = 'No cards';
    if(props.cards.length > 0){
        cards = props.cards.map((card) => {
            return (
                <CardItem key={card.id} title={card.title} id={card.id} boardId={props.boardId}/>
            );
        })
    }
    return (
        <CardsList>
            {cards}
        </CardsList>
    );
};

export default cardsList;