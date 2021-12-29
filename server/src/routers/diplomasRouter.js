const asyncWrapper = require('../utils/apiUtils');
const { getDiploma, createDiploma, updateDiploma } = require('../controllers/diplomasController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = require('express').Router();

router.get('/', asyncWrapper(getDiploma));
router.post('/create', authMiddleware, asyncWrapper(createDiploma));
router.put('/update', authMiddleware, asyncWrapper(updateDiploma));

module.exports = router;