const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const OJTDataController = require('../controllers/ojt_data');

router.get('/', OJTDataController.getAll);
router.get('/:id', OJTDataController.getOne);
router.post('/', OJTDataController.create);
router.put('/:id', OJTDataController.update);
router.delete('/:id', OJTDataController.delete);

module.exports = router;