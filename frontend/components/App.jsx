import React from 'react';
import Navbar from './login_signup/navbar';
import LoginSignupBody from './login_signup/login_signup_body';
import Footer from './login_signup/footer';

const App = () => (
  <div>
      <header>
        <h1>Main header</h1>
      </header>
      <Navbar/>
      <LoginSignupBody />
      <Footer />
  </div>
);

export default App;