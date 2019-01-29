import { createFriendship, confirmFriendship, destroyFriendship } from '../../actions/friendships_actions';
import { connect } from 'react-redux';
import Friendship from './friendship';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    createFriendship: (id) => dispatch(createFriendship(id)),
    destroyFriendship: (id) => dispatch(destroyFriendship(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friendship));