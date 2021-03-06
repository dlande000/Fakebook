import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmitLike = this.handleSubmitLike.bind(this);
    this.checkLikedIds = this.checkLikedIds.bind(this);
    this.state = {
      openDropDown: false,
      openEditForm: false,
      initialBody: this.props.comment.body,
      body: this.props.comment.body
    };
    this.openEditMenu = this.openEditMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  checkLikedIds() {
    let likedIds = [];
    this.props.comment.likes.forEach(like => {
        likedIds.push(like.userId);
    });
    return likedIds.includes(this.props.currentUser.id);
  }

  componentDidUpdate(oldProps) {
    if (this.props.comment.body !== oldProps.comment.body) {
      this.setState({ body: this.props.comment.body, initialBody: this.props.comment.body });
    }
  }

  update() {
    return e => this.setState({
      body: e.target.value
    });
  }

  handleSubmitLike(e) {
    e.preventDefault();
    if (!this.checkLikedIds()) {
        this.props.createLike({like: {likeable_id: this.props.comment.id, likeable_type: "Comment"}});
    } else {
        let likeId;
        this.props.comment.likes.forEach(like => {
            if (like.userId == this.props.currentUser.id) {
                likeId = like.likeId;
            }
        });
        this.props.deleteLike({id: likeId});
    }
  }

  handleSubmitComment(e) {
    e.preventDefault();
    this.props.updateComment(this.props.comment.id, {body: this.state.body, postId: this.props.postId });
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
      this.props.deleteComment(this.props.comment.id);
    } else if (value === "cancel") {
      this.setState({ body: this.state.initialBody, openEditForm: false });
    }
  }

  render() {
    
      const author = (<Link className="comment-author" to={`/home/users/${this.props.comment.authorId}`}>
          {this.props.users[this.props.comment.authorId].first_name} {this.props.users[this.props.comment.authorId].last_name}
        </Link>
      );

      let commentEditForm = (<div></div>)
      if (this.state.openEditForm === true) {
        commentEditForm = (<div className="edit-form">
          <div className="edit-form-container">
            <div className="edit-form-header">
              <div className="edit-form-header-icon">
                <img className="edit-form-icon" src={window.editIcon} alt=""/>
              </div>
              <h4>Edit Comment</h4>
            </div>
            <div className="full-edit-form">
              <div id="edit-post-image" className="post-image-container">
                <img className="post-image" src={this.props.currentUser.profile_pic_url}/>
              </div>
              <form className="edit-form-all" onSubmit={this.handleSubmitComment}>
                <textarea onChange={this.update()} value={this.state.body}></textarea><br/>
                <hr id="horizontal-line-edit-form"/>
                <button className="edit-form-button" type="submit" value="Post">Submit</button>
                <button className="edit-form-button" onClick={() => this.handleClick("cancel")}>Cancel</button>
              </form>
            </div>
          </div>
        </div>)
      }

      let commentEditIcon = (<div></div>);
      if (this.props.comment.authorId === this.props.currentUser.id || this.props.currentUser.id === this.props.postAuthorId || this.props.currentUser.id === this.props.postReceiverId) {
        commentEditIcon = (<div className="edit-icon-comment-div">
          <img onClick={this.openEditMenu} src={window.editIcon} alt=""/>
        </div>)
      }

      let editMenu = (<div></div>);
      if (this.state.openDropDown === true) {
        if (this.props.comment.authorId === this.props.currentUser.id) {
          editMenu = (
            <ul className="edit-comment-menu">
              <div onClick={() => this.handleClick("edit")} className="edit-option">
                <div className="edit-comment-menu-icon-div">
                  <img className="edit-comment-menu-icon" src={window.editIcon} alt=""/>
                </div>
                <li>Edit...</li>
              </div>
              <div onClick={() => this.handleClick("delete")} className="edit-option">
                <div className="edit-comment-menu-icon-div">
                  <img className="edit-comment-menu-icon" src={window.editIcon} alt=""/>
                </div>
                <li>Delete...</li>
              </div>
            </ul>
          )
        } else if (this.props.currentUser.id === this.props.postAuthorId || this.props.currentUser.id === this.props.postReceiverId) {
          editMenu = (
            <ul className="edit-comment-menu">
              <div onClick={() => this.handleClick("delete")} className="edit-option">
                <div className="edit-comment-menu-icon-div">
                  <img className="edit-comment-menu-icon"src={window.editIcon} alt=""/>
                </div>
                <li>Delete...</li>
              </div>
            </ul>
          )
        }
      }

      const periods = {
        year: 365 * 30 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000
      };

      let time = ((new Date()) - (new Date(this.props.comment.created_at)))
  
      function formatTime(time) {
        if (time > periods.year) {
            return Math.floor(time / periods.year) + "y";
        } else if (time > periods.month) {
          return Math.floor(time / periods.month) + "mon";
        } else if (time > periods.week) {
          return Math.floor(time / periods.week) + "w";
        } else if (time > periods.day) {
          return Math.floor(time / periods.day) + "d";
        } else if (time > periods.hour) {
          return Math.floor(time / periods.hour) + "h";
        } else if (time > periods.minute) {
          return Math.floor(time / periods.minute) + "m";
        } else {
        return "Just now";
        }
      }

      const timeAgoComment = (<p className="time-comment">{formatTime(time)}</p>)

      let commentLikesNumber;
      if (this.props.comment.likes.length > 0) {
        commentLikesNumber = (
          <div className="comment-number-liked">
            <img src={window.likeCircle} alt=""/> <p>{this.props.comment.likes.length}</p>
          </div>)
      } else {
        commentLikesNumber = (<div></div>);
      }

      let isCommentLiked;
      let commentLikedId = [];
      this.props.comment.likes.forEach(like => {
        commentLikedId.push(like.userId);
      })

      if (commentLikedId.includes(this.props.currentUser.id)) {
        isCommentLiked = "user-liked-comment";
      } else {
        isCommentLiked = "user-not-liked-comment";
      }

      return (
        <div className="comment">
          <div className="comment-image-container">
            <img className="comment-image" src={this.props.users[this.props.comment.authorId].profile_pic_url} alt=""/>
          </div>
          <div className="comment-body">
            <p className="comment-border">{author} {this.props.comment.body}</p>
            {commentLikesNumber}
          </div>
          {commentEditIcon}
          {editMenu}
          {commentEditForm}
          <div className="beneath-comment-text">
            <a className="comment-like-link" id={isCommentLiked} onClick={this.handleSubmitLike} href="">Like</a>
            {timeAgoComment}
          </div>
        </div>
      )
    }
}

export default Comment;