const { getToken } = require('../services/authService')

const loginUser = async(req, res) => {
    const {
        username,
        password
    } = req.body;

    const result = await getToken(username, password);

    res.status(200).json({
        result: result
    })
}

module.exports = { loginUser };