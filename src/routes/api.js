const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const cors = require('cors'); // Import the cors middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
};
// Enable CORS for all routes
router.use(cors());



// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',

  user: 'Gyanshu',
  password: 'Password@54321',
  database: 'Ecommerce',
});

// GET all products
router.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching products: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});
// POST a new product
router.post('/api/products', async(req, res) => {
  try {
    // Parse data from the request body
    const { title, description, price, imageURL } = req.body;

    // Perform any necessary validation on the data

    // Insert the product into the database
    const newProduct = await Product.create({
      title,
      description,
      price,
      imageURL,
    });

    // Respond with the newly created product
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product: ', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


module.exports = router;

