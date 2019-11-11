import {
    SELECT_BOOKS
} from "../actions/types";
export default (state, action)=>{
    switch(action.type){
        case SELECT_BOOKS: {
            return action.payload
        }
        default:
            return state;
    }
};