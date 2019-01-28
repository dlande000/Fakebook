import React from 'react';

class ProfileLink extends React.Component {

    render() {
    return (
        <div className="profile-link-container">
            <nav className="profile-links">
                <a className="profile-link" href="#">Timeline</a>
                <a className="profile-link" href="#">Friends</a>
            </nav>
        </div>
        );
    }
}

export default ProfileLink;