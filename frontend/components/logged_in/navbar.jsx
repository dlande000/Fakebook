import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
    constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="logged-in-navbar">
          <div className="logged-in-container">
            <div className="navbar-left">
              <h2 className="fakebook-f">f</h2>
              <p className="search-bar">Search bar (eventually?)</p>
            </div>
            <div className="navbar-right">
              <Link className="navbar-link" to={`/feed/users/${this.props.currentUser.id}`}><img className="navbar-profile-pic" src={this.props.currentUser.profile_pic_url}/> {this.props.currentUser.first_name}</Link>
              <Link className="navbar-link" to="/feed">Home</Link>
              <Link className="navbar-link" to="/" onClick={() => this.props.logout()}>Log Out</Link>
            </div>
          </div>
        </div>
    )} else {
      return (
        <div></div>
      )
    };
  }
} 

export default Navbar;