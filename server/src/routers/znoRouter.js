const asyncWrapper = require('../utils/apiUtils');
const getZno = require('../controllers/znoController')
const router = require('express').Router();

router.get('/', asyncWrapper(getZno));

module.exports = router;