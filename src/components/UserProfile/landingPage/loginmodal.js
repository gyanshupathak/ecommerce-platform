// LoginModal.js
import React, { useState } from 'react';
import LoginForm from './loginForm'; // Import the LoginForm component

function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate and send login data to the backend
    // Make an HTTP POST request to your backend's /login endpoint
    // Example using axios:
    /*
    axios.post('/api/login', { email, password })
      .then((response) => {
        // Handle successful login
        onClose(); // Close the modal
      })
      .catch((error) => {
        // Handle login error
        console.error('Login failed: ', error);
      });
    */
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Login</h2>
        
         {/* Render the LoginForm component here */}
        <LoginForm />
        
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default LoginModal;