const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const OJTDataController = require('../controllers/ojt_data');

router.get('/', AuthorizationMiddleware.authAdmin, AuthorizationMiddleware.authStudent, AuthorizationMiddleware.authViewer, OJTDataController.getAll);
router.get('/:id', AuthorizationMiddleware.authAdmin, AuthorizationMiddleware.authStudent, AuthorizationMiddleware.authViewer, OJTDataController.getOne);
router.post('/', AuthorizationMiddleware.authAdmin, OJTDataController.create);
router.put('/:id', AuthorizationMiddleware.authAdmin, OJTDataController.update);
router.delete('/:id', AuthorizationMiddleware.authAdmin, OJTDataController.delete);

module.exports = router;