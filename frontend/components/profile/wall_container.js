import { fetchUser, fetchUsers } from '../../actions/users_actions';
import {} from '../../actions/post_actions';
import { connect } from 'react-redux';
import Wall from './profile';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users, 
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wall));