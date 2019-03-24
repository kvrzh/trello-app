import { SET_BOARDS, SET_ERROR, SET_BOARDS_LOADING_FLAG} from '@/store/actionTypes';
import axios from '@/axios-trello';

export const setBoards = (boards) => {
    return {
        type: SET_BOARDS,
        payload: boards
    }
};

export const setLoadingFlag = (boards) => {
    return {
        type: SET_BOARDS_LOADING_FLAG,
    }
};

export const setError = (error) => {
    return {
        type: SET_ERROR,
        payload: {error: error}
    }
};

export const initBoards = (token) => {
    const key = '321471dffbe1e0c750fa713b81d24145';
    const url = `/members/me/boards?token=${token}&key=${key}`;
    return async dispatch => {
        dispatch(setLoadingFlag());
        try {
            const {data: boardsData} = await axios.get(url);
            const boards = boardsData.map((board) => {
                return {id: board.id, value: board.name}
            });
            dispatch(setBoards({boards: boards}));
        } catch (e) {
            dispatch(setError('Get all boards failed. Try to relogin'));
        }
    };
};