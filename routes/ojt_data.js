const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const OJTDataController = require('../controllers/ojt_data');

router.get('/', OJTDataController.getAll);
router.get('/:id', OJTDataController.getOne);
// router.post('/', auth, ODPGroupController.create);
// router.put('/:id', auth, ODPGroupController.update);
// router.delete('/:id', auth, ODPGroupController.delete);

module.exports = router;