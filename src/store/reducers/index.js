import { combineReducers } from "redux";
import cards from './cards';
import boards from './cards';

export default combineReducers({
    cards,
    boards
});
