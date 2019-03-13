import * as CommentsAPIUtil from '../util/comments_api_util';
import { updatePost, receivePostErrors } from './posts_actions';

export const createComment = comment => dispatch => (
    CommentsAPIUtil.createComment(comment)
        .then(post => dispatch(updatePost(post)),
        errors => dispatch(receivePostErrors(errors.responseJSON)))
);

export const updateComment = (id, comment) => dispatch => (
    CommentsAPIUtil.updateComment(id, comment)
        .then(post => dispatch(updatePost(post)),
        errors => dispatch(receivePostErrors(errors.responseJSON)))
);

export const deleteComment = id => dispatch => (
    CommentsAPIUtil.deleteComment(id)
        .then(post => dispatch(updatePost(post)))
);