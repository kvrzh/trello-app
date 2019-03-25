import { SET_CURRENT_BOARD, SET_ERROR_CARDS, SET_LOADING_FLAG_CARDS } from '@/store/actionTypes';

const initialState = {
    cards: [],
    currentBoard: {},
    error: false,
    errorMsg: '',
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_BOARD: {
            const {board} = action.payload;
            return {
                ...state,
                currentBoard: board.info,
                cards: board.cards,
                error: false,
                loading: false,
            }
        }
        case SET_ERROR_CARDS: {
            const {error} = action.payload;
            return {
                ...state,
                error: true,
                errorMsg: error,
                loading: false,
            }
        }
        case SET_LOADING_FLAG_CARDS: {
            return {
                ...state,
                loading: true,
            }
        }
        default :
            return state;
    }
}