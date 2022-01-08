const { getToken, addRegistrator } = require('../services/authService')

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

const registerUser = (async(req, res) => {
    const {
        email,
        name,
        surname,
        patronimic,
        identification_code,
        series,
        number,
        position,
        organization_name
    } = req.body;
    await addRegistrator(email, name, surname, patronimic, identification_code, series, number, position, organization_name);
    res.json({ message: 'Success!' });
});

module.exports = { loginUser, registerUser };