import React from 'react';
import Navbar from './login_signup/navbar';
import SignupFormContainer from './login_signup/signup_form_container';

const App = () => (
  <div>
      <header>
        <h1>Main header</h1>
      </header>
      <Navbar/>
      <SignupFormContainer />
  </div>
);

export default App;