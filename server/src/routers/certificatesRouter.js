const asyncWrapper = require('../utils/apiUtils');
const { getCertificate, createCertificate, updateCertificate } = require('../controllers/certificatesController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = require('express').Router();

router.get('/', asyncWrapper(getCertificate));
router.post('/create', authMiddleware, asyncWrapper(createCertificate));
router.put('/update', authMiddleware, asyncWrapper(updateCertificate));


module.exports = router;