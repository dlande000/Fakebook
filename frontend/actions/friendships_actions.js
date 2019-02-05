import * as FriendshipsAPIUtil from '../util/friendships_api_util';
import { receiveUser, receiveUsers } from './users_actions';

export const createFriendship = id => dispatch => {
    return FriendshipsAPIUtil.createFriendship(id).then(users => dispatch(receiveUsers(users)));
};

export const confirmFriendship = (friendship_id, sender_id) => dispatch => {
    return FriendshipsAPIUtil.confirmFriendship(friendship_id, sender_id).then(users => dispatch(receiveUsers(users)));
};

export const destroyFriendship = id => dispatch => {
    return FriendshipsAPIUtil.destroyFriendship(id).then(users => dispatch(receiveUsers(users)));
};