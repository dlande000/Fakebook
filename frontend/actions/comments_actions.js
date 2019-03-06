import * as CommentsAPIUtil from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

export const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const fetchComments = id => dispatch => (
    CommentsAPIUtil.fetchComments(id)
        .then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => {
    return CommentsAPIUtil.createComment(comment)
        .then(comments => dispatch(receiveComments(comments)), errors => dispatch(receiveCommentErrors(errors.responseJSON)));
};

export const updateComment = comment => dispatch => (
    CommentsAPIUtil.updateComment(comment)
        .then(comments => dispatch(receiveComments(comments)), errors => dispatch(receiveCommentErrors(errors.responseJSON)))
);

export const deleteComment = id => dispatch => (
    CommentsAPIUtil.deleteComment(id)
        .then(comment => dispatch(removeComment(comment)))
);