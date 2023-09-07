// adminController.js
const express = require('express');

const router = express.Router();
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Gyanshu',
  password: 'Password@54321',
  database: 'ecommerce',
});
const addProduct =(req, res) => {
    const { title, description, price, imageURL } = req.body;

    // Validate the incoming data (e.g., check if required fields are provided)
  
    // Insert the new product into the database
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
  };
  
  const editProduct = (req, res) => {
    const { id } = req.params;
  const { title, description, price, imageURL } = req.body;

  const sql = 'UPDATE products SET title=?, description=?, price=?, imageURL=? WHERE id=?';
  const values = [title, description, price, imageURL, id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error editing product: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Product updated successfully' });
    }
  });
  };
  
  const deleteProduct = (req, res) => {
    const { id } = req.params;

  const sql = 'DELETE FROM products WHERE id=?';
  const values = [id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error deleting product: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'Product deleted successfully' });
    }
  });
  };
  
  module.exports = { addProduct, editProduct, deleteProduct };