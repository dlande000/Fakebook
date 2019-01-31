import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

export default entitiesReducer;