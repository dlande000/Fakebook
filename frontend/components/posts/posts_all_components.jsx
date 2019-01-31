import React from 'react';
import PostForm from './post_form';
import Posts from './posts';

class PostsAllComponents extends React.Component {
    render() {
    return (
        <div>
            <PostForm />
            <Posts />
        </div>
        )
    }
}

export default PostsAllComponents;