const createConnection = require('../db');

const getOneTicket = async(type, series, number, name, surname, patronymic) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT * FROM public.students_tickets WHERE person_fk in (SELECT person_id FROM  persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND  surname = '${surname}')  AND series = '${series}' AND number = '${number}' AND type = '${type}';`);
        client.end();
        return result.rows[0];
    } catch (err) {
        return err;
    }

}

module.exports = getOneTicket;