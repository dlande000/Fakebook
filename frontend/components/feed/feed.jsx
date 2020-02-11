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
          <p>Enjoying Fakebook? Interested in knowing what features are on the horizon? Get in touch with me, David Anderson, via the links below:</p>
          <ul>
            <li>
              <img className="email-icon" src={window.mailIcon} alt=""/>       <a className="feeder" href="mailto:dlande000@gmail.com">Email</a>
            </li><br/>
            <li>
              <img className="portfolio-icon" src={window.portfolioIcon} alt=""/>       <a className="feeder" href="http://davidanderson.nyc">Portfolio</a>
            </li><br/>
            <li>
              <img className="linkedin-icon" src={window.linkedinIcon} alt=""/>       <a className="feeder" href="http://www.linkedin.com/in/david-anderson-7bb543101/">LinkedIn</a>
            </li><br/>
            <li>
              <img className="github-icon" src={window.githubIcon} alt=""/>       <a className="feeder" href="http://github.com/dlande000">GitHub</a>
            </li><br/>
            <li>
              <img className="angellist-icon" src={window.angellistIcon} alt=""/>     <a className="feeder-angellist" href="https://angel.co/david-anderson-109">AngelList</a>
            </li>
          </ul>
        </div>
        <div className="feed">
          <PostsAllComponents
            type={"Feed"}
            createLike={this.props.createLike}
            deleteLike={this.props.deleteLike}
            user={this.props.currentUser}
            createPost={this.props.createPost}
            fetchPost={this.props.fetchPost}
            deletePost={this.props.deletePost}
            correctReceivers={this.props.correctReceivers}
            posts={this.props.posts}
            friendIds={this.props.friendIds}
            users={this.props.users}
            currentUser={this.props.currentUser}
            createComment={this.props.createComment}
            updateComment={this.props.updateComment}
            deleteComment={this.props.deleteComment}
            />
        </div>
        <div className="feed-info">
          <h4>What is Fakebook?</h4>
          <p>Fakebook is a single-page website inspired by Facebook and built by David Anderson, a software engineer based in New York, New York. Fakebook uses Ruby on Rails for its back end, and React/Redux for the front end.<br/><br/>
          On Fakebook, users can send and approve friend requests, post statuses for their friends to see, and write directly to their friends' walls. Additionally, users can comment on posts, like posts, like comments, and search for users in the search bar. Content authors can edit and delete their posts and comments; content receivers can delete any post or comments left on their wall. Feel free to explore what Fakebook has to offer!<br/><br/>
          Fakebook's functionality is continually being updated—soon, users will also be able to reply directly to comments, receive notifications, edit account information, and message their friends.<br/><br/>
          If you have any questions about Fakebook, please feel free to get in touch. The GitHub repo for Fakebook can be found <a className="github-link" href="https://github.com/dlande000/Fakebook">here.</a><br/><br/>
          Fakebook's demo profiles were made for characters from 'Arrested Development,' the funniest television show ever made.</p><br/>
          <div className="below-feed-info">Made by David Anderson in 2019. All images belong to their respective owner.</div>
        </div>
      </div>
    )
  };
  }

export default Feed;
