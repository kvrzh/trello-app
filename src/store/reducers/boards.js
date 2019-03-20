const initialState = {
    boards: [],
    currentBoard: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_BOARDS': {
            const {boards} = action.payload;
            return {
                ...state,
                boards : boards
            }
        }
        case 'SET_CURRENT_BOARD': {
            const {currentBoard} = action.payload;
            return {
                ...state,
                currentBoard : currentBoard
            }
        }
        default :
            return state;
    }
}