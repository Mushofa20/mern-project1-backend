const express = require('express');
const { getProducts, getProductById } = require('../controllers/productController');
const router = express.Router();

// GET semua produk
router.get('/', getProducts);

// GET produk berdasarkan ID
router.get('/:id', getProductById);

module.exports = router;
