import React from 'react';
import Navbar from './navbar';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Route } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';
import NavbarContainer from './navbar_container';

const LoggedIn = () => {
  $("html").addClass("html-class");
  return (
  <div>
    <script>
    </script>
    <NavbarContainer />
    <Route path='/feed/users/:userId' component={ProfileContainer}/>
  </div>
  )
};

export default LoggedIn;