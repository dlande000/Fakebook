import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users_actions';
import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState, { [action.currentUser.id]: action.currentUser });
      return newState;
    case RECEIVE_USERS:
      newState = merge({}, oldState, action.users);
      return newState;
    case RECEIVE_USER:
      newState = merge({}, oldState);
      delete newState[action.user.id];
      newState[action.user.id] = action.user;
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;