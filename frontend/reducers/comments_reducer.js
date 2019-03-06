import { RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comments_actions';
import merge from 'lodash/merge';

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_COMMENTS:
      newState = merge({}, oldState, action.comments);
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState[action.comment.id];
      return newState;
    default:
      return oldState;
  }
};

export default commentsReducer;