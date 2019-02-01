import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { fetchPosts, createPost } from '../../actions/posts_actions';
import { connect } from 'react-redux';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

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
    createPost: post => dispatch(createPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));