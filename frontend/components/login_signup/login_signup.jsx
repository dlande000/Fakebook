import React from 'react';
import Navbar from './navbar';
import LoginSignupBody from './login_signup_body';
import Footer from './footer';

const LoginSignup = () => (
    <div>
        <Navbar/>
        <LoginSignupBody />
        <Footer />
    </div>
  );
  
  export default LoginSignup;