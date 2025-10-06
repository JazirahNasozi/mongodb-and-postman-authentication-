const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/post");

const app = express();

// --- Body parser middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB first
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my posts api!');
});
app.use('/user', userRoutes);
app.use('/post', postRoutes);

// Start server on the correct Render port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
