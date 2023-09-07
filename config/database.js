const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',        
  user: 'Gyanshu', 
  password: 'Password@54321',
  database: 'ecommerce' 
});

module.exports = connection;