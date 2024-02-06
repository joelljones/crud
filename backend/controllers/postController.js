const Post = require('../models/postModel');
const mongoose = require('mongoose');

// POSTS
// GET / READ all posts
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  res.status(200).json(posts);
};

// GET / READ a single post
const getPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.status(200).json(post);
};

// POST / CREATE a new post
const createPost = async (req, res) => {
  const { caption, likes, comments } = req.body;

  // add to db
  try {
    const post = await Post.create({ caption, likes, comments });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH / UPDATE a post
const updatePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Post not found' });
  }

  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!post) {
    return res.status(400).json({ error: 'Post not found' });
  }

  res.status(200).json(post);
};

// DELETE a post
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Post not found' });
  }

  const post = await Post.findOneAndDelete({ _id: id });

  if (!post) {
    return res.status(400).json({ error: 'Post not found' });
  }

  res.status(200).json(post);
};

// COMMENTS
// GET / READ all comments
const getComments = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const comments = post.comments;

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET / READ a single comment
const getComment = async (req, res) => {
  const { id, commentId } = req.params;

  if (
    !mongoose.Types.ObjectId.isValid(id) ||
    !mongoose.Types.ObjectId.isValid(commentId)
  ) {
    return res.status(400).json({ error: 'Invalid post ID or comment ID' });
  }

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const comment = post.comments.find((comment) =>
      comment._id.equals(commentId)
    );

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST / CREATE a new comment
const createComment = async (req, res) => {
  const { id } = req.params;
  const { text, user } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid post ID' });
  }

  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { $push: { comments: { text, user, createdAt: new Date() } } },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(201).json(post.comments.slice(-1)[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH / UPDATE a comment
const updateComment = async (req, res) => {
  const { id, commentId } = req.params;
  const { text } = req.body;

  if (
    !mongoose.Types.ObjectId.isValid(id) ||
    !mongoose.Types.ObjectId.isValid(commentId)
  ) {
    return res.status(400).json({ error: 'Invalid post ID or comment ID' });
  }

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const comment = post.comments.find((comment) =>
      comment._id.equals(commentId)
    );

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    comment.text = text; // Update the text of the comment
    await post.save(); // Save the post with the updated comment

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE a comment
const deleteComment = async (req, res) => {
  const { id, commentId } = req.params;

  if (
    !mongoose.Types.ObjectId.isValid(id) ||
    !mongoose.Types.ObjectId.isValid(commentId)
  ) {
    return res.status(400).json({ error: 'Invalid post ID or comment ID' });
  }

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const commentIndex = post.comments.findIndex((comment) =>
      comment._id.equals(commentId)
    );

    if (commentIndex === -1) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    const comment = post.comments.splice(commentIndex, 1); // Remove the comment from the comments array
    await post.save(); // Save the post with the updated comments array

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
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
};
