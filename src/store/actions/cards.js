import { SET_CURRENT_BOARD, SET_ERROR_CARDS, SET_LOADING_FLAG_CARDS } from '@/store/actionTypes';
import axios from '@/axios-trello';

export const setCurrentBoard = (board) => {
    return {
        type: SET_CURRENT_BOARD,
        payload: {board: board}
    }
};

export const setErrorCards = (error) => {
    return {
        type: SET_ERROR_CARDS,
        payload: {error: error}
    }
};

export const setLoadingFlag = () => {
    return {
        type: SET_LOADING_FLAG_CARDS,
    }
};

export const initCurrentBoard = (id) => {
    const key = '321471dffbe1e0c750fa713b81d24145';
    const token = localStorage.getItem('token');
    const boardUrl = `/boards/${id}?token=${token}&key=${key}`;
    return async dispatch => {
        dispatch(setLoadingFlag());
        try {
            const {data: boardData} = await axios.get(boardUrl);
            const cardsUrl = `/boards/${boardData.id}/cards?token=${token}&key=${key}`;
            const {data: cardsData} = await axios.get(cardsUrl);
            const cards = cardsData.map((card) => {
               return {id: card.id, title: card.name};
            });
            dispatch(setCurrentBoard({info: {id: boardData.id, title: boardData.name}, cards: cards}));
        } catch (e) {
            dispatch(setErrorCards('Error to get info for this board'));
        }
    };
};