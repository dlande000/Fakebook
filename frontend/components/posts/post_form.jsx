import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          body: '',
          receiver_id: '',
          photoFile: null
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.append('post[receiver_id]', this.state.receiver_id);
        formData.append('post[photo]', this.state.photoFile);
        this.props.createPost(formData);
        this.setState({
            body: '',
            receiver_id: ''
        });
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    update(value) {
        return e => this.setState({
          [value]: e.target.value, receiver_id: this.props.user.id
        });
    }

    checkSubmit(e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            this.handleSubmit(e);
        }
    }

    render() {
        let placeholderText;
        if (this.props.user.id === this.props.currentUser.id) {
            placeholderText = "What's on your mind?";
        } else {
            placeholderText =  `Write something to ${this.props.user.first_name} ...`;
        }

        return (
            <div className="post-form">
                <div className="post-form-top">
                    <img className="pencil-post-image" src="https://image.flaticon.com/icons/svg/39/39681.svg"/>
                    <h6 className="post-form-header">Create Post</h6>
                </div>
                <div className="forced-background">
                <div id="post-image-form" className="post-image-container">
                    <img className="post-image" src={this.props.currentUser.profile_pic_url}/>
                </div>
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <textarea onKeyDown={this.checkSubmit} className="post-form-body" onChange={this.update('body')} placeholder={placeholderText} value={this.state.body}></textarea>
                    <input type="file" onChange={this.handleFile.bind(this)}></input>
                    <input className="post-form-submit-button" type="submit" value="Post" />
                </form>
            </div>
        )
    } 
}

export default PostForm;