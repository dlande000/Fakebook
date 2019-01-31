import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

export default entitiesReducer;