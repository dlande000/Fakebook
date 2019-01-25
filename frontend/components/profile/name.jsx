import React from 'react';

class UserName extends React.Component {

    render() {
    return (
        <div>
            <h6>{this.props.firstName} {this.props.lastName}</h6>
        </div>
        );
    }
}

export default UserName;