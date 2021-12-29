const createConnection = require('../db');
const { SqlError } = require('../utils/errors');

const getOneCertificate = async(number, name, surname, patronymic) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT start_date, end_date, number, year_graduation, comission_number, position FROM certificates WHERE person_fk in (SELECT person_id FROM persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND surname = '${surname}')  AND number = '${number}'`)
        client.end();
        return result.rows[0];
    } catch (err) {
        throw new SqlError(err.message)
    }
}

module.exports = getOneCertificate;