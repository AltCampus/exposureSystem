import { createStore, applyMiddleware, combineReducers } from 'redux';
import adminReducer from '../reducers/adminReducer';
import userReducer from '../reducers/userReducer';
import contentReducer from '../reducers/contentReducer';
import thunk from 'redux-thunk';

const rootreducers = combineReducers({ adminReducer, userReducer, contentReducer });

const store = createStore(rootreducers, applyMiddleware(thunk));

export default store;
