import React from 'react';
import CommentsAllComponents from './comments_all_components';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    render() {

    const receiver = this.props.users[this.props.post.receiverId];
    const author = this.props.users[this.props.post.authorId];
    let authorName = `${author.first_name} ${author.last_name}`;
    let receiverName = `${receiver.first_name} ${receiver.last_name}`;

    let authorAndReceiver;
    if (author.id === receiver.id) {
        authorAndReceiver = () => (
            <div className="post-authors">
                <Link to={`/home/users/${this.props.post.authorId}`}>{authorName}</Link>
            </div>);
    } else {
        authorAndReceiver = () => (<div className="post-authors"><Link to={`/home/users/${this.props.post.authorId}`}>{authorName}</Link>   <b>&#9658;</b>   <Link to={`/home/users/${this.props.post.receiverId}`}>{receiverName}</Link></div>);
    }

    let createdAndEdited;
    if (this.props.createdAt === this.props.updatedAt) {
        createdAndEdited = `${new Date(this.props.post.createdAt).toDateString()}`;
    } else {
        createdAndEdited = `Created at ${this.props.post.createdAt}; edited at ${this.props.post.updatedAt}`;
    }

    let editIcon;
    if (this.props.currentUser.id == this.props.post.receiverId || this.props.currentUser.id == this.props.post.authorId) {
        editIcon = () => (<img className="edit-icon" src="https://static.thenounproject.com/png/93425-200.png" alt=""/>)
    } else {
        editIcon = () => {};
    }

    return (
        <div className="post">
            <div className="post-image-container">
                <img className="post-image" src={author.profile_pic_url}/>
            </div>
            {authorAndReceiver()}
            <p className="post-created">{createdAndEdited}</p>
            {editIcon()}
            <p className="post-body">{this.props.post.body}</p>
            <div>
                <CommentsAllComponents createComment={this.props.createComment} post={this.props.post} users={this.props.users} currentUser={this.props.currentUser}/>
            </div>
        </div>
        )
    }
}

export default Post;