import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match: { params: { userId } } } = this.props;
        this.props.fetchUsers().then(() => this.props.fetchUser(userId)).then(() => this.render());
    }

    render() {
    if (this.props.user) {
    return (
        <div>
            <h1>Did this work?</h1>
            <h6>{this.props.user.first_name} {this.props.user.last_name}</h6>
        </div>
        );
    } else {
        return (
            <div></div>
        )
    }
    }
}

export default Profile;