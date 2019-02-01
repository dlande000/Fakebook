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
        createdAndEdited = `Created at ${new Date(this.props.post.createdAt)}`;
    } else {
        createdAndEdited = `Created at ${this.props.post.createdAt}; edited at ${this.props.post.updatedAt}`;
    }

    return (
        <div className="post">
            <div className="post-image-container">
                <img className="post-image" src={author.profile_pic_url}/>
            </div>
            <h6 className="post-authors">{authorAndReceiver}</h6>
            <p className="post-created">{createdAndEdited}</p>
            <p className="post-body">{this.props.post.body}</p>
        </div>
        )
    }
}

export default Post;