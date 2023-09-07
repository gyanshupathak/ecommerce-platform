const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Adjust the path based on your project structure
const router = express.Router();
const mysql = require('mysql2');

// User Registration
router.post('/api/register', async (req, res) => {
  console.log('Received POST request at /register');
  const { email, password } = req.body;

  // Perform data validation here if needed

  // Insert user data into the database
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  const values = [email, password]; // Replace with your data

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into the database: ', err);
      res.status(500).json({ error: 'An error occurred during registration' });
    } else {
      console.log('User registered successfully');
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await User.findByEmail(email);
    if (rows.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ sub: user.id }, 'Password@123'); // Replace with your own secret key
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in: ', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


// JWT Middleware
const jwtMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Access denied. Token missing.' });
    }
  
    try {
      const decoded = jwt.verify(token, 'Password@123'); // Replace with your own secret key
      req.user = decoded.sub; // Store the user ID in the request object
      next(); // Allow the request to proceed
    } catch (error) {
      res.status(401).json({ error: 'Access denied. Invalid token.' });
    }
};


  // Error Handling Middleware
const errorHandler = (err, req, res, next) => {
    console.error('Error: ', err);
    res.status(500).json({ error: 'An error occurred' });
  };
  
// Protected Route Example
  router.get('/protected', jwtMiddleware, (req, res) => {
    // Accessible only to authenticated users with a valid token
    res.json({ message: 'Protected route accessed successfully' });
  });

  // Apply Error Handling Middleware
router.use(errorHandler);
  
 
module.exports = router;