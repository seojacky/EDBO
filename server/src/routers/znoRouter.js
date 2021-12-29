const asyncWrapper = require('../utils/apiUtils');
const { getZno, createZno, updateZno } = require('../controllers/znoController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = require('express').Router();

router.get('/', asyncWrapper(getZno));
router.post('/create', authMiddleware, asyncWrapper(createZno));
router.put('/update', authMiddleware, asyncWrapper(updateZno));


module.exports = router;