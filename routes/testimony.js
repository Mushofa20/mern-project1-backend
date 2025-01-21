const express = require('express');
const { getTestimony, getTestimonyById } = require('../controllers/testimonyController');
const router = express.Router();

// GET semua produk
router.get('/', getTestimony);

// GET produk berdasarkan ID
router.get('/:id', getTestimonyById);

module.exports = router;
