import * as LikesAPIUtil from '../util/likes_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const updatePost = post => ({
    type: UPDATE_POST,
    post
});

export const removePost = post => ({
    type: REMOVE_POST,
    post
});

export const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
});

export const createLike = like => dispatch => {
    return LikesAPIUtil.createLike(like)
        .then(post => dispatch(updatePost(post)), errors => dispatch(receivePostErrors(errors.responseJSON)));
};

// export const updateComment = comment => dispatch => (
//     CommentsAPIUtil.updateComment(comment)
//         .then(posts => dispatch(receivePosts(posts)), errors => dispatch(receivePostErrors(errors.responseJSON)))
// );

export const deleteLike = id => dispatch => (
    LikesAPIUtil.deleteLike(id)
        .then(post => dispatch(updatePost(post)))
);