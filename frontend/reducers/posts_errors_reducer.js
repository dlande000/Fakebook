import { RECEIVE_POST_ERRORS, RECEIVE_POSTS, REMOVE_POST } from '../actions/posts_actions';
  
const postsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case [RECEIVE_POST_ERRORS]:
        return action.posts;
      case RECEIVE_POSTS:
        return [];
      case REMOVE_POST:
        return [];
      default:
        return state;
    }
};

export default postsErrorsReducer;