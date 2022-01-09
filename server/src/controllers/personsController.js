const { getOnePerson, createOnePerson, updateOnePerson } = require('../services/personsService')

const getPerson = async(req, res) => {
    const { name, surname, patronymic, p_series, p_number } = req.query;
    const person = await getOnePerson({ name, surname, patronymic, p_series, p_number });
    if (!person) {
        return res.status(400).json({ message: 'Немає записів з такими даними!' })
    }
    res.status(200).json(person);
}

const createPerson = async(req, res) => {
    const { name, surname, patronymic, p_series, p_number, birthday_date, issue_date, authority_code } = req.body;
    try {
        await createOnePerson({ name, surname, patronymic, p_series, p_number, birthday_date, issue_date, authority_code })
        res.status(200).json({ message: "Person created successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updatePerson = async(req, res) => {
    const { person_id, name, surname, patronymic, p_series, p_number, birthday_date, issue_date, authority_code } = req.body;
    try {
        await updateOnePerson({ person_id, name, surname, patronymic, p_series, p_number, birthday_date, issue_date, authority_code })
        res.status(200).json({ message: "Person updated successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getPerson, createPerson, updatePerson };