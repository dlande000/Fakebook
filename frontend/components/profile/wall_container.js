import { connect } from 'react-redux';
import Wall from './profile';
import { withRouter } from 'react-router-dom';
import { fetchPosts, createPost, updatePost, deletePost } from '../../actions/posts_actions';
import { getPostsForWall } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    posts: getPostsForWall(state, ownProps.match.parms.userId),
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users, 
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: id => dispatch(deletePost(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wall));