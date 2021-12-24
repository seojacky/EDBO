const asyncWrapper = require('../utils/apiUtils');
const getTicket = require('./../controllers/ticketsController')
const router = require('express').Router();

router.get('/', asyncWrapper(getTicket));

module.exports = router;