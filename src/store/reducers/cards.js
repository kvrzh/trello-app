const initialState = {
  cards: []
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
        default :
            return state;
    }
}