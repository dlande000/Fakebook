import * as FriendshipsAPIUtil from '../util/friendships_api_util';
import { receiveUser, receiveUsers } from './users_actions';

export const createFriendship = id => dispatch => {
    return FriendshipsAPIUtil.createFriendship(id).then(user => dispatch(receiveUser(user)));
};

export const confirmFriendship = (friendship_id, sender_id) => dispatch => {
    return FriendshipsAPIUtil.confirmFriendship(friendship_id, sender_id).then(user => dispatch(receiveUser(user)));
};

export const destroyFriendship = id => dispatch => {
    return FriendshipsAPIUtil.destroyFriendship(id).then(user => dispatch(receiveUser(user)));
};