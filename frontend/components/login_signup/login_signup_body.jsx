import React from 'react';
import SignupFormContainer from './signup_form_container';

const LoginSignupBody = () => (
  <div className="signup-body">
  <div className="signup-body-and-form">
    <div className="signup-body-text">
        <h2>Connect with friends and the world around you on Fakebook.</h2>
          <p><b>See photos and updates</b> from friends in News Feed.</p>
          <p><b>Share whats new</b> in your life on your profile.</p>
          <p><b>Find more</b> of what you're looking for with Fakebook search.</p>
    </div>
    <div className="signup">
        <SignupFormContainer />
    </div>
    </div>
  </div>
);

export default LoginSignupBody;