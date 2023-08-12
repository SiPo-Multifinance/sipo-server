const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const ODPGroupController = require('../controllers/odp_group');

router.get('/', ODPGroupController.getAll);
router.get('/:id', ODPGroupController.getOne);

module.exports = router;