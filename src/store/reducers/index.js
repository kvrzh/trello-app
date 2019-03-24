import { combineReducers } from "redux";
import boards from './boards';
import cards from './cards';
import card from './card';


export default combineReducers({
    boards,
    cards,
    card
});
