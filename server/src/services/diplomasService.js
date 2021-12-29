const createConnection = require('../db');
const { SqlError } = require('../utils/errors');

const getOneDimloma = async(series, number, name, surname, patronymic) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT p.year_graduation, p.date_issue, p.series, p.number, f.long_name as institution_name, birthday_date FROM ((SELECT * FROM diplomas WHERE person_fk in (SELECT person_id FROM persons WHERE name = '${name}' AND patronymic = '${patronymic}' AND surname = '${surname}') AND series = '${series}' AND number = '${number}') as p JOIN educational_institutions as f ON f.institution_id = p.institution_fk) JOIN persons as k ON k.person_id = p.person_fk`)
        client.end();
        return result.rows[0];
    } catch (err) {
        throw new SqlError(err.message)
    }
}

module.exports = getOneDimloma;