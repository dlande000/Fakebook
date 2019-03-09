import React from 'react';
import CommentsAllComponents from './comments_all_components';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.likedIds = [];
        this.props.post.likes.forEach(like => {
            this.likedIds.push(like.userId);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.likedIds.includes(this.props.currentUser.id)) {
            this.props.deleteLike(postId);
        } else {
            this.props.createLike(postId);
        }
    }

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

    let likes;
    if (this.props.post.likes.length === 0) {
        likes = (
            <div></div>
        )
    } else if (this.props.post.likes.length === 1) {
        likes = (
            <div>
                <p>1 Like</p>
            </div>
        )
    } else {
        likes = (
            <div>
                <p>{this.props.post.likes.length} Likes</p>
            </div>
        )
    }

    let comments;
    if (this.props.post.comments.length === 0) {
        comments = (
            <div></div>
        )
    } else if (this.props.post.comments.length === 1) {
        comments = (
            <div>
                <p>1 Comment</p>
            </div>
        )
    } else {
        comments = (
            <div>
                <p>{this.props.post.comments.length} Comments</p>
            </div>
        )
    }

    let liked;
    if (!this.likedIds.includes(this.props.currentUser.id)) {
        liked = (
            <div>
                <a onClick={this.handleSubmit} href=""><img width="40px" src="https://image.flaticon.com/icons/png/512/39/39794.png" alt=""/> Like</a>
            </div>
        )
    } else {
        liked = (<div>
            <a onClick={this.handleSubmit} href=""><img width="40px" src="https://cdn.designcrowd.com/blog/2016/March/icons-vs-logos/FBLike-Icon_300_v2.png" alt=""/> Like</a>
        </div>
        )
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
            <div className="line-holder">
                <hr className="post-horizontal-line"/>
            </div>
            <div>
                {likes}
                {comments}
            </div>
            <div className="line-holder">
                <hr className="post-horizontal-line"/>
            </div>
            <div>
                <div>
                    {liked}
                </div>
                <div>
                    <a href=""><img width="40px" src="https://www.shareicon.net/download/2015/08/14/85004_comments_512x512.png" alt=""/> Comment</a>
                </div>
            </div>
            <div className="comments-all-components">
                <CommentsAllComponents createComment={this.props.createComment} post={this.props.post} users={this.props.users} currentUser={this.props.currentUser}/>
            </div>
        </div>
        )
    }
}

export default Post;