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
        this.state = {
            rerender: true
        };
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        const { match: { params: { userId } } } = this.props;
        this.props.fetchUsers().then(() => this.props.fetchUser(userId));
        this.props.fetchPosts();
    }

    componentDidUpdate(oldProps) {
        if (this.props.match.params.userId !== oldProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    update() {
        this.setState({rerender: !this.state.rerender});
        this.render();
    }

    render() {
        if (Object.values(this.props.posts).length !== 0 && !!this.props.user && Object.keys(this.props.users).length > 1) {
            let wall;
        if (this.props.match.params.userId == this.props.currentUser.id || this.props.user.friendIds.includes(this.props.currentUser.id)) {
            wall = () => (<Wall
                createLike={this.props.createLike}
                deleteLike={this.props.deleteLike}
                createComment={this.props.createComment}
                updateComment={this.props.updateComment}
                deleteComment={this.props.deleteComment}
                createPost={this.props.createPost}
                fetchPost={this.props.fetchPost}
                deletePost={this.props.deletePost}
                user={this.props.user}
                posts={this.props.posts}
                friendIds={this.props.user.friendIds}
                users={this.props.users}
                currentUser={this.props.currentUser}/>);
        } else {
            wall = () => {};
        }

        return (
            <div className="full-profile">
                <BannerPic bannerPic={this.props.user.banner_pic_url} />
                <ProfilePic profilePic={this.props.user.profile_pic_url} />
                <UserName firstName={this.props.user.first_name} lastName={this.props.user.last_name} />
                <FriendshipContainer callback={this.update}/>
                <ProfileLink user={this.props.users[this.props.match.params.userId]}/>
                <div className="profile-left">
                    <div className="info-box">
                    <img className="bio-globe-image" src={window.globeIcon}/><h5>Intro</h5>
                    <UserBio bio={this.props.user.bio} />
                    <hr className="bio-horizontal-line"/>
                    <MiscInfo hometown={this.props.user.hometown} currentCity={this.props.user.current_city} birthday={this.props.user.birthdate} />
                    </div>
                    <FriendBox friendIds={this.props.user.friendIds} users={this.props.users}/>
                </div>
                <div>
                    {wall()}
                </div>
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