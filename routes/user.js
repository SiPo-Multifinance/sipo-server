const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const UserController = require('../controllers/user');

router.get('/', AuthorizationMiddleware.authAdmin, UserController.getAll);
router.get('/:id', AuthorizationMiddleware.authAdmin, UserController.getOne);
router.post('/', AuthorizationMiddleware.authAdmin, UserController.create);
router.post('/login', UserController.login);
router.post('register', AuthorizationMiddleware.authAdmin, UserController.register);
router.put('/:id', AuthorizationMiddleware.authAdmin, UserController.update);
router.delete('/:id', AuthorizationMiddleware.authAdmin, UserController.delete);

module.exports = router;