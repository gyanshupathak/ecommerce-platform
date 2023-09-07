const express = require('express');
const app = express();
const mysql = require('mysql2');
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser'); // Import body-parser
const adminRoutes = require('./routes/admin');

// Use the adminRoutes with a base URL
app.use('/admin', adminRoutes);
// Use body-parser middleware
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to my Ecommerce backend');
});

// Import the "products" route
const productsRoutes = require('./routes/products');

// Use the "products" route with a base URL
app.use('/api', productsRoutes);

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const connection = mysql.createConnection({
    host: 'localhost',

    user: 'Gyanshu',
    password: 'Password@54321',
    database: 'Ecommerce',
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
    } else {
      console.log('Connected to the database');
    }
});