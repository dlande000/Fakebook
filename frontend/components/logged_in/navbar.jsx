import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
      super(props);
  }

  componentDidMount() {
    debugger
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
              <Link to={`/feed/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name}</Link>
              <Link to="/feed">Home</Link>
              <Link onClick={() => this.props.logout()}>Log Out</Link>
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