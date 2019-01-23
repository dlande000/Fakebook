import React from 'react';
import LoginFormContainer from './login_form_container';

const Navbar = () => (
  <div>
    <div className="fakebook-logo">
        <h1>It's like Facebook but better</h1>
    </div>
    <div className="login">
        <LoginFormContainer />
    </div>
  </div>
);

export default Navbar;