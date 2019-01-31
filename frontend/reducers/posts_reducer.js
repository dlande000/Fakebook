import { RECEIVE_POSTS, REMOVE_POST } from '../actions/posts_actions';
import merge from 'lodash/merge';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_POSTS:
      newState = merge({}, oldState, action.posts);
      return newState;
    case REMOVE_POST:
      newState = merge({}, oldState);
      delete newState[action.post.id];
      return newState;
    default:
      return oldState;
  }
};

export default postsReducer;