import React from 'react';
import Navbar from './navbar';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';
import NavbarContainer from './navbar_container';
import FeedContainer from '../feed/feed_container';

const LoggedIn = () => {
  $("html").addClass("html-class");
  return (
  <div>
    <NavbarContainer />
    <Route exact path='/home' component={FeedContainer}/>
    <Route path='/home/users/:userId' component={ProfileContainer}/>
  </div>
  )
};

export default LoggedIn;