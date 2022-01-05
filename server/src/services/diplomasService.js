const createConnection = require('../db');
const { SqlError } = require('../utils/errors');

const getOneDimloma = async(series, number, name, surname, patronymic, type, global_type, birthday_date) => {
    if (birthday_date !== 'null') {
        try {
            const client = createConnection();
            const result = await client.query(`SELECT p.diploma_id, p.year_graduation, p.date_issue, p.series, p.number, p.type, p.global_type, f.long_name as institution_name FROM ((SELECT * FROM diplomas WHERE person_fk in (SELECT person_id FROM persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND surname = '${surname}' AND birthday_date = '${birthday_date}') AND series = '${series}' AND number = '${number}' AND type = '${type}' AND global_type = '${global_type}') as p JOIN educational_institutions as f ON f.institution_id = p.institution_fk) JOIN persons as k ON k.person_id = p.person_fk`);
            client.end();
            return result.rows[0];
        } catch (err) {
            throw new SqlError(err.message)
        }
    } else {
        try {
            const client = createConnection();
            console.log(birthday_date)
            const result = await client.query(`SELECT p.diploma_id, p.year_graduation, p.date_issue, p.series, p.number, p.type, p.global_type, f.long_name as institution_name FROM ((SELECT * FROM diplomas WHERE person_fk in (SELECT person_id FROM persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND surname = '${surname}') AND series = '${series}' AND number = '${number}' AND type = '${type}' AND global_type = '${global_type}') as p JOIN educational_institutions as f ON f.institution_id = p.institution_fk) JOIN persons as k ON k.person_id = p.person_fk`);
            client.end();
            return result.rows[0];
        } catch (err) {
            throw new SqlError(err.message)
        }
    }
}

module.exports = getOneDimloma;