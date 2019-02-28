import React from 'react';
import UserName from './name';
import ProfilePic from './profile_picture';
import BannerPic from './banner_picture';
import ProfileLink from './profile_link';
import FriendshipContainer from './friendship_container';

class FriendsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

    return (
        <div className="friend-view">
            <h1>DID this work the way I wanted?</h1>
        </div>
        );
    }
}

export default FriendsView;