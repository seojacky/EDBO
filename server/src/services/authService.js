const createConnection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var crypto = require("crypto");
const { LoginError } = require('../utils/errors');

const getToken = async(username, password) => {
    const client = createConnection();
    const registrar = await client.query(`SELECT password, registrar_id FROM public.registrars WHERE login = '${username}'`);
    client.end();
    if (!registrar.rows[0]) {
        throw new LoginError('Invalid username or password');
    }

    if (!(await bcrypt.compare(password, registrar.rows[0].password))) {
        throw new LoginError('Invalid username or password');
    }

    const token = jwt.sign({
        user_id: registrar.registrar_id,
        username: username,
        role: "registrator"
    }, process.env.secret || 'secret');
    return token;
}

const addRegistrator = async(email, name, surname, patronimic, identification_code, series, number, issue_date, authority_code, position, organization_name, birthday_date) => {
    const password = crypto.randomBytes(10).toString('hex');
    const db_password = await bcrypt.hash(password, 10);
    const username = (email.split('@'))[0];
    try {
        const client = createConnection();
        const person = await client.query(`SELECT person_id FROM public.persons WHERE series = '${series}' AND number = '${number}'`);
        client.end();
        const client2 = createConnection();
        const organization = await client2.query(`SELECT organization_id FROM public.organizations WHERE long_name = '${organization_name}'`);
        client2.end();
        if (person.rows[0]) {
            client3 = createConnection();
            await client3.query(`INSERT INTO registrars (identification_code, position, person_fk, email, organization_fk, login, password) VALUES ('${identification_code}', '${position}', ${person.rows[0].person_id}, '${email}', ${organization.rows[0].organization_id},'${username}','${db_password}')`)
            client3.end();
        } else {
            await addPerson(name, surname, patronimic, series, number, birthday_date, issue_date, authority_code)
        }

    } catch (err) {
        return err;
    }
}

const addPerson = async(name, surname, patronimic, series, number, birthday_date, issue_date, authority_code) => {
    try {
        const client = createConnection();
        const authority = await client.query(`SELECT authority_id FROM public.authorities WHERE code = '${authority_code}'`);
        client.end();
        const client2 = createConnection();
        await client2.query(`INSERT INTO persons (name, surname, patronimic, series, number, issue_date, birthday_date, authority_fk)` +
            `VALUES ('${name}', '${surname}', '${patronimic}', '${series}', '${number}', ${issue_date}, ${birthday_date}, ${authority.rows[0].authority_id}`)
        client2.end();
    } catch (err) {
        return err;
    }

}

module.exports = { getToken, addRegistrator };