import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components'

import { initCurrentBoard } from '@/store/actions/cards';

import BreadCrumbs from '@/components/Breadcrumbs';
import CardsList from '@/components/CardsList';
import ErrorBlock from '@/components/UI/ErrorBlock';
import Aux from '@/hoc/Auxx';
import CardDetail from '@/containers/CardDetail';
import LoadingComponent from '@/components/UI/LoadingComponent';

class Board extends Component{

    componentDidMount() {
        if(this.props.currentBoard.id !== this.props.match.params.boardId){
            this.props.initCurrentBoard(this.props.match.params.boardId);
        }
    }

    render(){
        const CardsBlock = styled.div`
                width: 100%;
                background: #fff;
                border-radius: 3px;
                height: fit-content;
                box-shadow: 0px 10px 30px 0px rgba(82,63,105,0.08);
        `;
        const CardsBlockHeader = styled.div`
            padding: 0 25px;
            border-bottom: 1px solid #ebedf2;
            position: relative;
            & h2{
                font-weight: 400;
                font-size: 1.5rem;
            }
        `;
        const CardsBlockBody = styled.div`
            padding: 25px;
        `;
        const breadCrumbs = [{to: '/board/' + this.props.currentBoard.id, title: this.props.currentBoard.title}];
        return (
          <Aux>
              {!this.props.loading ?
                  (<BreadCrumbs
                  current={this.props.currentBoard.title}
                  items={breadCrumbs}/>):
                  ''
              }
              {this.props.loading ? <LoadingComponent /> : this.props.error ? (
                  <ErrorBlock
                      text={this.props.errMessage}
                  />
              ) : <CardsBlock>
                  <CardsBlockHeader>
                      <h2>
                          {this.props.currentBoard.title}
                      </h2>
                  </CardsBlockHeader>
                  <CardsBlockBody>
                      <CardsList
                          boardId={this.props.currentBoard.id}
                          cards={this.props.cards}/>
                  </CardsBlockBody>
                    <Route path="/board/:boardId/card/:cardId" component={CardDetail}/>
              </CardsBlock>}
          </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards.cards,
        currentBoard: state.cards.currentBoard,
        error: state.cards.error,
        errMessage: state.cards.errorMsg,
        loading: state.cards.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initCurrentBoard: (id) => dispatch(initCurrentBoard(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);