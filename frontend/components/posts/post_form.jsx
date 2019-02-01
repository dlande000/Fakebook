import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          body: '',
          receiver_id: this.props.user.id
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost({post: this.state});
    }

    update(value) {
        return e => this.setState({
          [value]: e.target.value
        });
    }

    render() {
    return (
        <div className="post-form">
            <h6 className="post-form-header">Create Post</h6>
            <form onSubmit={this.handleSubmit}>
            <textarea className="post-form-body" onChange={this.update('body')} placeholder="Write a post ..." value={this.state.body}></textarea>
            <input className="post-form-submit-button" type="submit" value="Post" />
            </form>
        </div>
        )
    } 
}

export default PostForm;