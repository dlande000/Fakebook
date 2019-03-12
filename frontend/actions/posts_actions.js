import * as PostsAPIUtil from '../util/posts_api_util';

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

export const fetchPosts = () => dispatch => (
    PostsAPIUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)))
);

export const createPost = post => dispatch => (
    PostsAPIUtil.createPost(post)
        .then(posts => dispatch(receivePosts(posts)),
        errors => dispatch(receivePostErrors(errors.responseJSON)))
);

export const fetchPost = post => dispatch => (
    PostsAPIUtil.updatePost(post)
        .then(posts => dispatch(receivePosts(posts)),
        errors => dispatch(receivePostErrors(errors.responseJSON)))
);

export const deletePost = id => dispatch => (
    PostsAPIUtil.deletePost(id)
        .then(post => dispatch(removePost(post)))
);