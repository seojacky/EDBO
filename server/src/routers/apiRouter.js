const router = require('express').Router();
const ticketsRouter = require('./ticketsRouter');
const dimlomasRouter = require('./diplomasRouter');
const certificatesRouter = require('./certificatesRouter');
const institutionsRouter = require('./institutionsRouter');
const znoRouter = require('./znoRouter');
const authRouter = require('./authRouter');

router.use('/tickets', ticketsRouter);
router.use('/diplomas', dimlomasRouter);
router.use('/certificates', certificatesRouter);
router.use('/institutions', institutionsRouter);
router.use('/zno', znoRouter);
router.use('/auth', authRouter);

module.exports = router;