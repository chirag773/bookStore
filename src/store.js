import { 
    createStore,
    applyMiddleware,
    compose 
} from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./redux/reducers";

const initialState = {};

const middleware = [ReduxThunk];


const store = createStore(
    reducers, 
    initialState, 
    //compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    //)
);

export default store;
