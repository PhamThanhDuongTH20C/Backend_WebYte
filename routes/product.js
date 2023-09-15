const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require("../controllers/ProductController");


const storage = multer.diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


// Route to get all products
router.get('/1', productController.getAllProducts);

// Route to create 
router.post('/2', productController.createProduct);

// Route to create 
router.post('/upload', upload.single('image'), productController.uploadImage);


module.exports = router;
