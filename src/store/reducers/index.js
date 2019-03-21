import { combineReducers } from "redux";
import user from './user';
import boards from './boards';
import cards from './boards';


export default combineReducers({
    user,
    boards,
    cards
});
