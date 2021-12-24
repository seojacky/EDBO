const createConnection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { LoginError } = require('../utils/errors');

const getToken = async(username, password) => {
    const user;

    if (!user) {
        throw new LoginError('Invalid username or password');
    }

    if (!(await bcrypt.compare(password, user.password))) {
        throw new LoginError('Invalid username or password');
    }

    const token = jwt.sign({
        user_id: user.user_id,
        username: user.username
    }, process.env.secret || 'secret');
    return token;
}

module.exports = getToken;