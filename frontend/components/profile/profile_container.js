import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { fetchPosts, createPost } from '../../actions/posts_actions';
import { deleteLike, createLike } from '../../actions/likes_actions';
import { createComment, updateComment } from '../../actions/comments_actions';
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
    createComment: comment => dispatch(createComment(comment)),
    updateComment: (id, comment) => dispatch(createComment(id, comment)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));