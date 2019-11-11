import {
    TITLE_ADD,
    DESCRIPTION_ADD,
    ADD_BOOKS,
    ADD_BOOKS_SUCCESS,
    ADD_BOOKS_FAILURE
} from "../actions/types";


const INITIAL_STATE = { 
    title:"",
    description:"",
    error:"",
};


export default (state = INITIAL_STATE, action)=>{
    console.log(action);
    console.log("logged from AddbookReducers")
    switch(action.type){
        case TITLE_ADD:
            return { ...state, title:action.payload  };
        case DESCRIPTION_ADD:
            return { ...state, description:action.payload  };
        case ADD_BOOKS:
            return { ...state, error:""  };
        case ADD_BOOKS_SUCCESS:
            return { 
                ...state, 
                error:"", 
                title:"", 
                description:"",
            };
        case ADD_BOOKS_FAILURE:
            return { 
                ...state , 
                error:"Can't post data error occur",
                title:"",
                description:""
            }
        default:
            return state;
    }
};
        