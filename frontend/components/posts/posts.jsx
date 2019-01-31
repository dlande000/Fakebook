import React from 'react';
import Post from './post';

class Posts extends React.Component {
    render() {

    const postsArr = Object.values(this.props.posts);
    debugger
    const formattedPosts = postsArr.map((post, id) => {
        if (this.props.correctReceivers.includes(post.receiverId)) {
            return (<Post key={id} post={post} users={this.props.users}/>);
        }
    });

    return (
        <div>
            {formattedPosts}
        </div>
        )
    }
}

export default Posts;