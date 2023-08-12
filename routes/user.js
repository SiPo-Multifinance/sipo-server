const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const UserController = require('../controllers/user');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.create);
router.post('/login', UserController.login);
router.put('/:id', auth, UserController.update);
router.delete('/:id', auth, UserController.delete);

module.exports = router;