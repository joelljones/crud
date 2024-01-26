const express = require('express');

const router = express.Router();

// GET / READ all posts
router.get('/', (req, res) => {
  res.json({ msg: 'GET all posts' });
});

// GET / READ a single post
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET a single post' });
});

// POST / CREATE a new post
router.post('/', (req, res) => {
  res.json({ msg: 'POST a new post' });
});

// DELETE a post
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a post' });
});

// PATCH / UPDATE a post
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a post' });
});

module.exports = router;
