import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import Feed from './feed';

const mapStateToProps = state => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers())

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);