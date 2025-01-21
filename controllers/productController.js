const Product = require('../models/Product');

// GET semua produk
const getProducts = async (req, res) => {
  try {
    const { type, status } = req.query; // Ambil query parameter dari request
    const filter = {};

    if (type) filter.type = type; // Filter berdasarkan type (jika ada)
    if (status) filter.status = status; // Filter berdasarkan status (jika ada)
    if (type) {
      const types = type.split(',');
      filter.type = {$in: types};
    }

    const products = await Product.find(filter); // Query dengan filter
    res.json(products); // Kirim data ke client
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET produk berdasarkan ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductById };
