import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

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
              <Link to={"/home"}><img className="facebook-f" src={window.fIcon} /></Link>
              <SearchContainer />
            </div>
            <div className="navbar-right">
              <Link className="navbar-link" to={`/home/users/${this.props.currentUser.id}`}><div className="navbar-pic-container-main"><img className="navbar-profile-pic" src={this.props.currentUser.profile_pic_url}/></div></Link>
              <Link className="navbar-link" to={`/home/users/${this.props.currentUser.id}`}>{this.props.currentUser.first_name}</Link>
              <Link className="navbar-link" to="/home">Home</Link>
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