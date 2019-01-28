import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { withRouter } from 'react-router-dom';
import { logout } from '../../util/session_api_util';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));