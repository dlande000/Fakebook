import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          body: '',
          receiver_id: '',
          photoFile: null,
          photoUrl: null
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.append('post[receiver_id]', this.state.receiver_id);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData);
        this.setState({
            body: '',
            receiver_id: '',
            photoFile: null,
            photoUrl: null
        });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
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

        let preview = this.state.photoUrl ? <img className="preview-image" src={this.state.photoUrl}></img> : null;

        return (
            <div className="post-form">
                <div className="post-form-top">
                    <div>
                        <img className="pencil-post-image" src={window.pencilIcon}/>
                        <h6 className="post-form-header">Create Post</h6>
                    </div>
                </div>
                <div className="forced-background">
                    <div id="post-image-form" className="post-image-container">
                        <img className="post-image" src={this.props.currentUser.profile_pic_url}/>
                    </div>
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <textarea onKeyDown={this.checkSubmit} className="post-form-body" onChange={this.update('body')} placeholder={placeholderText} value={this.state.body}></textarea>
                    <div className="preview-div">
                        {preview}
                    </div>
                    <div className="post-form-footer">
                    <div className="photo-file-div">
                        <input type="file" name="photo-file" id="photo-file" className="photo-file" onChange={this.handleFile} />
                        <label htmlFor='photo-file'>
                            <img className="pencil-post-image" src={window.cameraIcon} />
                            <h6 className="post-form-header" id="photo-header">Add a Photo</h6>
                        </label>
                    </div>
                    <input className="post-form-submit-button" type="submit" value="Post" />
                    </div>
                </form>
            </div>
        )
    } 
}

export default PostForm;