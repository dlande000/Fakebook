import React from 'react';
import PostForm from './post_form';
import Posts from './posts';

class PostsAllComponents extends React.Component {

    // fetchPosts={this.props.fetchPosts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser}

    render() {
    return (
        <div>
            <PostForm />
            <Posts posts={this.props.posts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser}/>
        </div>
        )
    }
}

export default PostsAllComponents;