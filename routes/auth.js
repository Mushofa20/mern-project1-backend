const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register Endpoint
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        // Langsung create user tanpa hashing (akan di-handle oleh middleware)
        const user = await User.create({ 
            username, 
            email, 
            password // password original, akan di-hash oleh middleware
        });
        
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login Endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Login attempt:', { email, password }); // Log email dan password yang dikirimkan
        
        // Cari user berdasarkan email
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found'); // Log jika user tidak ditemukan
            return res.status(404).json({ error: 'User not found' });
        }

        // Cek apakah password yang dimasukkan cocok dengan password yang tersimpan
        const isMatch = await bcryptjs.compare(password, user.password);
        console.log('Password match:', isMatch); // Log apakah password cocok
        
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Buat token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        console.log('Login successful, token generated'); // Log sukses login

        // Kirim token dan username ke frontend
        res.json({ token, username: user.username });
    } catch (error) {
        console.error('Login error:', error); // Log error lainnya
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;