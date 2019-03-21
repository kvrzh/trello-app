import { SET_USER } from '@/store/actionTypes';
import axios from '@/axios-trello';

const initialState = {
    user: {},
    isAuth: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            const {user} = action.payload;
            return {
                ...state,
                user : user,
                isAuth: true
            }
        }
        default :
            return state;
    }
}