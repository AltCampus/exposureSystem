import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import adminReducer from '../reducers/adminReducer';
import userReducer from '../reducers/userReducer';
import contentReducer from '../reducers/contentReducer';
import studentListReducer from '../reducers/studentListReducer';

const rootreducer = combineReducers({
  adminReducer,
  userReducer,
  contentReducer,
  studentListReducer,
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
