const createConnection = require('../db');
const { SqlError, InvalidRequestError } = require('../utils/errors');
const { getOnePerson } = require('./personsService')

const getOneYearZno = async(year, number, name, surname, patronymic) => {
    try {
        const client = createConnection(year, number, name, surname, patronymic);
        const result = await client.query(`SELECT zno_id, result, subject FROM (SELECT * FROM zno WHERE person_fk in (SELECT person_id FROM persons ` +
            `WHERE name = '${name}' AND patronymic = '${patronymic}' AND  surname = '${surname}')` +
            `AND year = '${year}' AND number = '${number}') as f JOIN subjects ON subject_id = f.subject_fk;`);
        client.end();
        return result.rows;
    } catch (err) {
        throw new SqlError(err.message)
    }
}

const createOneYearZno = async(year, number, name, surname, patronymic, p_series, p_number, subj_result) => {
    try {
        console.log(subj_result)
        let person_id = await getOnePerson({ name, surname, patronymic, p_series, p_number})
        if (!person_id) {
           throw new InvalidRequestError("Помилка. Дані про задану особу відсутні.")
        }
        let oldZno_id = await getOneYearZno (year, number, name, surname, patronymic);
        if(!oldZno_id)
        {
            throw new InvalidRequestError("Ця людина уже має сертифікат у цьому році")
        }
        subj_result.forEach(async item => {
            if(item.subject != 'Не вибрано')
            {
                const client = createConnection();
                const subj_id = await client.query(`SELECT subject_id FROM subjects WHERE subject = '${item.subject}';`);
                console.log(subj_id)
                await client.query(`INSERT into zno (number, person_fk, subject_fk, result, year) VALUES ('${number}', ${person_id.person_id}, '${subj_id.rows[0].subject_id}', '${item.result}',  '${year}');`)
                client.end();
            }
        });
    } catch (err) {
        throw new SqlError(err.message)
    }
}

module.exports = { getOneYearZno, createOneYearZno };