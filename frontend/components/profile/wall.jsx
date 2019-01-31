import React from 'react';
import PostsAllComponents from '../posts/posts_all_components';

class Wall extends React.Component {
    render() {

    return (
        <div>
            <PostsAllComponents posts={this.props.posts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser}/>
        </div>
        )
    }
}

export default Wall;