import React from 'react';

class Post extends React.Component {
    render() {

    const receiver = this.props.users[this.props.post.receiverId];
    const author = this.props.users[this.props.post.authorId];

    let authorAndReceiver;
    if (author.id === receiver.id) {
        authorAndReceiver = `${author.first_name} ${author.last_name}`;
    } else {
        authorAndReceiver = `${author.first_name} ${author.last_name} to ${receiver.first_name} ${receiver.last_name}`;
    }

    let createdAndEdited;
    if (this.props.createdAt === this.props.updatedAt) {
        createdAndEdited = `Created at ${this.props.post.createdAt}`;
    } else {
        createdAndEdited = `Created at ${this.props.post.createdAt}; edited at ${this.props.post.updatedAt}`
    }

    return (
        <div>
            <h6>{authorAndReceiver}</h6>
            <p>{this.props.post.body}</p>
            <p>{createdAndEdited}</p>
        </div>
        )
    }
}

export default Post;