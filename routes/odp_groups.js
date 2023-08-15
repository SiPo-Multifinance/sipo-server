const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const ODPGroupController = require('../controllers/odp_group');

router.get('/', ODPGroupController.getAll);
router.get('/:id', ODPGroupController.getOne);
router.post('/', ODPGroupController.create);
router.put('/:id', ODPGroupController.update);
router.delete('/:id', ODPGroupController.delete);

module.exports = router;