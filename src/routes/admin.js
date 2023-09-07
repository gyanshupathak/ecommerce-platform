const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


// Add a new product
router.post('/add-product', adminController.addProduct);

// Edit an existing product
router.put('/edit-product/:id', adminController.editProduct);

// Delete a product by ID
router.delete('/delete-product/:id', adminController.deleteProduct);


module.exports = router;