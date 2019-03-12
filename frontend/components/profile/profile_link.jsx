import React from 'react';
import { Link } from 'react-router-dom';

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