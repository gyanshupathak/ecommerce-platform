import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful login (e.g., set user authentication state or redirect)
        console.log('Login successful');
      } else {
        // Handle login error (e.g., display an error message)
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </form>
    </div>
  );
}

export default LoginForm;