const express = require("express");

const {createPost, getAllPosts} = require("../controllers/post");

const auth = require("../middleware/auth")

const router = express.Router();

router.post('/', auth, createPost);

router.get('/', getAllPosts);

module.exports = router;