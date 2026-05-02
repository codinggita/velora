// Triggering restart
const express = require('express');
const dns = require('dns');
dns.setServers(['8.8.8.8']);
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Global logging for all incoming requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Velora API', status: 'running' });
});
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
