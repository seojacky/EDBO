const { getInstitutionsByRegion, getInstitutionsByRegionAndName } = require('../services/institutionsService')

const getInstitutions = async(req, res) => {
    const { region, global_type, name } = req.query;
    let institutions;
    if (name == null) {
        institutions = await getInstitutionsByRegion(region, global_type);
    } else {
        console.log(global_type)
        institutions = await getInstitutionsByRegionAndName(region, global_type, name);
    }
    res.json(institutions);
}

const createInstitution = async(req, res) => {
    res.json();
}

const updateInstitution = async(req, res) => {
    res.json();
}


module.exports = { getInstitutions, createInstitution, updateInstitution };