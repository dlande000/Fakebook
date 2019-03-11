import React from 'react';
import CommentsAllComponents from './comments_all_components';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkLikedIds = this.checkLikedIds.bind(this);
    }

    checkLikedIds() {
        let likedIds = [];
        this.props.post.likes.forEach(like => {
            likedIds.push(like.userId);
        });
        return likedIds.includes(this.props.currentUser.id);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.checkLikedIds()) {
            this.props.createLike({like: {likeable_id: this.props.post.id, likeable_type: "Post"}});
        } else {
            let likeId;
            this.props.post.likes.forEach(like => {
                if (like.userId == this.props.currentUser.id) {
                    likeId = like.likeId;
                }
            });
            this.props.deleteLike({id: likeId});
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
    } else {
        likes = (
            <div className="number-of-likes-post">
                <img className="like-text-icon" src="https://cdn3.iconfinder.com/data/icons/social-icons-5/606/Like.png" alt=""/><p>{this.props.post.likes.length}</p>
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
            <div className="number-of-comments">
                <p>1 Comment</p>
            </div>
        )
    } else {
        comments = (
            <div className="number-of-comments">
                <p>{this.props.post.comments.length} Comments</p>
            </div>
        )
    }

    let liked;
    if (!this.checkLikedIds()) {
        liked = (
            <div className="like-post-icon-div">
                <a onClick={this.handleSubmit} href=""><img id="unliked-icon-post" src="http://cdn.onlinewebfonts.com/svg/img_552457.png" alt=""/> <div id="align-vertical">Like</div></a>
            </div>
        )
    } else if (this.checkLikedIds()) {
        liked = (<div className="like-post-icon-div">
            <a id="liked-link-text-color" onClick={this.handleSubmit} href=""><img id="liked-icon-post" src="https://requestreduce.org/images/facebook-clipart-transparent-background-25.jpg" alt=""/> <div id="align-vertical">Like</div></a>
        </div>
        )
    }

    let commentLink;
    if (this.props.type == "Feed") {
        commentLink = `#/home#comment-${this.props.post.id}`;
    } else {
        commentLink = `#/home/users/${receiver.id}#comment-${this.props.post.id}`;
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
            <div className="like-and-comment-text-div">
                {likes}
                {comments}
            </div>
            <div className="line-holder">
                <hr className="post-horizontal-line"/>
            </div>
            <div className="like-and-comment-icons-div">
                <div>
                    {liked}
                </div>
                <div className="comment-post-icon-div">
                    <a href="javascript:void(0);"><img id="comment-icon-post" src="https://www.shareicon.net/download/2015/08/14/85004_comments_512x512.png" alt=""/> <div id="align-vertical-comment">Comment</div></a>
                </div>
            </div>
            <div className="line-holder">
                <hr className="post-horizontal-line"/>
            </div>
            <div className="comments-all-components">
                <CommentsAllComponents createComment={this.props.createComment} post={this.props.post} users={this.props.users} currentUser={this.props.currentUser}/>
            </div>
        </div>
        )
    }
}

export default Post;