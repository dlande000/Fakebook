import React from 'react';
import PostsAllComponents from '../posts/posts_all_components';

class Wall extends React.Component {

    render() {
    return (
        <div className="wall">
            <PostsAllComponents createLike={this.props.createLike} deleteLike={this.props.deleteLike} createComment={this.props.createComment} user={this.props.user} createPost={this.props.createPost} correctReceivers={[this.props.user.id]} posts={this.props.posts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser}/>
        </div>
        )
    }
}

export default Wall;