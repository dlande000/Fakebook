import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { fetchPosts, createPost } from '../../actions/posts_actions';
import { createComment } from '../../actions/comments_actions';
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
    createComment: comment => dispatch(createComment(comment))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));