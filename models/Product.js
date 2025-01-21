const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['drink', 'dessert', 'meal'], // Hanya boleh salah satu dari ini
    },
    status: {
      type: String,
      required: true,
      enum: ['best sellers', 'common'], // Hanya boleh salah satu dari ini
      default: 'common', // Default status kalau nggak diisi
    },
  },
  { timestamps: true } // Auto create `createdAt` & `updatedAt`
);

module.exports = mongoose.model('Product', productSchema);
