import React from 'react';
import PostForm from './post_form';
import Posts from './posts';

class PostsAllComponents extends React.Component {
    render() {
        return (
            <div>
                <PostForm
                    user={this.props.user}
                    currentUser={this.props.currentUser}
                    createPost={this.props.createPost}
                />
                <Posts
                    type={this.props.type}
                    createLike={this.props.createLike}
                    deleteLike={this.props.deleteLike}
                    correctReceivers={this.props.correctReceivers}
                    posts={this.props.posts} friendIds={this.props.friendIds}
                    users={this.props.users} currentUser={this.props.currentUser}
                    createComment={this.props.createComment}
                />
            </div>
        )
    }
}

export default PostsAllComponents;