const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');
const { createComment, updateComment, deleteComment } = require('../controllers/comment');

router.post('/create', checkAuth, createComment);
router.put('/:id', checkAuth, updateComment);
router.delete('/:id', checkAuth, deleteComment);

module.exports = router;
