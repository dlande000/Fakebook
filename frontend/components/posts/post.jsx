import React from 'react';
import CommentsAllComponents from './comments_all_components';
import { Link } from 'react-router-dom';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openDropDown: false,
            openEditForm: false,
            initialBody: this.props.post.body,
            body: this.props.post.body
        };
        this.handleSubmitLike = this.handleSubmitLike.bind(this);
        this.handleSubmitPost = this.handleSubmitPost.bind(this);
        this.checkLikedIds = this.checkLikedIds.bind(this);
        this.findCommentForm = this.findCommentForm.bind(this);
        this.openEditMenu = this.openEditMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
    }

    checkLikedIds() {
        let likedIds = [];
        this.props.post.likes.forEach(like => {
            likedIds.push(like.userId);
        });
        return likedIds.includes(this.props.currentUser.id);
    }

    update() {
        return e => this.setState({
          body: e.target.value
        });
    }

    handleSubmitLike(e) {
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

    componentDidUpdate(oldProps) {
        if (this.props.post.body !== oldProps.post.body) {
          this.setState({ body: this.props.post.body, initialBody: this.props.post.body });
        }
      }

    handleSubmitPost(e) {
        e.preventDefault();
        this.props.fetchPost(this.props.post.id, { body: this.state.body, receiver_id: this.props.post.receiverId });
        this.setState({
          openEditForm: false,
          initialBody: this.state.body
        });
    }

    openEditMenu() {
        this.setState({ openDropDown: !this.state.openDropDown });
    }

    handleClick(value) {
        this.setState({ openDropDown: false });
        if (value === "edit") {
          this.setState({ openEditForm: true });
        } else if (value === "delete") {
          this.props.deletePost(this.props.post.id);
        } else if (value === "cancel") {
          this.setState({ body: this.state.initialBody, openEditForm: false });
        }
    }

    findCommentForm() {
        const commentForm = document.getElementById(`comment-form-${this.props.post.id}`);
        commentForm.focus();
    }

    render() {

        const receiver = this.props.users[this.props.post.receiverId];
        const author = this.props.users[this.props.post.authorId];
        let authorName = `${author.first_name} ${author.last_name}`;
        let receiverName = `${receiver.first_name} ${receiver.last_name}`;

        let postEditForm = (<div></div>)
        if (this.state.openEditForm === true) {
          postEditForm = (<div className="edit-form">
            <div className="edit-form-container">
              <div className="edit-form-header">
                <div className="edit-form-header-icon">
                  <img className="edit-form-icon" src="https://image.flaticon.com/icons/svg/39/39681.svg" alt=""/>
                </div>
                <h4>Edit Post</h4>
              </div>
              <div className="full-edit-form">
                <div id="edit-post-image" className="post-image-container">
                  <img className="post-image" src={this.props.currentUser.profile_pic_url}/>
                </div>
                <form className="edit-form-all" onSubmit={this.handleSubmitPost}>
                  <textarea onChange={this.update()} value={this.state.body}></textarea><br/>
                  <hr id="horizontal-line-edit-form"/>
                  <button className="edit-form-button" type="submit" value="Post">Submit</button>
                  <button className="edit-form-button" onClick={() => this.handleClick("cancel")}>Cancel</button>
                </form>
              </div>
            </div>
          </div>)
        }

        let editMenu = (<div></div>);
        if (this.state.openDropDown === true) {
          if (this.props.post.authorId === this.props.currentUser.id) {
            editMenu = (
              <ul className="edit-post-menu">
                <div onClick={() => this.handleClick("edit")} className="edit-post-option">
                  <div className="edit-post-menu-icon-div">
                    <img className="edit-post-menu-icon" src="https://static.thenounproject.com/png/75540-200.png" alt=""/>
                  </div>
                  <li>Edit...</li>
                </div>
                <div onClick={() => this.handleClick("delete")} className="edit-post-option">
                  <div className="edit-post-menu-icon-div">
                    <img className="edit-post-menu-icon" src="https://static.thenounproject.com/png/3058-200.png" alt=""/>
                  </div>
                  <li>Delete...</li>
                </div>
              </ul>
            )
          } else if (this.props.currentUser.id === this.props.post.receiverId ) {
            editMenu = (
              <ul className="edit-post-menu">
                <div onClick={() => this.handleClick("delete")} className="edit-post-option">
                  <div className="edit-post-menu-icon-div">
                    <img className="edit-post-menu-icon"src="https://static.thenounproject.com/png/3058-200.png" alt=""/>
                  </div>
                  <li>Delete...</li>
                </div>
              </ul>
            )
          }
        }

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
            editIcon = () => (<img onClick={this.openEditMenu} className="edit-icon" src="https://static.thenounproject.com/png/93425-200.png" alt=""/>)
        } else {
            editIcon = () => {};
        }

        let postPhoto;
        if (this.props.post.photoUrl.length !== 0) {
            postPhoto = (
              <img src={this.props.post.photoUrl} alt=""/>
            )
        } else {
            postPhoto = (
              <div></div>
            )
        }

        let likes;
        if (this.props.post.likes.length === 0) {
            likes = (
                <div></div>
            )
        } else {
            likes = (
                <div className="number-of-likes-post">
                    <img className="like-text-icon" src="https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like.png?resize=300%2C300" alt=""/> <p>{this.props.post.likes.length}</p>
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
                    <a onClick={this.handleSubmitLike} href=""><img id="unliked-icon-post" src="http://cdn.onlinewebfonts.com/svg/img_552457.png" alt=""/> <div id="align-vertical">Like</div></a>
                </div>
            )
        } else if (this.checkLikedIds()) {
            liked = (
                <div className="like-post-icon-div">
                    <a id="liked-link-text-color" onClick={this.handleSubmitLike} href=""><img id="liked-icon-post" src="https://requestreduce.org/images/facebook-clipart-transparent-background-25.jpg" alt=""/> <div id="align-vertical">Like</div></a>
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
                {editMenu}
                {postEditForm}
                {postPhoto}
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
                        <a onClick={this.findCommentForm}><img id="comment-icon-post" src="https://www.shareicon.net/download/2015/08/14/85004_comments_512x512.png" alt=""/> <div id="align-vertical-comment">Comment</div></a>
                    </div>
                </div>
                <div className="line-holder">
                    <hr className="post-horizontal-line"/>
                </div>
                <div className="comments-all-components">
                    <CommentsAllComponents
                        createLike={this.props.createLike}
                        deleteLike={this.props.deleteLike}
                        createComment={this.props.createComment}
                        post={this.props.post}
                        users={this.props.users}
                        currentUser={this.props.currentUser}
                        updateComment={this.props.updateComment}
                        deleteComment={this.props.deleteComment}
                        />
                </div>
            </div>
        )
    }
}

export default Post;