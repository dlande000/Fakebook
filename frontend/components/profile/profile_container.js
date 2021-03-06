import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { fetchPosts, createPost, fetchPost, deletePost } from '../../actions/posts_actions';
import { deleteLike, createLike } from '../../actions/likes_actions';
import { createComment, updateComment, deleteComment } from '../../actions/comments_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from '../profile/profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users, 
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    fetchPost: (id, post) => dispatch(fetchPost(id, post)),
    deletePost: id => dispatch(deletePost(id)),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: (id, comment) => dispatch(updateComment(id, comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));