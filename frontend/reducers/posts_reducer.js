import { RECEIVE_POSTS, REMOVE_POST } from '../actions/posts_actions';
import { UPDATE_POST } from '../actions/likes_actions';
import merge from 'lodash/merge';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  debugger
  switch(action.type) {
    case RECEIVE_POSTS:
      newState = merge({}, oldState, action.posts);
      return newState;
    case UPDATE_POST:
      newState = merge({}, oldState);
      delete newState[Object.keys(action.post)[0]];
      newState = merge({}, newState, action.post);
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