import React from 'react';
import LoginSignup from './login_signup/login_signup';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <AuthRoute path="/" component={LoginSignup}/>
  </div>
);

export default App;