import React from 'react';
import FriendAvatar from './friend_avator';

class FriendBox extends React.Component {

    render() {
    
    const friends = this.props.friendIds.map(id => {
        return <FriendAvatar key={id} id={id} users={this.props.users}/>
    });

    return (
        <div className="friend-box">
            {friends}
        </div>
        )}
}

export default FriendBox;