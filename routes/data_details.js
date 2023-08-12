const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const DataDetailsController = require('../controllers/data_details');

router.get('/', DataDetailsController.getAll);
router.get('/:id', DataDetailsController.getOne);
// router.post('/', auth, ODPGroupController.create);
// router.put('/:id', auth, ODPGroupController.update);
// router.delete('/:id', auth, ODPGroupController.delete);

module.exports = router;