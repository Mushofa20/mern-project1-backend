const Testimony = require('../models/Testimony');

// GET semua produk
const getTestimony = async (req, res) => {
  try {
    const testimony = await Testimony.find();
    res.json(testimony);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET produk berdasarkan ID
const getTestimonyById = async (req, res) => {
  try {
    const testimony = await Testimony.findById(req.params.id);
    if (!testimony) {
      return res.status(404).json({ message: 'There is no review' });
    }
    res.json(testimony);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTestimony, getTestimonyById };
