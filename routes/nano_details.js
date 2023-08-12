const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const NanoDetailsController = require('../controllers/nano_details');

router.get('/', NanoDetailsController.getAll);
router.get('/:id', NanoDetailsController.getOne);
router.post('/', AuthorizationMiddleware.authAdmin, AuthorizationMiddleware.authStudent, NanoDetailsController.create);
router.put('/:id', AuthorizationMiddleware.authAdmin, NanoDetailsController.update);
router.delete('/:id', AuthorizationMiddleware.authAdmin, NanoDetailsController.delete);

module.exports = router;