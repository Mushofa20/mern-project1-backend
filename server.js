require('dotenv').config();
const express = require("express");
const cors = require("cors"); // Pastikan CORS sudah diimpor
const bodyParser = require("body-parser");
const connectDB = require('./config/db'); // Impor connectDB
const authRoutes = require("./routes/auth");
const productRoutes = require('./routes/product'); // Import route produk
const testimonyRoutes = require('./routes/testimony'); //import route testimony

const app = express();

// Konfigurasi CORS
const corsOptions = {
    origin: "https://mern-project1-frontend-alpha.vercel.app", // Membolehkan akses dari frontend di vercel
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions)); // Menggunakan CORS dengan konfigurasi yang telah dibuat

app.use(bodyParser.json());

// Koneksi ke MongoDB
connectDB(); // Gunakan fungsi connectDB dari config/db.js

// Routes
app.use("/api", authRoutes);  // Menangani route auth

app.use('/api/products', productRoutes); // Route untuk produk

app.use('/api/testimony', testimonyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
