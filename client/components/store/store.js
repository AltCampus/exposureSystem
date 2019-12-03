import { createStore, applyMiddleware, combineReducers } from 'redux';
import handleReducer from '../reducers/reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({ handleReducer });

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
