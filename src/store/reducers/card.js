import { SET_CURRENT_CARD, SET_ERROR_CARD, SET_CARD_LOADING_FLAG } from '@/store/actionTypes';

const initialState = {
    currentCard: {},
    error: false,
    errorMsg: '',
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_CARD: {
            const {card} = action.payload;
            return {
                ...state,
                currentCard: card,
                loading: false,
                error: false,
            }
        }
        case SET_ERROR_CARD: {
            const {error} = action.payload;
            return {
                ...state,
                error: true,
                errorMsg: error,
                loading: false,
            }
        }
        case SET_CARD_LOADING_FLAG: {
            return {
                ...state,
                loading: true
            }
        }
        default :
            return state;
    }
}