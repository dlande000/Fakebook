import React from 'react';
import Profile from './profile';

class Friendship extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.user.friendIds.includes(this.props.currentUser.id)) {
            this.props.destroyFriendship(this.props.user.id).then(() => this.props.fetchUser(this.props.user.id)).then(() => this.props.callback());
        } else if (this.props.user.pendingFriendIds.includes(this.props.currentUser.id)) {
            this.props.destroyFriendship(this.props.user.id).then(() => this.props.fetchUser(this.props.user.id)).then(() => this.props.callback());
        } else if (this.props.currentUser.id != this.props.user.id) {
            this.props.createFriendship(this.props.user.id).then(() => this.props.fetchUser(this.props.user.id)).then(() => this.props.callback());
        } 
    }

    render() {
        if (this.props.user && this.props.currentUser) {
            let friendshipStatus;
            if (this.props.user.friendIds.includes(this.props.currentUser.id)) {
                friendshipStatus = "Friends";
            } else if (this.props.user.pendingFriendIds.includes(this.props.currentUser.id)) {
                friendshipStatus = "Pending";
            } else if (this.props.user.id == this.props.currentUser.id) {
                friendshipStatus = "Profile";
            } else {
                friendshipStatus = "Add Friend";
            }

            return (
                <div>
                    <button className="friendship" onClick={this.handleSubmit.bind(this)}>{friendshipStatus}</button>
                </div>
        )} else {
            return (
                <div></div>
            )
        }
}}

export default Friendship;