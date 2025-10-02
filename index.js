const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my posts api!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});