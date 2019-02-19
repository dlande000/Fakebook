import React from 'react';
import PostsAllComponents from '../posts/posts_all_components';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      // const { match: { params: { userId } } } = this.props;
      this.props.fetchUsers().then(() => this.props.fetchPosts());
      // this.render();
    }

    render() {
      debugger
      return (
        <div className="feed">
          <PostsAllComponents user={this.props.currentUser} createPost={this.props.createPost} correctReceivers={[this.props.correctReceivers]} posts={this.props.posts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser}/>
        </div>
      )
    };
  }

export default Feed;
