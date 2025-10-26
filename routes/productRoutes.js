const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//Get all students (fetch all)
router.get("/", async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});
// Sample in-memory products database
// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products
app.get('/api/products', (req, res) => {
  res.json(products);
});


module.exports = router;