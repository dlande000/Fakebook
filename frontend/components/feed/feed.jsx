import React from 'react';
import { logout } from '../../util/session_api_util';

const Feed = (props) => (
  <div className="navbar">
    <h1>YOU LOGGED IN!</h1>
    <p>{this.props.currentUser.first_name}</p>
  </div>
);

export default Feed;