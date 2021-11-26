const router = require('express').Router();

router.get('/auth', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;