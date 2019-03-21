import {SET_USER} from '@/store/actionTypes';
import axios from '@/axios-trello';

export const initUser = (token) => {
    const key = '321471dffbe1e0c750fa713b81d24145';
    const url = `/tokens/${token}?token=${token}&key=${key}`;
    return async dispatch => {
        try {
            const {data: user} = await axios.get(url);
            dispatch(setUser({id: user.id}));
        } catch (e) {
            console.log(e);
        }
    };
};

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: { user: user }
        }
    };


