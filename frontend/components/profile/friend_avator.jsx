import React from 'react';
import { Link } from 'react-router-dom';

class FriendAvatar extends React.Component {

    render() {
    const friend = this.props.users[this.props.id];
    const route = `/home/users/${this.props.id}`;
    const fullName = `${friend.first_name} ${friend.last_name}`;
    
    return (
        <div className="friend-avatar-container">
            <Link to={route}>
                <h6 className="friend-avatar-name">{fullName}</h6>
                <img className="friend-avatar-image" src={friend.profile_pic_url}/>
            </Link>
        </div>
        )}
}

export default FriendAvatar;