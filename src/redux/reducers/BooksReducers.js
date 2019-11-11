import {
    FETCHING_BOOKS_REQUEST,
    FETCHING_BOOKS_SUCCESS,
    FETCHING_BOOKS_FAILURE,
    CLEAR_POSTS
} from "../actions/types";


const INITIAL_STATE = { 
    books:[],
    loading:false,
    errorMessage:""
};


export default (state = INITIAL_STATE, action)=>{
    console.log(action);
    console.log("logged from bookReducers")

    switch(action.type){
        case FETCHING_BOOKS_REQUEST:
            return { ...state, loading:true };
        case FETCHING_BOOKS_SUCCESS:
            return { ...state, loading:false, books:action.payload };
        case FETCHING_BOOKS_FAILURE:
            return { ...state, loading:true, errorMessage:"error occurs" };
        case CLEAR_POSTS: {
            return {...state, loading: false, books: []}
        }
        default:
            return state;
    }
};