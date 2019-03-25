import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initCurrentCard, setLoadingFlag} from '@/store/actions/card';
import Modal from '@/components/UI/Modal';
import Backdrop from '@/components/UI/Backdrop';
import styled from 'styled-components'
import Button from '@/components/UI/Button';
import Aux from '@/hoc/Auxx';
import LoadingComponent from '@/components/UI/LoadingComponent';

class CardDetail extends Component {
    componentDidMount() {
        if (this.props.card.id!== this.props.match.params.cardId) {
            this.props.initCurrentCard(this.props.match.params.cardId);
        }
    }


    returnToBoards = () => {
        this.props.history.push({pathname: '/board/' + this.props.card.boardId});
    };

    render() {
        const CardDetailBlock = styled.div`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: fit-content;
            min-height: 200px;
        `;
        const CardDetailHeader = styled.div`
            padding: 0 25px;
            border-bottom: 1px solid #ebedf2;
            position: relative;
            & h3{
                font-weight: 400;
                font-size: 1.5rem;
                text-align: center;
            }
        `;
        const BoardsBlockBody = styled.div`
            padding: 25px;
        `;
        const CardDetailFooter = styled.div`
               padding: 25px;
               border-top: 1px solid #ebedf2;
               display: flex;
               justify-content: flex-end;
        `;
        const lastActivity = new Date(this.props.card.lastActivity).toLocaleString();
        return (
            <Backdrop backdropClick={() => this.returnToBoards()}>
                <Modal>
                    <CardDetailBlock>
                    {this.props.loading ? (<LoadingComponent />) :
                        (
                            <Aux>
                                <CardDetailHeader>
                                    <h3>{this.props.card.title}</h3>
                                </CardDetailHeader>
                                <BoardsBlockBody>
                                    <span>Description:</span>
                                    <p>{this.props.card.desc}</p>
                                    <div>
                                        <span><b>Last activity:</b> {lastActivity}</span>
                                    </div>
                                </BoardsBlockBody>
                                <CardDetailFooter>
                                    <Button
                                        type={'secondary'}
                                        buttonName={'Close'}
                                        link={true}
                                        to={`/board/${this.props.card.boardId}`}/>
                                </CardDetailFooter>
                            </Aux>
                        )
                    }
                    </CardDetailBlock>
                </Modal>
            </Backdrop>
        );
    }
}

const mapStateToProps = state => {
    return {
        card: state.card.currentCard,
        error: state.card.error,
        errMessage: state.card.errorMsg,
        loading: state.card.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setLoadingFlag: () => dispatch(setLoadingFlag()),
        initCurrentCard: (id) => dispatch(initCurrentCard(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);