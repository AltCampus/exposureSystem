import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import adminReducer from '../reducers/adminReducer';
import registerFormReducer from '../reducers/registerFormReducer'


const rootreducer = combineReducers({
  adminReducer,
  registerFormReducer,
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
