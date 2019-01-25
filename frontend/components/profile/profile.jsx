import React from 'react';
import UserBio from './user_bio';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match: { params: { userId } } } = this.props;
        this.props.fetchUsers().then(() => this.props.fetchUser(userId));
    }

    componentDidUpdate(oldProps) {
        if (this.props.match.params.userId !== oldProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    render() {
    if (this.props.user) {
    return (
        <div>
            <h1>Did this work?</h1>
            <UserBio bio={this.props.user.bio} />
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