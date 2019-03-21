const initialState = {
  cards: [],
    currentBoard: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_CARDS': {
            const {cards} = action.payload;
            return {
                ...state,
                cards : cards
            }
        }
        case 'SET_CURRENT_CARD_BOARD': {
            const {board} = action.payload;
            return {
                ...state,
                currentBoard: board
            }
        }
        default :
            return state;
    }
}