const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const DataDetailsController = require('../controllers/data_details');

router.get('/', DataDetailsController.getAll);
router.get('/:id', DataDetailsController.getOne);
router.post('/', AuthorizationMiddleware.authAdmin, AuthorizationMiddleware.authStudent, DataDetailsController.create);
router.put('/:id', AuthorizationMiddleware.authAdmin, DataDetailsController.update);
router.delete('/:id', AuthorizationMiddleware.authAdmin, DataDetailsController.delete);

module.exports = router;