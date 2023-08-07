const express = require('express');
const router = express.Router();

const { login, signup, me, getUser } = require('../controllers/user');
const checkAuth = require('../middleware/checkAuth');

router.post('/login', login);
router.post('/signup', signup);
router.get('/me', checkAuth, me);
router.get('/:id', getUser);

module.exports = router;
