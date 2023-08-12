const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const UserController = require('../controllers/user');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.create);
router.post('/login', UserController.login);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;