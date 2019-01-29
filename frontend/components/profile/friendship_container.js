import { createFriendship, confirmFriendship, destroyFriendship } from '../../actions/friendships_actions';
import { connect } from 'react-redux';
import Friendship from './friendship';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    createFriendship: () => dispatch(createFriendship()),
    destroyFriendship: () => dispatch(destroyFriendship())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Friendship));

// FINISH WORKING ON MAP DISPATCH