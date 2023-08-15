const express = require('express');
const router = express.Router();
const AuthorizationMiddleware = require('../middlewares/auth');
const NanoDetailsController = require('../controllers/nano_details');

router.get('/', NanoDetailsController.getAll);
router.get('/:id', NanoDetailsController.getOne);
router.post('/', NanoDetailsController.create);
router.put('/:id', NanoDetailsController.update);
router.delete('/:id', NanoDetailsController.delete);

module.exports = router;