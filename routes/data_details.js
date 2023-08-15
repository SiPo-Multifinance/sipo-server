const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const DataDetailsController = require('../controllers/data_details');

router.get('/', AuthorizationMiddleware.authViewer, DataDetailsController.getAll);
router.get('/:id', AuthorizationMiddleware.authViewer, DataDetailsController.getOne);
router.post('/', AuthorizationMiddleware.authAdmin, DataDetailsController.create);
router.put('/:id', AuthorizationMiddleware.authAdmin, DataDetailsController.update);
router.delete('/:id', AuthorizationMiddleware.authAdmin, DataDetailsController.delete);

module.exports = router;