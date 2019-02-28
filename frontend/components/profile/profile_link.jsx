import React from 'react';
import { Link, Route } from 'react-router-dom';
import FriendsViewContainer from './friends_view_container';
import ProfileContainer from './profile_container';

class ProfileLink extends React.Component {

    render() {
    return (
        <div className="profile-link-container">
            <nav className="profile-links">
                <div>
                    <Link className="profile-link" to={`/home/users/${this.props.user.id}`}>Timeline</Link>
                </div>
            </nav>
        </div>
        );
    }
}

export default ProfileLink;