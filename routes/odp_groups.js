const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const ODPGroupController = require('../controllers/odp_group');

router.get('/', ODPGroupController.getAll);
router.get('/:id', ODPGroupController.getOne);
router.post('/', auth, ODPGroupController.create);
router.put('/:id', auth, ODPGroupController.update);
router.delete('/:id', auth, ODPGroupController.delete);

module.exports = router;