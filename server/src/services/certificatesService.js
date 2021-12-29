const createConnection = require('../db');
const { SqlError } = require('../utils/errors');
const { addPerson, getPersonId } = require('../services/authService')

const getOneCertificate = async(year, number, name, surname, patronymic) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT certification_id, start_date, end_date, number, year_graduation, comission_number, position FROM certificates WHERE person_fk in (SELECT person_id FROM persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND surname = '${surname}')  AND number = '${number}' AND year = '${year}'`)
        client.end();
        return result.rows[0];
    } catch (err) {
        throw new SqlError(err.message)
    }
}


const createOneCertificate = async(year, number, name, surname, patronymic, start_date, end_date, series, p_number, authority_code, issue_date) => {
    try {
        let person_id = await getPersonId(series, p_number)
        if (!person_id) {
            await addPerson(name, surname, patronymic, series, p_number, birthday_date, issue_date, authority_code)
            person_id = await getPersonId(series, p_number)
        }
        const client = createConnection();
        const result = await client.query(`INSERT into certificates year, number, start_date, end_date, person_fk VALUES (${year}, ${number}, ${start_date}, ${end_date}, ${person_fk}) '`)
        client.end();
        return result.rows[0];
    } catch (err) {
        throw new SqlError(err.message)
    }
}

const updateOneCertificate = async(year, number, name, surname, patronymic) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT start_date, end_date, number, year_graduation, comission_number, position FROM certificates WHERE person_fk in (SELECT person_id FROM persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND surname = '${surname}')  AND number = '${number}' AND year = '${year}'`)
        client.end();
        return result.rows[0];
    } catch (err) {
        throw new SqlError(err.message)
    }
}

module.exports = getOneCertificate;