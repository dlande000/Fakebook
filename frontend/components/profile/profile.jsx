import React from 'react';
import UserBio from './user_bio';
import UserName from './name';
import MiscInfo from './misc_info';
import ProfilePic from './profile_picture';
import BannerPic from './banner_picture';
import ProfileLink from './profile_link';
import FriendBox from './friend_box';
import FriendshipContainer from './friendship_container';
import Wall from './wall';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match: { params: { userId } } } = this.props;
        this.props.fetchUsers().then(() => this.props.fetchUser(userId));
        this.props.fetchPosts();
    }

    componentDidUpdate(oldProps) {
        if (this.props.match.params.userId !== oldProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    render() {
    if (Object.values(this.props.posts).length !== 0) {
    let friendshipStatus;
    if (this.props.currentUser.friendIds.includes(Number(this.props.match.params.userId))) {
        friendshipStatus = "Friends";
    } else if (this.props.currentUser.pendingSentFriendIds.includes(Number(this.props.match.params.userId))) {
        friendshipStatus = "Pending";
    } else if (this.props.currentUser.id == this.props.match.params.userId) {
        friendshipStatus = "Profile";
    } else {
        friendshipStatus = "Add Friend";
    }

    return (
        <div className="full-profile">
            <BannerPic bannerPic={this.props.user.banner_pic_url} />
            <ProfilePic profilePic={this.props.user.profile_pic_url} />
            <UserName firstName={this.props.user.first_name} lastName={this.props.user.last_name} />
            <FriendshipContainer status={friendshipStatus}/>
            <ProfileLink />
            <div className="info-box">
                <h5>Intro</h5>
                <UserBio bio={this.props.user.bio} />
                <MiscInfo hometown={this.props.user.hometown} currentCity={this.props.user.current_city} birthday={this.props.user.birthdate} />
            </div>
            <FriendBox friendIds={this.props.user.friendIds} users={this.props.users}/>
            <Wall posts={this.props.posts} friendIds={this.props.user.friendIds} users={this.props.users} currentUser={this.props.currentUser}/>
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