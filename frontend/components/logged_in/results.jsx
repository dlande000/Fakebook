import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {
    render() {

    const user = this.props.users[this.props.id];
    const userName = `${user.first_name} ${user.last_name}`;
      
    return (
      <li className="search-results">
        <div className="navbar-pic-container">
        <img className="navbar-profile-pic" src={user.profile_pic_url} alt=""/>
        </div>
        <div>
          <Link to={`/home/users/${this.props.id}`}>{userName}</Link>
        </div>
      </li>
        )
    }
}

export default Results;