const mysql = require('mysql2');
const connection = require('../config/database'); // Adjust the path based on your project structure

const User = {};

User.create = (email, password) => {
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  return connection.promise().execute(query, [email, password]);
};

User.findByEmail = (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  return connection.promise().query(query, [email]);
};

module.exports = User;