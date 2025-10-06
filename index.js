const express = require('express');
const connectDB = require('./db');

const cors = require('cors');
require('dotenv').config();
const path = require('path');
const favicon = require('serve-favicon');

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/post");

const app = express(); // ✅ Create app first

// ✅ Serve a favicon to remove 404 error
app.use(favicon(path.join(__dirname, 'favicon.ico')));

// --- Body parser middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle CORS issues
const corsOptions = {
    origin: '*', // Allow all origins (for development purposes)
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));


// ✅ Connect to MongoDB first
connectDB();

// --- Routes ---
app.get('/', (req, res) => {
    res.send('Welcome to my posts api!');
});
app.use('/user', userRoutes);
app.use('/post', postRoutes);

// ✅ Start server on correct Render port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
