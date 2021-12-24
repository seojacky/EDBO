const asyncWrapper = require('../utils/apiUtils');
const getInstitutions = require('../controllers/institutionsController')
const router = require('express').Router();

router.get('/', asyncWrapper(getInstitutions));

module.exports = router;