const { loginUser, registerUser } = require('../controllers/authController')
const router = require('express').Router();
const asyncWrapper = require('../utils/apiUtils');

router.post('/login', asyncWrapper(loginUser));
router.post('/register', asyncWrapper(registerUser));

module.exports = router