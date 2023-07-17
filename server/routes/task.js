const express = require('express');
const { all, add, remove, edit, userProfile } = require('../controllers/task');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, all);
router.post('/add', auth, add);
router.delete('/remove/:id', auth, remove);
router.put('/edit/:id', auth, edit);
router.get('/user/:id', auth, userProfile);

module.exports = router;
