import React from 'react';
import LoginSignup from './login_signup/login_signup';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Feed from './feed/feed';
import { Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LoginSignup}/>
      <ProtectedRoute exact path="/feed" component={Feed}/>
    </Switch>
  </div>
);

export default App;