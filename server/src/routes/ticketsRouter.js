const asyncWrapper = require('../utils/apiUtils');
const getTicket = require('../controllers/ticketsController')
const router = require('express').Router();

router.get('/ticket', asyncWrapper(getTicket));

module.exports = router;