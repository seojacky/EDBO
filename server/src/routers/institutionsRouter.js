const asyncWrapper = require('../utils/apiUtils');
const { getInstitutions, createInstitution, updateInstitution } = require('../controllers/institutionsController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = require('express').Router();

router.get('/', asyncWrapper(getInstitutions));
router.post('/create', authMiddleware, asyncWrapper(createInstitution));
router.put('/update', authMiddleware, asyncWrapper(updateInstitution));

module.exports = router;