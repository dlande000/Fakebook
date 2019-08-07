import React from 'react';
import SignupFormContainer from './signup_form_container';

const LoginSignupBody = () => (
  <div className="signup-body">
    <div className="signup-body-and-form">
      <div className="signup-body-text">
        <h2>Connect with friends and the world around you on Fakebook.</h2>
        <div className="signup-body-points">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32213527_1720875981299142_7601737152052854784_n.png?_nc_cat=1&_nc_oc=AQmuBjYvVvFE6ubFuDNfqNpO9xA0nRS_eznvL6zx_whK6B7HMAQZPWMnOc6ucnMKn7g&_nc_ht=scontent-lga3-1.xx&oh=13aae85b5fe513c5013448f2a8521f3e&oe=5DDC75E8"/><p><b>See photos and updates</b> from friends in News Feed.</p>
        </div>
        <div className="signup-body-points">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32220240_200651090730619_3989834943638274048_n.png?_nc_cat=1&_nc_oc=AQkxSdf7rSERNvf8WHtL5vLO6l39lMOeHQNFe_RbNznSfkRoxPissIZPlx6bYNTlQBY&_nc_ht=scontent-lga3-1.xx&oh=95423624ef50809f413d66dd5a7f8392&oe=5DDBE136"/><p><b>Share whats new</b> in your life on your profile.</p>
        </div>
        <div className="signup-body-points">
          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.2365-6/32158113_191365994837162_5605369115159035904_n.png?_nc_cat=1&_nc_oc=AQl4dYk-XMZyrSiZHiIEMy-reRbhX4fgVmK0WhzS87jISB-ooXYJq3LKlO0fXMREJPM&_nc_ht=scontent-lga3-1.xx&oh=21590963d7096ffadc2d89220b9c83e4&oe=5DEB7EB5"/><p><b>Find more</b> of what you're looking for with Fakebook search.</p>
        </div>
      </div>
      <div className="signup">
        <SignupFormContainer />
      </div>
    </div>
  </div>
);

export default LoginSignupBody;