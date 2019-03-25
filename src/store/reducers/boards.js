import { SET_BOARDS, SET_ERROR, SET_BOARDS_LOADING_FLAG } from '@/store/actionTypes';

const initialState = {
    boards: [],
    errMsg: '',
    error: false,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BOARDS: {
            const {boards} = action.payload;
            return {
                ...state,
                boards : boards,
                error: false,
                loading: false,
            }
        }
        case SET_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                error: true,
                loading: false,
                errMsg: error
            }
        }
        case SET_BOARDS_LOADING_FLAG: {
            return {
                ...state,
                loading: true
            }
        }
       default :
            return state;
    }
}