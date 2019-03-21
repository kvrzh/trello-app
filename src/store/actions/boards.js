import { SET_BOARDS} from '@/store/actionTypes';
import axios from '@/axios-trello';
import {setUser} from "./users";

export const setBoards = (boards) => {
    return {
        type: SET_BOARDS,
        payload: boards
    }
};

export const initBoards = (token) => {
    const key = '321471dffbe1e0c750fa713b81d24145';
    const url = `/members/me/boards?token=${token}&key=${key}`;
    return async dispatch => {
        try {
            const {data: boardsData} = await axios.get(url);
            const boards = boardsData.map((board) => {
                return {id: board.id, value: board.name}
            });
            dispatch(setBoards({boards: boards}));
        } catch (e) {
            console.log(e);
        }
    };
};