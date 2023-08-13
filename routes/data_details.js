const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const DataDetailsController = require('../controllers/data_details');

router.get('/', AuthorizationMiddleware.authAdmin, AuthorizationMiddleware.authStudent, AuthorizationMiddleware.authViewer, DataDetailsController.getAll);
router.get('/:id', AuthorizationMiddleware.authAdmin, AuthorizationMiddleware.authStudent, AuthorizationMiddleware.authViewer, DataDetailsController.getOne);
router.post('/', AuthorizationMiddleware.authAdmin, AuthorizationMiddleware.authStudent, DataDetailsController.create);
router.put('/:id', AuthorizationMiddleware.authAdmin, DataDetailsController.update);
router.delete('/:id', AuthorizationMiddleware.authAdmin, DataDetailsController.delete);

module.exports = router;