import React from 'react';

class Post extends React.Component {
    render() {

    const receiver = this.props.users[this.props.post.receiverId];
    const author = this.props.users[this.props.post.authorId];
    let authorName = `${author.first_name} ${author.last_name}`;
    let receiverName = `${receiver.first_name} ${receiver.last_name}`

    let authorAndReceiver;
    if (author.id === receiver.id) {
        authorAndReceiver = () => (<h6 className="post-authors">{authorName}</h6>);
    } else {
        authorAndReceiver = () => (<h6 className="post-authors">{authorName}   <b>&#9658;</b>   {receiverName}</h6>);
    }

    let createdAndEdited;
    if (this.props.createdAt === this.props.updatedAt) {
        createdAndEdited = `${new Date(this.props.post.createdAt).toDateString()}`;
    } else {
        createdAndEdited = `Created at ${this.props.post.createdAt}; edited at ${this.props.post.updatedAt}`;
    }

    return (
        <div className="post">
            <div className="post-image-container">
                <img className="post-image" src={author.profile_pic_url}/>
            </div>
            {authorAndReceiver()}
            <p className="post-created">{createdAndEdited}</p>
            <p className="post-body">{this.props.post.body}</p>
        </div>
        )
    }
}

export default Post;