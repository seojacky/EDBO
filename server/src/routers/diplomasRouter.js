const asyncWrapper = require('../utils/apiUtils');
const getDiploma = require('../controllers/diplomasController')
const router = require('express').Router();

router.get('/', asyncWrapper(getDiploma));

module.exports = router;