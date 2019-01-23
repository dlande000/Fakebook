import React from 'react';
import SignupFormContainer from './signup_form_container';

const LoginSignupBody = () => (
  <div className="signup-body">
    <div className="signup-body-text">
        <h2>The body text will go here</h2>
    </div>
    <div className="signup">
        <SignupFormContainer />
    </div>
  </div>
);

export default LoginSignupBody;