import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import searchReducer from './search_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  search: searchReducer,
  comments: commentsReducer
});

export default entitiesReducer;