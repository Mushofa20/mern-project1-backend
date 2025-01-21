const mongoose = require('mongoose');

const testimonySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Auto create `createdAt` & `updatedAt`
);

module.exports = mongoose.model('Testimony', testimonySchema);
