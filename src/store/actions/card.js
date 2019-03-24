import { SET_CURRENT_CARD, SET_ERROR_CARD, SET_CARD_LOADING_FLAG } from '@/store/actionTypes';
import axios from '@/axios-trello';

export const setCurrentCard = (card) => {
    return {
        type: SET_CURRENT_CARD,
        payload: {card: card},
    }
};

export const setErrorCard = (error) => {
    return {
        type: SET_ERROR_CARD,
        payload: {error: error}
    }
};

export const setLoadingFlag = () => {
    return {
        type: SET_CARD_LOADING_FLAG,
    }
};

export const initCurrentCard = (id) => {
    const key = '321471dffbe1e0c750fa713b81d24145';
    const token = localStorage.getItem('token');
    const url = `/cards/${id}?token=${token}&key=${key}`;
    return async dispatch => {
        dispatch(setLoadingFlag());
        try{
          const {data: card} = await axios.get(url);
          dispatch(setCurrentCard({id: card.id, desc: card.desc, boardId: card.idBoard, title: card.name, lastActivity: card.dateLastActivity}));
      } catch (e) {
          dispatch(setErrorCard('Error on load card data'));
      }
    };
}