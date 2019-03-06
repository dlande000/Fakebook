import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import { createPost, fetchPosts } from '../../actions/posts_actions';
import { fetchComments, createComment } from '../../actions/comments_actions';
import Feed from './feed';

const mapStateToProps = state => {
  return ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    users: state.entities.users,
    comments: state.entities.comments,
    correctReceivers: [state.entities.users[state.session.id].id].concat(state.entities.users[state.session.id].friendIds),
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    createPost: post => dispatch(createPost(post)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: id => dispatch(fetchComments(id)),
    createComment: comment => dispatch(createComment(comment))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);