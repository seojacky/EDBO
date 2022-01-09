const asyncWrapper = require('../utils/apiUtils');
const { getOrganizations } = require('../controllers/organizationsController')
const router = require('express').Router();

router.get('/', asyncWrapper(getOrganizations));

module.exports = router;