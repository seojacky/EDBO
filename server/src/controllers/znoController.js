const { getOneYearZno, createOneYearZno } = require('../services/znoService')

const getZno = async(req, res) => {
    const { year, number, name, surname, patronymic } = req.query;
    const result = await getOneYearZno(year, number, name, surname, patronymic);
    if (result.length === 0) {
        throw new InvalidRequestError('Немає записів з такими даними!')
    }
    const zno = {
        result: result,
        number: number,
        year: year,
        patronymic: patronymic,
        surname: surname,
        name: name
    }
    res.status(200).json(zno);
}

const createZno = async(req, res) => {
    const {year, number, name, surname, patronymic, p_series, p_number, subj_result} = req.body;
    try {
        await createOneYearZno(year, number, name, surname, patronymic, p_series, p_number, subj_result)
        res.status(200).json({ message: "ZNO certificates created successfully" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateZno = async(req, res) => {
    res.json();
}


module.exports = { getZno, createZno, updateZno };