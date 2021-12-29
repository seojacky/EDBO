const getOneYearZno = require('../services/znoService')

const getZno = async(req, res) => {
    const { year, number, name, surname, patronymic } = req.query;
    const zno = await getOneYearZno(year, number, name, surname, patronymic);
    if (!zno) {
        throw new InvalidRequestError('Немає записів з такими даними!')
    }
    zno.number = number;
    zno.year = year;
    zno.patronymic = patronymic;
    zno.surname = surname;
    zno.name = name;
    res.status(200).json(zno);
}

const createZno = async(req, res) => {
    res.json();
}

const updateZno = async(req, res) => {
    res.json();
}


module.exports = { getZno, createZno, updateZno };