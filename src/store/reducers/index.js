import { combineReducers } from "redux";
import cards from './cards';
import boards from './boards';

export default combineReducers({
    cards,
    boards
});
