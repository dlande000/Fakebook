import React from 'react';

class Post extends React.Component {
    render() {

        

    return (
        <div>
            <h6>{}</h6>
            <p>{this.props.post.body}<p>
            <h3>end of post</h3>
        </div>
        )
    }
}

export default Post;