const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  getAllUserPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/post');
const checkAuth = require('../middleware/checkAuth');

router.get('/all', getAllPosts);
router.get('/all/:id', getAllUserPosts);
router.get('/:id', getOnePost);

router.post('/create', checkAuth, createPost);
router.patch('/:id', checkAuth, updatePost);
router.delete('/:id', checkAuth, deletePost);

module.exports = router;
