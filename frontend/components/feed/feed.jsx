import React from 'react';
import PostsAllComponents from '../posts/posts_all_components';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.props.fetchUsers()
        .then(() => this.props.fetchPosts())
        // .then(() => Object.keys(this.props.posts).forEach(id => {
        //   this.props.fetchComments(id);
        // }));
    }

    render() {
      return (
        <div className="full-feed">
          <div className="feed-links">
            <Link className="feed-link" to={`/home/users/${this.props.currentUser.id}`}><div className="feed-pic-container"><img className="feed-profile-pic" src={this.props.currentUser.profile_pic_url}/></div></Link>
            <Link className="feed-link" to={`/home/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</Link>
            <p>Enjoying Fakebook? Interested in knowing what features are on the horizon? Get in touch with me, David Anderson, via the links below:</p>
            <ul>
              <li><img className="email-icon" src="https://cdn1.iconfinder.com/data/icons/education-set-01/512/email-open-512.png" alt=""/>       <a className="feeder" href="mailto:dlande000@gmail.com">Email</a></li><br/>
              <li><img className="portfolio-icon" src="https://image.flaticon.com/icons/png/512/93/93618.png" alt=""/>       <a className="feeder" href="http://davidanderson.nyc">Portfolio</a></li><br/>
              <li><img className="linkedin-icon" src="https://image.flaticon.com/icons/png/512/61/61109.png" alt=""/>       <a className="feeder" href="http://www.linkedin.com/in/david-anderson-7bb543101/">LinkedIn</a></li><br/>
              <li><img className="github-icon" src="https://image.flaticon.com/icons/png/512/25/25231.png" alt=""/>       <a className="feeder" href="http://github.com/dlande000">GitHub</a></li><br/>
              <li><img className="angellist-icon" src="https://www.shareicon.net/data/512x512/2016/07/08/117681_angellist_512x512.png" alt=""/>     <a className="feeder-angellist" href="#">AngelList</a></li>
            </ul>
          </div>
          <div className="feed">
            <PostsAllComponents type={"Feed"} createLike={this.props.createLike} deleteLike={this.props.deleteLike} user={this.props.currentUser} createPost={this.props.createPost} correctReceivers={this.props.correctReceivers} posts={this.props.posts} friendIds={this.props.friendIds} users={this.props.users} currentUser={this.props.currentUser} createComment={this.props.createComment}/>
          </div>
          <div className="feed-info">
            <h4>What is Fakebook?</h4>
            <p>Fakebook is a single-page website inspired by Facebook and built by David Anderson, a software engineer based in New York, New York. Fakebook uses Ruby on Rails for its back end, and React/Redux for the front end.<br/><br/>
            On Fakebook, users can send and approve friend requests, post statuses for their friends to see, and write directly to their friends' walls. Feel free to explore what Fakebook has to offer!<br/><br/>
            Fakebook's functionality is continually being updated—soon, users will be able to like, edit, and comment on posts. Users will also be able to post images and search for new friends.<br/><br/>
            If you have any questions about Fakebook, please feel free to get in touch. The GitHub repo for Fakebook can be found <a className="github-link" href="https://github.com/dlande000/Fakebook">here.</a><br/><br/>
            Fakebook's demo profiles were made for characters from 'Arrested Development,' the funniest television show ever made.</p><br/>
            <div className="below-feed-info">Made by David Anderson in 2019. All images belong to their respective owner.</div>
          </div>
        </div>
      )
    };
  }

export default Feed;
