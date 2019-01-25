import React from 'react';
import UserBio from './user_bio';
import UserName from './name';
import MiscInfo from './misc_info';

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
            <img src={this.props.user.profile_pic_url}/>
            <UserName firstName={this.props.user.first_name} lastName={this.props.user.last_name} />
            <UserBio bio={this.props.user.bio} />
            <MiscInfo hometown={this.props.user.hometown} currentCity={this.props.user.current_city} birthday={this.props.user.birthdate} />
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