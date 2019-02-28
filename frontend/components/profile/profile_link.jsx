import React from 'react';
import { Link, Route } from 'react-router-dom';

class ProfileLink extends React.Component {

    render() {
        debugger
    return (
        <div className="profile-link-container">
            <nav className="profile-links">
                <div>
                    <Link className="profile-link" to={`/home/users/${this.props.user.id}`}>Timeline</Link>
                </div>
                <div>
                    <Link className="profile-link" to={`/home/users/${this.props.user.id}`}>Friends</Link>
                    <Route exact path='/home/users/:userId/friends' component={FriendsViewContainer} />
                </div>
            </nav>
        </div>
        );
    }
}

export default ProfileLink;