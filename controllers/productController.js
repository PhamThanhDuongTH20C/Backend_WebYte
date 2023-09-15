const Product = require('../model/product');
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, 'image-' + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage: storage });
const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Create a new product
  createProduct: async (req, res) => {
    try {
      const productData = req.body;
      const newProduct = await Product.create(productData);
      res.status(201).json(newProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  uploadImage : async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }
  
    const { productId } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;
  
    Product.findByIdAndUpdate(
      productId,
      { urlname: imageUrl },
      { new: true },
      (err, product) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to update product with image URL.' });
        }
  
        return res.json({ message: 'Image uploaded and product updated successfully.' });
      }
    );
  }
};

module.exports = productController;
