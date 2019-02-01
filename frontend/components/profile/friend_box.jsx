import React from 'react';
import FriendAvatar from './friend_avator';

class FriendBox extends React.Component {

    render() {

    let ids;

    if (this.props.friendIds.length >= 9) {
        ids = this.props.friendIds.slice(0, 9);
    } else {
        ids = this.props.friendIds;
    }
    
    const friends = ids.map(id => {
        return <FriendAvatar key={id} id={id} users={this.props.users}/>
    });

    return (
        <div className="friend-header">
        <img className="friend-image" src="https://pngimage.net/wp-content/uploads/2018/05/facebook-friends-icon-png-2.png"/>
            <p className="friend-header-text"><b>Friends</b> · {this.props.friendIds.length}</p>
            <div className="friend-box">
                {friends}
            </div>
        </div>
    )}
}

export default FriendBox;