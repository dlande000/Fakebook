import React from 'react';
import LoginSignup from './login_signup/login_signup';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <AuthRoute path="/" component={LoginSignup}/>
  </div>
);

export default App;