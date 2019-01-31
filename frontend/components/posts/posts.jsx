import React from 'react';
import Post from './post';

class Posts extends React.Component {
    render() {

    const postsArr = Object.values(this.props.posts);
    const formattedPosts = postsArr.map((post, id) => {
        return (<Post key={id} post={post}/>);
    });

    return (
        <div>
            {formattedPosts}
        </div>
        )
    }
}

export default Posts;