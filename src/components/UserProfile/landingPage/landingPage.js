// src/components/LandingPage.js

import React, { useState } from 'react';
import LoginModal from './loginmodal'; // Adjust the path
import SignupModal from './signupmodal'; // Adjust the path
import './landingPage.css'; // Import the CSS file

function LandingPage() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const handleLogin = () => {
    setLoginModalOpen(true);
  };

  const handleSignup = () => {
    setSignupModalOpen(true);
  };
  return (
    <div className="landing-container">
      <div className="landing-image">
      <img className="image"
            src="/images/landing-image.png" // Replace with your image URL
            alt="Fashion Hub"
          />
      </div>
      <div className="landing-content">
        <h1>Welcome to Fashion Hub</h1>
        <p>
          Discover the latest fashion trends and shop for your favorite clothing brands. We offer a wide range of stylish apparel for all occasions.
        </p>
        <div className="action-buttons">
          <button onClick={handleLogin} className="login-button">Login</button>
          <button onClick={handleSignup} className="signup-button">Sign Up</button>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setLoginModalOpen(false)}
        />
      )}
      {isSignupModalOpen && (
        <SignupModal
          isOpen={isSignupModalOpen}
          onClose={() => setSignupModalOpen(false)}
          onSignupSubmit={handleSignup}
        />
      )}
    </div>
  );
}
  
  export default LandingPage;