import React from 'react';

class ProfileLink extends React.Component {

    render() {
    return (
        <div className="profile-link-container">
            <nav className="profile-links">
                <div>
                    <a className="profile-link" href="#">Timeline</a>
                </div>
                <div>
                    <a className="profile-link" href="#">Friends</a>
                </div>
            </nav>
        </div>
        );
    }
}

export default ProfileLink;