import React from 'react';
import PostsAllComponents from '../posts/posts_all_components';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchUsers().then(() => this.props.fetchPosts());
    }

    render() {
      return (
        <div className="full-feed">
          <div className="feed-links">
            <Link className="feed-link" to={`/home/users/${this.props.currentUser.id}`}><div className="feed-pic-container"><img className="feed-profile-pic" src={this.props.currentUser.profile_pic_url}/></div></Link>
            <Link className="feed-link" to={`/home/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</Link>
            <p>Enjoying Fakebook? Interested in knowing what features are on the horizon? Get in touch with me, David Anderson, via the links below.</p>
            <ul>
              <li><a href="mailto:dlande000@gmail.com">Email</a></li><br/>
              <li><a href="http://davidanderson.nyc">Portfolio</a></li><br/>
              <li><a href="http://www.linkedin.com/in/david-anderson-7bb543101/">LinkedIn</a></li><br/>
              <li><a href="http://github.com/dlande000">GitHub</a></li><br/>
              <li><a href="#"></a>AngelList</li>
            </ul>
          </div>
          <div className="feed">
            <PostsAllComponents user={this.props.currentUser} createPost={this.props.createPost} correctReceivers={this.props.correctReceivers} posts={this.props.posts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser}/>
          </div>
        </div>
      )
    };
  }

export default Feed;
