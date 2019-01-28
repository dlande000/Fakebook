import React from 'react';

class ProfilePic extends React.Component {

    render() {
    return (
        <div className="profile-pic-container">
            <img className="profile-pic" src={this.props.profilePic}/>
        </div>
        );
    }
}

export default ProfilePic;