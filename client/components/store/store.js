import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "../reducers/reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ rootReducer });

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
