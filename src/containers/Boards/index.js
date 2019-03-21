import React, {Component} from 'react';
import {connect} from 'react-redux';

import { SET_BOARDS, SET_CURRENT_BOARD } from '@/store/actionTypes';

import Select from '@/components/UI/Select';
import Button from '@/components/UI/Button';

class Boards extends Component {
    componentDidMount() {
        this.props.setBoards([{id: 1, value: 'qwe'}, {id: 2, value: 'test'}]);
    }

    onBoardChange = (event) => {
        const id = event.target.value;
        const selectedBoardAr = this.props.boards.filter(board => +board.id === +id);
        const selectedBoard = selectedBoardAr.length > 0 ? selectedBoardAr[0] : {};
        this.props.setCurrentBoard(selectedBoard);
    }

    confirmButton = () => {
        console.log(this.props.selectedBoard);
        if(this.props.selectedBoard.id){
            this.props.history.push({pathname: '/board/' + this.props.selectedBoard.id});
        }
    }

    render() {
        return (
            <div>
                <h4>Select the board</h4>
                <p>Select the board in order to view information about it</p>
                <Select
                    name={'board'}
                    id={'boards'}
                    options={this.props.boards}
                    onChangeAction={this.onBoardChange}
                />
                <Button
                    buttonName={'Confirm'}
                    buttonAction={this.confirmButton}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        boards: state.boards.boards,
        selectedBoard: state.boards.currentBoard
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setBoards: (boards) => dispatch({type: SET_BOARDS, payload: {boards: boards}}),
        setCurrentBoard: (board) => dispatch({type: SET_CURRENT_BOARD, payload: {currentBoard: board}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);