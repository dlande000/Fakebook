import React from 'react';
import PostForm from './post_form';
import Posts from './posts';

class PostsAllComponents extends React.Component {

    render() {
        debugger
    return (
        <div>
            <PostForm user={this.props.user} currentUser={this.props.currentUser} createPost={this.props.createPost}/>
            <Posts correctReceivers={this.props.correctReceivers} posts={this.props.posts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser}/>
        </div>
        )
    }
}

export default PostsAllComponents;