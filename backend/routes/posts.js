const express = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require('../controllers/postController');

const router = express.Router();

// POSTS
// GET / READ all posts
router.get('/', getPosts);

// GET / READ a single post
router.get('/:id', getPost);

// POST / CREATE a new post
router.post('/', createPost);

// PATCH / UPDATE a post
router.patch('/:id', updatePost);

// DELETE a post
router.delete('/:id', deletePost);

// COMMENTS
// GET / READ all comments
router.get('/:id/comments', getComments);

// GET / READ a single comment
router.get('/:id/comments/:commentId', getComment);

// POST / CREATE a new comment
router.post('/:id/comments', createComment);

// PATCH / UPDATE a comment
router.patch('/:id/comments/:commentId', updateComment);

// DELETE a comment
router.delete('/:id/comments/:commentId', deleteComment);

module.exports = router;
