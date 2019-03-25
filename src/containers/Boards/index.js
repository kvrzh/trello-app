import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components'
import { initBoards } from '@/store/actions/boards';
import { withRouter } from 'react-router-dom';

import BreadCrumbs from '@/components/Breadcrumbs';
import Aux from '@/hoc/Auxx';
import ErrorBlock from '@/components/UI/ErrorBlock';
import Select from '@/components/UI/Select';
import Button from '@/components/UI/Button';
import LoadingComponent from '@/components/UI/LoadingComponent';

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

    relogin = () => {
        localStorage.removeItem('token');
        this.props.loginFn();
    };

    render() {
        const BoardsBlock = styled.div`
            background: #fff;
            display: flex;
            flex-direction: column;
            border-radius: 3px;
            flex: 0 0 50%;
            max-width: 50%;
            height: fit-content;
            box-shadow: 0px 10px 30px 0px rgba(82,63,105,0.08);
        `;
        const BoardsBlockHeader = styled.div`
            padding: 0 25px;
            border-bottom: 1px solid #ebedf2;
            position: relative;
            & h3{
                font-weight: 400;
                font-size: 1.5rem;
            }
        `;
        const BoardsBlockBody = styled.div`
            padding: 25px;
        `;
        const FormGroup = styled.div`
            margin-bottom: 1rem;
        `;
        const BoardsBlockFooter = styled.div`
               padding: 25px;
               border-top: 1px solid #ebedf2;
               display: flex;
               justify-content: flex-end;
        `;
        return (
            <BoardsBlock>
                <BreadCrumbs />
                {this.props.loading ? <LoadingComponent /> : this.props.error ?
                    <ErrorBlock
                        text={this.props.errMessage}
                    >
                        <Button
                            buttonName={'Relogin'}
                            buttonAction={() => this.relogin()}
                        />
                    </ErrorBlock> :
                    <Aux>
                        <BoardsBlockHeader>
                            <h3>Select the board</h3>
                        </BoardsBlockHeader>
                        <BoardsBlockBody>
                            <FormGroup>
                        <Select
                            label={'Select the board in order to view information about it'}
                            name={'board'}
                            id={'boards'}
                            value={this.state.selectedBoard}
                            options={this.props.boards}
                            onChangeAction={this.onBoardChange}
                        />
                            </FormGroup>
                        </BoardsBlockBody>
                        <BoardsBlockFooter>
                            <Button
                                buttonName={'Confirm'}
                                buttonAction={this.confirmButton}
                                type={'success'}
                                disabled={this.state.selectedBoard.length === 0}
                            />
                        </BoardsBlockFooter>

                    </Aux>
                }
            </BoardsBlock>
        );
    }
}

const mapStateToProps = state => {
    return {
        boards: state.boards.boards,
        error: state.boards.error,
        errMessage: state.boards.errMsg,
        loading: state.boards.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initBoards: (token) => dispatch(initBoards(token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Boards));