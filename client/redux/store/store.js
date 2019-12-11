import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import adminReducer from '../reducers/adminReducer';


const rootreducer = combineReducers({
  adminReducer,
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
