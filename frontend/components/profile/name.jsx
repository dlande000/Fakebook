import React from 'react';

class UserName extends React.Component {

    render() {
    return (
        <div>
            <h2 className="profile-name">{this.props.firstName} {this.props.lastName}</h2>
        </div>
        );
    }
}

export default UserName;