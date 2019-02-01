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
        <div>
            <h6>Create Post</h6>
            <form onSubmit={this.handleSubmit}>
            <textarea name="" id="" cols="30" rows="10" onChange={this.update('body')} placeholder="ass" value={this.state.body}></textarea>
            <input type="submit" value="Post" />
            </form>
        </div>
        )
    }
}

export default PostForm;