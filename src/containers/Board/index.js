import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import { SET_CARDS, SET_CURRENT_CARD_BOARD } from '@/store/actionTypes';

import Button from '@/components/UI/Button';

class Board extends Component{
    componentDidMount() {
        this.props.setCurrentBoard({id: this.props.match.params.boardId, title: 'qwe'});
        this.props.setCards([{id: 1, title: 'Card 1'}, {id: 2, title: 'Card 2'}]);
    }

    render(){
        return (
          <div>
              {this.props.match.params.boardId}
              <Route path="/board/:boardId/card/:cardId" component={Button}/>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards.cards,
        currentBoard: state.cards.currentBoard
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCards: (cards) => dispatch({type: SET_CARDS, payload: {cards: cards}}),
        setCurrentBoard: (board) => dispatch({type: SET_CURRENT_CARD_BOARD, payload: {board: board}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);