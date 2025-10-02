const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const userRoutes = require("./routes/users");

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my posts api!');
});

//routes
app.use('/user',userRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    

connectDB();