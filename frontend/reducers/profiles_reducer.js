import { RECEIVE_USERS, RECEIVE_USER } from '../actions/profile_actions';
import merge from 'lodash/merge';

const profilesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_USERS:
        return action.users;
    case RECEIVE_USER:
        newState = merge({}, {[action.user.id]: action.user});
        return newState;
    default:
      return oldState;
  }
};

export default profilesReducer;