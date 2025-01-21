require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Pastikan CORS sudah diimpor
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const productRoutes = require('./routes/product'); // Import route produk
const testimonyRoutes = require('./routes/testimony'); //import route testimony

const app = express();

// Konfigurasi CORS
const corsOptions = {
    origin: "http://localhost:3000", // Membolehkan akses dari frontend di localhost:3000
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions)); // Menggunakan CORS dengan konfigurasi yang telah dibuat

app.use(bodyParser.json());

// Koneksi ke MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mern-auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api", authRoutes);  // Menangani route auth

app.use('/api/products', productRoutes); // Route untuk produk

app.use('/api/testimony', testimonyRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));