const express = require('express');
const { all, myAll, getOne, create, remove, edit, userProfile } = require('../controllers/post');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/my', auth, myAll);
router.get('/all', auth, all);
router.get('/:id', auth, getOne);
router.post('/create', auth, create);
router.delete('/remove/:id', auth, remove);
router.patch('/edit/:id', auth, edit);
router.get('/user/:id', auth, userProfile);

module.exports = router;
