import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          body: '',
          post_id: this.props.postId
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({comment: this.state});
        this.setState({
            body: '',
            post_id: this.props.postId
        });
    }

    update(value) {
        return e => this.setState({
          [value]: e.target.value, post_id: this.props.postId
        });
}

    checkSubmit(e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            this.handleSubmit(e);
          }
    }

    render() {

    return (
        <div className="comment-form-container">
            <div className="comment-image-container">
                <img className="comment-image" src={this.props.currentUser.profile_pic_url} alt=""/>
          </div>
            <form className="comment-form">
                <textarea onKeyDown={this.checkSubmit} onChange={this.update('body')} placeholder="Write a comment..." value={this.state.body}></textarea>
            </form>
        </div>
        )
    } 
}

export default CommentForm;