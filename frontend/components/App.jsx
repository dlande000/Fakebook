import React from 'react';
import LoginSignup from './login_signup/login_signup';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoggedIn from './logged_in/logged_in';
import { Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LoginSignup}/>
      <ProtectedRoute path="/feed" component={LoggedIn}/>
    </Switch>
  </div>
);

export default App;