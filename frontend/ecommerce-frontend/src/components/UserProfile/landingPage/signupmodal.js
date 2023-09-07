// SignupModal.js
import React, { useState } from 'react';
import SignupForm from './signupForm'; // Import the LoginForm component
import axios from 'axios';


function SignupModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios.post('/api/register', { email, password })
    .then((response) => {
      // Handle successful signup
      // Close the modal or perform any other UI update
    })
    .catch((error) => {
      // Handle signup error
      console.error('Error:', error);
    });
    
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Signup</h2>
        
         {/* Render the SignupForm component here */}
        <SignupForm />
        
        <button onClick={handleSignup}>Signup</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SignupModal;