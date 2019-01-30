import React from 'react';

class Friendship extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.status === "Friends") {
            this.props.destroyFriendship(this.props.user.id);
        } else if (this.props.status === "Pending") {
            this.props.destroyFriendship(this.props.user.id);
        } else if (this.props.status === "Add Friend") {
            this.props.createFriendship(this.props.user.id);
        }
    }

    render() {
    return (
        <div>
            <button className="friendship" onClick={this.handleSubmit.bind(this)}>{this.props.status}</button>
        </div>
    )}
}

export default Friendship;