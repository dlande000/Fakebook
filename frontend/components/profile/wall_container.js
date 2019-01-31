import { connect } from 'react-redux';
import Wall from './profile';
import { withRouter } from 'react-router-dom';
import {} from '../../actions/posts_actions';
import { getPostsForWall } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    posts: getPostsForWall(state, ownProps.match.parms.userId)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: id => dispatch(deletePost(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wall));