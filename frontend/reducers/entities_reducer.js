import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  search: searchReducer
});

export default entitiesReducer;