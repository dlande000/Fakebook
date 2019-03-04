import React from 'react';
import { Link } from 'react-router-dom';

class Results extends React.Component {
    render() {

    const userName = `${this.props.user.first_name} ${this.props.user.last_name}`;

    return (
      <li>
        <div>
        <img src="{this.props.user.profile_pic_url}" alt=""/>
        </div>
        <div>
          <Link to={`/home/users/${this.props.user.id}`}>{userName}</Link>
        </div>
      </li>
        )
    }
}

export default Results;