const mongoose = require('mongoose');
require('dotenv').config();

//Define schema (rules to follow to create collections aka tables in the DB)
const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true },
    description: {type: String, required: true },
    price: {type: Number, unique: true, required: true},
} , {timestamps: true });

// Create the model (represents collections aka tables)
const Product = mongoose.model ("Product", ProductSchema)

module.exports = Product;