const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
    user: 'Gyanshu',
    password: 'Password@54321',
    database: 'ecommerce',
});
  
// GET all products
router.get('/products', (req, res) => {
  // Code for retrieving all products
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
router.post('/products', (req, res) => {
  // Code for adding a new product
  const { title, description, price, imageURL } = req.body;
  const sql = 'INSERT INTO products (title, description, price, imageURL) VALUES (?, ?, ?, ?)';
  const values = [title, description, price, imageURL];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error adding product: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Product added successfully' });
    }
  });
});

// PUT (edit) an existing product
router.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const { title, description, price, imageURL } = req.body;
  const sql = 'UPDATE products SET title=?, description=?, price=?, imageURL=? WHERE id=?';
  const values = [title, description, price, imageURL, productId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error updating product: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Product updated successfully' });
    }
  });
});
  
// DELETE an existing product
router.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  const sql = 'DELETE FROM products WHERE id=?';
  const values = [productId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error deleting product: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Product deleted successfully' });
    }
  });
});

module.exports = router;
