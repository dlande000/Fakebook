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
            <p><b>Friends</b> {this.props.friendIds.length}</p>
            <div className="friend-box">
                {friends}
            </div>
        </div>
    )}
}

export default FriendBox;