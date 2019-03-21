import React, {Component} from 'react';
import {connect} from 'react-redux';

import { setBoards, initBoards } from '@/store/actions/boards';

import Select from '@/components/UI/Select';
import Button from '@/components/UI/Button';

class Boards extends Component {
    state = {
       selectedBoard: ''
    };

    componentDidMount() {
        this.props.initBoards(localStorage.getItem('token'));
    }

    onBoardChange = (event) => {
        const id = event.target.value;
        this.setState({
            selectedBoard: id
        });
    };

    confirmButton = () => {
        if(this.state.selectedBoard !== ''){
            this.props.history.push({pathname: '/board/' + this.state.selectedBoard});
        }
    };

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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initBoards: (token) => dispatch(initBoards(token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);