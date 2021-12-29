const createConnection = require('../db');
const { SqlError } = require('../utils/errors');

const getInstitutionsByRegion = async(region, global_type) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT institution_id, code_edbo, long_name, short_name, code_identification, form, concat(address, ', ', city, ', ', region) as long_adress, type, phone, email, site, year_foundation, postal_code FROM public.educational_institutions WHERE region = '${region}' AND global_type = '${global_type}';`);
        client.end();
        return result.rows;
    } catch (err) {
        throw new SqlError(err.message)
    }
}

const getInstitutionsByRegionAndName = async(region, global_type, name) => {
    try {
        const client = createConnection();
        const result = await client.query(`SELECT institution_id, code_edbo, long_name, short_name, code_identification, form, concat(address, ', ', city, ', ', region) as long_adress, type, phone, email, site, year_foundation, postal_code FROM public.educational_institutions WHERE region = '${region}' AND global_type = '${global_type}' AND long_name LIKE '%${name}%';`);
        client.end();
        return result.rows[0];
    } catch (err) {
        throw new SqlError(err.message)
    }
}

module.exports = { getInstitutionsByRegion, getInstitutionsByRegionAndName };