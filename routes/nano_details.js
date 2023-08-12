const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const NanoDetailsController = require('../controllers/nano_details');

router.get('/', NanoDetailsController.getAll);
router.get('/:id', NanoDetailsController.getOne);
// router.post('/', auth, ODPGroupController.create);
// router.put('/:id', auth, ODPGroupController.update);
// router.delete('/:id', auth, ODPGroupController.delete);

module.exports = router;