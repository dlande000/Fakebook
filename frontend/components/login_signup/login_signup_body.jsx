import React from 'react';
import SignupFormContainer from './signup_form_container';

const LoginSignupBody = () => (
  <div className="signup-body">
  <div className="signup-body-and-form">
    <div className="signup-body-text">
        <h2>Connect with friends and the world around you on Fakebook.</h2>
        <div className="signup-body-points">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32213527_1720875981299142_7601737152052854784_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=ab3c1f2e9f730c1f7b5b15fb60feedc3&oe=5CEF27E8"/><p><b>See photos and updates</b> from friends in News Feed.</p>
          </div>
          <div className="signup-body-points">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32220240_200651090730619_3989834943638274048_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=3cae0db3134486c68096abe43ab69a15&oe=5CEE9336"/><p><b>Share whats new</b> in your life on your profile.</p>
          </div>
          <div className="signup-body-points">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32158113_191365994837162_5605369115159035904_n.png?_nc_cat=1&_nc_ht=scontent-lga3-1.xx&oh=070aa73c0ec46d51f5a1640d6c365e34&oe=5CFE30B5"/><p><b>Find more</b> of what you're looking for with Fakebook search.</p>
    </div>
    </div>
    <div className="signup">
        <SignupFormContainer />
    </div>
    </div>
  </div>
);

export default LoginSignupBody;