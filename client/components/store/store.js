import { createStore, applyMiddleware, combineReducers } from 'redux';
import adminReducer from '../reducers/adminReducer';
import userReducer from '../reducers/userReducer';
import contentReducer from '../reducers/contentReducer';
import studentListReducer from '../reducers/studentListReducer';
import thunk from 'redux-thunk';

const rootreducer = combineReducers({
  adminReducer,
  userReducer,
  contentReducer,
  studentListReducer,
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
