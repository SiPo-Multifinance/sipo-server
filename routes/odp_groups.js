const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const ODPGroupController = require('../controllers/odp_group');

router.get('/', AuthorizationMiddleware.authViewer, ODPGroupController.getAll);
router.get('/:id', AuthorizationMiddleware.authViewer, ODPGroupController.getOne);
router.post('/', AuthorizationMiddleware.authAdmin,ODPGroupController.create);
router.post('/assign/:id', AuthorizationMiddleware.authAdmin,ODPGroupController.assignStudents);
router.put('/:id', AuthorizationMiddleware.authAdmin, ODPGroupController.update);
router.delete('/:id', AuthorizationMiddleware.authAdmin, ODPGroupController.delete);

module.exports = router;