import React from 'react';
import Navbar from './navbar';
import LoginSignup from '../login_signup/login_signup';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import FeedContainer from '../feed/feed_container';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';

const LoggedIn = () => (
  <div>
    <Navbar />
    <Route path='/feed/users/:userId' component={ProfileContainer}/>
  </div>
);

export default LoggedIn;