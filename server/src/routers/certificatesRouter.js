const asyncWrapper = require('../utils/apiUtils');
const getCertificate = require('../controllers/certificatesController')
const router = require('express').Router();

router.get('/', asyncWrapper(getCertificate));

module.exports = router;