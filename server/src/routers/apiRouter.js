const router = require('express').Router();
const ticketsRouter = require('./ticketsRouter');
const dimlomasRouter = require('./ticketsRouter');
const certificatesRouter = require('./certificatesRouter');
const institutionsRouter = require('./institutionsRouter');
const znoRouter = require('./znoRouter');

router.use('/tickets', ticketsRouter);
router.use('/diplomas', dimlomasRouter);
router.use('/certificates', certificatesRouter);
router.use('/institutions', institutionsRouter);
router.use('/zno', znoRouter);

module.exports = router;