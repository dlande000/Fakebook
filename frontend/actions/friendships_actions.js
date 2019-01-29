import * as FriendshipsAPIUtil from '../util/friendships_api_util';
import { receiveUser } from './users_actions';

export const createFriendship = (friendship_id, sender_id) => dispatch => {
    return FriendshipsAPIUtil.createFriendship(friendship_id, sender_id).then(user => dispatch(receiveUser(user)));
};

export const confirmFriendship = (friendship_id, sender_id) => dispatch => {
    return FriendshipsAPIUtil.confirmFriendship(friendship_id, sender_id).then(user => dispatch(receiveUser(user)));
};

export const destroyFriendship = friendship_id => dispatch => {
    return UsersAPIUtil.destroyFriendship(friendship_id).then(user => dispatch(receiveUser(user)));
};