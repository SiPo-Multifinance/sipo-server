const express = require('express');
const router = express.Router();
const ODPGroupController = require('../controllers/odp_group');

router.get('/', ODPGroupController.getAll);
router.get('/:id', ODPGroupController.getOne);

module.exports = router;