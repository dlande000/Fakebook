import React from 'react';
import LoginFormContainer from './login_form_container';

const Navbar = () => (
  <div className="navbar">
  <div className="logo-and-login">
    <div className="fakebook-logo">
        <h1>fakebook</h1>
    </div>
    <div className="login">
        <LoginFormContainer />
    </div>
    </div>
  </div>
);

export default Navbar;