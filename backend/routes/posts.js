const express = require('express');
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require('../controllers/postController');

const router = express.Router();

// GET / READ all posts
router.get('/', getPosts);

// GET / READ a single post
router.get('/:id', getPost);

// POST / CREATE a new post
router.post('/', createPost);

// DELETE a post
router.delete('/:id', deletePost);

// PATCH / UPDATE a post
router.patch('/:id', updatePost);

module.exports = router;
