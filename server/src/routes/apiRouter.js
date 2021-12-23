const router = require('express').Router();

const ticketsRouter = require('./ticketsRouter');
// const { diplomasRouter } = require('./diplomasRouter');
// const { certificatesRouter } = require('./certificatesRouter');

// router.get('/auth', (req, res) => {
//     res.sendStatus(200);
// });
router.use('/api/tickets', ticketsRouter);
// router.use('/api/diplomas', diplomasRouter);
// router.use('/api/certificates', certificatesRouter);

module.exports = router;