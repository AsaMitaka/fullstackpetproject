const express = require('express');
const { login, signup, current } = require('../controllers/user');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/current', auth, current);

module.exports = router;
