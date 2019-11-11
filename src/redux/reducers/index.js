import { combineReducers } from "redux";
import BookReducers from "./BooksReducers";
import AddBookReducers from "./AddBookReducers";
import SelectBookReducers from "./SelectBookReducers";
export default combineReducers({
    bookReducers: BookReducers,
    addBookReducers: AddBookReducers,
    // selectBookReducers:SelectBookReducers
})