import React from 'react';
import LoginSignup from './login_signup/login_signup';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import FeedContainer from './feed/feed_container';
import { Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={LoginSignup}/>
      <ProtectedRoute exact path="/feed" component={FeedContainer}/>
    </Switch>
  </div>
);

export default App;