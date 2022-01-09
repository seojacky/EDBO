const { getInstitutionsByRegion, getInstitutionsByRegionAndName, createOneInstitution, updateOneInstitution, getOneInstitution } = require('../services/institutionsService')

const getInstitutions = async(req, res) => {
    const { region, global_type, name } = req.query;
    let institutions;
    if (name == null) {
        institutions = await getInstitutionsByRegion(region, global_type);
    } else {
        institutions = await getInstitutionsByRegionAndName(region, global_type, name);
    }
    res.status(200).json(institutions);
}

const getOneInstitutionByFullName = async(req, res) => {
    const { region, global_type, name } = req.query;
    const institution = await getOneInstitution(region, global_type, name);
    if (institution) {
        res.status(200).json(institution);
    } else {
        res.status(400).json('error');
    }
}

const createInstitution = async(req, res) => {
    const { code_edbo, long_name, short_name, code_identification, type, form, adress, region, phone, email, site, year_foundation, unit_institution, postal_code, global_type, position, name, surname, patronymic, p_series, p_number } = req.body;
    try {
        await createOneInstitution({ code_edbo, long_name, short_name, code_identification, type, form, adress, region, phone, email, site, year_foundation, unit_institution, postal_code, global_type, position, name, surname, patronymic, p_series, p_number})
        res.status(200).json({ message: "Заклад created successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    } 
}

const updateInstitution = async(req, res) => {
    const {institution_id, code_edbo, long_name, short_name, code_identification, type, form, adress, region, phone, email, site, year_foundation, unit_institution, postal_code, global_type, position, name, surname, patronymic, p_series, p_number } = req.body;
    console.log(`${code_edbo} ${long_name} ${p_series} ${p_number} ${name} ${surname}`);
    await updateOneInstitution({institution_id, code_edbo, long_name, short_name, code_identification, type, form, adress, region, phone, email, site, year_foundation, unit_institution, postal_code, global_type, position, name, surname, patronymic, p_series, p_number })
    res.status(200).json({ message: "Заклад  успішно оновлено" })
}


module.exports = { getInstitutions, createInstitution, updateInstitution, getOneInstitutionByFullName };