import React from 'react';
import PostsAllComponents from '../posts/posts_all_components_container';

class Wall extends React.Component {
    render() {
    return (
        <div>
            <PostsAllComponents posts={this.props.getPostsForWall} fetchPosts={this.props.fetchPosts} createPost={this.props.createPost} updatePost={this.props.updatePost} deletePost={this.props.deletePost}/>
        </div>
        )
    }
}

export default Wall;