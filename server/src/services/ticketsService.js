const createConnection = require('../db');
const { SqlError } = require('../utils/errors');

const getOneTicket = async(type, series, number, name, surname, patronymic) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT p.ticket_id, p.start_date, p.end_date, p.series, p.number, f.long_name as institution_name FROM (SELECT * FROM students_tickets WHERE person_fk in (SELECT person_id FROM persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND surname = '${surname}') AND series = '${series}' AND number = '${number}' AND type = ${type}) as p JOIN educational_institutions as f ON f.institution_id = p.institution_fk`)
        client.end();
        return result.rows[0];
    } catch (err) {
        throw new SqlError(err.message)
    }
}

module.exports = getOneTicket;