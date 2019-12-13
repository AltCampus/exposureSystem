import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import adminReducer from '../reducers/adminReducer';
import registerFormReducer from '../reducers/registerFormReducer';
import submissionReducer from '../reducers/submissionReducer';
import studentReducer from '../reducers/studentReducer';


const rootreducer = combineReducers({
  adminReducer,
  registerFormReducer,
  submissionReducer,
  studentReducer,
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
