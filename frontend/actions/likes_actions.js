import * as LikesAPIUtil from '../util/likes_api_util';
import { receivePostErrors, updatePost } from './posts_actions';

export const createLike = like => dispatch => (
    LikesAPIUtil.createLike(like)
        .then(post => dispatch(updatePost(post)),
        errors => dispatch(receivePostErrors(errors.responseJSON)))
);

export const deleteLike = id => dispatch => (
    LikesAPIUtil.deleteLike(id)
        .then(post => dispatch(updatePost(post)))
);